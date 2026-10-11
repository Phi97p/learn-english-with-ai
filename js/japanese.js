// ========================================================
// JS/JAPANESE.JS - Phòng Luyện Nói & Phát Âm Tiếng Nhật (Shadowing & Vocab Lab)
// ========================================================

const JapaneseModule = (() => {
  // State Tiếng Nhật
  let currentJaSpkUnitKey = 'unit_1_greeting';
  let currentJaSpeakingIdx = 0;
  let currentJaVocabScenario = 'vocab_1_greeting';
  let currentJaVocabIdx = 0;
  let userJaVocabData = null;

  // Quản lý ghi âm 3 câu tạm thời tiếng Nhật
  const tempJaSentenceRecordings = new Map();
  let userJaAudioPlayer = new Audio();
  let currentPlayingJaRecIdx = null;
  let jaLabMediaRecorder = null;
  let jaLabMediaStream = null;
  let jaLabAudioChunks = [];
  let isJaLabRecordingActive = false;
  let isJaUserRecordingActive = false;
  let lastJaTranscript = '';
  let hasEvaluatedJaCurrentTurn = false;
  let jaLabRecognition = null;
  let jaVocabRecognition = null;

  // DOM Elements - Sentence Shadowing
  let jaSpkUnitSelect, jaSpkCategory, jaSpkPhraseJa, jaSpkPhraseRomaji, jaSpkPhraseVi;
  let jaSpkListenBtn, jaSpkRecordBtn, jaSpkUserRecBtn, jaSpkPrevBtn, jaSpkNextBtn, jaSpkFeedback, jaSpkSentencesWrapper;
  let jaSpkPlayRecordBtn, jaTempRecordingsBar;
  let jaBtnPlayRecPrev, jaBtnPlayRecCurr, jaBtnPlayRecNext;
  let jaRecLabelPrev, jaRecLabelCurr, jaRecLabelNext;
  let jaSpkSpokenBox, jaSpkSpokenBadge, jaSpkSpokenText, jaSpkTypingCursor;

  // DOM Elements - Vocab Lab
  let btnJaModeVocab, btnJaModeSentence;
  let jaVocabSpeakingSection, jaSentenceSpeakingSection;
  let jaVocabScenarioSelect, jaVocabChipsWrapper;
  let jaVocabCategory, jaVocabWordJa, jaVocabWordRomaji, jaVocabWordVi, jaVocabWordTip;
  let jaVocabListenBtn, jaVocabRecordBtn, jaVocabPrevBtn, jaVocabNextBtn, jaVocabFeedback, jaVocabRemoveBtn;
  let btnJaAddVocab, btnJaResetVocab;
  let jaVocabSpokenBox, jaVocabSpokenBadge, jaVocabSpokenText, jaVocabTypingCursor;

  // Modal Thêm từ Tiếng Nhật
  let addJaVocabModal, modalJaCloseBtn, modalJaCancelBtn, modalJaSaveBtn;
  let newJaVocabWord, newJaVocabVi, newJaVocabRomaji, newJaVocabTip;

  function initDOM() {
    jaSpkUnitSelect = document.getElementById('ja-spk-unit-select');
    jaSpkCategory = document.getElementById('ja-spk-category');
    jaSpkPhraseJa = document.getElementById('ja-spk-phrase-ja');
    jaSpkPhraseRomaji = document.getElementById('ja-spk-phrase-romaji');
    jaSpkPhraseVi = document.getElementById('ja-spk-phrase-vi');
    jaSpkListenBtn = document.getElementById('ja-spk-listen-btn');
    jaSpkRecordBtn = document.getElementById('ja-spk-record-btn');
    jaSpkUserRecBtn = document.getElementById('ja-spk-user-rec-btn');
    jaSpkPrevBtn = document.getElementById('ja-spk-prev-btn');
    jaSpkNextBtn = document.getElementById('ja-spk-next-btn');
    jaSpkFeedback = document.getElementById('ja-spk-feedback');
    jaSpkSentencesWrapper = document.getElementById('ja-spk-sentences-wrapper');
    jaSpkPlayRecordBtn = document.getElementById('ja-spk-play-record-btn');
    jaTempRecordingsBar = document.getElementById('ja-temp-recordings-bar');
    jaBtnPlayRecPrev = document.getElementById('ja-btn-play-rec-prev');
    jaBtnPlayRecCurr = document.getElementById('ja-btn-play-rec-curr');
    jaBtnPlayRecNext = document.getElementById('ja-btn-play-rec-next');
    jaRecLabelPrev = document.getElementById('ja-rec-label-prev');
    jaRecLabelCurr = document.getElementById('ja-rec-label-curr');
    jaRecLabelNext = document.getElementById('ja-rec-label-next');
    jaSpkSpokenBox = document.getElementById('ja-spk-spoken-box');
    jaSpkSpokenBadge = document.getElementById('ja-spk-spoken-badge');
    jaSpkSpokenText = document.getElementById('ja-spk-spoken-text');
    jaSpkTypingCursor = document.getElementById('ja-spk-typing-cursor');

    btnJaModeVocab = document.getElementById('btn-ja-mode-vocab');
    btnJaModeSentence = document.getElementById('btn-ja-mode-sentence');
    jaVocabSpeakingSection = document.getElementById('ja-vocab-speaking-section');
    jaSentenceSpeakingSection = document.getElementById('ja-sentence-speaking-section');
    jaVocabScenarioSelect = document.getElementById('ja-vocab-scenario-select');
    jaVocabChipsWrapper = document.getElementById('ja-vocab-chips-wrapper');
    jaVocabCategory = document.getElementById('ja-vocab-category');
    jaVocabWordJa = document.getElementById('ja-vocab-word-ja');
    jaVocabWordRomaji = document.getElementById('ja-vocab-word-romaji');
    jaVocabWordVi = document.getElementById('ja-vocab-word-vi');
    jaVocabWordTip = document.getElementById('ja-vocab-word-tip');
    jaVocabListenBtn = document.getElementById('ja-vocab-listen-btn');
    jaVocabRecordBtn = document.getElementById('ja-vocab-record-btn');
    jaVocabPrevBtn = document.getElementById('ja-vocab-prev-btn');
    jaVocabNextBtn = document.getElementById('ja-vocab-next-btn');
    jaVocabFeedback = document.getElementById('ja-vocab-feedback');
    jaVocabRemoveBtn = document.getElementById('ja-vocab-remove-btn');
    btnJaAddVocab = document.getElementById('btn-ja-add-vocab');
    btnJaResetVocab = document.getElementById('btn-ja-reset-vocab');
    jaVocabSpokenBox = document.getElementById('ja-vocab-spoken-box');
    jaVocabSpokenBadge = document.getElementById('ja-vocab-spoken-badge');
    jaVocabSpokenText = document.getElementById('ja-vocab-spoken-text');
    jaVocabTypingCursor = document.getElementById('ja-vocab-typing-cursor');

    addJaVocabModal = document.getElementById('add-ja-vocab-modal');
    modalJaCloseBtn = document.getElementById('modal-ja-close-btn');
    modalJaCancelBtn = document.getElementById('modal-ja-cancel-btn');
    modalJaSaveBtn = document.getElementById('modal-ja-save-btn');
    newJaVocabWord = document.getElementById('new-ja-vocab-word');
    newJaVocabVi = document.getElementById('new-ja-vocab-vi');
    newJaVocabRomaji = document.getElementById('new-ja-vocab-romaji');
    newJaVocabTip = document.getElementById('new-ja-vocab-tip');
  }

  function loadUserJaVocabData() {
    try {
      const savedJaVocab = localStorage.getItem('userJaVocabData');
      if (savedJaVocab) {
        userJaVocabData = JSON.parse(savedJaVocab);
      }
    } catch (e) {
      userJaVocabData = null;
    }
    if (!userJaVocabData) {
      userJaVocabData = (typeof JA_VOCAB_SCENARIOS_DATA !== 'undefined') ? JSON.parse(JSON.stringify(JA_VOCAB_SCENARIOS_DATA)) : {};
      saveUserJaVocabData();
    }
  }

  function saveUserJaVocabData() {
    localStorage.setItem('userJaVocabData', JSON.stringify(userJaVocabData));
  }

  // --- Sentence Shadowing Lab Tiếng Nhật ---
  function stopJaUserAudioPlayback() {
    if (userJaAudioPlayer) {
      userJaAudioPlayer.pause();
      userJaAudioPlayer.currentTime = 0;
    }
    currentPlayingJaRecIdx = null;
    updateJaRecordingsUI();
  }

  function playJaUserRecording(targetIdx) {
    const rec = tempJaSentenceRecordings.get(targetIdx);
    if (!rec || !rec.url) return;

    if (currentPlayingJaRecIdx === targetIdx && !userJaAudioPlayer.paused) {
      stopJaUserAudioPlayback();
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    stopJaUserAudioPlayback();
    userJaAudioPlayer.src = rec.url;
    currentPlayingJaRecIdx = targetIdx;
    userJaAudioPlayer.play().catch(e => console.error('Lỗi phát âm thanh tiếng Nhật:', e));
    updateJaRecordingsUI();
    renderJaSpkSentencesList();

    userJaAudioPlayer.onended = () => {
      stopJaUserAudioPlayback();
      renderJaSpkSentencesList();
    };
    userJaAudioPlayer.onpause = () => {
      if (currentPlayingJaRecIdx === targetIdx) {
        currentPlayingJaRecIdx = null;
        updateJaRecordingsUI();
        renderJaSpkSentencesList();
      }
    };
  }

  function pruneJaTempRecordings() {
    if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
    const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
    if (!unit || !unit.sentences) return;
    const total = unit.sentences.length;
    const prevIdx = (currentJaSpeakingIdx - 1 + total) % total;
    const currIdx = currentJaSpeakingIdx;
    const nextIdx = (currentJaSpeakingIdx + 1) % total;

    const allowed = new Set([prevIdx, currIdx, nextIdx]);

    for (const [keyIdx, data] of tempJaSentenceRecordings.entries()) {
      if (!allowed.has(keyIdx)) {
        if (currentPlayingJaRecIdx === keyIdx) {
          stopJaUserAudioPlayback();
        }
        if (data.url) {
          URL.revokeObjectURL(data.url);
        }
        tempJaSentenceRecordings.delete(keyIdx);
      }
    }
  }

  function saveJaTempRecording(idx, blob) {
    const old = tempJaSentenceRecordings.get(idx);
    if (old && old.url) {
      URL.revokeObjectURL(old.url);
    }
    const url = URL.createObjectURL(blob);
    const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    tempJaSentenceRecordings.set(idx, { blob, url, time });
    pruneJaTempRecordings();
    updateJaRecordingsUI();
    renderJaSpkSentencesList();
  }

  function clearAllJaTempRecordings() {
    if (isJaLabRecordingActive) {
      isJaLabRecordingActive = false;
      jaLabAudioChunks = [];
      if (jaSpkRecordBtn) {
        jaSpkRecordBtn.classList.remove('recording');
        jaSpkRecordBtn.textContent = '🎙️ Bấm để nói thử';
      }
      if (jaLabMediaRecorder && jaLabMediaRecorder.state !== 'inactive') {
        jaLabMediaRecorder.onstop = null;
        try { jaLabMediaRecorder.stop(); } catch (e) {}
      }
      if (jaLabMediaStream) {
        jaLabMediaStream.getTracks().forEach(t => t.stop());
        jaLabMediaStream = null;
      }
      if (jaLabRecognition) {
        try { jaLabRecognition.stop(); } catch (e) {}
      }
      if (jaSpkSpokenBox && jaSpkSpokenBox.classList.contains('is-recording')) {
        jaSpkSpokenBox.classList.remove('is-recording');
      }
    }

    stopJaUserAudioPlayback();

    for (const [keyIdx, data] of tempJaSentenceRecordings.entries()) {
      if (data.url) {
        URL.revokeObjectURL(data.url);
      }
    }
    tempJaSentenceRecordings.clear();
    updateJaRecordingsUI();
    if (jaSpkSentencesWrapper) {
      renderJaSpkSentencesList();
    }
  }

  function updateJaRecordingsUI() {
    if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
    const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
    if (!unit || !unit.sentences) return;
    const total = unit.sentences.length;
    const prevIdx = (currentJaSpeakingIdx - 1 + total) % total;
    const currIdx = currentJaSpeakingIdx;
    const nextIdx = (currentJaSpeakingIdx + 1) % total;

    if (jaRecLabelPrev) jaRecLabelPrev.textContent = `Câu ${prevIdx + 1}`;
    if (jaRecLabelCurr) jaRecLabelCurr.textContent = `Câu ${currIdx + 1}`;
    if (jaRecLabelNext) jaRecLabelNext.textContent = `Câu ${nextIdx + 1}`;

    const currRec = tempJaSentenceRecordings.get(currIdx);
    if (currRec) {
      if (jaSpkPlayRecordBtn) {
        jaSpkPlayRecordBtn.style.display = 'inline-flex';
        if (currentPlayingJaRecIdx === currIdx) {
          jaSpkPlayRecordBtn.classList.add('is-playing');
          jaSpkPlayRecordBtn.innerHTML = '⏸️ Đang phát giọng bạn...';
        } else {
          jaSpkPlayRecordBtn.classList.remove('is-playing');
          jaSpkPlayRecordBtn.innerHTML = '▶️ Nghe lại giọng bạn';
        }
      }
      if (jaBtnPlayRecCurr) {
        jaBtnPlayRecCurr.disabled = false;
        if (currentPlayingJaRecIdx === currIdx) {
          jaBtnPlayRecCurr.className = 'rec-play-btn has-recording is-playing';
          jaBtnPlayRecCurr.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
        } else {
          jaBtnPlayRecCurr.className = 'rec-play-btn has-recording';
          jaBtnPlayRecCurr.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${currRec.time})</span>`;
        }
      }
    } else {
      if (jaSpkPlayRecordBtn) {
        jaSpkPlayRecordBtn.style.display = 'none';
        jaSpkPlayRecordBtn.classList.remove('is-playing');
      }
      if (jaBtnPlayRecCurr) {
        jaBtnPlayRecCurr.disabled = true;
        jaBtnPlayRecCurr.className = 'rec-play-btn';
        jaBtnPlayRecCurr.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa ghi âm</span>';
      }
    }

    const prevRec = tempJaSentenceRecordings.get(prevIdx);
    if (prevRec && jaBtnPlayRecPrev) {
      jaBtnPlayRecPrev.disabled = false;
      if (currentPlayingJaRecIdx === prevIdx) {
        jaBtnPlayRecPrev.className = 'rec-play-btn has-recording is-playing';
        jaBtnPlayRecPrev.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
      } else {
        jaBtnPlayRecPrev.className = 'rec-play-btn has-recording';
        jaBtnPlayRecPrev.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${prevRec.time})</span>`;
      }
    } else if (jaBtnPlayRecPrev) {
      jaBtnPlayRecPrev.disabled = true;
      jaBtnPlayRecPrev.className = 'rec-play-btn';
      jaBtnPlayRecPrev.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa có</span>';
    }

    const nextRec = tempJaSentenceRecordings.get(nextIdx);
    if (nextRec && jaBtnPlayRecNext) {
      jaBtnPlayRecNext.disabled = false;
      if (currentPlayingJaRecIdx === nextIdx) {
        jaBtnPlayRecNext.className = 'rec-play-btn has-recording is-playing';
        jaBtnPlayRecNext.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-label">Đang phát</span>';
      } else {
        jaBtnPlayRecNext.className = 'rec-play-btn has-recording';
        jaBtnPlayRecNext.innerHTML = `<span class="btn-icon">▶️</span><span class="btn-label">Nghe lại (${nextRec.time})</span>`;
      }
    } else if (jaBtnPlayRecNext) {
      jaBtnPlayRecNext.disabled = true;
      jaBtnPlayRecNext.className = 'rec-play-btn';
      jaBtnPlayRecNext.innerHTML = '<span class="btn-icon">🔇</span><span class="btn-label">Chưa có</span>';
    }
  }

  function renderJaSpkUnitSelect() {
    if (!jaSpkUnitSelect || typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
    jaSpkUnitSelect.innerHTML = '';
    const keys = Object.keys(JA_SENTENCE_UNITS_DATA);
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có bài học - Chờ nạp bài)';
      jaSpkUnitSelect.appendChild(opt);
      return;
    }
    keys.forEach(k => {
      const unit = JA_SENTENCE_UNITS_DATA[k];
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = `${unit.icon || '🌸'} ${unit.title || k}`;
      jaSpkUnitSelect.appendChild(opt);
    });
    jaSpkUnitSelect.value = currentJaSpkUnitKey;
  }

  function loadJaSpkUnit(unitKey) {
    if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
    currentJaSpkUnitKey = unitKey;
    currentJaSpeakingIdx = 0;
    const unit = JA_SENTENCE_UNITS_DATA[unitKey];
    if (!unit || !unit.sentences || unit.sentences.length === 0) {
      if (jaSpkCategory) jaSpkCategory.textContent = 'CHƯA CÓ BÀI HỌC';
      if (jaSpkPhraseJa) jaSpkPhraseJa.textContent = '(Chưa có câu tiếng Nhật)';
      if (jaSpkPhraseRomaji) jaSpkPhraseRomaji.textContent = '';
      if (jaSpkPhraseVi) jaSpkPhraseVi.textContent = 'Hãy nạp dữ liệu bài học để bắt đầu luyện tập.';
      if (jaSpkFeedback) jaSpkFeedback.innerHTML = '<div class="feedback-status">Đang chờ bạn nạp dữ liệu bài học mới...</div>';
      if (jaSpkSentencesWrapper) jaSpkSentencesWrapper.innerHTML = '<div style="color:var(--text-muted);padding:12px;text-align:center;">Chưa có bài học nào trong danh sách.</div>';
      return;
    }

    renderJaSpkSentencesList();
    loadJaSpeakingChallenge(0);
  }

  function renderJaSpkSentencesList() {
    if (!jaSpkSentencesWrapper || typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
    jaSpkSentencesWrapper.innerHTML = '';
    const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
    if (!unit || !unit.sentences) return;

    unit.sentences.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = `spk-sentence-item ${idx === currentJaSpeakingIdx ? 'active' : ''}`;

      const hasRec = tempJaSentenceRecordings.has(idx);
      const isPlayingThis = (currentPlayingJaRecIdx === idx);
      const userBtnHtml = hasRec ? `
        <button class="spk-item-user-audio-btn ${isPlayingThis ? 'is-playing' : ''}" title="Bấm để nghe lại giọng bạn đã đọc">
          ${isPlayingThis ? '⏸️ Đang phát' : '🎙️ Giọng bạn'}
        </button>
      ` : '';

      itemEl.innerHTML = `
        <div class="spk-item-left">
          <span class="spk-item-num">Câu ${idx + 1}</span>
          <div class="spk-item-text">
            <div class="spk-item-en" style="font-size: 1.05rem;">${item.ja}</div>
            <div class="spk-item-vi" style="font-size: 0.8rem; color: var(--accent-cyan);">${item.romaji} - ${item.vi}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          ${userBtnHtml}
          <button class="spk-item-audio-btn" title="Nghe câu này">🔊 Nghe</button>
        </div>
      `;

      itemEl.addEventListener('click', (e) => {
        if (e.target.closest('.spk-item-audio-btn') || e.target.closest('.spk-item-user-audio-btn')) return;
        loadJaSpeakingChallenge(idx);
      });

      const audioBtn = itemEl.querySelector('.spk-item-audio-btn');
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        AppCore.speakJa(item.ja);
      });

      const userBtn = itemEl.querySelector('.spk-item-user-audio-btn');
      if (userBtn) {
        userBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          playJaUserRecording(idx);
        });
      }

      jaSpkSentencesWrapper.appendChild(itemEl);
    });
  }

  function loadJaSpeakingChallenge(idx) {
    if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
    const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
    if (!unit || !unit.sentences || unit.sentences.length === 0) return;
    if (idx >= unit.sentences.length) idx = 0;

    currentJaSpeakingIdx = idx;
    const item = unit.sentences[idx];

    if (jaSpkCategory) jaSpkCategory.textContent = `${item.category} (CÂU ${idx + 1} / ${unit.sentences.length})`;
    if (jaSpkPhraseJa) jaSpkPhraseJa.textContent = item.ja;
    if (jaSpkPhraseRomaji) jaSpkPhraseRomaji.textContent = `Romaji: ${item.romaji} • Đọc tựa như: "${item.readVi}"`;
    if (jaSpkPhraseVi) jaSpkPhraseVi.textContent = `👉 Ý nghĩa: ${item.vi} (💡 ${item.tip})`;
    if (jaSpkFeedback) jaSpkFeedback.innerHTML = '<div class="feedback-status">Hãy bấm "🔊 Nghe giọng mẫu Tokyo", sau đó bấm "🎙️ Bấm để nói thử" để ghi âm và nhận phản hồi tức thì.</div>';

    resetJaSpkSpokenBox();
    pruneJaTempRecordings();
    updateJaRecordingsUI();

    const items = jaSpkSentencesWrapper ? jaSpkSentencesWrapper.querySelectorAll('.spk-sentence-item') : [];
    items.forEach((el, i) => {
      if (i === idx) {
        el.classList.add('active');
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        el.classList.remove('active');
      }
    });
  }

  function resetJaSpkSpokenBox() {
    if (jaSpkSpokenBox) jaSpkSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    if (jaSpkSpokenBadge) jaSpkSpokenBadge.textContent = 'Đang chờ bạn nói...';
    if (jaSpkSpokenText) jaSpkSpokenText.textContent = '"..."';
    if (jaSpkTypingCursor) jaSpkTypingCursor.style.display = 'none';
  }

  // DỪNG CÁC TIẾN TRÌNH TIẾNG NHẬT
  function stopJaLabRecognition() {
    if (!isJaLabRecordingActive) return;
    isJaLabRecordingActive = false;

    if (jaSpkRecordBtn) {
      jaSpkRecordBtn.classList.remove('recording');
      jaSpkRecordBtn.innerHTML = '🎯 Bấm để nói & Chấm điểm';
    }
    if (jaSpkTypingCursor) jaSpkTypingCursor.style.display = 'none';

    if (jaLabRecognition) {
      try { jaLabRecognition.stop(); } catch (e) {}
    }
  }

  function stopJaUserAudioRecording() {
    if (!isJaUserRecordingActive) return;
    isJaUserRecordingActive = false;

    if (jaSpkUserRecBtn) {
      jaSpkUserRecBtn.classList.remove('recording');
      jaSpkUserRecBtn.innerHTML = '🎙️ Thu âm nghe lại';
    }

    if (jaLabMediaRecorder && jaLabMediaRecorder.state !== 'inactive') {
      try { jaLabMediaRecorder.stop(); } catch (e) {}
    }
    if (jaLabMediaStream) {
      jaLabMediaStream.getTracks().forEach(track => track.stop());
      jaLabMediaStream = null;
    }
  }

  // 1. NHẬN DIỆN & CHẤM ĐIỂM TIẾNG NHẬT (Thuần SpeechRecognition, không bị iOS khóa mic)
  function startJaLabRecognition() {
    stopJaUserAudioPlayback();
    stopJaUserAudioRecording();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    isJaLabRecordingActive = true;
    lastJaTranscript = '';
    hasEvaluatedJaCurrentTurn = false;

    if (jaSpkRecordBtn) {
      jaSpkRecordBtn.classList.add('recording');
      jaSpkRecordBtn.innerHTML = '⏹️ Đang nghe... Bấm để dừng';
    }
    if (jaSpkSpokenBox) {
      jaSpkSpokenBox.classList.remove('match-success', 'match-retry');
      jaSpkSpokenBox.classList.add('is-recording');
    }
    if (jaSpkSpokenBadge) jaSpkSpokenBadge.textContent = '🔴 Đang lắng nghe... Hãy đọc to câu tiếng Nhật!';
    if (jaSpkSpokenText) jaSpkSpokenText.textContent = '...';
    if (jaSpkTypingCursor) jaSpkTypingCursor.style.display = 'inline-block';
    if (jaSpkFeedback) {
      jaSpkFeedback.innerHTML = '<div class="feedback-status">Đang lắng nghe giọng bạn qua micro... Nói rõ ràng từng âm tiết nhé!</div>';
    }

    if (jaLabRecognition) {
      try {
        jaLabRecognition.start();
      } catch (e) {
        console.warn('jaLabRecognition start error:', e);
      }
    }
  }

  // 2. GHI ÂM NGHE LẠI GIỌNG TIẾNG NHẬT (Dành riêng cho MediaRecorder)
  function startJaUserAudioRecording() {
    stopJaUserAudioPlayback();
    stopJaLabRecognition();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    isJaUserRecordingActive = true;
    jaLabAudioChunks = [];

    if (jaSpkUserRecBtn) {
      jaSpkUserRecBtn.classList.add('recording');
      jaSpkUserRecBtn.innerHTML = '⏹️ Đang thu âm... Bấm để dừng';
    }
    if (jaSpkFeedback) {
      jaSpkFeedback.innerHTML = '<div class="feedback-status">🎙️ Đang ghi âm giọng đọc của bạn để lưu lại... Bấm dừng khi đọc xong nhé!</div>';
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        if (!isJaUserRecordingActive) {
          stream.getTracks().forEach(t => t.stop());
          return;
        }
        jaLabMediaStream = stream;
        jaLabMediaRecorder = new MediaRecorder(stream);
        jaLabAudioChunks = [];

        jaLabMediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            jaLabAudioChunks.push(e.data);
          }
        };

        jaLabMediaRecorder.onstop = () => {
          if (jaLabAudioChunks.length > 0) {
            const mime = jaLabMediaRecorder.mimeType || 'audio/webm';
            const audioBlob = new Blob(jaLabAudioChunks, { type: mime });
            saveJaTempRecording(currentJaSpeakingIdx, audioBlob);
            if (jaSpkFeedback) {
              jaSpkFeedback.innerHTML = '<div class="feedback-success">✨ Đã lưu bản ghi âm! Bạn có thể bấm <strong>"▶️ Nghe lại giọng bạn"</strong> để tự đối chiếu.</div>';
            }
          }
        };

        jaLabMediaRecorder.start();
      }).catch(err => {
        console.warn('Lỗi mở micro ghi âm tiếng Nhật:', err);
        stopJaUserAudioRecording();
        if (jaSpkFeedback) {
          jaSpkFeedback.innerHTML = '<div class="feedback-error">⚠️ Không thể truy cập micro. Vui lòng cấp quyền trong cài đặt trình duyệt.</div>';
        }
      });
    }
  }

  // ĐÁNH GIÁ CÂU TIẾNG NHẬT
  function evaluateJaSpokenSentence(transcript) {
    if (hasEvaluatedJaCurrentTurn) return;
    hasEvaluatedJaCurrentTurn = true;
    stopJaLabRecognition();

    const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
    if (!unit || !unit.sentences || !unit.sentences[currentJaSpeakingIdx]) return;
    const item = unit.sentences[currentJaSpeakingIdx];

    if (jaSpkSpokenText) jaSpkSpokenText.textContent = `"${transcript}"`;
    if (jaSpkSpokenBox) jaSpkSpokenBox.classList.remove('is-recording');

    const cleanTarget = item.ja.replace(/[\s\.\,\?\!、。]/g, '');
    const cleanSpoken = transcript.replace(/[\s\.\,\?\!、。]/g, '');
    const isMatch = cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken) ||
                    (cleanTarget.length > 4 && cleanSpoken.length > 4 && cleanTarget.slice(0, 4) === cleanSpoken.slice(0, 4));

    if (isMatch) {
      if (jaSpkSpokenBox) jaSpkSpokenBox.classList.add('match-success');
      if (jaSpkSpokenBadge) jaSpkSpokenBadge.textContent = '✅ Đã nhận diện & Phát âm rất chuẩn!';
      if (jaSpkFeedback) {
        jaSpkFeedback.innerHTML = `
          <div class="feedback-success">
            🎉 Tuyệt vời! Bạn phát âm câu trong "<strong>${unit.title}</strong>" rất chuẩn xác!<br>
            <small style="opacity:0.9;">AI nhận diện được: "<em>${transcript}</em>"</small>
          </div>
        `;
      }
      AppCore.incrementWordCount();
      AppCore.state.spokenSentences.push({
        en: `[Tiếng Nhật] ${item.ja}`,
        time: new Date().toLocaleTimeString('vi-VN')
      });
      if (AppCore.state.spokenSentences.length > 30) AppCore.state.spokenSentences.shift();
      AppCore.syncProgress();
    } else {
      if (jaSpkSpokenBox) jaSpkSpokenBox.classList.add('match-retry');
      if (jaSpkSpokenBadge) jaSpkSpokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
      if (jaSpkFeedback) {
        jaSpkFeedback.innerHTML = `
          <div class="feedback-retry">
            💡 AI nhận diện bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
            Câu mẫu: "<strong>${item.ja}</strong>" <em>(${item.romaji})</em>.<br>
            <small>👉 Hãy đọc to, rõ từng âm tiết và bấm nút để thử lại nhé!</small>
          </div>
        `;
      }
    }
  }

  // --- Vocab Lab Tiếng Nhật ---
  function renderJaVocabScenarioSelect() {
    if (!jaVocabScenarioSelect) return;
    jaVocabScenarioSelect.innerHTML = '';
    const srcData = userJaVocabData || (typeof JA_VOCAB_SCENARIOS_DATA !== 'undefined' ? JA_VOCAB_SCENARIOS_DATA : {});
    const keys = Object.keys(srcData);
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có từ vựng - Chờ nạp bài)';
      jaVocabScenarioSelect.appendChild(opt);
      return;
    }
    keys.forEach(k => {
      const item = srcData[k];
      if (item) {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = `${item.icon || '🌸'} ${item.title || k}`;
        jaVocabScenarioSelect.appendChild(opt);
      }
    });
    jaVocabScenarioSelect.value = currentJaVocabScenario;
  }

  function loadJaVocabScenario(scenarioKey) {
    currentJaVocabScenario = scenarioKey;
    currentJaVocabIdx = 0;
    const scenarioData = userJaVocabData ? userJaVocabData[scenarioKey] : null;
    if (!jaVocabChipsWrapper) return;

    jaVocabChipsWrapper.innerHTML = '';

    if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) {
      jaVocabChipsWrapper.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:6px 0;">Danh sách trống. Hãy bấm "➕ Thêm từ" để tự thêm từ vựng mới!</span>';
      if (jaVocabCategory) jaVocabCategory.textContent = scenarioData ? `${scenarioData.title.toUpperCase()} (TRỐNG)` : 'CHƯA CÓ CHỦ ĐỀ TỪ VỰNG';
      if (jaVocabWordJa) jaVocabWordJa.textContent = "Chưa có từ nào";
      if (jaVocabWordRomaji) jaVocabWordRomaji.textContent = "";
      if (jaVocabWordVi) jaVocabWordVi.textContent = "Bấm nút '➕ Thêm từ' ở trên để tự thêm từ vựng mới.";
      if (jaVocabWordTip) jaVocabWordTip.textContent = "";
      if (jaVocabFeedback) jaVocabFeedback.innerHTML = '<div class="feedback-status">Hãy thêm từ vựng để bắt đầu luyện nói!</div>';
      return;
    }

    scenarioData.words.forEach((item, idx) => {
      const chip = document.createElement('button');
      chip.className = `vocab-chip ${idx === 0 ? 'active' : ''}`;
      chip.innerHTML = `<span>${item.word}</span> <span style="font-size:0.75rem;opacity:0.7;">(${item.vi || ''})</span>`;
      chip.addEventListener('click', () => {
        loadJaVocabWord(idx);
      });
      jaVocabChipsWrapper.appendChild(chip);
    });

    loadJaVocabWord(0);
  }

  function loadJaVocabWord(idx) {
    const scenarioData = userJaVocabData ? userJaVocabData[currentJaVocabScenario] : null;
    if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;

    if (idx >= scenarioData.words.length) idx = 0;
    currentJaVocabIdx = idx;
    const item = scenarioData.words[idx];

    if (jaVocabChipsWrapper) {
      const chips = jaVocabChipsWrapper.querySelectorAll('.vocab-chip');
      chips.forEach((c, i) => {
        if (i === idx) {
          c.classList.add('active');
          c.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          c.classList.remove('active');
        }
      });
    }

    if (jaVocabCategory) jaVocabCategory.textContent = `${scenarioData.title.toUpperCase()} (TỪ ${idx + 1} / ${scenarioData.words.length})`;
    if (jaVocabWordJa) jaVocabWordJa.textContent = item.word;
    if (jaVocabWordRomaji) jaVocabWordRomaji.textContent = item.romaji ? `Romaji: ${item.romaji} ${item.readVi ? `(${item.readVi})` : ''}` : '';
    if (jaVocabWordVi) jaVocabWordVi.textContent = item.vi ? `Ý nghĩa: ${item.vi}` : '';
    if (jaVocabWordTip) jaVocabWordTip.textContent = item.tip ? `💡 Mẹo phát âm: ${item.tip}` : '';
    if (jaVocabFeedback) jaVocabFeedback.innerHTML = `<div class="feedback-status">Bấm <strong>"Nghe phát âm từ mẫu"</strong>, sau đó bấm <strong>"Bấm để nói từ này"</strong> nhé!</div>`;

    resetJaVocabSpokenBox();
  }

  function resetJaVocabSpokenBox() {
    if (jaVocabSpokenBox) jaVocabSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = 'Đang chờ bạn nói...';
    if (jaVocabSpokenText) jaVocabSpokenText.textContent = '"..."';
    if (jaVocabTypingCursor) jaVocabTypingCursor.style.display = 'none';
  }

  function openAddJaVocabModal() {
    if (!addJaVocabModal) return;
    if (newJaVocabWord) newJaVocabWord.value = '';
    if (newJaVocabVi) newJaVocabVi.value = '';
    if (newJaVocabRomaji) newJaVocabRomaji.value = '';
    if (newJaVocabTip) newJaVocabTip.value = '';
    addJaVocabModal.classList.remove('hidden');
    if (newJaVocabWord) newJaVocabWord.focus();
  }

  function closeAddJaVocabModal() {
    if (addJaVocabModal) addJaVocabModal.classList.add('hidden');
  }

  function init() {
    initDOM();
    loadUserJaVocabData();

    // Chuyển đổi giữa 2 chế độ Tiếng Nhật: Cả câu vs Từ vựng
    if (btnJaModeVocab && btnJaModeSentence) {
      btnJaModeVocab.addEventListener('click', () => {
        clearAllJaTempRecordings();
        btnJaModeVocab.classList.add('active');
        btnJaModeSentence.classList.remove('active');
        if (jaVocabSpeakingSection) jaVocabSpeakingSection.style.display = 'flex';
        if (jaSentenceSpeakingSection) jaSentenceSpeakingSection.style.display = 'none';
      });

      btnJaModeSentence.addEventListener('click', () => {
        btnJaModeSentence.classList.add('active');
        btnJaModeVocab.classList.remove('active');
        if (jaSentenceSpeakingSection) jaSentenceSpeakingSection.style.display = 'flex';
        if (jaVocabSpeakingSection) jaVocabSpeakingSection.style.display = 'none';
      });
    }

    if (jaVocabScenarioSelect) {
      jaVocabScenarioSelect.addEventListener('change', (e) => {
        loadJaVocabScenario(e.target.value);
      });
    }

    if (jaVocabListenBtn) {
      jaVocabListenBtn.addEventListener('click', () => {
        const scenarioData = userJaVocabData ? userJaVocabData[currentJaVocabScenario] : null;
        if (scenarioData && scenarioData.words && scenarioData.words[currentJaVocabIdx]) {
          AppCore.speakJa(scenarioData.words[currentJaVocabIdx].word);
        }
      });
    }

    if (jaVocabPrevBtn) {
      jaVocabPrevBtn.addEventListener('click', () => {
        const scenarioData = userJaVocabData ? userJaVocabData[currentJaVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
        currentJaVocabIdx = (currentJaVocabIdx - 1 + scenarioData.words.length) % scenarioData.words.length;
        loadJaVocabWord(currentJaVocabIdx);
      });
    }

    if (jaVocabNextBtn) {
      jaVocabNextBtn.addEventListener('click', () => {
        const scenarioData = userJaVocabData ? userJaVocabData[currentJaVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
        currentJaVocabIdx = (currentJaVocabIdx + 1) % scenarioData.words.length;
        loadJaVocabWord(currentJaVocabIdx);
      });
    }

    if (jaVocabRemoveBtn) {
      jaVocabRemoveBtn.addEventListener('click', () => {
        const scenarioData = userJaVocabData ? userJaVocabData[currentJaVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
        const removedWord = scenarioData.words[currentJaVocabIdx].word;
        scenarioData.words.splice(currentJaVocabIdx, 1);
        saveUserJaVocabData();
        AppCore.syncProgress();
        if (currentJaVocabIdx >= scenarioData.words.length) {
          currentJaVocabIdx = Math.max(0, scenarioData.words.length - 1);
        }
        loadJaVocabScenario(currentJaVocabScenario);
        if (scenarioData.words.length > 0) {
          loadJaVocabWord(currentJaVocabIdx);
        }
        if (jaVocabFeedback) {
          jaVocabFeedback.innerHTML = `<div class="feedback-status" style="color:var(--accent-rose);">🗑️ Đã loại bỏ từ "<strong>${removedWord}</strong>" khỏi danh sách luyện tập!</div>`;
        }
      });
    }

    if (btnJaResetVocab) {
      btnJaResetVocab.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn khôi phục lại danh sách từ vựng tiếng Nhật gốc cho chủ đề này không?')) {
          if (typeof JA_VOCAB_SCENARIOS_DATA !== 'undefined' && JA_VOCAB_SCENARIOS_DATA[currentJaVocabScenario]) {
            userJaVocabData[currentJaVocabScenario] = JSON.parse(JSON.stringify(JA_VOCAB_SCENARIOS_DATA[currentJaVocabScenario]));
            saveUserJaVocabData();
            AppCore.syncProgress();
            loadJaVocabScenario(currentJaVocabScenario);
          }
        }
      });
    }

    // Modal Events
    if (btnJaAddVocab) btnJaAddVocab.addEventListener('click', openAddJaVocabModal);
    if (modalJaCloseBtn) modalJaCloseBtn.addEventListener('click', closeAddJaVocabModal);
    if (modalJaCancelBtn) modalJaCancelBtn.addEventListener('click', closeAddJaVocabModal);

    if (modalJaSaveBtn) {
      modalJaSaveBtn.addEventListener('click', () => {
        const word = newJaVocabWord ? newJaVocabWord.value.trim() : '';
        const vi = newJaVocabVi ? newJaVocabVi.value.trim() : '';
        if (!word) {
          alert('Vui lòng nhập từ tiếng Nhật (Kanji/Kana) bạn muốn học!');
          return;
        }
        const romaji = newJaVocabRomaji ? newJaVocabRomaji.value.trim() : '';
        const tip = (newJaVocabTip ? newJaVocabTip.value.trim() : '') || 'Từ vựng tiếng Nhật do bạn thêm vào';

        if (!userJaVocabData[currentJaVocabScenario]) {
          userJaVocabData[currentJaVocabScenario] = { title: "Từ vựng của tôi", icon: "🌸", words: [] };
        }
        userJaVocabData[currentJaVocabScenario].words.push({ word, vi: vi || word, romaji, readVi: "", tip });
        saveUserJaVocabData();
        AppCore.syncProgress();
        closeAddJaVocabModal();
        loadJaVocabScenario(currentJaVocabScenario);
        loadJaVocabWord(userJaVocabData[currentJaVocabScenario].words.length - 1);

        if (jaVocabFeedback) {
          jaVocabFeedback.innerHTML = `<div class="feedback-status" style="color:var(--accent-green);">✨ Đã thêm từ "<strong>${word}</strong>" thành công! Bấm micro để luyện nói ngay nhé!</div>`;
        }
      });
    }

    // Recognition for Ja Vocab
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      jaVocabRecognition = new SpeechRecognition();
      jaVocabRecognition.lang = 'ja-JP';
      jaVocabRecognition.continuous = false;
      jaVocabRecognition.interimResults = true;

      if (jaVocabRecordBtn) {
        jaVocabRecordBtn.addEventListener('click', () => {
          if (jaVocabRecordBtn.classList.contains('recording')) {
            jaVocabRecognition.stop();
            return;
          }
          try {
            if (jaVocabSpokenBox) {
              jaVocabSpokenBox.classList.remove('match-success', 'match-retry');
              jaVocabSpokenBox.classList.add('is-recording');
            }
            if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = '🔴 Đang lắng nghe tiếng Nhật...';
            if (jaVocabSpokenText) jaVocabSpokenText.textContent = '...';
            if (jaVocabTypingCursor) jaVocabTypingCursor.style.display = 'inline-block';
            if (jaVocabFeedback) jaVocabFeedback.innerHTML = '<div class="feedback-status">Đang lắng nghe bạn phát âm tiếng Nhật... Đọc to rõ nhé!</div>';

            jaVocabRecognition.start();
            jaVocabRecordBtn.classList.add('recording');
            jaVocabRecordBtn.innerHTML = '⏹️ Đang nghe... (Bấm để dừng)';
          } catch (e) {
            console.error(e);
          }
        });
      }

      jaVocabRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        const scenarioData = userJaVocabData ? userJaVocabData[currentJaVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || !scenarioData.words[currentJaVocabIdx]) return;
        const item = scenarioData.words[currentJaVocabIdx];

        AppCore.animateTypewriter(jaVocabSpokenText, jaVocabTypingCursor, `"${transcript}"`, () => {
          if (jaVocabSpokenBox) jaVocabSpokenBox.classList.remove('is-recording');

          const cleanTarget = item.word.replace(/[\s\.\,\?\!]/g, '');
          const cleanSpoken = transcript.replace(/[\s\.\,\?\!]/g, '');
          const isMatch = cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken);

          if (isMatch) {
            if (jaVocabSpokenBox) jaVocabSpokenBox.classList.add('match-success');
            if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = '✅ Phát âm rất chuẩn!';
            if (jaVocabFeedback) {
              jaVocabFeedback.innerHTML = `
                <div class="feedback-success">
                  🎉 Tuyệt vời! Bạn phát âm từ tiếng Nhật "<strong>${item.word}</strong>" rất chuẩn xác!<br>
                  <small style="opacity:0.9;">Hệ thống nhận diện được: "<em>${transcript}</em>"</small>
                </div>
              `;
            }
            AppCore.incrementWordCount();
            AppCore.state.spokenSentences.push({
              en: `[Từ vựng Tiếng Nhật] ${item.word}`,
              time: new Date().toLocaleTimeString('vi-VN')
            });
            if (AppCore.state.spokenSentences.length > 30) AppCore.state.spokenSentences.shift();
            AppCore.syncProgress();
          } else {
            if (jaVocabSpokenBox) jaVocabSpokenBox.classList.add('match-retry');
            if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
            if (jaVocabFeedback) {
              jaVocabFeedback.innerHTML = `
                <div class="feedback-retry">
                  💡 Bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
                  Từ mẫu tiếng Nhật: "<strong>${item.word}</strong>" ${item.readVi ? `(${item.readVi})` : ''}.<br>
                  <small>👉 Bấm "Nghe phát âm từ mẫu" để nghe lại khẩu hình, rồi bấm micro thử lại nhé!</small>
                </div>
              `;
            }
          }
        });
      };

      jaVocabRecognition.onend = () => {
        if (jaVocabRecordBtn) {
          jaVocabRecordBtn.classList.remove('recording');
          jaVocabRecordBtn.innerHTML = '🎙️ Bấm để nói từ này';
        }
        if (jaVocabSpokenBox && jaVocabSpokenBox.classList.contains('is-recording')) {
          jaVocabSpokenBox.classList.remove('is-recording');
          if (jaVocabSpokenBadge && jaVocabSpokenBadge.textContent.includes('Đang lắng nghe')) {
            jaVocabSpokenBadge.textContent = 'Đã kết thúc thu âm';
          }
        }
      };
    }

    // Shadowing Lab listeners
    if (jaSpkPlayRecordBtn) {
      jaSpkPlayRecordBtn.addEventListener('click', () => {
        playJaUserRecording(currentJaSpeakingIdx);
      });
    }
    if (jaBtnPlayRecCurr) {
      jaBtnPlayRecCurr.addEventListener('click', () => {
        playJaUserRecording(currentJaSpeakingIdx);
      });
    }
    if (jaBtnPlayRecPrev) {
      jaBtnPlayRecPrev.addEventListener('click', () => {
        if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
        if (!unit || !unit.sentences) return;
        const total = unit.sentences.length;
        playJaUserRecording((currentJaSpeakingIdx - 1 + total) % total);
      });
    }
    if (jaBtnPlayRecNext) {
      jaBtnPlayRecNext.addEventListener('click', () => {
        if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
        if (!unit || !unit.sentences) return;
        const total = unit.sentences.length;
        playJaUserRecording((currentJaSpeakingIdx + 1) % total);
      });
    }

    if (jaSpkUnitSelect) {
      jaSpkUnitSelect.addEventListener('change', (e) => {
        clearAllJaTempRecordings();
        loadJaSpkUnit(e.target.value);
      });
    }

    if (jaSpkListenBtn) {
      jaSpkListenBtn.addEventListener('click', () => {
        if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
        if (unit && unit.sentences && unit.sentences[currentJaSpeakingIdx]) {
          AppCore.speakJa(unit.sentences[currentJaSpeakingIdx].ja);
        }
      });
    }

    if (jaSpkPrevBtn) {
      jaSpkPrevBtn.addEventListener('click', () => {
        if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
        if (!unit || !unit.sentences) return;
        stopJaLabRecognition();
        stopJaUserAudioRecording();
        currentJaSpeakingIdx = (currentJaSpeakingIdx - 1 + unit.sentences.length) % unit.sentences.length;
        loadJaSpeakingChallenge(currentJaSpeakingIdx);
      });
    }

    if (jaSpkNextBtn) {
      jaSpkNextBtn.addEventListener('click', () => {
        if (typeof JA_SENTENCE_UNITS_DATA === 'undefined') return;
        const unit = JA_SENTENCE_UNITS_DATA[currentJaSpkUnitKey];
        if (!unit || !unit.sentences) return;
        stopJaLabRecognition();
        stopJaUserAudioRecording();
        currentJaSpeakingIdx = (currentJaSpeakingIdx + 1) % unit.sentences.length;
        loadJaSpeakingChallenge(currentJaSpeakingIdx);
      });
    }

    // Nút Thu âm nghe lại tiếng Nhật
    if (jaSpkUserRecBtn) {
      jaSpkUserRecBtn.addEventListener('click', () => {
        if (isJaUserRecordingActive) {
          stopJaUserAudioRecording();
        } else {
          startJaUserAudioRecording();
        }
      });
    }

    // Nhận diện giọng nói tiếng Nhật AI
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      jaLabRecognition = new SpeechRecognition();
      jaLabRecognition.lang = 'ja-JP';
      jaLabRecognition.continuous = false;
      jaLabRecognition.interimResults = true; // Real-time trên iPhone

      if (jaSpkRecordBtn) {
        jaSpkRecordBtn.addEventListener('click', () => {
          if (isJaLabRecordingActive) {
            stopJaLabRecognition();
            if (lastJaTranscript && !hasEvaluatedJaCurrentTurn) {
              evaluateJaSpokenSentence(lastJaTranscript);
            }
          } else {
            startJaLabRecognition();
          }
        });
      }

      jaLabRecognition.onresult = (event) => {
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
          lastJaTranscript = currentText;
          if (jaSpkSpokenText) jaSpkSpokenText.textContent = `"${currentText}"`;
          if (jaSpkSpokenBadge) jaSpkSpokenBadge.textContent = '🎙️ Đang nhận diện tiếng Nhật...';
        }

        if (finalTranscript) {
          evaluateJaSpokenSentence(finalTranscript.trim());
        }
      };

      jaLabRecognition.onend = () => {
        if (isJaLabRecordingActive) {
          stopJaLabRecognition();
          if (lastJaTranscript && !hasEvaluatedJaCurrentTurn) {
            evaluateJaSpokenSentence(lastJaTranscript);
          } else if (!hasEvaluatedJaCurrentTurn) {
            if (jaSpkSpokenBadge) jaSpkSpokenBadge.textContent = 'Đã kết thúc lượt nghe';
            if (jaSpkSpokenBox) jaSpkSpokenBox.classList.remove('is-recording');
          }
        }
      };

      jaLabRecognition.onerror = (e) => {
        console.warn('Japanese recognition error:', e.error);
        stopJaLabRecognition();
        if (jaSpkSpokenBox) jaSpkSpokenBox.classList.remove('is-recording');

        if (e.error === 'no-speech') {
          if (jaSpkFeedback) {
            jaSpkFeedback.innerHTML = '<div class="feedback-error">⚠️ Không nhận được tiếng nói. Bạn hãy đọc to hơn hoặc để gần micro hơn nhé!</div>';
          }
        } else if (e.error === 'not-allowed') {
          if (jaSpkFeedback) {
            jaSpkFeedback.innerHTML = '<div class="feedback-error">⚠️ Safari chưa được cấp quyền Mic. Hãy vào <strong>Cài đặt iPhone > Safari > Micrô</strong> và chọn <strong>Cho phép</strong>.</div>';
          }
        } else if (e.error === 'service-not-allowed') {
          if (jaSpkFeedback) {
            jaSpkFeedback.innerHTML = '<div class="feedback-error">⚠️ Trên iPhone cần bật: <strong>Cài đặt > Cài đặt chung > Bàn phím > Bật đọc chính tả (Enable Dictation)</strong>.</div>';
          }
        }
      };
    } else if (jaSpkRecordBtn) {
      jaSpkRecordBtn.title = 'Trình duyệt không hỗ trợ nhận diện giọng nói';
      jaSpkRecordBtn.style.opacity = '0.5';
    }
  }

  return {
    renderJaSpkUnitSelect,
    loadJaSpkUnit,
    loadJaSpeakingChallenge,
    renderJaVocabScenarioSelect,
    loadJaVocabScenario,
    loadJaVocabWord,
    stopJaUserAudioPlayback,
    clearAllJaTempRecordings,
    getUserJaVocabData: () => userJaVocabData,
    init
  };
})();

window.JapaneseModule = JapaneseModule;
