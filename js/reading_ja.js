// ========================================================
// JS/READING_JA.JS - Phòng Luyện Đọc Hiểu & Shadowing Đoạn Văn Tiếng Nhật
// Phục vụ luyện nhại giọng mạch lạc theo cả đoạn văn (Dokkai Minna)
// ========================================================

const ReadingJaModule = (() => {
  let currentReadingKey = 'bai_1';
  let currentReadingSentenceIdx = 0;

  // Ghi âm tạm thời 3 câu
  const tempReadingRecordings = new Map();
  let userReadingAudioPlayer = new Audio();
  let currentPlayingReadingRecIdx = null;
  let readingMediaRecorder = null;
  let readingMediaStream = null;
  let readingAudioChunks = [];
  let isReadingRecordingActive = false;
  let isReadingUserRecordingActive = false;
  let lastReadingTranscript = '';
  let hasEvaluatedReadingTurn = false;
  let readingRecognition = null;
  let isPlayingFullPassage = false;

  // DOM Elements
  let jaReadingUnitSelect;
  let jaReadingListenAllBtn;
  let jaReadingPassageTitle;
  let jaReadingPassageTopic;
  let jaReadingPassageSentences;

  let jaReadingCategory;
  let jaReadingPhraseJa;
  let jaReadingPhraseRomaji;
  let jaReadingPhraseVi;
  let jaReadingListenBtn;
  let jaReadingRecordBtn;
  let jaReadingUserRecBtn;
  let jaReadingPlayRecordBtn;
  let jaReadingPrevBtn;
  let jaReadingNextBtn;
  let jaReadingFeedback;

  let jaReadingSpokenBox;
  let jaReadingSpokenBadge;
  let jaReadingSpokenText;
  let jaReadingTypingCursor;

  let jaReadingBtnPlayRecPrev;
  let jaReadingBtnPlayRecCurr;
  let jaReadingBtnPlayRecNext;
  let jaReadingRecLabelPrev;
  let jaReadingRecLabelCurr;
  let jaReadingRecLabelNext;

  function initDOM() {
    jaReadingUnitSelect = document.getElementById('ja-reading-unit-select');
    jaReadingListenAllBtn = document.getElementById('ja-reading-listen-all-btn');
    jaReadingPassageTitle = document.getElementById('ja-reading-passage-title');
    jaReadingPassageTopic = document.getElementById('ja-reading-passage-topic');
    jaReadingPassageSentences = document.getElementById('ja-reading-passage-sentences');

    jaReadingCategory = document.getElementById('ja-reading-category');
    jaReadingPhraseJa = document.getElementById('ja-reading-phrase-ja');
    jaReadingPhraseRomaji = document.getElementById('ja-reading-phrase-romaji');
    jaReadingPhraseVi = document.getElementById('ja-reading-phrase-vi');
    jaReadingListenBtn = document.getElementById('ja-reading-listen-btn');
    jaReadingRecordBtn = document.getElementById('ja-reading-record-btn');
    jaReadingUserRecBtn = document.getElementById('ja-reading-user-rec-btn');
    jaReadingPlayRecordBtn = document.getElementById('ja-reading-play-record-btn');
    jaReadingPrevBtn = document.getElementById('ja-reading-prev-btn');
    jaReadingNextBtn = document.getElementById('ja-reading-next-btn');
    jaReadingFeedback = document.getElementById('ja-reading-feedback');

    jaReadingSpokenBox = document.getElementById('ja-reading-spoken-box');
    jaReadingSpokenBadge = document.getElementById('ja-reading-spoken-badge');
    jaReadingSpokenText = document.getElementById('ja-reading-spoken-text');
    jaReadingTypingCursor = document.getElementById('ja-reading-typing-cursor');

    jaReadingBtnPlayRecPrev = document.getElementById('ja-reading-btn-play-rec-prev');
    jaReadingBtnPlayRecCurr = document.getElementById('ja-reading-btn-play-rec-curr');
    jaReadingBtnPlayRecNext = document.getElementById('ja-reading-btn-play-rec-next');
    jaReadingRecLabelPrev = document.getElementById('ja-reading-rec-label-prev');
    jaReadingRecLabelCurr = document.getElementById('ja-reading-rec-label-curr');
    jaReadingRecLabelNext = document.getElementById('ja-reading-rec-label-next');
  }

  function renderReadingSelect() {
    if (!jaReadingUnitSelect || typeof JA_READING_PASSAGES_DATA === 'undefined') return;
    jaReadingUnitSelect.innerHTML = '';
    const keys = Object.keys(JA_READING_PASSAGES_DATA);
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có đoạn văn - Chờ nạp bài)';
      jaReadingUnitSelect.appendChild(opt);
      return;
    }
    keys.forEach(k => {
      const item = JA_READING_PASSAGES_DATA[k];
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = `${item.icon || '📖'} ${item.title || k}`;
      jaReadingUnitSelect.appendChild(opt);
    });
    if (!currentReadingKey || !JA_READING_PASSAGES_DATA[currentReadingKey]) {
      currentReadingKey = keys.includes('bai_1') ? 'bai_1' : keys[0];
    }
    jaReadingUnitSelect.value = currentReadingKey;
  }

  function loadReadingPassage(passageKey) {
    if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
    currentReadingKey = passageKey;
    if (jaReadingUnitSelect && jaReadingUnitSelect.value !== passageKey) {
      jaReadingUnitSelect.value = passageKey;
    }
    currentReadingSentenceIdx = 0;
    const passage = JA_READING_PASSAGES_DATA[passageKey];
    if (!passage || !passage.sentences || passage.sentences.length === 0) {
      if (jaReadingPassageTitle) jaReadingPassageTitle.textContent = 'CHƯA CÓ ĐOẠN VĂN';
      if (jaReadingPassageTopic) jaReadingPassageTopic.textContent = 'Đang chờ nạp bài đọc hiểu mới...';
      if (jaReadingPassageSentences) jaReadingPassageSentences.innerHTML = '<span style="color:var(--text-muted);padding:10px;">Chưa có đoạn văn nào trong danh sách.</span>';
      if (jaReadingCategory) jaReadingCategory.textContent = 'CHƯA CÓ CÂU';
      if (jaReadingPhraseJa) jaReadingPhraseJa.textContent = '(Chưa có câu đọc hiểu)';
      if (jaReadingPhraseRomaji) jaReadingPhraseRomaji.textContent = '';
      if (jaReadingPhraseVi) jaReadingPhraseVi.textContent = 'Hãy nạp dữ liệu bài đọc để bắt đầu luyện tập.';
      return;
    }

    if (jaReadingPassageTitle) jaReadingPassageTitle.textContent = `${passage.icon || '🌸'} ${passage.title}`;
    if (jaReadingPassageTopic) jaReadingPassageTopic.textContent = `Chủ đề: ${passage.topic || ''} • (${passage.sentences.length} câu liên kết)`;

    renderPassageParagraph();
    loadReadingSentence(0);
  }

  function renderPassageParagraph() {
    if (!jaReadingPassageSentences || typeof JA_READING_PASSAGES_DATA === 'undefined') return;
    jaReadingPassageSentences.innerHTML = '';
    const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences) return;

    passage.sentences.forEach((item, idx) => {
      const span = document.createElement('span');
      span.className = `reading-sentence-span ${idx === currentReadingSentenceIdx ? 'active' : ''}`;
      span.dataset.idx = idx;
      span.textContent = item.ja;

      span.addEventListener('click', () => {
        loadReadingSentence(idx);
      });

      jaReadingPassageSentences.appendChild(span);
    });
  }

  function loadReadingSentence(idx) {
    if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
    const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences || passage.sentences.length === 0) return;
    if (idx >= passage.sentences.length) idx = 0;

    currentReadingSentenceIdx = idx;
    const item = passage.sentences[idx];

    // Highlight câu trong đoạn văn
    if (jaReadingPassageSentences) {
      const spans = jaReadingPassageSentences.querySelectorAll('.reading-sentence-span');
      spans.forEach((s, i) => {
        if (i === idx) {
          s.classList.add('active');
          s.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          s.classList.remove('active');
        }
      });
    }

    if (jaReadingCategory) {
      jaReadingCategory.textContent = `${passage.title.toUpperCase()} (CÂU ${idx + 1} / ${passage.sentences.length})`;
    }
    if (jaReadingPhraseJa) jaReadingPhraseJa.textContent = item.ja;
    if (jaReadingPhraseRomaji) jaReadingPhraseRomaji.textContent = `Romaji: ${item.romaji} • Đọc tựa như: "${item.readVi}"`;
    if (jaReadingPhraseVi) jaReadingPhraseVi.textContent = `👉 Ý nghĩa: ${item.vi} (💡 ${item.tip || ''})`;
    if (jaReadingFeedback) {
      jaReadingFeedback.innerHTML = '<div class="feedback-status">Hãy bấm "🔊 Nghe câu này", sau đó bấm "🎙️ Bấm để nói thử" để ghi âm và nhận phản hồi tức thì.</div>';
    }

    resetReadingSpokenBox();
    pruneReadingTempRecordings();
    updateReadingRecordingsUI();
  }

  function resetReadingSpokenBox() {
    if (jaReadingSpokenBox) {
      jaReadingSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (jaReadingSpokenBadge) jaReadingSpokenBadge.textContent = 'Đang chờ bạn đọc câu này...';
    if (jaReadingSpokenText) jaReadingSpokenText.textContent = '"..."';
    if (jaReadingTypingCursor) jaReadingTypingCursor.style.display = 'none';
  }

  // Phát toàn bộ bài đọc
  function playFullPassage() {
    if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
    const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage) return;

    if (isPlayingFullPassage) {
      stopFullPassage();
      return;
    }

    stopReadingUserAudioPlayback();
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    isPlayingFullPassage = true;
    if (jaReadingListenAllBtn) {
      jaReadingListenAllBtn.classList.add('is-playing');
      jaReadingListenAllBtn.innerHTML = '⏸️ Đang đọc cả bài... (Bấm dừng)';
    }

    // Đọc toàn bộ fullText
    AppCore.speakJa(passage.fullText);

    // Kiểm tra định kỳ khi speechSynthesis hoàn tất
    const checkTimer = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        clearInterval(checkTimer);
        stopFullPassage();
      }
    }, 400);
  }

  function stopFullPassage() {
    isPlayingFullPassage = false;
    if (jaReadingListenAllBtn) {
      jaReadingListenAllBtn.classList.remove('is-playing');
      jaReadingListenAllBtn.innerHTML = '🔊 Nghe toàn bài';
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  // Quản lý ghi âm & Audio người dùng
  function stopReadingUserAudioPlayback() {
    if (userReadingAudioPlayer) {
      userReadingAudioPlayer.pause();
      userReadingAudioPlayer.currentTime = 0;
    }
    currentPlayingReadingRecIdx = null;
    updateReadingRecordingsUI();
  }

  function playReadingUserRecording(targetIdx) {
    const rec = tempReadingRecordings.get(targetIdx);
    if (!rec || !rec.url) return;

    if (currentPlayingReadingRecIdx === targetIdx && !userReadingAudioPlayer.paused) {
      stopReadingUserAudioPlayback();
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    stopFullPassage();
    stopReadingUserAudioPlayback();

    userReadingAudioPlayer.src = rec.url;
    currentPlayingReadingRecIdx = targetIdx;
    userReadingAudioPlayer.play().catch(e => console.error('Lỗi phát âm thanh:', e));
    updateReadingRecordingsUI();

    userReadingAudioPlayer.onended = () => {
      stopReadingUserAudioPlayback();
    };
    userReadingAudioPlayer.onpause = () => {
      if (currentPlayingReadingRecIdx === targetIdx) {
        currentPlayingReadingRecIdx = null;
        updateReadingRecordingsUI();
      }
    };
  }

  function pruneReadingTempRecordings() {
    if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
    const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences) return;
    const total = passage.sentences.length;
    const prevIdx = (currentReadingSentenceIdx - 1 + total) % total;
    const currIdx = currentReadingSentenceIdx;
    const nextIdx = (currentReadingSentenceIdx + 1) % total;

    const allowed = new Set([prevIdx, currIdx, nextIdx]);

    for (const [keyIdx, data] of tempReadingRecordings.entries()) {
      if (!allowed.has(keyIdx)) {
        if (currentPlayingReadingRecIdx === keyIdx) {
          stopReadingUserAudioPlayback();
        }
        if (data.url) {
          URL.revokeObjectURL(data.url);
        }
        tempReadingRecordings.delete(keyIdx);
      }
    }
  }

  function saveReadingTempRecording(idx, blob) {
    const old = tempReadingRecordings.get(idx);
    if (old && old.url) {
      URL.revokeObjectURL(old.url);
    }
    const url = URL.createObjectURL(blob);
    const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    tempReadingRecordings.set(idx, { blob, url, time });
    pruneReadingTempRecordings();
    updateReadingRecordingsUI();
  }

  function clearAllReadingTempRecordings() {
    if (isReadingRecordingActive) {
      isReadingRecordingActive = false;
      readingAudioChunks = [];
      if (jaReadingRecordBtn) {
        jaReadingRecordBtn.classList.remove('recording');
        jaReadingRecordBtn.textContent = '🎙️ Bấm để nói thử';
      }
      if (readingMediaRecorder && readingMediaRecorder.state !== 'inactive') {
        readingMediaRecorder.onstop = null;
        try { readingMediaRecorder.stop(); } catch (e) {}
      }
      if (readingMediaStream) {
        readingMediaStream.getTracks().forEach(t => t.stop());
        readingMediaStream = null;
      }
      if (readingRecognition) {
        try { readingRecognition.stop(); } catch (e) {}
      }
      if (jaReadingSpokenBox && jaReadingSpokenBox.classList.contains('is-recording')) {
        jaReadingSpokenBox.classList.remove('is-recording');
      }
    }

    stopReadingUserAudioPlayback();
    stopFullPassage();

    for (const [keyIdx, data] of tempReadingRecordings.entries()) {
      if (data.url) {
        URL.revokeObjectURL(data.url);
      }
    }
    tempReadingRecordings.clear();
    updateReadingRecordingsUI();
  }

  function updateReadingRecordingsUI() {
    if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
    const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences) return;
    const total = passage.sentences.length;
    const prevIdx = (currentReadingSentenceIdx - 1 + total) % total;
    const currIdx = currentReadingSentenceIdx;
    const nextIdx = (currentReadingSentenceIdx + 1) % total;

    if (jaReadingRecLabelPrev) jaReadingRecLabelPrev.textContent = `Câu ${prevIdx + 1}`;
    if (jaReadingRecLabelCurr) jaReadingRecLabelCurr.textContent = `Câu ${currIdx + 1}`;
    if (jaReadingRecLabelNext) jaReadingRecLabelNext.textContent = `Câu ${nextIdx + 1}`;

    const currRec = tempReadingRecordings.get(currIdx);
    if (currRec) {
      if (jaReadingPlayRecordBtn) {
        jaReadingPlayRecordBtn.style.display = 'inline-flex';
        if (currentPlayingReadingRecIdx === currIdx) {
          jaReadingPlayRecordBtn.classList.add('is-playing');
          jaReadingPlayRecordBtn.innerHTML = '⏸️ Đang phát giọng bạn...';
        } else {
          jaReadingPlayRecordBtn.classList.remove('is-playing');
          jaReadingPlayRecordBtn.innerHTML = '▶️ Nghe lại giọng bạn';
        }
      }
      if (jaReadingBtnPlayRecCurr) {
        jaReadingBtnPlayRecCurr.disabled = false;
        if (currentPlayingReadingRecIdx === currIdx) {
          jaReadingBtnPlayRecCurr.className = 'rec-play-btn has-recording is-playing';
          jaReadingBtnPlayRecCurr.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
        } else {
          jaReadingBtnPlayRecCurr.className = 'rec-play-btn has-recording';
          jaReadingBtnPlayRecCurr.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${currRec.time})</span>`;
        }
      }
    } else {
      if (jaReadingPlayRecordBtn) {
        jaReadingPlayRecordBtn.style.display = 'none';
        jaReadingPlayRecordBtn.classList.remove('is-playing');
      }
      if (jaReadingBtnPlayRecCurr) {
        jaReadingBtnPlayRecCurr.disabled = true;
        jaReadingBtnPlayRecCurr.className = 'rec-play-btn';
        jaReadingBtnPlayRecCurr.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa ghi âm</span>';
      }
    }

    const prevRec = tempReadingRecordings.get(prevIdx);
    if (prevRec && jaReadingBtnPlayRecPrev) {
      jaReadingBtnPlayRecPrev.disabled = false;
      if (currentPlayingReadingRecIdx === prevIdx) {
        jaReadingBtnPlayRecPrev.className = 'rec-play-btn has-recording is-playing';
        jaReadingBtnPlayRecPrev.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
      } else {
        jaReadingBtnPlayRecPrev.className = 'rec-play-btn has-recording';
        jaReadingBtnPlayRecPrev.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${prevRec.time})</span>`;
      }
    } else if (jaReadingBtnPlayRecPrev) {
      jaReadingBtnPlayRecPrev.disabled = true;
      jaReadingBtnPlayRecPrev.className = 'rec-play-btn';
      jaReadingBtnPlayRecPrev.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa có</span>';
    }

    const nextRec = tempReadingRecordings.get(nextIdx);
    if (nextRec && jaReadingBtnPlayRecNext) {
      jaReadingBtnPlayRecNext.disabled = false;
      if (currentPlayingReadingRecIdx === nextIdx) {
        jaReadingBtnPlayRecNext.className = 'rec-play-btn has-recording is-playing';
        jaReadingBtnPlayRecNext.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
      } else {
        jaReadingBtnPlayRecNext.className = 'rec-play-btn has-recording';
        jaReadingBtnPlayRecNext.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${nextRec.time})</span>`;
      }
    } else if (jaReadingBtnPlayRecNext) {
      jaReadingBtnPlayRecNext.disabled = true;
      jaReadingBtnPlayRecNext.className = 'rec-play-btn';
      jaReadingBtnPlayRecNext.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa có</span>';
    }
  }

  // DỪNG CÁC TIẾN TRÌNH BÀI ĐỌC
  function stopReadingRecognition() {
    if (!isReadingRecordingActive) return;
    isReadingRecordingActive = false;

    if (jaReadingRecordBtn) {
      jaReadingRecordBtn.classList.remove('recording');
      jaReadingRecordBtn.innerHTML = '🎯 Bấm để nói & Chấm điểm';
    }
    if (jaReadingTypingCursor) jaReadingTypingCursor.style.display = 'none';

    if (readingRecognition) {
      try { readingRecognition.stop(); } catch (e) {}
    }
  }

  function stopReadingUserAudioRecording() {
    if (!isReadingUserRecordingActive) return;
    isReadingUserRecordingActive = false;

    if (jaReadingUserRecBtn) {
      jaReadingUserRecBtn.classList.remove('recording');
      jaReadingUserRecBtn.innerHTML = '🎙️ Thu âm nghe lại';
    }

    if (readingMediaRecorder && readingMediaRecorder.state !== 'inactive') {
      try { readingMediaRecorder.stop(); } catch (e) {}
    }
    if (readingMediaStream) {
      readingMediaStream.getTracks().forEach(track => track.stop());
      readingMediaStream = null;
    }
  }

  // 1. NHẬN DIỆN & CHẤM ĐIỂM BÀI ĐỌC (Thuần SpeechRecognition)
  function startReadingRecognition() {
    stopReadingUserAudioPlayback();
    stopReadingUserAudioRecording();
    stopFullPassage();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    isReadingRecordingActive = true;
    lastReadingTranscript = '';
    hasEvaluatedReadingTurn = false;

    if (jaReadingRecordBtn) {
      jaReadingRecordBtn.classList.add('recording');
      jaReadingRecordBtn.innerHTML = '⏹️ Đang nghe... Bấm để dừng';
    }
    if (jaReadingSpokenBox) {
      jaReadingSpokenBox.classList.remove('match-success', 'match-retry');
      jaReadingSpokenBox.classList.add('is-recording');
    }
    if (jaReadingSpokenBadge) jaReadingSpokenBadge.textContent = '🔴 Đang lắng nghe... Hãy đọc câu tiếng Nhật!';
    if (jaReadingSpokenText) jaReadingSpokenText.textContent = '...';
    if (jaReadingTypingCursor) jaReadingTypingCursor.style.display = 'inline-block';
    if (jaReadingFeedback) {
      jaReadingFeedback.innerHTML = '<div class="feedback-status">Hãy đọc to câu tiếng Nhật vào micro... Giữ ngữ điệu tự nhiên nhé!</div>';
    }

    if (readingRecognition) {
      try {
        readingRecognition.start();
      } catch (e) {
        console.warn('readingRecognition error start:', e);
      }
    }
  }

  // 2. GHI ÂM NGHE LẠI BÀI ĐỌC (MediaRecorder)
  function startReadingUserAudioRecording() {
    stopReadingUserAudioPlayback();
    stopReadingRecognition();
    stopFullPassage();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    isReadingUserRecordingActive = true;
    readingAudioChunks = [];

    if (jaReadingUserRecBtn) {
      jaReadingUserRecBtn.classList.add('recording');
      jaReadingUserRecBtn.innerHTML = '⏹️ Đang thu âm... Bấm để dừng';
    }
    if (jaReadingFeedback) {
      jaReadingFeedback.innerHTML = '<div class="feedback-status">🎙️ Đang ghi âm giọng đọc của bạn để lưu lại... Bấm dừng khi đọc xong nhé!</div>';
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        if (!isReadingUserRecordingActive) {
          stream.getTracks().forEach(t => t.stop());
          return;
        }
        readingMediaStream = stream;
        readingMediaRecorder = new MediaRecorder(stream);
        readingAudioChunks = [];

        readingMediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            readingAudioChunks.push(e.data);
          }
        };

        readingMediaRecorder.onstop = () => {
          if (readingAudioChunks.length > 0) {
            const mime = readingMediaRecorder.mimeType || 'audio/webm';
            const audioBlob = new Blob(readingAudioChunks, { type: mime });
            saveReadingTempRecording(currentReadingSentenceIdx, audioBlob);
            if (jaReadingFeedback) {
              jaReadingFeedback.innerHTML = '<div class="feedback-success">✨ Đã lưu bản ghi âm! Bạn có thể bấm <strong>"▶️ Nghe lại giọng bạn"</strong> để tự đối chiếu.</div>';
            }
          }
        };

        readingMediaRecorder.start();
      }).catch(err => {
        console.warn('Lỗi mở micro bài đọc:', err);
        stopReadingUserAudioRecording();
        if (jaReadingFeedback) {
          jaReadingFeedback.innerHTML = '<div class="feedback-error">⚠️ Không thể truy cập micro. Vui lòng cấp quyền trong cài đặt trình duyệt.</div>';
        }
      });
    }
  }

  // ĐÁNH GIÁ CÂU BÀI ĐỌC
  function evaluateReadingSentence(transcript) {
    if (hasEvaluatedReadingTurn) return;
    hasEvaluatedReadingTurn = true;
    stopReadingRecognition();

    const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences || !passage.sentences[currentReadingSentenceIdx]) return;
    const item = passage.sentences[currentReadingSentenceIdx];

    if (jaReadingSpokenText) jaReadingSpokenText.textContent = `"${transcript}"`;
    if (jaReadingSpokenBox) jaReadingSpokenBox.classList.remove('is-recording');

    const cleanTarget = item.ja.replace(/[\s\.\,\?\!、。]/g, '');
    const cleanSpoken = transcript.replace(/[\s\.\,\?\!、。]/g, '');
    const isMatch = cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken) ||
                    (cleanTarget.length > 4 && cleanSpoken.length > 4 && cleanTarget.slice(0, 4) === cleanSpoken.slice(0, 4));

    if (isMatch) {
      if (jaReadingSpokenBox) jaReadingSpokenBox.classList.add('match-success');
      if (jaReadingSpokenBadge) jaReadingSpokenBadge.textContent = '✅ Đã nhận diện & Phát âm rất chuẩn!';
      if (jaReadingFeedback) {
        jaReadingFeedback.innerHTML = `
          <div class="feedback-success">
            🎉 Tuyệt vời! Bạn phát âm câu trong đoạn văn rất chuẩn xác!<br>
            <small style="opacity:0.9;">AI nhận diện được: "<em>${transcript}</em>"</small>
          </div>
        `;
      }
      AppCore.incrementWordCount();
      AppCore.state.spokenSentences.push({
        en: `[Bài đọc Nhật] ${item.ja}`,
        time: new Date().toLocaleTimeString('vi-VN')
      });
      if (AppCore.state.spokenSentences.length > 30) AppCore.state.spokenSentences.shift();
      AppCore.syncProgress();
    } else {
      if (jaReadingSpokenBox) jaReadingSpokenBox.classList.add('match-retry');
      if (jaReadingSpokenBadge) jaReadingSpokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
      if (jaReadingFeedback) {
        jaReadingFeedback.innerHTML = `
          <div class="feedback-retry">
            💡 AI nhận diện bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
            Câu mẫu: "<strong>${item.ja}</strong>" <em>(${item.readVi})</em>.<br>
            <small>👉 Hãy đọc to, rõ từng âm tiết và bấm nút để thử lại nhé!</small>
          </div>
        `;
      }
    }
  }

  function init() {
    initDOM();

    if (jaReadingUnitSelect) {
      jaReadingUnitSelect.addEventListener('change', (e) => {
        clearAllReadingTempRecordings();
        loadReadingPassage(e.target.value);
      });
    }

    if (jaReadingListenAllBtn) {
      jaReadingListenAllBtn.addEventListener('click', () => {
        playFullPassage();
      });
    }

    if (jaReadingListenBtn) {
      jaReadingListenBtn.addEventListener('click', () => {
        if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
        const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
        if (passage && passage.sentences && passage.sentences[currentReadingSentenceIdx]) {
          stopFullPassage();
          AppCore.speakJa(passage.sentences[currentReadingSentenceIdx].ja);
        }
      });
    }

    if (jaReadingPlayRecordBtn) {
      jaReadingPlayRecordBtn.addEventListener('click', () => {
        playReadingUserRecording(currentReadingSentenceIdx);
      });
    }
    if (jaReadingBtnPlayRecCurr) {
      jaReadingBtnPlayRecCurr.addEventListener('click', () => {
        playReadingUserRecording(currentReadingSentenceIdx);
      });
    }
    if (jaReadingBtnPlayRecPrev) {
      jaReadingBtnPlayRecPrev.addEventListener('click', () => {
        if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
        const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences) return;
        const total = passage.sentences.length;
        playReadingUserRecording((currentReadingSentenceIdx - 1 + total) % total);
      });
    }
    if (jaReadingBtnPlayRecNext) {
      jaReadingBtnPlayRecNext.addEventListener('click', () => {
        if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
        const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences) return;
        const total = passage.sentences.length;
        playReadingUserRecording((currentReadingSentenceIdx + 1) % total);
      });
    }

    if (jaReadingPrevBtn) {
      jaReadingPrevBtn.addEventListener('click', () => {
        if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
        const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences) return;
        stopReadingRecognition();
        stopReadingUserAudioRecording();
        currentReadingSentenceIdx = (currentReadingSentenceIdx - 1 + passage.sentences.length) % passage.sentences.length;
        loadReadingSentence(currentReadingSentenceIdx);
      });
    }

    if (jaReadingNextBtn) {
      jaReadingNextBtn.addEventListener('click', () => {
        if (typeof JA_READING_PASSAGES_DATA === 'undefined') return;
        const passage = JA_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences) return;
        stopReadingRecognition();
        stopReadingUserAudioRecording();
        currentReadingSentenceIdx = (currentReadingSentenceIdx + 1) % passage.sentences.length;
        loadReadingSentence(currentReadingSentenceIdx);
      });
    }

    // Nút Thu âm nghe lại bài đọc
    if (jaReadingUserRecBtn) {
      jaReadingUserRecBtn.addEventListener('click', () => {
        if (isReadingUserRecordingActive) {
          stopReadingUserAudioRecording();
        } else {
          startReadingUserAudioRecording();
        }
      });
    }

    // Nhận diện giọng nói bài đọc tiếng Nhật AI
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      readingRecognition = new SpeechRecognition();
      readingRecognition.lang = 'ja-JP';
      readingRecognition.continuous = false;
      readingRecognition.interimResults = true; // Real-time trên iPhone

      if (jaReadingRecordBtn) {
        jaReadingRecordBtn.addEventListener('click', () => {
          if (isReadingRecordingActive) {
            stopReadingRecognition();
            if (lastReadingTranscript && !hasEvaluatedReadingTurn) {
              evaluateReadingSentence(lastReadingTranscript);
            }
          } else {
            startReadingRecognition();
          }
        });
      }

      readingRecognition.onresult = (event) => {
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
          lastReadingTranscript = currentText;
          if (jaReadingSpokenText) jaReadingSpokenText.textContent = `"${currentText}"`;
          if (jaReadingSpokenBadge) jaReadingSpokenBadge.textContent = '🎙️ Đang nhận diện tiếng Nhật...';
        }

        if (finalTranscript) {
          evaluateReadingSentence(finalTranscript.trim());
        }
      };

      readingRecognition.onend = () => {
        if (isReadingRecordingActive) {
          stopReadingRecognition();
          if (lastReadingTranscript && !hasEvaluatedReadingTurn) {
            evaluateReadingSentence(lastReadingTranscript);
          } else if (!hasEvaluatedReadingTurn) {
            if (jaReadingSpokenBadge) jaReadingSpokenBadge.textContent = 'Đã kết thúc lượt nghe';
            if (jaReadingSpokenBox) jaReadingSpokenBox.classList.remove('is-recording');
          }
        }
      };

      readingRecognition.onerror = (e) => {
        console.warn('Reading recognition error:', e.error);
        stopReadingRecognition();
        if (jaReadingSpokenBox) jaReadingSpokenBox.classList.remove('is-recording');

        if (e.error === 'no-speech') {
          if (jaReadingFeedback) {
            jaReadingFeedback.innerHTML = '<div class="feedback-error">⚠️ Không nhận được tiếng nói. Bạn hãy đọc to hơn hoặc để gần micro hơn nhé!</div>';
          }
        } else if (e.error === 'not-allowed') {
          if (jaReadingFeedback) {
            jaReadingFeedback.innerHTML = '<div class="feedback-error">⚠️ Safari chưa được cấp quyền Mic. Hãy vào <strong>Cài đặt iPhone > Safari > Micrô</strong> và chọn <strong>Cho phép</strong>.</div>';
          }
        } else if (e.error === 'service-not-allowed') {
          if (jaReadingFeedback) {
            jaReadingFeedback.innerHTML = '<div class="feedback-error">⚠️ Trên iPhone cần bật: <strong>Cài đặt > Cài đặt chung > Bàn phím > Bật đọc chính tả (Enable Dictation)</strong>.</div>';
          }
        }
      };
    } else if (jaReadingRecordBtn) {
      jaReadingRecordBtn.title = 'Trình duyệt không hỗ trợ nhận diện giọng nói';
      jaReadingRecordBtn.style.opacity = '0.5';
    }
  }

  return {
    renderReadingSelect,
    loadReadingPassage,
    loadReadingSentence,
    clearAllReadingTempRecordings,
    init
  };
})();

window.ReadingJaModule = ReadingJaModule;
