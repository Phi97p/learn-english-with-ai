// ========================================================
// JS/VOCAB.JS - Luyện từ vựng Tiếng Anh & Flashcards
// ========================================================

const VocabModule = (() => {
  let currentVocabScenario = 'my_new_school';
  let currentVocabIdx = 0;
  let userVocabData = null;

  // DOM Elements - Vocab
  let btnModeVocab, btnModeSentence;
  let vocabSpeakingSection, sentenceSpeakingSection;
  let vocabScenarioSelect, vocabChipsWrapper;
  let vocabCategory, vocabWordEn, vocabWordIpa, vocabWordVi, vocabWordTip;
  let vocabListenBtn, vocabRecordBtn, vocabPrevBtn, vocabNextBtn, vocabFeedback, vocabRemoveBtn;
  let btnAddVocab, btnResetVocab;
  let vocabSpokenBox, vocabSpokenBadge, vocabSpokenText, vocabTypingCursor;

  // Modal Thêm từ
  let addVocabModal, modalCloseBtn, modalCancelBtn, modalSaveBtn;
  let newVocabWord, newVocabVi, newVocabIpa, newVocabTip;

  // Flashcards Elements
  let flashcard, fcCategory, fcWord, fcPhonetic, fcSoundBtn, fcMeaning, fcEasyRead, fcCounter, fcPrevBtn, fcNextBtn;
  let currentFlashcardIdx = 0;

  // Speech Recognition
  let vocabRecognition = null;

  function initDOM() {
    btnModeVocab = document.getElementById('btn-mode-vocab');
    btnModeSentence = document.getElementById('btn-mode-sentence');
    vocabSpeakingSection = document.getElementById('vocab-speaking-section');
    sentenceSpeakingSection = document.getElementById('sentence-speaking-section');

    vocabScenarioSelect = document.getElementById('vocab-scenario-select');
    vocabChipsWrapper = document.getElementById('vocab-chips-wrapper');
    vocabCategory = document.getElementById('vocab-category');
    vocabWordEn = document.getElementById('vocab-word-en');
    vocabWordIpa = document.getElementById('vocab-word-ipa');
    vocabWordVi = document.getElementById('vocab-word-vi');
    vocabWordTip = document.getElementById('vocab-word-tip');
    vocabListenBtn = document.getElementById('vocab-listen-btn');
    vocabRecordBtn = document.getElementById('vocab-record-btn');
    vocabPrevBtn = document.getElementById('vocab-prev-btn');
    vocabNextBtn = document.getElementById('vocab-next-btn');
    vocabFeedback = document.getElementById('vocab-feedback');
    vocabRemoveBtn = document.getElementById('vocab-remove-btn');
    btnAddVocab = document.getElementById('btn-add-vocab');
    btnResetVocab = document.getElementById('btn-reset-vocab');

    vocabSpokenBox = document.getElementById('vocab-spoken-box');
    vocabSpokenBadge = document.getElementById('vocab-spoken-badge');
    vocabSpokenText = document.getElementById('vocab-spoken-text');
    vocabTypingCursor = document.getElementById('vocab-typing-cursor');

    addVocabModal = document.getElementById('add-vocab-modal');
    modalCloseBtn = document.getElementById('modal-close-btn');
    modalCancelBtn = document.getElementById('modal-cancel-btn');
    modalSaveBtn = document.getElementById('modal-save-btn');
    newVocabWord = document.getElementById('new-vocab-word');
    newVocabVi = document.getElementById('new-vocab-vi');
    newVocabIpa = document.getElementById('new-vocab-ipa');
    newVocabTip = document.getElementById('new-vocab-tip');

    flashcard = document.getElementById('flashcard');
    fcCategory = document.getElementById('fc-category');
    fcWord = document.getElementById('fc-word');
    fcPhonetic = document.getElementById('fc-phonetic');
    fcSoundBtn = document.getElementById('fc-sound-btn');
    fcMeaning = document.getElementById('fc-meaning');
    fcEasyRead = document.getElementById('fc-easy-read');
    fcCounter = document.getElementById('fc-counter');
    fcPrevBtn = document.getElementById('fc-prev-btn');
    fcNextBtn = document.getElementById('fc-next-btn');
  }

  function loadUserVocabData() {
    try {
      const savedVocab = localStorage.getItem('userVocabData');
      if (savedVocab) {
        userVocabData = JSON.parse(savedVocab);
      }
    } catch (e) {
      userVocabData = null;
    }
    if (!userVocabData || !userVocabData.my_new_school) {
      userVocabData = (typeof VOCAB_SCENARIOS_DATA !== 'undefined') ? JSON.parse(JSON.stringify(VOCAB_SCENARIOS_DATA)) : {};
      saveUserVocabData();
    }
  }

  function saveUserVocabData() {
    localStorage.setItem('userVocabData', JSON.stringify(userVocabData));
  }

  function renderVocabScenarioSelect() {
    if (!vocabScenarioSelect) return;
    vocabScenarioSelect.innerHTML = '';
    const srcData = userVocabData || (typeof VOCAB_SCENARIOS_DATA !== 'undefined' ? VOCAB_SCENARIOS_DATA : {});
    const keys = Object.keys(srcData);
    keys.forEach(k => {
      const item = srcData[k];
      if (item) {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = `${item.icon || '📖'} ${item.title || k}`;
        vocabScenarioSelect.appendChild(opt);
      }
    });
    vocabScenarioSelect.value = currentVocabScenario;
  }

  function loadVocabScenario(scenarioKey) {
    currentVocabScenario = scenarioKey;
    currentVocabIdx = 0;
    const scenarioData = userVocabData ? userVocabData[scenarioKey] : null;
    if (!scenarioData || !vocabChipsWrapper) return;

    vocabChipsWrapper.innerHTML = '';

    if (!scenarioData.words || scenarioData.words.length === 0) {
      vocabChipsWrapper.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:6px 0;">Danh sách trống. Hãy bấm "➕ Thêm từ" hoặc "🔄 Khôi phục" nhé!</span>';
      if (vocabCategory) vocabCategory.textContent = `${scenarioData.title.toUpperCase()} (TRỐNG)`;
      if (vocabWordEn) vocabWordEn.textContent = "Không có từ nào";
      if (vocabWordIpa) vocabWordIpa.textContent = "Bạn đã loại bỏ hết từ trong danh sách này.";
      if (vocabWordVi) vocabWordVi.textContent = "Bấm nút '➕ Thêm từ' ở trên để tự thêm từ vựng mới hoặc '🔄 Khôi phục' để lấy lại từ mặc định.";
      if (vocabWordTip) vocabWordTip.textContent = "";
      if (vocabFeedback) vocabFeedback.innerHTML = '<div class="feedback-status">Hãy thêm từ vựng để bắt đầu luyện nói!</div>';
      return;
    }

    scenarioData.words.forEach((item, idx) => {
      const chip = document.createElement('button');
      chip.className = `vocab-chip ${idx === 0 ? 'active' : ''}`;
      chip.innerHTML = `<span>${item.word}</span> <span style="font-size:0.75rem;opacity:0.7;">(${item.vi || ''})</span>`;
      chip.addEventListener('click', () => {
        loadVocabWord(idx);
      });
      vocabChipsWrapper.appendChild(chip);
    });

    loadVocabWord(0);
  }

  function loadVocabWord(idx) {
    const scenarioData = userVocabData ? userVocabData[currentVocabScenario] : null;
    if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;

    if (idx >= scenarioData.words.length) idx = 0;
    currentVocabIdx = idx;
    const item = scenarioData.words[idx];

    if (vocabChipsWrapper) {
      const chips = vocabChipsWrapper.querySelectorAll('.vocab-chip');
      chips.forEach((c, i) => {
        if (i === idx) {
          c.classList.add('active');
          c.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          c.classList.remove('active');
        }
      });
    }

    if (vocabCategory) vocabCategory.textContent = `${scenarioData.title.toUpperCase()} (TỪ ${idx + 1} / ${scenarioData.words.length})`;
    if (vocabWordEn) vocabWordEn.textContent = item.word;
    if (vocabWordIpa) vocabWordIpa.textContent = item.ipa ? `${item.ipa} ${item.easyRead ? `• Đọc dễ: ${item.easyRead}` : ''}` : '';
    if (vocabWordVi) vocabWordVi.textContent = item.vi ? `Ý nghĩa: ${item.vi}` : '';
    if (vocabWordTip) vocabWordTip.textContent = item.tip ? `💡 Mẹo phát âm: ${item.tip}` : '';
    if (vocabFeedback) vocabFeedback.innerHTML = `<div class="feedback-status">Bấm <strong>"Nghe phát âm từ mẫu"</strong>, sau đó bấm <strong>"Bấm để nói từ này"</strong> nhé!</div>`;

    resetVocabSpokenBox();
  }

  function resetVocabSpokenBox() {
    if (vocabSpokenBox) {
      vocabSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (vocabSpokenBadge) vocabSpokenBadge.textContent = 'Đang chờ bạn nói...';
    if (vocabSpokenText) vocabSpokenText.textContent = '"..."';
    if (vocabTypingCursor) vocabTypingCursor.style.display = 'none';
  }

  // Modal thêm từ
  function openAddVocabModal() {
    if (!addVocabModal) return;
    if (newVocabWord) newVocabWord.value = '';
    if (newVocabVi) newVocabVi.value = '';
    if (newVocabIpa) newVocabIpa.value = '';
    if (newVocabTip) newVocabTip.value = '';
    addVocabModal.classList.remove('hidden');
    if (newVocabWord) newVocabWord.focus();
  }

  function closeAddVocabModal() {
    if (addVocabModal) addVocabModal.classList.add('hidden');
  }

  // Flashcards
  function loadFlashcard(idx) {
    if (!flashcard || typeof FLASHCARDS_ITEMS === 'undefined' || !FLASHCARDS_ITEMS[idx]) return;
    const item = FLASHCARDS_ITEMS[idx];
    flashcard.classList.remove('flipped');

    if (fcCategory) fcCategory.textContent = item.category;
    if (fcWord) fcWord.textContent = item.word;
    if (fcPhonetic) fcPhonetic.textContent = item.phonetic;
    if (fcMeaning) fcMeaning.textContent = item.meaning;
    if (fcEasyRead) fcEasyRead.textContent = `Đọc tựa như: "${item.easyRead}"`;
    if (fcCounter) fcCounter.textContent = `${idx + 1} / ${FLASHCARDS_ITEMS.length}`;
  }

  function init() {
    initDOM();
    loadUserVocabData();

    // Chuyển đổi giữa 2 chế độ: Luyện từ vựng vs Luyện cả câu
    if (btnModeVocab && btnModeSentence) {
      btnModeVocab.addEventListener('click', () => {
        if (window.SpeakingModule && typeof window.SpeakingModule.clearAllTempRecordings === 'function') {
          window.SpeakingModule.clearAllTempRecordings();
        }
        btnModeVocab.classList.add('active');
        btnModeSentence.classList.remove('active');
        if (vocabSpeakingSection) vocabSpeakingSection.style.display = 'flex';
        if (sentenceSpeakingSection) sentenceSpeakingSection.style.display = 'none';
      });

      btnModeSentence.addEventListener('click', () => {
        btnModeSentence.classList.add('active');
        btnModeVocab.classList.remove('active');
        if (sentenceSpeakingSection) sentenceSpeakingSection.style.display = 'flex';
        if (vocabSpeakingSection) vocabSpeakingSection.style.display = 'none';
      });
    }

    if (vocabScenarioSelect) {
      vocabScenarioSelect.addEventListener('change', (e) => {
        loadVocabScenario(e.target.value);
      });
    }

    if (vocabListenBtn) {
      vocabListenBtn.addEventListener('click', () => {
        const scenarioData = userVocabData ? userVocabData[currentVocabScenario] : null;
        if (scenarioData && scenarioData.words && scenarioData.words[currentVocabIdx]) {
          AppCore.speak(scenarioData.words[currentVocabIdx].word);
        }
      });
    }

    if (vocabPrevBtn) {
      vocabPrevBtn.addEventListener('click', () => {
        const scenarioData = userVocabData ? userVocabData[currentVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
        currentVocabIdx = (currentVocabIdx - 1 + scenarioData.words.length) % scenarioData.words.length;
        loadVocabWord(currentVocabIdx);
      });
    }

    if (vocabNextBtn) {
      vocabNextBtn.addEventListener('click', () => {
        const scenarioData = userVocabData ? userVocabData[currentVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
        currentVocabIdx = (currentVocabIdx + 1) % scenarioData.words.length;
        loadVocabWord(currentVocabIdx);
      });
    }

    if (vocabRemoveBtn) {
      vocabRemoveBtn.addEventListener('click', () => {
        const scenarioData = userVocabData ? userVocabData[currentVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
        const removedWord = scenarioData.words[currentVocabIdx].word;
        scenarioData.words.splice(currentVocabIdx, 1);
        saveUserVocabData();
        AppCore.syncProgress();
        if (currentVocabIdx >= scenarioData.words.length) {
          currentVocabIdx = Math.max(0, scenarioData.words.length - 1);
        }
        loadVocabScenario(currentVocabScenario);
        if (scenarioData.words.length > 0) {
          loadVocabWord(currentVocabIdx);
        }
        if (vocabFeedback) {
          vocabFeedback.innerHTML = `<div class="feedback-status" style="color:var(--accent-rose);">🗑️ Đã loại bỏ từ "<strong>${removedWord}</strong>" khỏi danh sách luyện tập!</div>`;
        }
      });
    }

    if (btnResetVocab) {
      btnResetVocab.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn khôi phục lại danh sách từ vựng gốc cho chủ đề này không?')) {
          if (typeof VOCAB_SCENARIOS_DATA !== 'undefined' && VOCAB_SCENARIOS_DATA[currentVocabScenario]) {
            userVocabData[currentVocabScenario] = JSON.parse(JSON.stringify(VOCAB_SCENARIOS_DATA[currentVocabScenario]));
            saveUserVocabData();
            AppCore.syncProgress();
            loadVocabScenario(currentVocabScenario);
          }
        }
      });
    }

    // Modal Events
    if (btnAddVocab) btnAddVocab.addEventListener('click', openAddVocabModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAddVocabModal);
    if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeAddVocabModal);

    if (modalSaveBtn) {
      modalSaveBtn.addEventListener('click', () => {
        const word = newVocabWord ? newVocabWord.value.trim() : '';
        const vi = newVocabVi ? newVocabVi.value.trim() : '';
        if (!word) {
          alert('Vui lòng nhập từ tiếng Anh bạn muốn học!');
          return;
        }
        const ipa = newVocabIpa ? newVocabIpa.value.trim() : '';
        const tip = (newVocabTip ? newVocabTip.value.trim() : '') || 'Từ vựng do bạn thêm vào';

        if (!userVocabData[currentVocabScenario]) {
          userVocabData[currentVocabScenario] = { title: "Từ vựng của tôi", icon: "⭐", words: [] };
        }
        userVocabData[currentVocabScenario].words.push({ word, vi: vi || word, ipa, easyRead: "", tip });
        saveUserVocabData();
        AppCore.syncProgress();
        closeAddVocabModal();
        loadVocabScenario(currentVocabScenario);
        loadVocabWord(userVocabData[currentVocabScenario].words.length - 1);

        if (vocabFeedback) {
          vocabFeedback.innerHTML = `<div class="feedback-status" style="color:var(--accent-green);">✨ Đã thêm từ "<strong>${word}</strong>" thành công! Bấm micro để luyện nói ngay nhé!</div>`;
        }
      });
    }

    // Speech Recognition for Vocab
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      vocabRecognition = new SpeechRecognition();
      vocabRecognition.lang = 'en-US';
      vocabRecognition.continuous = false;
      vocabRecognition.interimResults = false;

      if (vocabRecordBtn) {
        vocabRecordBtn.addEventListener('click', () => {
          if (vocabRecordBtn.classList.contains('recording')) {
            vocabRecognition.stop();
            return;
          }
          try {
            if (vocabSpokenBox) {
              vocabSpokenBox.classList.remove('match-success', 'match-retry');
              vocabSpokenBox.classList.add('is-recording');
            }
            if (vocabSpokenBadge) vocabSpokenBadge.textContent = '🔴 Đang lắng nghe bạn nói...';
            if (vocabSpokenText) vocabSpokenText.textContent = '...';
            if (vocabTypingCursor) vocabTypingCursor.style.display = 'inline-block';
            if (vocabFeedback) vocabFeedback.innerHTML = '<div class="feedback-status">Đang lắng nghe bạn phát âm... Đọc to rõ nhé!</div>';

            vocabRecognition.start();
            vocabRecordBtn.classList.add('recording');
            vocabRecordBtn.innerHTML = '⏹️ Đang nghe... (Bấm để dừng)';
          } catch (e) {
            console.error(e);
          }
        });
      }

      vocabRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        const scenarioData = userVocabData ? userVocabData[currentVocabScenario] : null;
        if (!scenarioData || !scenarioData.words || !scenarioData.words[currentVocabIdx]) return;
        const item = scenarioData.words[currentVocabIdx];

        AppCore.animateTypewriter(vocabSpokenText, vocabTypingCursor, `"${transcript}"`, () => {
          if (vocabSpokenBox) vocabSpokenBox.classList.remove('is-recording');

          const cleanTarget = item.word.toLowerCase().replace(/[^a-z0-9]/g, '');
          const cleanSpoken = transcript.toLowerCase().replace(/[^a-z0-9]/g, '');
          const isMatch = cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken);

          if (isMatch) {
            if (vocabSpokenBox) vocabSpokenBox.classList.add('match-success');
            if (vocabSpokenBadge) vocabSpokenBadge.textContent = '✅ Phát âm rất chuẩn!';
            if (vocabFeedback) {
              vocabFeedback.innerHTML = `
                <div class="feedback-success">
                  🎉 Tuyệt vời! Bạn phát âm từ "<strong>${item.word}</strong>" rất chuẩn xác!<br>
                  <small style="opacity:0.9;">Hệ thống nhận diện được: "<em>${transcript}</em>"</small>
                </div>
              `;
            }
            AppCore.incrementWordCount();
            AppCore.state.spokenSentences.push({
              en: `[Từ vựng] ${item.word}`,
              time: new Date().toLocaleTimeString('vi-VN')
            });
            if (AppCore.state.spokenSentences.length > 30) AppCore.state.spokenSentences.shift();
            AppCore.syncProgress();
          } else {
            if (vocabSpokenBox) vocabSpokenBox.classList.add('match-retry');
            if (vocabSpokenBadge) vocabSpokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
            if (vocabFeedback) {
              vocabFeedback.innerHTML = `
                <div class="feedback-retry">
                  💡 Bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
                  Từ mẫu cần đọc: "<strong>${item.word}</strong>" ${item.easyRead ? `(${item.easyRead})` : ''}.<br>
                  <small>👉 Bấm "Nghe phát âm từ mẫu" để nghe lại khẩu hình, rồi bấm micro thử lại nhé!</small>
                </div>
              `;
            }
          }
        });
      };

      vocabRecognition.onend = () => {
        if (vocabRecordBtn) {
          vocabRecordBtn.classList.remove('recording');
          vocabRecordBtn.innerHTML = '🎙️ Bấm để nói từ này';
        }
        if (vocabSpokenBox && vocabSpokenBox.classList.contains('is-recording')) {
          vocabSpokenBox.classList.remove('is-recording');
          if (vocabSpokenBadge && vocabSpokenBadge.textContent.includes('Đang lắng nghe')) {
            vocabSpokenBadge.textContent = 'Đã kết thúc thu âm';
          }
        }
      };
    }

    // Flashcards events
    if (flashcard) {
      flashcard.addEventListener('click', (e) => {
        if (e.target.closest('#fc-sound-btn')) return;
        flashcard.classList.toggle('flipped');
      });
    }

    if (fcSoundBtn) {
      fcSoundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof FLASHCARDS_ITEMS !== 'undefined' && FLASHCARDS_ITEMS[currentFlashcardIdx]) {
          AppCore.speak(FLASHCARDS_ITEMS[currentFlashcardIdx].word);
        }
      });
    }

    if (fcNextBtn) {
      fcNextBtn.addEventListener('click', () => {
        if (typeof FLASHCARDS_ITEMS !== 'undefined') {
          currentFlashcardIdx = (currentFlashcardIdx + 1) % FLASHCARDS_ITEMS.length;
          loadFlashcard(currentFlashcardIdx);
        }
      });
    }

    if (fcPrevBtn) {
      fcPrevBtn.addEventListener('click', () => {
        if (typeof FLASHCARDS_ITEMS !== 'undefined') {
          currentFlashcardIdx = (currentFlashcardIdx - 1 + FLASHCARDS_ITEMS.length) % FLASHCARDS_ITEMS.length;
          loadFlashcard(currentFlashcardIdx);
        }
      });
    }
  }

  return {
    renderVocabScenarioSelect,
    loadVocabScenario,
    loadVocabWord,
    loadFlashcard,
    getUserVocabData: () => userVocabData,
    init
  };
})();

window.VocabModule = VocabModule;
