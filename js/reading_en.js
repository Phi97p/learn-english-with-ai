// ========================================================
// JS/READING_EN.JS - Phòng Luyện Đọc Hiểu & Shadowing Đoạn Văn Tiếng Anh
// Phục vụ luyện nhại giọng mạch lạc theo cả đoạn văn (SGK Tiếng Anh 6)
// ========================================================

const ReadingEnModule = (() => {
  let currentReadingKey = 'unit_1_my_new_school';
  let currentReadingSentenceIdx = 0;

  let isReadingRecordingActive = false;
  let lastReadingTranscript = '';
  let hasEvaluatedReadingTurn = false;
  let readingRecognition = null;
  let isPlayingFullPassage = false;

  // DOM Elements
  let enReadingUnitSelect;
  let enReadingListenAllBtn;
  let enReadingPassageTitle;
  let enReadingPassageTopic;
  let enReadingPassageSentences;

  let enReadingCategory;
  let enReadingPhraseEn;
  let enReadingPhraseIpa;
  let enReadingPhraseVi;
  let enReadingListenBtn;
  let enReadingRecordBtn;
  let enReadingPassageRecordBtn;
  let enReadingPassageNextBtn;
  let enReadingPrevBtn;
  let enReadingNextBtn;
  let enReadingFeedback;

  let enReadingSpokenBox;
  let enReadingSpokenBadge;
  let enReadingSpokenText;
  let enReadingTypingCursor;

  let enPassageSpokenDisplay;
  let enPassageSpokenStatus;
  let enPassageSpokenText;
  let enPassageTypingCursor;

  function initDOM() {
    enReadingUnitSelect = document.getElementById('en-reading-unit-select');
    enReadingListenAllBtn = document.getElementById('en-reading-listen-all-btn');
    enReadingPassageTitle = document.getElementById('en-reading-passage-title');
    enReadingPassageTopic = document.getElementById('en-reading-passage-topic');
    enReadingPassageSentences = document.getElementById('en-reading-passage-sentences');

    enReadingCategory = document.getElementById('en-reading-category');
    enReadingPhraseEn = document.getElementById('en-reading-phrase-en');
    enReadingPhraseIpa = document.getElementById('en-reading-phrase-ipa');
    enReadingPhraseVi = document.getElementById('en-reading-phrase-vi');
    enReadingListenBtn = document.getElementById('en-reading-listen-btn');
    enReadingRecordBtn = document.getElementById('en-reading-record-btn');
    enReadingPassageRecordBtn = document.getElementById('en-reading-passage-record-btn');
    enReadingPassageNextBtn = document.getElementById('en-reading-passage-next-btn');
    enReadingPrevBtn = document.getElementById('en-reading-prev-btn');
    enReadingNextBtn = document.getElementById('en-reading-next-btn');
    enReadingFeedback = document.getElementById('en-reading-feedback');

    enReadingSpokenBox = document.getElementById('en-reading-spoken-box');
    enReadingSpokenBadge = document.getElementById('en-reading-spoken-badge');
    enReadingSpokenText = document.getElementById('en-reading-spoken-text');
    enReadingTypingCursor = document.getElementById('en-reading-typing-cursor');

    enPassageSpokenDisplay = document.getElementById('en-passage-spoken-display');
    enPassageSpokenStatus = document.getElementById('en-passage-spoken-status');
    enPassageSpokenText = document.getElementById('en-passage-spoken-text');
    enPassageTypingCursor = document.getElementById('en-passage-typing-cursor');
  }

  function renderReadingSelect() {
    if (!enReadingUnitSelect || typeof EN_READING_PASSAGES_DATA === 'undefined') return;
    enReadingUnitSelect.innerHTML = '';
    const keys = Object.keys(EN_READING_PASSAGES_DATA);
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có đoạn văn - Chờ nạp bài)';
      enReadingUnitSelect.appendChild(opt);
      return;
    }
    keys.forEach(k => {
      const item = EN_READING_PASSAGES_DATA[k];
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = `${item.icon || '📘'} ${item.title || k}`;
      enReadingUnitSelect.appendChild(opt);
    });
    if (!currentReadingKey || !EN_READING_PASSAGES_DATA[currentReadingKey]) {
      currentReadingKey = keys.includes('unit_1_my_new_school') ? 'unit_1_my_new_school' : keys[0];
    }
    enReadingUnitSelect.value = currentReadingKey;
  }

  function loadReadingPassage(passageKey) {
    if (typeof EN_READING_PASSAGES_DATA === 'undefined') return;
    currentReadingKey = passageKey;
    if (enReadingUnitSelect && enReadingUnitSelect.value !== passageKey) {
      enReadingUnitSelect.value = passageKey;
    }
    currentReadingSentenceIdx = 0;
    const passage = EN_READING_PASSAGES_DATA[passageKey];
    if (!passage || !passage.sentences || passage.sentences.length === 0) {
      if (enReadingPassageTitle) enReadingPassageTitle.textContent = 'CHƯA CÓ ĐOẠN VĂN';
      if (enReadingPassageTopic) enReadingPassageTopic.textContent = 'Đang chờ nạp bài đọc hiểu mới...';
      if (enReadingPassageSentences) enReadingPassageSentences.innerHTML = '<span style="color:var(--text-muted);padding:10px;">Chưa có đoạn văn nào trong danh sách.</span>';
      if (enReadingCategory) enReadingCategory.textContent = 'CHƯA CÓ CÂU';
      if (enReadingPhraseEn) enReadingPhraseEn.textContent = '(Chưa có câu đọc hiểu)';
      if (enReadingPhraseIpa) enReadingPhraseIpa.textContent = '';
      if (enReadingPhraseVi) enReadingPhraseVi.textContent = 'Hãy nạp dữ liệu bài đọc để bắt đầu luyện tập.';
      return;
    }

    if (enReadingPassageTitle) enReadingPassageTitle.textContent = `${passage.icon || '📘'} ${passage.title}`;
    if (enReadingPassageTopic) enReadingPassageTopic.textContent = `Chủ đề: ${passage.topic || ''} • (${passage.sentences.length} câu liên kết)`;

    renderPassageParagraph();
    loadReadingSentence(0);
  }

  function renderPassageParagraph() {
    if (!enReadingPassageSentences || typeof EN_READING_PASSAGES_DATA === 'undefined') return;
    enReadingPassageSentences.innerHTML = '';
    const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences) return;

    passage.sentences.forEach((item, idx) => {
      const span = document.createElement('span');
      span.className = `reading-sentence-span ${idx === currentReadingSentenceIdx ? 'active' : ''}`;
      span.dataset.idx = idx;
      span.textContent = item.en + ' ';

      span.addEventListener('click', () => {
        loadReadingSentence(idx);
      });

      enReadingPassageSentences.appendChild(span);
    });
  }

  function loadReadingSentence(idx) {
    if (typeof EN_READING_PASSAGES_DATA === 'undefined') return;
    const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences || passage.sentences.length === 0) return;
    if (idx >= passage.sentences.length) idx = 0;
    if (idx < 0) idx = passage.sentences.length - 1;

    currentReadingSentenceIdx = idx;
    const item = passage.sentences[idx];

    // Highlight câu trong đoạn văn bên trái
    if (enReadingPassageSentences) {
      const spans = enReadingPassageSentences.querySelectorAll('.reading-sentence-span');
      spans.forEach((s, i) => {
        if (i === idx) {
          s.classList.add('active');
          s.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          s.classList.remove('active');
        }
      });
    }

    if (enReadingCategory) {
      enReadingCategory.textContent = `${(passage.title || 'BÀI ĐỌC').toUpperCase()} (CÂU ${idx + 1} / ${passage.sentences.length})`;
    }
    if (enReadingPhraseEn) enReadingPhraseEn.textContent = `"${item.en}"`;
    if (enReadingPhraseIpa) enReadingPhraseIpa.textContent = item.ipa ? `IPA: ${item.ipa}` : '';
    if (enReadingPhraseVi) enReadingPhraseVi.textContent = `👉 Ý nghĩa: ${item.vi}`;
    if (enReadingFeedback) {
      enReadingFeedback.innerHTML = '<div class="feedback-status">Bấm <strong>"🔊 Nghe câu này"</strong> để nghe bản xứ đọc, sau đó bấm <strong>"🎯 Bấm để nói & Chấm điểm"</strong> nhé!</div>';
    }

    resetReadingSpokenBox();
  }

  function resetReadingSpokenBox() {
    if (enReadingSpokenBox) {
      enReadingSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (enReadingSpokenBadge) enReadingSpokenBadge.textContent = 'Đang chờ bạn đọc câu này...';
    if (enReadingSpokenText) enReadingSpokenText.textContent = '"..."';
    if (enReadingTypingCursor) enReadingTypingCursor.style.display = 'none';

    if (enPassageSpokenDisplay) {
      enPassageSpokenDisplay.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (enPassageSpokenStatus) enPassageSpokenStatus.textContent = 'Chờ bạn đọc câu này...';
    if (enPassageSpokenText) enPassageSpokenText.textContent = 'Chưa có giọng nói';
    if (enPassageTypingCursor) enPassageTypingCursor.style.display = 'none';
  }

  // Phát toàn bộ bài đọc tiếng Anh
  function playFullPassage() {
    if (typeof EN_READING_PASSAGES_DATA === 'undefined') return;
    const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences) return;

    if (isPlayingFullPassage) {
      stopFullPassage();
      return;
    }

    if (window.speechSynthesis) window.speechSynthesis.cancel();

    isPlayingFullPassage = true;
    if (enReadingListenAllBtn) {
      enReadingListenAllBtn.classList.add('is-playing');
      enReadingListenAllBtn.innerHTML = '⏸️ Đang đọc cả bài... (Bấm dừng)';
    }

    const fullText = passage.fullText || passage.sentences.map(s => s.en).join(' ');
    AppCore.speak(fullText, 'en-US');

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
    if (enReadingListenAllBtn) {
      enReadingListenAllBtn.classList.remove('is-playing');
      enReadingListenAllBtn.innerHTML = '🔊 Nghe toàn bài';
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  function stopReadingUserAudioPlayback() {
    // Giữ hàm để tương thích lời gọi từ AppCore
  }

  function clearAllReadingTempRecordings() {
    if (isReadingRecordingActive) {
      isReadingRecordingActive = false;
      if (enReadingRecordBtn) {
        enReadingRecordBtn.classList.remove('recording');
        enReadingRecordBtn.textContent = '🎯 Bấm để nói & Chấm điểm';
      }
      if (enReadingPassageRecordBtn) {
        enReadingPassageRecordBtn.classList.remove('recording');
        enReadingPassageRecordBtn.textContent = '🎯 Bấm để nói & Chấm điểm';
      }
      if (readingRecognition) {
        try { readingRecognition.stop(); } catch (e) {}
      }
      if (enReadingSpokenBox && enReadingSpokenBox.classList.contains('is-recording')) {
        enReadingSpokenBox.classList.remove('is-recording');
      }
    }
    stopFullPassage();
  }

  // 1. NHẬN DIỆN GIỌNG NÓI & CHẤM ĐIỂM TIẾNG ANH (SpeechRecognition)
  function stopReadingRecognition() {
    isReadingRecordingActive = false;
    if (enReadingRecordBtn) {
      enReadingRecordBtn.classList.remove('recording');
      enReadingRecordBtn.innerHTML = '🎯 Bấm để nói & Chấm điểm';
    }
    if (enReadingPassageRecordBtn) {
      enReadingPassageRecordBtn.classList.remove('recording');
      enReadingPassageRecordBtn.innerHTML = '🎯 Bấm để nói & Chấm điểm';
    }
    if (enReadingTypingCursor) enReadingTypingCursor.style.display = 'none';
    if (enPassageTypingCursor) enPassageTypingCursor.style.display = 'none';
    if (enPassageSpokenDisplay) {
      enPassageSpokenDisplay.classList.remove('is-recording');
    }
    if (readingRecognition) {
      try { readingRecognition.stop(); } catch (e) {}
    }
  }

  function startReadingRecognition() {
    if (!readingRecognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói Web Speech API.');
      return;
    }
    stopFullPassage();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    isReadingRecordingActive = true;
    hasEvaluatedReadingTurn = false;
    lastReadingTranscript = '';

    if (enReadingRecordBtn) {
      enReadingRecordBtn.classList.add('recording');
      enReadingRecordBtn.innerHTML = '⏹️ Đang lắng nghe... Bấm để dừng';
    }
    if (enReadingPassageRecordBtn) {
      enReadingPassageRecordBtn.classList.add('recording');
      enReadingPassageRecordBtn.innerHTML = '⏹️ Đang lắng nghe... Bấm để dừng';
    }

    if (enReadingSpokenBox) {
      enReadingSpokenBox.classList.remove('match-success', 'match-retry');
      enReadingSpokenBox.classList.add('is-recording');
    }
    if (enReadingSpokenBadge) enReadingSpokenBadge.textContent = '🎙️ Đang nghe giọng đọc tiếng Anh...';
    if (enReadingSpokenText) enReadingSpokenText.textContent = '"..."';

    if (enPassageSpokenDisplay) {
      enPassageSpokenDisplay.classList.remove('match-success', 'match-retry');
      enPassageSpokenDisplay.classList.add('is-recording');
    }
    if (enPassageSpokenStatus) enPassageSpokenStatus.textContent = '🔴 Đang lắng nghe...';
    if (enPassageSpokenText) enPassageSpokenText.textContent = '...';
    if (enPassageTypingCursor) enPassageTypingCursor.style.display = 'inline-block';

    if (enReadingFeedback) {
      enReadingFeedback.innerHTML = '<div class="feedback-status">Hãy đọc to, rõ ràng theo ngữ điệu câu mẫu nhé!</div>';
    }

    try {
      readingRecognition.start();
    } catch (e) {
      console.warn('Reading recognition start warning:', e);
    }
  }

  // ĐÁNH GIÁ PHÁT ÂM CÂU TIẾNG ANH THÔNG MINH
  function evaluateReadingSentence(transcript) {
    if (hasEvaluatedReadingTurn) return;
    hasEvaluatedReadingTurn = true;
    stopReadingRecognition();

    const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
    if (!passage || !passage.sentences || !passage.sentences[currentReadingSentenceIdx]) return;
    const item = passage.sentences[currentReadingSentenceIdx];

    if (enReadingSpokenText) enReadingSpokenText.textContent = `"${transcript}"`;
    if (enReadingSpokenBox) enReadingSpokenBox.classList.remove('is-recording');

    if (enPassageSpokenText) enPassageSpokenText.textContent = transcript;
    if (enPassageSpokenDisplay) enPassageSpokenDisplay.classList.remove('is-recording');
    if (enPassageTypingCursor) enPassageTypingCursor.style.display = 'none';

    const cleanTarget = item.en.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const cleanSpoken = transcript.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

    const targetWords = cleanTarget.split(/\s+/).filter(Boolean);
    const spokenWords = cleanSpoken.split(/\s+/).filter(Boolean);

    // Tính số từ trùng khớp
    let matchCount = 0;
    targetWords.forEach(tw => {
      if (spokenWords.includes(tw)) matchCount++;
    });

    const matchRatio = targetWords.length > 0 ? (matchCount / targetWords.length) : 0;
    const compactTarget = cleanTarget.replace(/\s+/g, '');
    const compactSpoken = cleanSpoken.replace(/\s+/g, '');

    const isMatch = (matchRatio >= 0.65) ||
                    compactSpoken.includes(compactTarget) ||
                    compactTarget.includes(compactSpoken) ||
                    (compactTarget.length > 6 && compactSpoken.length > 6 && (compactTarget.slice(0, 6) === compactSpoken.slice(0, 6)));

    if (isMatch) {
      if (enReadingSpokenBox) enReadingSpokenBox.classList.add('match-success');
      if (enReadingSpokenBadge) enReadingSpokenBadge.textContent = '✅ Đã nhận diện & Phát âm rất chuẩn!';
      if (enPassageSpokenDisplay) enPassageSpokenDisplay.classList.add('match-success');
      if (enPassageSpokenStatus) enPassageSpokenStatus.textContent = '✅ Phát âm rất chuẩn!';
      if (enReadingFeedback) {
        enReadingFeedback.innerHTML = `
          <div class="feedback-success">
            🎉 Tuyệt vời! Bạn phát âm câu trong đoạn văn rất chuẩn xác và trôi chảy!<br>
            <small style="opacity:0.9;">AI nhận diện được: "<em>${transcript}</em>" (Khớp ${Math.round(matchRatio * 100)}%)</small>
          </div>
        `;
      }
      AppCore.incrementWordCount();
      AppCore.state.spokenSentences.push({
        en: `[Bài đọc Anh] ${item.en}`,
        time: new Date().toLocaleTimeString('vi-VN')
      });
      if (AppCore.state.spokenSentences.length > 30) AppCore.state.spokenSentences.shift();
      AppCore.syncProgress();
    } else {
      if (enReadingSpokenBox) enReadingSpokenBox.classList.add('match-retry');
      if (enReadingSpokenBadge) enReadingSpokenBadge.textContent = '⚠️ Cần điều chỉnh phát âm';
      if (enPassageSpokenDisplay) enPassageSpokenDisplay.classList.add('match-retry');
      if (enPassageSpokenStatus) enPassageSpokenStatus.textContent = '⚠️ Cần điều chỉnh phát âm';
      if (enReadingFeedback) {
        enReadingFeedback.innerHTML = `
          <div class="feedback-retry">
            💡 AI nhận diện bạn vừa đọc là: "<strong>${transcript}</strong>"<br>
            Câu mẫu: "<strong>${item.en}</strong>"${item.ipa ? ` <em class="phonetic-text">(${item.ipa})</em>` : ''}.<br>
            <small>👉 Hãy bấm "🔊 Nghe câu này" để bắt chước lại ngữ điệu rồi thử lại nhé!</small>
          </div>
        `;
      }
    }
  }

  function init() {
    initDOM();

    if (enReadingUnitSelect) {
      enReadingUnitSelect.addEventListener('change', (e) => {
        loadReadingPassage(e.target.value);
      });
    }

    if (enReadingListenAllBtn) {
      enReadingListenAllBtn.addEventListener('click', () => {
        playFullPassage();
      });
    }

    if (enReadingListenBtn) {
      enReadingListenBtn.addEventListener('click', () => {
        if (typeof EN_READING_PASSAGES_DATA === 'undefined') return;
        const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences || !passage.sentences[currentReadingSentenceIdx]) return;
        stopFullPassage();
        AppCore.speak(passage.sentences[currentReadingSentenceIdx].en, 'en-US');
      });
    }

    if (enReadingPrevBtn) {
      enReadingPrevBtn.addEventListener('click', () => {
        if (typeof EN_READING_PASSAGES_DATA === 'undefined') return;
        const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences) return;
        stopFullPassage();
        const total = passage.sentences.length;
        loadReadingSentence((currentReadingSentenceIdx - 1 + total) % total);
      });
    }

    if (enReadingNextBtn) {
      enReadingNextBtn.addEventListener('click', () => {
        if (typeof EN_READING_PASSAGES_DATA === 'undefined') return;
        const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences) return;
        stopFullPassage();
        stopReadingRecognition();
        lastReadingTranscript = '';
        hasEvaluatedReadingTurn = false;
        const total = passage.sentences.length;
        loadReadingSentence((currentReadingSentenceIdx + 1) % total);
      });
    }

    // Nút Next câu tiếp theo ở bên phải nút Bấm để nói & Chấm điểm (Cột đoạn văn tiếng Anh)
    if (enReadingPassageNextBtn) {
      enReadingPassageNextBtn.addEventListener('click', () => {
        if (typeof EN_READING_PASSAGES_DATA === 'undefined') return;
        const passage = EN_READING_PASSAGES_DATA[currentReadingKey];
        if (!passage || !passage.sentences) return;
        stopFullPassage();
        stopReadingRecognition();
        lastReadingTranscript = '';
        hasEvaluatedReadingTurn = false;
        // Chuyển sang câu tiếp theo, reset input, không lưu gì cả
        const total = passage.sentences.length;
        loadReadingSentence((currentReadingSentenceIdx + 1) % total);
      });
    }

    // Web Speech API cho bài đọc Tiếng Anh
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      readingRecognition = new SpeechRecognition();
      readingRecognition.lang = 'en-US';
      readingRecognition.continuous = false;
      readingRecognition.interimResults = true;

      const handleRecordClick = () => {
        if (isReadingRecordingActive) {
          stopReadingRecognition();
          if (lastReadingTranscript && !hasEvaluatedReadingTurn) {
            evaluateReadingSentence(lastReadingTranscript);
          }
        } else {
          startReadingRecognition();
        }
      };

      if (enReadingRecordBtn) {
        enReadingRecordBtn.addEventListener('click', handleRecordClick);
      }
      if (enReadingPassageRecordBtn) {
        enReadingPassageRecordBtn.addEventListener('click', handleRecordClick);
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
          if (enReadingSpokenText) enReadingSpokenText.textContent = `"${currentText}"`;
          if (enReadingSpokenBadge) enReadingSpokenBadge.textContent = '🎙️ Đang nhận diện tiếng Anh...';
          if (enPassageSpokenText) enPassageSpokenText.textContent = currentText;
          if (enPassageSpokenStatus) enPassageSpokenStatus.textContent = '🎙️ Đang nhận diện...';
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
            if (enReadingSpokenBadge) enReadingSpokenBadge.textContent = 'Đã kết thúc lượt nghe';
            if (enReadingSpokenBox) enReadingSpokenBox.classList.remove('is-recording');
            if (enPassageSpokenStatus) enPassageSpokenStatus.textContent = 'Đã kết thúc lượt nghe';
            if (enPassageSpokenDisplay) enPassageSpokenDisplay.classList.remove('is-recording');
          }
        }
      };

      readingRecognition.onerror = (e) => {
        console.warn('English reading recognition error:', e.error);
        stopReadingRecognition();
        if (enReadingSpokenBox) enReadingSpokenBox.classList.remove('is-recording');
        if (enPassageSpokenDisplay) enPassageSpokenDisplay.classList.remove('is-recording');
        if (enPassageTypingCursor) enPassageTypingCursor.style.display = 'none';
        if (enPassageSpokenStatus) enPassageSpokenStatus.textContent = '⚠️ Lỗi nhận diện micro';

        if (e.error === 'no-speech') {
          if (enReadingFeedback) {
            enReadingFeedback.innerHTML = '<div class="feedback-error">⚠️ Không nhận được tiếng nói. Bạn hãy đọc to hơn hoặc để gần micro hơn nhé!</div>';
          }
        } else if (e.error === 'not-allowed') {
          if (enReadingFeedback) {
            enReadingFeedback.innerHTML = '<div class="feedback-error">⚠️ Trình duyệt chưa được cấp quyền Mic. Hãy kiểm tra và cho phép quyền truy cập Micro.</div>';
          }
        }
      };
    } else if (enReadingRecordBtn) {
      enReadingRecordBtn.title = 'Trình duyệt không hỗ trợ nhận diện giọng nói Web Speech API';
      enReadingRecordBtn.style.opacity = '0.5';
    }
  }

  return {
    renderReadingSelect,
    loadReadingPassage,
    loadReadingSentence,
    clearAllReadingTempRecordings,
    stopReadingUserAudioPlayback,
    init
  };
})();

window.ReadingEnModule = ReadingEnModule;
