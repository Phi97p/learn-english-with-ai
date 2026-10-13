// ========================================================
// JS/VOCAB_JA.JS - Sổ Tay Từ Vựng Tiếng Nhật
// Dữ liệu lấy từ: datasss/jp/vocab/voca.txt (nạp vào japanese_data/vocab_data.js)
// Hỗ trợ chọn bài học (Unit/Bài) linh hoạt
// ========================================================

const VocabJaModule = (() => {
  let currentUnitKey = 'bai_1';
  let currentIdx = 0;

  // DOM Elements
  let jaVocabUnitSelect;
  let jaVocabCount;
  let jaVocabCard, jaVocabPrevBtn, jaVocabNextBtn;
  let jaVocabCategory, jaVocabWordJa, jaVocabWordRomaji, jaVocabWordVi;
  let jaVocabActions, jaVocabListenBtn, jaVocabRecordBtn;
  let jaVocabSpokenBox, jaVocabSpokenBadge, jaVocabSpokenText, jaVocabTypingCursor;
  let jaVocabFeedback, jaVocabListWrapper;

  // Speech Recognition
  let vocabRecognition = null;
  let isRecording = false;

  function getVocabList() {
    if (typeof JA_VOCAB_DATA !== 'undefined' && JA_VOCAB_DATA[currentUnitKey] && Array.isArray(JA_VOCAB_DATA[currentUnitKey].words)) {
      return JA_VOCAB_DATA[currentUnitKey].words;
    }
    if (typeof JA_HARD_VOCAB_DATA !== 'undefined' && Array.isArray(JA_HARD_VOCAB_DATA)) {
      return JA_HARD_VOCAB_DATA;
    }
    return [];
  }

  function getCurrentUnitTitle() {
    if (typeof JA_VOCAB_DATA !== 'undefined' && JA_VOCAB_DATA[currentUnitKey]) {
      return JA_VOCAB_DATA[currentUnitKey].title || currentUnitKey;
    }
    return 'BÀI 1: TỪ VỰNG TIẾNG NHẬT';
  }

  function initDOM() {
    jaVocabUnitSelect = document.getElementById('ja-vocab-unit-select');
    jaVocabCount = document.getElementById('ja-vocab-count');

    jaVocabCard = document.getElementById('ja-vocab-card');
    jaVocabPrevBtn = document.getElementById('ja-vocab-prev-btn');
    jaVocabNextBtn = document.getElementById('ja-vocab-next-btn');

    jaVocabCategory = document.getElementById('ja-vocab-category');
    jaVocabWordJa = document.getElementById('ja-vocab-word-ja');
    jaVocabWordRomaji = document.getElementById('ja-vocab-word-romaji');
    jaVocabWordVi = document.getElementById('ja-vocab-word-vi');

    jaVocabActions = document.getElementById('ja-vocab-actions');
    jaVocabListenBtn = document.getElementById('ja-vocab-listen-btn');
    jaVocabRecordBtn = document.getElementById('ja-vocab-record-btn');

    jaVocabSpokenBox = document.getElementById('ja-vocab-spoken-box');
    jaVocabSpokenBadge = document.getElementById('ja-vocab-spoken-badge');
    jaVocabSpokenText = document.getElementById('ja-vocab-spoken-text');
    jaVocabTypingCursor = document.getElementById('ja-vocab-typing-cursor');

    jaVocabFeedback = document.getElementById('ja-vocab-feedback');
    jaVocabListWrapper = document.getElementById('ja-vocab-list-wrapper');
  }

  function populateUnitSelect() {
    if (!jaVocabUnitSelect || typeof JA_VOCAB_DATA === 'undefined') return;
    jaVocabUnitSelect.innerHTML = '';
    const keys = Object.keys(JA_VOCAB_DATA);

    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có bài học - Hãy nạp bài)';
      jaVocabUnitSelect.appendChild(opt);
      return;
    }

    const savedKey = localStorage.getItem('ja_vocab_current_unit');
    if (savedKey && JA_VOCAB_DATA[savedKey]) {
      currentUnitKey = savedKey;
    } else if (!JA_VOCAB_DATA[currentUnitKey]) {
      currentUnitKey = keys[0];
    }

    keys.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = `🌸 ${JA_VOCAB_DATA[k].title || k}`;
      if (k === currentUnitKey) opt.selected = true;
      jaVocabUnitSelect.appendChild(opt);
    });
  }

  function renderWord(idx) {
    const list = getVocabList();

    if (jaVocabCount) {
      jaVocabCount.textContent = list.length;
    }

    if (list.length === 0) {
      currentIdx = 0;
      if (jaVocabCategory) jaVocabCategory.textContent = 'SỔ TAY TỪ VỰNG (TRỐNG)';
      if (jaVocabWordJa) jaVocabWordJa.textContent = 'Chưa có từ nào';
      if (jaVocabWordRomaji) jaVocabWordRomaji.textContent = '';
      if (jaVocabWordVi) {
        jaVocabWordVi.textContent = 'Thêm từ mới vào file datasss/jp/vocab/voca.txt để bắt đầu học nhé!';
      }
      if (jaVocabListenBtn) jaVocabListenBtn.style.display = 'none';
      if (jaVocabRecordBtn) jaVocabRecordBtn.style.display = 'none';
      if (jaVocabPrevBtn) jaVocabPrevBtn.style.display = 'none';
      if (jaVocabNextBtn) jaVocabNextBtn.style.display = 'none';
      if (jaVocabFeedback) {
        jaVocabFeedback.innerHTML = '<div class="feedback-status">💡 Mở file <code>datasss/jp/vocab/voca.txt</code> để thêm từ mới cho bài học.</div>';
      }
      resetSpokenBox();
      renderList();
      return;
    }

    if (idx < 0) idx = 0;
    if (idx >= list.length) idx = list.length - 1;
    currentIdx = idx;

    const item = list[idx];

    if (jaVocabPrevBtn) jaVocabPrevBtn.style.display = 'flex';
    if (jaVocabNextBtn) jaVocabNextBtn.style.display = 'flex';
    if (jaVocabListenBtn) jaVocabListenBtn.style.display = 'inline-block';
    if (jaVocabRecordBtn) jaVocabRecordBtn.style.display = 'inline-block';

    if (jaVocabCategory) jaVocabCategory.textContent = `${getCurrentUnitTitle().toUpperCase()} (TỪ ${idx + 1} / ${list.length})`;
    if (jaVocabWordJa) jaVocabWordJa.textContent = item.word;
    if (jaVocabWordRomaji) {
      let phoneticStr = '';
      if (item.hiragana && item.romaji) {
        phoneticStr = `Hiragana: ${item.hiragana} • Romaji: ${item.romaji}`;
      } else if (item.hiragana) {
        phoneticStr = `Hiragana: ${item.hiragana}`;
      } else if (item.romaji) {
        phoneticStr = `Romaji: ${item.romaji}`;
      }
      jaVocabWordRomaji.textContent = phoneticStr;
    }
    if (jaVocabWordVi) {
      jaVocabWordVi.textContent = item.vi ? `👉 Ý nghĩa: ${item.vi}` : '';
    }

    if (jaVocabFeedback) {
      jaVocabFeedback.innerHTML = '<div class="feedback-status">Bấm <strong>"🔊 Nghe phát âm mẫu"</strong> trước, sau đó bấm <strong>"🎯 Bấm để nói & Chấm điểm"</strong> nhé!</div>';
    }

    resetSpokenBox();
    renderList();
  }

  function resetSpokenBox() {
    if (jaVocabSpokenBox) {
      jaVocabSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = 'Đang chờ bạn nói...';
    if (jaVocabSpokenText) jaVocabSpokenText.textContent = '"..."';
    if (jaVocabTypingCursor) jaVocabTypingCursor.style.display = 'none';
  }

  function renderList() {
    if (!jaVocabListWrapper) return;
    jaVocabListWrapper.innerHTML = '';
    const list = getVocabList();

    if (list.length === 0) {
      jaVocabListWrapper.innerHTML = '<div style="color:var(--text-muted);font-size:0.9rem;padding:16px 0;text-align:center;">Danh sách từ vựng của bài học này đang trống. Thêm từ mới vào <code>datasss/jp/vocab/voca.txt</code> nhé!</div>';
      return;
    }

    list.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = `spk-sentence-item ${idx === currentIdx ? 'active' : ''}`;

      itemEl.innerHTML = `
        <div class="spk-item-left">
          <span class="spk-item-num">Từ ${idx + 1}</span>
          <div class="spk-item-text">
            <div class="spk-item-en" style="font-size: 1.15rem; font-weight: 700;">${item.word}</div>
            <div class="spk-item-vi" style="font-size: 0.85rem; color: var(--text-muted); margin-top: 2px;">
              ${(item.hiragana && item.romaji) ? `<span class="spk-item-romaji phonetic-text" style="color: var(--accent-cyan); font-family: var(--font-mono); margin-right: 6px;">${item.hiragana} (${item.romaji}) •</span>` : ((item.hiragana || item.romaji) ? `<span class="spk-item-romaji phonetic-text" style="color: var(--accent-cyan); font-family: var(--font-mono); margin-right: 6px;">${item.hiragana || item.romaji} •</span>` : '')}
              <span>${item.vi}</span>
            </div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <button class="spk-item-audio-btn" title="Nghe từ này">🔊 Nghe</button>
        </div>
      `;

      itemEl.addEventListener('click', (e) => {
        if (e.target.closest('.spk-item-audio-btn')) return;
        renderWord(idx);
      });

      const audioBtn = itemEl.querySelector('.spk-item-audio-btn');
      if (audioBtn) {
        audioBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          AppCore.speakJa(item.word);
        });
      }

      jaVocabListWrapper.appendChild(itemEl);
    });
  }

  // Khởi tạo nhận diện giọng nói
  function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    vocabRecognition = new SpeechRecognition();
    vocabRecognition.lang = 'ja-JP';
    vocabRecognition.continuous = false;
    vocabRecognition.interimResults = true;

    vocabRecognition.onstart = () => {
      isRecording = true;
      if (jaVocabRecordBtn) {
        jaVocabRecordBtn.classList.add('recording');
        jaVocabRecordBtn.innerHTML = '🛑 Đang nghe... Bấm để dừng';
      }
      if (jaVocabSpokenBox) {
        jaVocabSpokenBox.classList.remove('match-success', 'match-retry');
        jaVocabSpokenBox.classList.add('is-recording');
      }
      if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = '🔴 Đang lắng nghe tiếng Nhật...';
      if (jaVocabSpokenText) jaVocabSpokenText.textContent = '...';
      if (jaVocabTypingCursor) jaVocabTypingCursor.style.display = 'inline-block';
      if (jaVocabFeedback) {
        jaVocabFeedback.innerHTML = '<div class="feedback-status">Đang lắng nghe... Đọc to, rõ từ tiếng Nhật nhé!</div>';
      }
    };

    vocabRecognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      const currentText = final || interim;
      if (jaVocabSpokenText && currentText) {
        jaVocabSpokenText.textContent = `"${currentText}"`;
      }
      if (final && final.trim().length > 0) {
        evaluateResult(final.trim());
      }
    };

    vocabRecognition.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      stopRecognition();
      if (event.error !== 'no-speech') {
        if (jaVocabFeedback) {
          jaVocabFeedback.innerHTML = `<div class="feedback-retry">⚠️ Lỗi nhận diện micro (${event.error}). Hãy kiểm tra quyền truy cập microphone của trình duyệt.</div>`;
        }
      }
    };

    vocabRecognition.onend = () => {
      stopRecognition();
    };
  }

  function stopRecognition() {
    isRecording = false;
    if (jaVocabRecordBtn) {
      jaVocabRecordBtn.classList.remove('recording');
      jaVocabRecordBtn.innerHTML = '🎯 Bấm để nói & Chấm điểm';
    }
    if (jaVocabSpokenBox) {
      jaVocabSpokenBox.classList.remove('is-recording');
    }
    if (jaVocabTypingCursor) {
      jaVocabTypingCursor.style.display = 'none';
    }
  }

  function evaluateResult(transcript) {
    const list = getVocabList();
    if (list.length === 0 || !list[currentIdx]) return;
    const item = list[currentIdx];
    const reading = item.hiragana || item.romaji || '';

    const isMatch = AppCore && AppCore.isJapaneseMatch
      ? AppCore.isJapaneseMatch(transcript, item.word, reading)
      : transcript.toLowerCase().includes(item.word.toLowerCase());

    if (isMatch) {
      if (jaVocabSpokenBox) jaVocabSpokenBox.classList.add('match-success');
      if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = '🌟 Phát âm chuẩn xác (Tuyệt vời!)';
      if (jaVocabFeedback) {
        jaVocabFeedback.innerHTML = `
          <div class="feedback-success">
            🎉 <strong>Chuẩn xác tuyệt vời!</strong> Bạn vừa phát âm: "<strong>${transcript}</strong>"<br>
            Khẩu hình và ngữ điệu rất chuẩn! Hãy tiếp tục luyện từ này hoặc chuyển sang từ tiếp theo nhé!
          </div>
        `;
      }
      if (AppCore && typeof AppCore.incrementWordCount === 'function') {
        AppCore.incrementWordCount();
      }
    } else {
      if (jaVocabSpokenBox) jaVocabSpokenBox.classList.add('match-retry');
      if (jaVocabSpokenBadge) jaVocabSpokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
      if (jaVocabFeedback) {
        jaVocabFeedback.innerHTML = `
          <div class="feedback-retry">
            💡 AI nhận diện bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
            Từ mẫu: "<strong>${item.word}</strong>"${reading ? ` <em class="phonetic-text">(${reading})</em>` : ''}.<br>
            <small>👉 Hãy đọc to, rõ từng âm tiết và bấm nút để thử lại nhé!</small>
          </div>
        `;
      }
    }
  }

  function init() {
    initDOM();
    populateUnitSelect();
    initSpeechRecognition();

    if (jaVocabUnitSelect) {
      jaVocabUnitSelect.addEventListener('change', (e) => {
        currentUnitKey = e.target.value;
        localStorage.setItem('ja_vocab_current_unit', currentUnitKey);
        currentIdx = 0;
        renderWord(0);
      });
    }

    if (jaVocabListenBtn) {
      jaVocabListenBtn.addEventListener('click', () => {
        const list = getVocabList();
        if (list.length > 0 && list[currentIdx]) {
          AppCore.speakJa(list[currentIdx].word);
        }
      });
    }

    if (jaVocabRecordBtn) {
      jaVocabRecordBtn.addEventListener('click', () => {
        if (!vocabRecognition) {
          alert('Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói tiếng Nhật.');
          return;
        }
        if (isRecording) {
          vocabRecognition.stop();
        } else {
          vocabRecognition.start();
        }
      });
    }

    if (jaVocabPrevBtn) {
      jaVocabPrevBtn.addEventListener('click', () => {
        const list = getVocabList();
        if (list.length === 0) return;
        currentIdx = (currentIdx - 1 + list.length) % list.length;
        renderWord(currentIdx);
      });
    }

    if (jaVocabNextBtn) {
      jaVocabNextBtn.addEventListener('click', () => {
        const list = getVocabList();
        if (list.length === 0) return;
        currentIdx = (currentIdx + 1) % list.length;
        renderWord(currentIdx);
      });
    }

    // Render initially
    renderWord(0);
  }

  return {
    init,
    renderWord,
    getVocabList,
    populateUnitSelect
  };
})();

window.VocabJaModule = VocabJaModule;
