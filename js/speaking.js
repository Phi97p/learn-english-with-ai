// ========================================================
// JS/SPEAKING.JS - Phòng Luyện Phát Âm Cả Câu Tiếng Anh (Shadowing Lab) & Ghi âm 3 câu
// ========================================================

const SpeakingModule = (() => {
  let currentSpkUnitKey = 'unit_1_my_new_school';
  let currentSpeakingIdx = 0;

  // Quản lý ghi âm tạm thời 3 câu
  const tempSentenceRecordings = new Map();
  let userAudioPlayer = new Audio();
  let currentPlayingRecIdx = null;
  let labMediaRecorder = null;
  let labMediaStream = null;
  let labAudioChunks = [];
  let isLabRecordingActive = false;
  let labRecognition = null;

  let isUserRecordingActive = false;
  let spkUserRecBtn = null;
  let lastTranscript = '';
  let hasEvaluatedCurrentTurn = false;

  // DOM Elements
  let spkUnitSelect, spkCategory, spkPhraseEn, spkPhraseIpa, spkPhraseVi;
  let spkListenBtn, spkRecordBtn, spkPrevBtn, spkNextBtn, spkFeedback, spkSentencesWrapper;
  let spkPlayRecordBtn, tempRecordingsBar;
  let btnPlayRecPrev, btnPlayRecCurr, btnPlayRecNext;
  let recLabelPrev, recLabelCurr, recLabelNext;
  let spkSpokenBox, spkSpokenBadge, spkSpokenText, spkTypingCursor;

  function initDOM() {
    spkUnitSelect = document.getElementById('spk-unit-select');
    spkCategory = document.getElementById('spk-category');
    spkPhraseEn = document.getElementById('spk-phrase-en');
    spkPhraseIpa = document.getElementById('spk-phrase-ipa');
    spkPhraseVi = document.getElementById('spk-phrase-vi');
    spkListenBtn = document.getElementById('spk-listen-btn');
    spkRecordBtn = document.getElementById('spk-record-btn');
    spkUserRecBtn = document.getElementById('spk-user-rec-btn');
    spkPrevBtn = document.getElementById('spk-prev-btn');
    spkNextBtn = document.getElementById('spk-next-btn');
    spkFeedback = document.getElementById('spk-feedback');
    spkSentencesWrapper = document.getElementById('spk-sentences-wrapper');
    spkPlayRecordBtn = document.getElementById('spk-play-record-btn');
    tempRecordingsBar = document.getElementById('temp-recordings-bar');
    btnPlayRecPrev = document.getElementById('btn-play-rec-prev');
    btnPlayRecCurr = document.getElementById('btn-play-rec-curr');
    btnPlayRecNext = document.getElementById('btn-play-rec-next');
    recLabelPrev = document.getElementById('rec-label-prev');
    recLabelCurr = document.getElementById('rec-label-curr');
    recLabelNext = document.getElementById('rec-label-next');
    spkSpokenBox = document.getElementById('spk-spoken-box');
    spkSpokenBadge = document.getElementById('spk-spoken-badge');
    spkSpokenText = document.getElementById('spk-spoken-text');
    spkTypingCursor = document.getElementById('spk-typing-cursor');
  }

  function stopUserAudioPlayback() {
    if (userAudioPlayer) {
      userAudioPlayer.pause();
      userAudioPlayer.currentTime = 0;
    }
    currentPlayingRecIdx = null;
    updateRecordingsUI();
  }

  function playUserRecording(targetIdx) {
    const rec = tempSentenceRecordings.get(targetIdx);
    if (!rec || !rec.url) return;

    if (currentPlayingRecIdx === targetIdx && !userAudioPlayer.paused) {
      stopUserAudioPlayback();
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    stopUserAudioPlayback();
    userAudioPlayer.src = rec.url;
    currentPlayingRecIdx = targetIdx;
    userAudioPlayer.play().catch(e => console.error('Lỗi phát âm thanh:', e));
    updateRecordingsUI();
    renderSpkSentencesList();

    userAudioPlayer.onended = () => {
      stopUserAudioPlayback();
      renderSpkSentencesList();
    };
    userAudioPlayer.onpause = () => {
      if (currentPlayingRecIdx === targetIdx) {
        currentPlayingRecIdx = null;
        updateRecordingsUI();
        renderSpkSentencesList();
      }
    };
  }

  function pruneTempRecordings() {
    if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences) return;
    const total = unit.sentences.length;
    const prevIdx = (currentSpeakingIdx - 1 + total) % total;
    const currIdx = currentSpeakingIdx;
    const nextIdx = (currentSpeakingIdx + 1) % total;

    const allowed = new Set([prevIdx, currIdx, nextIdx]);

    for (const [keyIdx, data] of tempSentenceRecordings.entries()) {
      if (!allowed.has(keyIdx)) {
        if (currentPlayingRecIdx === keyIdx) {
          stopUserAudioPlayback();
        }
        if (data.url) {
          URL.revokeObjectURL(data.url);
        }
        tempSentenceRecordings.delete(keyIdx);
      }
    }
  }

  function saveTempRecording(idx, blob) {
    const old = tempSentenceRecordings.get(idx);
    if (old && old.url) {
      URL.revokeObjectURL(old.url);
    }
    const url = URL.createObjectURL(blob);
    const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    tempSentenceRecordings.set(idx, { blob, url, time });
    pruneTempRecordings();
    updateRecordingsUI();
    renderSpkSentencesList();
  }

  function clearAllTempRecordings() {
    if (isLabRecordingActive) {
      isLabRecordingActive = false;
      labAudioChunks = [];
      if (spkRecordBtn) {
        spkRecordBtn.classList.remove('recording');
        spkRecordBtn.textContent = '🎙️ Bấm để nói thử';
      }
      if (labMediaRecorder && labMediaRecorder.state !== 'inactive') {
        labMediaRecorder.onstop = null;
        try { labMediaRecorder.stop(); } catch (e) {}
      }
      if (labMediaStream) {
        labMediaStream.getTracks().forEach(t => t.stop());
        labMediaStream = null;
      }
      if (labRecognition) {
        try { labRecognition.stop(); } catch (e) {}
      }
      if (spkSpokenBox && spkSpokenBox.classList.contains('is-recording')) {
        spkSpokenBox.classList.remove('is-recording');
      }
    }

    stopUserAudioPlayback();

    for (const [keyIdx, data] of tempSentenceRecordings.entries()) {
      if (data.url) {
        URL.revokeObjectURL(data.url);
      }
    }
    tempSentenceRecordings.clear();
    updateRecordingsUI();
    if (spkSentencesWrapper) {
      renderSpkSentencesList();
    }
  }

  function updateRecordingsUI() {
    if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences) return;
    const total = unit.sentences.length;
    const prevIdx = (currentSpeakingIdx - 1 + total) % total;
    const currIdx = currentSpeakingIdx;
    const nextIdx = (currentSpeakingIdx + 1) % total;

    if (recLabelPrev) recLabelPrev.textContent = `Câu ${prevIdx + 1}`;
    if (recLabelCurr) recLabelCurr.textContent = `Câu ${currIdx + 1}`;
    if (recLabelNext) recLabelNext.textContent = `Câu ${nextIdx + 1}`;

    const currRec = tempSentenceRecordings.get(currIdx);
    if (currRec) {
      if (spkPlayRecordBtn) {
        spkPlayRecordBtn.style.display = 'inline-flex';
        if (currentPlayingRecIdx === currIdx) {
          spkPlayRecordBtn.classList.add('is-playing');
          spkPlayRecordBtn.innerHTML = '⏸️ Đang phát giọng bạn...';
        } else {
          spkPlayRecordBtn.classList.remove('is-playing');
          spkPlayRecordBtn.innerHTML = '▶️ Nghe lại giọng bạn';
        }
      }
      if (btnPlayRecCurr) {
        btnPlayRecCurr.disabled = false;
        if (currentPlayingRecIdx === currIdx) {
          btnPlayRecCurr.className = 'rec-play-btn has-recording is-playing';
          btnPlayRecCurr.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
        } else {
          btnPlayRecCurr.className = 'rec-play-btn has-recording';
          btnPlayRecCurr.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${currRec.time})</span>`;
        }
      }
    } else {
      if (spkPlayRecordBtn) {
        spkPlayRecordBtn.style.display = 'none';
        spkPlayRecordBtn.classList.remove('is-playing');
      }
      if (btnPlayRecCurr) {
        btnPlayRecCurr.disabled = true;
        btnPlayRecCurr.className = 'rec-play-btn';
        btnPlayRecCurr.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa ghi âm</span>';
      }
    }

    const prevRec = tempSentenceRecordings.get(prevIdx);
    if (prevRec && btnPlayRecPrev) {
      btnPlayRecPrev.disabled = false;
      if (currentPlayingRecIdx === prevIdx) {
        btnPlayRecPrev.className = 'rec-play-btn has-recording is-playing';
        btnPlayRecPrev.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
      } else {
        btnPlayRecPrev.className = 'rec-play-btn has-recording';
        btnPlayRecPrev.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${prevRec.time})</span>`;
      }
    } else if (btnPlayRecPrev) {
      btnPlayRecPrev.disabled = true;
      btnPlayRecPrev.className = 'rec-play-btn';
      btnPlayRecPrev.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa có</span>';
    }

    const nextRec = tempSentenceRecordings.get(nextIdx);
    if (nextRec && btnPlayRecNext) {
      btnPlayRecNext.disabled = false;
      if (currentPlayingRecIdx === nextIdx) {
        btnPlayRecNext.className = 'rec-play-btn has-recording is-playing';
        btnPlayRecNext.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
      } else {
        btnPlayRecNext.className = 'rec-play-btn has-recording';
        btnPlayRecNext.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${nextRec.time})</span>`;
      }
    } else if (btnPlayRecNext) {
      btnPlayRecNext.disabled = true;
      btnPlayRecNext.className = 'rec-play-btn';
      btnPlayRecNext.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa có</span>';
    }
  }

  function renderSpkUnitSelect() {
    if (!spkUnitSelect || typeof SENTENCE_UNITS_DATA === 'undefined') return;
    spkUnitSelect.innerHTML = '';
    const keys = Object.keys(SENTENCE_UNITS_DATA);
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có bài học - Chờ nạp bài)';
      spkUnitSelect.appendChild(opt);
      return;
    }
    keys.forEach(k => {
      const unit = SENTENCE_UNITS_DATA[k];
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = `${unit.icon || '📘'} ${unit.title || k}`;
      spkUnitSelect.appendChild(opt);
    });
    spkUnitSelect.value = currentSpkUnitKey;
  }

  function loadSpkUnit(unitKey) {
    if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
    currentSpkUnitKey = unitKey;
    currentSpeakingIdx = 0;
    const unit = SENTENCE_UNITS_DATA[unitKey];
    if (!unit || !unit.sentences || unit.sentences.length === 0) {
      if (spkCategory) spkCategory.textContent = 'CHƯA CÓ BÀI HỌC';
      if (spkPhraseEn) spkPhraseEn.textContent = '(Chưa có dữ liệu bài học)';
      if (spkPhraseIpa) spkPhraseIpa.textContent = '';
      if (spkPhraseVi) spkPhraseVi.textContent = 'Hãy nạp dữ liệu bài học để bắt đầu luyện tập.';
      if (spkFeedback) spkFeedback.innerHTML = '<div class="feedback-status">Đang chờ bạn nạp dữ liệu bài học mới...</div>';
      if (spkSentencesWrapper) spkSentencesWrapper.innerHTML = '<div style="color:var(--text-muted);padding:12px;text-align:center;">Chưa có bài học nào trong danh sách.</div>';
      return;
    }

    renderSpkSentencesList();
    loadSpeakingChallenge(0);
  }

  function renderSpkSentencesList() {
    if (!spkSentencesWrapper || typeof SENTENCE_UNITS_DATA === 'undefined') return;
    spkSentencesWrapper.innerHTML = '';
    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences) return;

    unit.sentences.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = `spk-sentence-item ${idx === currentSpeakingIdx ? 'active' : ''}`;

      const hasRec = tempSentenceRecordings.has(idx);
      const isPlayingThis = (currentPlayingRecIdx === idx);
      const userBtnHtml = hasRec ? `
        <button class="spk-item-user-audio-btn ${isPlayingThis ? 'is-playing' : ''}" title="Bấm để nghe lại giọng bạn đã đọc">
          ${isPlayingThis ? '⏸️ Đang phát' : '🎙️ Giọng bạn'}
        </button>
      ` : '';

      itemEl.innerHTML = `
        <div class="spk-item-left">
          <span class="spk-item-num">Câu ${idx + 1}</span>
          <div class="spk-item-text">
            <div class="spk-item-en">"${item.en}"</div>
            <div class="spk-item-vi">${item.vi}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          ${userBtnHtml}
          <button class="spk-item-audio-btn" title="Nghe câu này">🔊 Nghe</button>
        </div>
      `;

      itemEl.addEventListener('click', (e) => {
        if (e.target.closest('.spk-item-audio-btn') || e.target.closest('.spk-item-user-audio-btn')) return;
        loadSpeakingChallenge(idx);
      });

      const audioBtn = itemEl.querySelector('.spk-item-audio-btn');
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        AppCore.speak(item.en);
      });

      const userBtn = itemEl.querySelector('.spk-item-user-audio-btn');
      if (userBtn) {
        userBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          playUserRecording(idx);
        });
      }

      spkSentencesWrapper.appendChild(itemEl);
    });
  }

  function loadSpeakingChallenge(idx) {
    if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences || unit.sentences.length === 0) return;
    if (idx >= unit.sentences.length) idx = 0;

    currentSpeakingIdx = idx;
    const item = unit.sentences[idx];

    if (spkCategory) spkCategory.textContent = `${item.category} (CÂU ${idx + 1} / ${unit.sentences.length})`;
    if (spkPhraseEn) spkPhraseEn.textContent = `"${item.en}"`;
    if (spkPhraseIpa) spkPhraseIpa.textContent = item.ipa || '';
    if (spkPhraseVi) spkPhraseVi.textContent = `👉 Ý nghĩa: ${item.vi} (💡 ${item.tip})`;
    if (spkFeedback) spkFeedback.innerHTML = '<div class="feedback-status">Hãy bấm "🔊 Nghe người bản ngữ", sau đó bấm "🎙️ Bấm để nói thử" để ghi âm và nhận phản hồi tức thì.</div>';

    resetSpkSpokenBox();
    pruneTempRecordings();
    updateRecordingsUI();

    const items = spkSentencesWrapper ? spkSentencesWrapper.querySelectorAll('.spk-sentence-item') : [];
    items.forEach((el, i) => {
      if (i === idx) {
        el.classList.add('active');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        el.classList.remove('active');
      }
    });
  }

  function resetSpkSpokenBox() {
    if (spkSpokenBox) {
      spkSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (spkSpokenBadge) spkSpokenBadge.textContent = 'Đang chờ bạn nói...';
    if (spkSpokenText) spkSpokenText.textContent = '"..."';
    if (spkTypingCursor) spkTypingCursor.style.display = 'none';
  }

  // DỪNG CÁC TIẾN TRÌNH
  function stopLabRecognition() {
    if (!isLabRecordingActive) return;
    isLabRecordingActive = false;

    if (spkRecordBtn) {
      spkRecordBtn.classList.remove('recording');
      spkRecordBtn.innerHTML = '🎯 Bấm để nói & Chấm điểm';
    }
    if (spkTypingCursor) spkTypingCursor.style.display = 'none';

    if (labRecognition) {
      try { labRecognition.stop(); } catch (e) {}
    }
  }

  function stopUserAudioRecording() {
    if (!isUserRecordingActive) return;
    isUserRecordingActive = false;

    if (spkUserRecBtn) {
      spkUserRecBtn.classList.remove('recording');
      spkUserRecBtn.innerHTML = '🎙️ Thu âm nghe lại';
    }

    if (labMediaRecorder && labMediaRecorder.state !== 'inactive') {
      try { labMediaRecorder.stop(); } catch (e) {}
    }
    if (labMediaStream) {
      labMediaStream.getTracks().forEach(track => track.stop());
      labMediaStream = null;
    }
  }

  // 1. NHẬN DIỆN & CHẤM ĐIỂM (100% Micro cho SpeechRecognition, không bị iOS Safari khóa)
  function startLabRecognition() {
    stopUserAudioPlayback();
    stopUserAudioRecording();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    isLabRecordingActive = true;
    lastTranscript = '';
    hasEvaluatedCurrentTurn = false;

    if (spkRecordBtn) {
      spkRecordBtn.classList.add('recording');
      spkRecordBtn.innerHTML = '⏹️ Đang nghe... Bấm để dừng';
    }
    if (spkSpokenBox) {
      spkSpokenBox.classList.remove('match-success', 'match-retry');
      spkSpokenBox.classList.add('is-recording');
    }
    if (spkSpokenBadge) spkSpokenBadge.textContent = '🔴 Đang lắng nghe... Hãy đọc to câu tiếng Anh!';
    if (spkSpokenText) spkSpokenText.textContent = '...';
    if (spkTypingCursor) spkTypingCursor.style.display = 'inline-block';
    if (spkFeedback) {
      spkFeedback.innerHTML = '<div class="feedback-status">Đang lắng nghe giọng bạn qua micro... Nói rõ ràng từng âm tiết nhé!</div>';
    }

    if (labRecognition) {
      try {
        labRecognition.start();
      } catch (e) {
        console.warn('SpeechRecognition start error:', e);
      }
    }
  }

  // 2. GHI ÂM NGHE LẠI GIỌNG MÌNH (Dành riêng cho MediaRecorder)
  function startUserAudioRecording() {
    stopUserAudioPlayback();
    stopLabRecognition();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    isUserRecordingActive = true;
    labAudioChunks = [];

    if (spkUserRecBtn) {
      spkUserRecBtn.classList.add('recording');
      spkUserRecBtn.innerHTML = '⏹️ Đang thu âm... Bấm để dừng';
    }
    if (spkFeedback) {
      spkFeedback.innerHTML = '<div class="feedback-status">🎙️ Đang ghi âm giọng đọc của bạn để lưu lại... Bấm dừng khi đọc xong nhé!</div>';
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        if (!isUserRecordingActive) {
          stream.getTracks().forEach(t => t.stop());
          return;
        }
        labMediaStream = stream;
        labMediaRecorder = new MediaRecorder(stream);
        labAudioChunks = [];

        labMediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            labAudioChunks.push(e.data);
          }
        };

        labMediaRecorder.onstop = () => {
          if (labAudioChunks.length > 0) {
            const mime = labMediaRecorder.mimeType || 'audio/webm';
            const audioBlob = new Blob(labAudioChunks, { type: mime });
            saveTempRecording(currentSpeakingIdx, audioBlob);
            if (spkFeedback) {
              spkFeedback.innerHTML = '<div class="feedback-success">✨ Đã lưu bản ghi âm! Bạn có thể bấm <strong>"▶️ Nghe lại giọng bạn"</strong> để tự đối chiếu.</div>';
            }
          }
        };

        labMediaRecorder.start();
      }).catch(err => {
        console.warn('Lỗi mở micro ghi âm:', err);
        stopUserAudioRecording();
        if (spkFeedback) {
          spkFeedback.innerHTML = '<div class="feedback-error">⚠️ Không thể truy cập micro. Vui lòng cấp quyền trong cài đặt trình duyệt.</div>';
        }
      });
    }
  }

  // ĐÁNH GIÁ PHÁT ÂM CÂU
  function evaluateSpokenSentence(transcript) {
    if (hasEvaluatedCurrentTurn) return;
    hasEvaluatedCurrentTurn = true;
    stopLabRecognition();

    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences || !unit.sentences[currentSpeakingIdx]) return;
    const item = unit.sentences[currentSpeakingIdx];

    if (spkSpokenText) spkSpokenText.textContent = `"${transcript}"`;
    if (spkSpokenBox) spkSpokenBox.classList.remove('is-recording');

    const cleanTarget = item.en.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanSpoken = transcript.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isMatch = cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken) ||
                    (cleanTarget.length > 5 && cleanSpoken.length > 5 && (cleanTarget.slice(0, 5) === cleanSpoken.slice(0, 5)));

    if (isMatch) {
      if (spkSpokenBox) spkSpokenBox.classList.add('match-success');
      if (spkSpokenBadge) spkSpokenBadge.textContent = '✅ Đã nhận diện & Phát âm rất chuẩn!';
      if (spkFeedback) {
        spkFeedback.innerHTML = `
          <div class="feedback-success">
            🎉 Tuyệt vời! Bạn phát âm câu trong "<strong>${unit.title}</strong>" rất chuẩn xác!<br>
            <small style="opacity:0.9;">AI nhận diện được: "<em>${transcript}</em>"</small>
          </div>
        `;
      }
      AppCore.incrementWordCount();
      AppCore.state.spokenSentences.push({
        en: item.en,
        time: new Date().toLocaleTimeString('vi-VN')
      });
      if (AppCore.state.spokenSentences.length > 30) AppCore.state.spokenSentences.shift();
      AppCore.syncProgress();
    } else {
      if (spkSpokenBox) spkSpokenBox.classList.add('match-retry');
      if (spkSpokenBadge) spkSpokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
      if (spkFeedback) {
        spkFeedback.innerHTML = `
          <div class="feedback-retry">
            💡 AI nhận diện bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
            Câu mẫu: "<strong>${item.en}</strong>"${item.ipa ? ` <em>(${item.ipa})</em>` : ''}.<br>
            <small>👉 Hãy đọc to, rõ từng âm tiết và bấm nút để thử lại nhé!</small>
          </div>
        `;
      }
    }
  }

  function init() {
    initDOM();

    if (spkPlayRecordBtn) {
      spkPlayRecordBtn.addEventListener('click', () => {
        playUserRecording(currentSpeakingIdx);
      });
    }
    if (btnPlayRecCurr) {
      btnPlayRecCurr.addEventListener('click', () => {
        playUserRecording(currentSpeakingIdx);
      });
    }
    if (btnPlayRecPrev) {
      btnPlayRecPrev.addEventListener('click', () => {
        if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
        if (!unit || !unit.sentences) return;
        const total = unit.sentences.length;
        playUserRecording((currentSpeakingIdx - 1 + total) % total);
      });
    }
    if (btnPlayRecNext) {
      btnPlayRecNext.addEventListener('click', () => {
        if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
        if (!unit || !unit.sentences) return;
        const total = unit.sentences.length;
        playUserRecording((currentSpeakingIdx + 1) % total);
      });
    }

    if (spkUnitSelect) {
      spkUnitSelect.addEventListener('change', (e) => {
        clearAllTempRecordings();
        loadSpkUnit(e.target.value);
      });
    }

    if (spkListenBtn) {
      spkListenBtn.addEventListener('click', () => {
        if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
        if (unit && unit.sentences && unit.sentences[currentSpeakingIdx]) {
          AppCore.speak(unit.sentences[currentSpeakingIdx].en);
        }
      });
    }

    if (spkPrevBtn) {
      spkPrevBtn.addEventListener('click', () => {
        if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
        if (!unit || !unit.sentences) return;
        stopLabRecognition();
        stopUserAudioRecording();
        currentSpeakingIdx = (currentSpeakingIdx - 1 + unit.sentences.length) % unit.sentences.length;
        loadSpeakingChallenge(currentSpeakingIdx);
      });
    }

    if (spkNextBtn) {
      spkNextBtn.addEventListener('click', () => {
        if (typeof SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
        if (!unit || !unit.sentences) return;
        stopLabRecognition();
        stopUserAudioRecording();
        currentSpeakingIdx = (currentSpeakingIdx + 1) % unit.sentences.length;
        loadSpeakingChallenge(currentSpeakingIdx);
      });
    }

    // Nút Thu âm nghe lại giọng mình
    if (spkUserRecBtn) {
      spkUserRecBtn.addEventListener('click', () => {
        if (isUserRecordingActive) {
          stopUserAudioRecording();
        } else {
          startUserAudioRecording();
        }
      });
    }

    // Nhận diện giọng nói AI
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      labRecognition = new SpeechRecognition();
      labRecognition.lang = 'en-US';
      labRecognition.continuous = false;
      labRecognition.interimResults = true; // Hiển thị chữ real-time trên iPhone

      if (spkRecordBtn) {
        spkRecordBtn.addEventListener('click', () => {
          if (isLabRecordingActive) {
            stopLabRecognition();
            if (lastTranscript && !hasEvaluatedCurrentTurn) {
              evaluateSpokenSentence(lastTranscript);
            }
          } else {
            startLabRecognition();
          }
        });
      }

      labRecognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = 0; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            finalTranscript += res[0].transcript;
          } else {
            interimTranscript += res[0].transcript;
          }
        }

        const currentText = (finalTranscript || interimTranscript).trim();
        if (currentText) {
          lastTranscript = currentText;
          if (spkSpokenText) spkSpokenText.textContent = `"${currentText}"`;
          if (spkSpokenBadge) spkSpokenBadge.textContent = '🎙️ Đang nghe giọng bạn...';
        }

        if (finalTranscript) {
          evaluateSpokenSentence(finalTranscript.trim());
        }
      };

      labRecognition.onend = () => {
        if (isLabRecordingActive) {
          stopLabRecognition();
          if (lastTranscript && !hasEvaluatedCurrentTurn) {
            evaluateSpokenSentence(lastTranscript);
          } else if (!hasEvaluatedCurrentTurn) {
            if (spkSpokenBadge) spkSpokenBadge.textContent = 'Đã kết thúc lượt nghe';
            if (spkSpokenBox) spkSpokenBox.classList.remove('is-recording');
          }
        }
      };

      labRecognition.onerror = (e) => {
        console.warn('Speaking recognition error:', e.error);
        stopLabRecognition();
        if (spkSpokenBox) spkSpokenBox.classList.remove('is-recording');

        if (e.error === 'no-speech') {
          if (spkFeedback) {
            spkFeedback.innerHTML = '<div class="feedback-error">⚠️ Không nhận được tiếng nói. Bạn hãy đọc to hơn hoặc để gần micro hơn nhé!</div>';
          }
        } else if (e.error === 'not-allowed') {
          if (spkFeedback) {
            spkFeedback.innerHTML = '<div class="feedback-error">⚠️ Safari chưa được cấp quyền Mic. Hãy vào <strong>Cài đặt iPhone > Safari > Micrô</strong> và chọn <strong>Cho phép</strong>.</div>';
          }
        } else if (e.error === 'service-not-allowed') {
          if (spkFeedback) {
            spkFeedback.innerHTML = '<div class="feedback-error">⚠️ Trên iPhone cần bật: <strong>Cài đặt > Cài đặt chung > Bàn phím > Bật đọc chính tả (Enable Dictation)</strong>.</div>';
          }
        }
      };
    } else if (spkRecordBtn) {
      spkRecordBtn.title = 'Trình duyệt không hỗ trợ nhận diện giọng nói';
      spkRecordBtn.style.opacity = '0.5';
    }
  }

  return {
    renderSpkUnitSelect,
    loadSpkUnit,
    loadSpeakingChallenge,
    stopUserAudioPlayback,
    clearAllTempRecordings,
    init
  };
})();

window.SpeakingModule = SpeakingModule;
