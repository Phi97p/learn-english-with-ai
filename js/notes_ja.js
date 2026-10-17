// ========================================================
// JS/NOTES_JA.JS - Sổ Tay Kiến Thức Quan Trọng (Tiếng Nhật)
// 1. hard_words: Trang tĩnh để note từ khó (không cần chức năng phức tạp)
// 2. phrases: Cụm từ hay cần học thuộc (luyện tập phát âm, nghe, chấm điểm)
// ========================================================

const NotesJaModule = (() => {
  let currentMode = 'hard_words'; // 'hard_words' | 'phrases'
  let currentPhraseIdx = 0;
  let isRandomMode = false;
  let navHistory = [];

  // DOM Elements - Switcher & Panes
  let modeBtns = [];
  let hardWordsViewEl, phrasesViewEl;
  let phrasesActionsEl, randomToggleBtn;
  let hardWordsBodyEl;

  // DOM Elements - Phrases Challenge Card
  let cardEl, prevBtn, nextBtn;
  let categoryEl, wordJaEl, wordRomajiEl, wordViEl, wordNoteEl;
  let listenBtn, recordBtn;
  let spokenBox, spokenBadge, spokenText, typingCursor;
  let feedbackEl, listCountEl, listWrapperEl;

  // Speech Recognition (dành cho phần phrases)
  let phrasesRecognition = null;
  let isRecording = false;

  function getPhrasesList() {
    if (typeof JA_NOTES_DATA === 'undefined') return [];
    if (JA_NOTES_DATA.phrases && Array.isArray(JA_NOTES_DATA.phrases.items)) {
      return JA_NOTES_DATA.phrases.items;
    }
    return [];
  }

  function getHardWordsList() {
    if (typeof JA_NOTES_DATA === 'undefined') return [];
    if (JA_NOTES_DATA.hard_words && Array.isArray(JA_NOTES_DATA.hard_words.items)) {
      return JA_NOTES_DATA.hard_words.items;
    }
    return [];
  }

  function initDOM() {
    modeBtns = Array.from(document.querySelectorAll('.notes-mode-btn'));
    hardWordsViewEl = document.getElementById('ja-notes-hard-words-view');
    phrasesViewEl = document.getElementById('ja-notes-phrases-view');
    phrasesActionsEl = document.getElementById('ja-notes-phrases-actions');
    hardWordsBodyEl = document.getElementById('ja-hard-words-body');

    randomToggleBtn = document.getElementById('ja-notes-random-toggle');

    cardEl = document.getElementById('ja-notes-card');
    prevBtn = document.getElementById('ja-notes-prev-btn');
    nextBtn = document.getElementById('ja-notes-next-btn');

    categoryEl = document.getElementById('ja-notes-category');
    wordJaEl = document.getElementById('ja-notes-word-ja');
    wordRomajiEl = document.getElementById('ja-notes-word-romaji');
    wordViEl = document.getElementById('ja-notes-word-vi');
    wordNoteEl = document.getElementById('ja-notes-word-note');

    listenBtn = document.getElementById('ja-notes-listen-btn');
    recordBtn = document.getElementById('ja-notes-record-btn');

    spokenBox = document.getElementById('ja-notes-spoken-box');
    spokenBadge = document.getElementById('ja-notes-spoken-badge');
    spokenText = document.getElementById('ja-notes-spoken-text');
    typingCursor = document.getElementById('ja-notes-typing-cursor');

    feedbackEl = document.getElementById('ja-notes-feedback');
    listCountEl = document.getElementById('ja-notes-list-count');
    listWrapperEl = document.getElementById('ja-notes-list-wrapper');

    // Khôi phục mode lưu trữ
    const savedMode = localStorage.getItem('ja_notes_mode');
    if (savedMode && (savedMode === 'hard_words' || savedMode === 'phrases')) {
      currentMode = savedMode;
    }

    const savedRandom = localStorage.getItem('ja_notes_random');
    if (savedRandom !== null) {
      isRandomMode = savedRandom === 'true';
    }
    updateRandomButtonUI();
  }

  function updateModeButtonsUI() {
    modeBtns.forEach(btn => {
      const mode = btn.dataset.mode;
      btn.classList.toggle('active', mode === currentMode);
    });
  }

  function updateRandomButtonUI() {
    if (!randomToggleBtn) return;
    if (isRandomMode) {
      randomToggleBtn.classList.add('active-toggle');
      randomToggleBtn.innerHTML = '🔀 Ngẫu nhiên: BẬT';
    } else {
      randomToggleBtn.classList.remove('active-toggle');
      randomToggleBtn.innerHTML = '➡️ Tuần tự: BẬT';
    }
  }

  // ==========================================
  // 1. TRANG TĨNH: CÁCH ĐỌC CÁC TỪ KHÓ (STATIC NOTE)
  // ==========================================
  function renderHardWordsStatic() {
    if (!hardWordsBodyEl) return;
    const items = getHardWordsList();

    let noticeHtml = '';
    const noticeText = (typeof JA_NOTES_DATA !== 'undefined' && JA_NOTES_DATA.hard_words && JA_NOTES_DATA.hard_words.notice)
      ? JA_NOTES_DATA.hard_words.notice
      : '';

    if (noticeText) {
      noticeHtml = `
        <div style="margin-bottom: 18px; font-size: 1rem; line-height: 1.6; color: var(--text-main);">
          <strong>⚠️ Chú ý:</strong> ${noticeText}
        </div>
      `;
    }

    if (items.length === 0) {
      hardWordsBodyEl.innerHTML = `
        ${noticeHtml}
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0;">
          Chưa có ghi chú chữ nào. Mở file <code>japanese_data/notes_data.js</code> để thêm.
        </div>
      `;
      return;
    }

    let rowsHtml = '';
    items.forEach((item) => {
      const char = item.char || item.word || '—';
      const pronunciation = item.pronunciation || item.reading || '—';
      const tip = item.tip || item.note || item.vi || '—';

      rowsHtml += `
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 12px 14px; font-size: 1.4rem; font-weight: 700; color: var(--text-main);">${char}</td>
          <td style="padding: 12px 14px; font-size: 0.95rem; color: var(--text-main);">${pronunciation}</td>
          <td style="padding: 12px 14px; font-size: 0.95rem; color: var(--text-main);">${tip}</td>
        </tr>
      `;
    });

    hardWordsBodyEl.innerHTML = `
      ${noticeHtml}
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color);">
              <th style="padding: 12px 14px; width: 15%; color: var(--text-main);">Chữ</th>
              <th style="padding: 12px 14px; width: 42%; color: var(--text-main);">Cách phát âm</th>
              <th style="padding: 12px 14px; width: 43%; color: var(--text-main);">Mẹo phân biệt</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }

  // ==========================================
  // 2. CỤM TỪ HAY CẦN HỌC THUỘC (INTERACTIVE CARD)
  // ==========================================
  function renderPhrasesItem(idx) {
    const list = getPhrasesList();

    if (listCountEl) {
      listCountEl.textContent = list.length;
    }

    if (list.length === 0) {
      currentPhraseIdx = 0;
      if (categoryEl) categoryEl.textContent = 'CỤM TỪ HAY (TRỐNG)';
      if (wordJaEl) wordJaEl.textContent = 'Chưa có cụm từ nào';
      if (wordRomajiEl) wordRomajiEl.textContent = '';
      if (wordViEl) wordViEl.textContent = 'Thêm các cụm từ muốn luyện vào file japanese_data/notes_data.js nhé!';
      if (wordNoteEl) wordNoteEl.innerHTML = '';
      if (listenBtn) listenBtn.style.display = 'none';
      if (recordBtn) recordBtn.style.display = 'none';
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (feedbackEl) {
        feedbackEl.innerHTML = '<div class="feedback-status">💡 Mở file <code>japanese_data/notes_data.js</code> (mục <code>phrases</code>) để thêm cụm từ.</div>';
      }
      resetSpokenBox();
      renderPhrasesListWrapper();
      return;
    }

    if (idx < 0) idx = 0;
    if (idx >= list.length) idx = list.length - 1;
    currentPhraseIdx = idx;

    const item = list[idx];

    if (prevBtn) prevBtn.style.display = 'flex';
    if (nextBtn) nextBtn.style.display = 'flex';
    if (listenBtn) listenBtn.style.display = 'inline-block';
    if (recordBtn) recordBtn.style.display = 'inline-block';

    if (categoryEl) {
      categoryEl.textContent = `💬 CỤM TỪ HAY • MỤC ${idx + 1} / ${list.length}`;
    }

    if (wordJaEl) {
      wordJaEl.textContent = item.word;
    }

    if (wordRomajiEl) {
      let phoneticStr = '';
      if (item.hiragana && item.romaji) {
        phoneticStr = `Hiragana: ${item.hiragana} • Romaji: ${item.romaji}`;
      } else if (item.hiragana) {
        phoneticStr = `Hiragana: ${item.hiragana}`;
      } else if (item.romaji) {
        phoneticStr = `Romaji: ${item.romaji}`;
      }
      wordRomajiEl.textContent = phoneticStr;
    }

    if (wordViEl) {
      wordViEl.textContent = item.vi ? `👉 Ý nghĩa: ${item.vi}` : '';
    }

    if (wordNoteEl) {
      if (item.note) {
        wordNoteEl.innerHTML = `💡 <strong>Ghi chú:</strong> ${item.note}`;
        wordNoteEl.style.display = 'block';
      } else {
        wordNoteEl.innerHTML = '';
        wordNoteEl.style.display = 'none';
      }
    }

    if (feedbackEl) {
      feedbackEl.innerHTML = '<div class="feedback-status">Bấm <strong>"🔊 Nghe phát âm mẫu"</strong> trước, sau đó bấm <strong>"🎯 Bấm để nói & Chấm điểm"</strong> nhé!</div>';
    }

    resetSpokenBox();
    renderPhrasesListWrapper();
  }

  function resetSpokenBox() {
    if (spokenBox) {
      spokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (spokenBadge) spokenBadge.textContent = 'Đang chờ bạn nói...';
    if (spokenText) spokenText.textContent = '"..."';
    if (typingCursor) typingCursor.style.display = 'none';
  }

  function renderPhrasesListWrapper() {
    if (!listWrapperEl) return;
    listWrapperEl.innerHTML = '';
    const list = getPhrasesList();

    if (list.length === 0) {
      listWrapperEl.innerHTML = '<div style="color:var(--text-muted);font-size:0.9rem;padding:16px 0;text-align:center;">Chưa có cụm từ nào trong danh sách.</div>';
      return;
    }

    list.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = `spk-sentence-item ${idx === currentPhraseIdx ? 'active' : ''}`;

      const reading = item.hiragana || item.romaji || '';
      itemEl.innerHTML = `
        <div class="spk-item-left">
          <span class="spk-item-num">#${idx + 1}</span>
          <div class="spk-item-texts">
            <div class="spk-item-en" style="font-size: 1.05rem; font-weight: 700;">${item.word}</div>
            ${reading ? `<div class="spk-item-ipa phonetic-text" style="font-size: 0.8rem; color: var(--accent-cyan);">${reading}</div>` : ''}
            <div class="spk-item-vi" style="font-size: 0.82rem; color: var(--text-muted);">${item.vi || ''}</div>
          </div>
        </div>
        <div class="spk-item-actions">
          <button class="spk-item-btn item-btn-listen" title="Nghe phát âm">🔊</button>
        </div>
      `;

      itemEl.addEventListener('click', (e) => {
        if (e.target.closest('.item-btn-listen')) {
          e.stopPropagation();
          AppCore.speak(item.word, 'ja-JP');
          return;
        }
        navHistory.push(currentPhraseIdx);
        renderPhrasesItem(idx);
      });

      listWrapperEl.appendChild(itemEl);
    });
  }

  function handlePhrasePrev() {
    const list = getPhrasesList();
    if (list.length <= 1) return;

    if (isRandomMode && navHistory.length > 0) {
      const prevIdx = navHistory.pop();
      renderPhrasesItem(prevIdx);
      return;
    }

    let prev = currentPhraseIdx - 1;
    if (prev < 0) prev = list.length - 1;
    renderPhrasesItem(prev);
  }

  function handlePhraseNext() {
    const list = getPhrasesList();
    if (list.length <= 1) return;

    navHistory.push(currentPhraseIdx);
    if (navHistory.length > 50) navHistory.shift();

    if (isRandomMode) {
      let next = currentPhraseIdx;
      let attempts = 0;
      while (next === currentPhraseIdx && attempts < 20) {
        next = Math.floor(Math.random() * list.length);
        attempts++;
      }
      renderPhrasesItem(next);
    } else {
      let next = currentPhraseIdx + 1;
      if (next >= list.length) next = 0;
      renderPhrasesItem(next);
    }
  }

  function toggleRandomMode() {
    isRandomMode = !isRandomMode;
    localStorage.setItem('ja_notes_random', isRandomMode ? 'true' : 'false');
    updateRandomButtonUI();
  }

  function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    phrasesRecognition = new SpeechRecognition();
    phrasesRecognition.lang = 'ja-JP';
    phrasesRecognition.continuous = false;
    phrasesRecognition.interimResults = true;
    phrasesRecognition.maxAlternatives = 1;

    phrasesRecognition.onstart = () => {
      isRecording = true;
      if (recordBtn) {
        recordBtn.classList.add('recording');
        recordBtn.innerHTML = '🛑 Đang lắng nghe...';
      }
      if (spokenBox) {
        spokenBox.classList.remove('match-success', 'match-retry');
        spokenBox.classList.add('is-recording');
      }
      if (spokenBadge) spokenBadge.textContent = '🎙️ Hãy đọc to, rõ ràng vào micro...';
      if (spokenText) spokenText.textContent = '"..."';
      if (typingCursor) typingCursor.style.display = 'inline-block';
    };

    phrasesRecognition.onresult = (event) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      const currentText = final || interim;
      if (spokenText && currentText) {
        spokenText.textContent = `"${currentText}"`;
      }
      if (final && final.trim().length > 0) {
        evaluateResult(final.trim());
      }
    };

    phrasesRecognition.onerror = (event) => {
      stopRecognition();
      if (event.error !== 'no-speech' && feedbackEl) {
        feedbackEl.innerHTML = `<div class="feedback-retry">⚠️ Lỗi nhận diện micro (${event.error}). Hãy kiểm tra microphone trình duyệt.</div>`;
      }
    };

    phrasesRecognition.onend = () => {
      stopRecognition();
    };
  }

  function stopRecognition() {
    isRecording = false;
    if (recordBtn) {
      recordBtn.classList.remove('recording');
      recordBtn.innerHTML = '🎯 Bấm để nói & Chấm điểm';
    }
    if (spokenBox) spokenBox.classList.remove('is-recording');
    if (typingCursor) typingCursor.style.display = 'none';
  }

  function evaluateResult(transcript) {
    const list = getPhrasesList();
    if (list.length === 0 || !list[currentPhraseIdx]) return;
    const item = list[currentPhraseIdx];
    const reading = item.hiragana || item.romaji || '';

    const isMatch = AppCore && AppCore.isJapaneseMatch
      ? AppCore.isJapaneseMatch(transcript, item.word, reading)
      : transcript.toLowerCase().includes(item.word.toLowerCase());

    if (isMatch) {
      if (spokenBox) spokenBox.classList.add('match-success');
      if (spokenBadge) spokenBadge.textContent = '🌟 Phát âm chuẩn xác (Rất tốt!)';
      if (feedbackEl) {
        feedbackEl.innerHTML = `
          <div class="feedback-success">
            🎉 <strong>Chuẩn xác tuyệt vời!</strong> Bạn vừa đọc: "<strong>${transcript}</strong>"<br>
            Ngữ điệu và phát âm rất chính xác!
          </div>
        `;
      }
      if (AppCore && typeof AppCore.incrementWordCount === 'function') {
        AppCore.incrementWordCount();
      }
    } else {
      if (spokenBox) spokenBox.classList.add('match-retry');
      if (spokenBadge) spokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
      if (feedbackEl) {
        feedbackEl.innerHTML = `
          <div class="feedback-retry">
            💡 AI nhận diện bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
            Cụm từ mẫu: "<strong>${item.word}</strong>"${reading ? ` <em class="phonetic-text">(${reading})</em>` : ''}.<br>
            <small>👉 Hãy đọc to, rõ ràng và bấm nút để thử lại nhé!</small>
          </div>
        `;
      }
    }
  }

  // ==========================================
  // 3. ĐIỀU HƯỚNG & KHỞI TẠO
  // ==========================================
  function setMode(newMode) {
    if (newMode !== 'hard_words' && newMode !== 'phrases') return;
    currentMode = newMode;
    localStorage.setItem('ja_notes_mode', currentMode);

    updateModeButtonsUI();
    applyActiveModeView();
  }

  function applyActiveModeView() {
    if (currentMode === 'hard_words') {
      if (hardWordsViewEl) hardWordsViewEl.style.display = 'block';
      if (phrasesViewEl) phrasesViewEl.style.display = 'none';
      if (phrasesActionsEl) phrasesActionsEl.style.display = 'none';
      renderHardWordsStatic();
    } else {
      if (hardWordsViewEl) hardWordsViewEl.style.display = 'none';
      if (phrasesViewEl) phrasesViewEl.style.display = 'block';
      if (phrasesActionsEl) phrasesActionsEl.style.display = 'block';
      renderPhrasesItem(currentPhraseIdx);
    }
  }

  function init() {
    initDOM();
    updateModeButtonsUI();
    initSpeechRecognition();

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setMode(btn.dataset.mode);
      });
    });

    if (randomToggleBtn) {
      randomToggleBtn.addEventListener('click', toggleRandomMode);
    }

    if (prevBtn) prevBtn.addEventListener('click', handlePhrasePrev);
    if (nextBtn) nextBtn.addEventListener('click', handlePhraseNext);

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        const list = getPhrasesList();
        if (list.length === 0 || !list[currentPhraseIdx]) return;
        AppCore.speak(list[currentPhraseIdx].word, 'ja-JP');
      });
    }

    if (recordBtn) {
      recordBtn.addEventListener('click', () => {
        if (!phrasesRecognition) {
          alert('Trình duyệt chưa hỗ trợ nhận diện giọng nói Web Speech API.');
          return;
        }
        if (isRecording) {
          phrasesRecognition.stop();
        } else {
          try {
            phrasesRecognition.start();
          } catch (err) {
            phrasesRecognition.stop();
          }
        }
      });
    }

    applyActiveModeView();
  }

  return {
    init,
    setMode,
    renderHardWordsStatic,
    renderPhrasesItem
  };
})();

window.NotesJaModule = NotesJaModule;
