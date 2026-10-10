// ========================================================
// APP.JS - English AI Buddy Logic
// Quản lý âm thanh (Web Speech API), Luyện nói, Hội thoại AI, Flashcards & Đồng bộ tiến độ
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentSpeed = parseFloat(localStorage.getItem('speechSpeed') || '1.0');
  let currentVoiceGender = localStorage.getItem('voiceGender') || 'female';
  let currentTab = 'lessons';
  let currentSpeakingIdx = 0;
  let currentFlashcardIdx = 0;
  let currentScenario = 'my_new_school';
  let currentScenarioStep = 0;
  let currentLessonName = localStorage.getItem('currentLessonName') || 'Unit 1: Bạn Mới & Năm Học Mới (My New School - Lớp 6)';
  let wordsLearnedCount = parseInt(localStorage.getItem('wordsLearnedCount') || '0', 10);
  let streakDays = parseInt(localStorage.getItem('streakDays') || '1', 10);
  let chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
  let spokenSentences = JSON.parse(localStorage.getItem('spokenSentences') || '[]');

  // DOM Elements
  const themeToggle = document.getElementById('theme-toggle');
  const saveLogBtn = document.getElementById('save-log-btn');
  const copySummaryBtn = document.getElementById('copy-summary-btn');
  const streakCountEl = document.getElementById('streak-count');
  const wordsLearnedEl = document.getElementById('words-learned');
  const speedBtns = document.querySelectorAll('.speed-btn');
  const voiceBtns = document.querySelectorAll('.voice-btn');
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');

  // Lessons elements
  const lessonsGrid = document.getElementById('lessons-grid');
  const lessonDetailView = document.getElementById('lesson-detail-view');
  const lessonDetailContent = document.getElementById('lesson-detail-content');
  const backToLessonsBtn = document.getElementById('back-to-lessons-btn');

  // Chat elements
  const scenarioSelect = document.getElementById('scenario-select');
  const chatMessages = document.getElementById('chat-messages');
  const quickRepliesContainer = document.getElementById('quick-replies');
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');
  const chatMicBtn = document.getElementById('chat-mic-btn');
  const chatClearBtn = document.getElementById('chat-clear-btn');

  // Speaking elements (Sentence Shadowing)
  const spkUnitSelect = document.getElementById('spk-unit-select');
  const spkCategory = document.getElementById('spk-category');
  const spkPhraseEn = document.getElementById('spk-phrase-en');
  const spkPhraseIpa = document.getElementById('spk-phrase-ipa');
  const spkPhraseVi = document.getElementById('spk-phrase-vi');
  const spkListenBtn = document.getElementById('spk-listen-btn');
  const spkRecordBtn = document.getElementById('spk-record-btn');
  const spkPrevBtn = document.getElementById('spk-prev-btn');
  const spkNextBtn = document.getElementById('spk-next-btn');
  const spkFeedback = document.getElementById('spk-feedback');
  const spkSentencesWrapper = document.getElementById('spk-sentences-wrapper');
  const spkPlayRecordBtn = document.getElementById('spk-play-record-btn');
  const tempRecordingsBar = document.getElementById('temp-recordings-bar');
  const btnPlayRecPrev = document.getElementById('btn-play-rec-prev');
  const btnPlayRecCurr = document.getElementById('btn-play-rec-curr');
  const btnPlayRecNext = document.getElementById('btn-play-rec-next');
  const recLabelPrev = document.getElementById('rec-label-prev');
  const recLabelCurr = document.getElementById('rec-label-curr');
  const recLabelNext = document.getElementById('rec-label-next');

  // Speaking elements (Vocabulary Speaking Lab - Mới)
  const btnModeVocab = document.getElementById('btn-mode-vocab');
  const btnModeSentence = document.getElementById('btn-mode-sentence');
  const vocabSpeakingSection = document.getElementById('vocab-speaking-section');
  const sentenceSpeakingSection = document.getElementById('sentence-speaking-section');

  const vocabScenarioSelect = document.getElementById('vocab-scenario-select');
  const vocabChipsWrapper = document.getElementById('vocab-chips-wrapper');
  const vocabCategory = document.getElementById('vocab-category');
  const vocabWordEn = document.getElementById('vocab-word-en');
  const vocabWordIpa = document.getElementById('vocab-word-ipa');
  const vocabWordVi = document.getElementById('vocab-word-vi');
  const vocabWordTip = document.getElementById('vocab-word-tip');
  const vocabListenBtn = document.getElementById('vocab-listen-btn');
  const vocabRecordBtn = document.getElementById('vocab-record-btn');
  const vocabPrevBtn = document.getElementById('vocab-prev-btn');
  const vocabNextBtn = document.getElementById('vocab-next-btn');
  const vocabFeedback = document.getElementById('vocab-feedback');
  const vocabRemoveBtn = document.getElementById('vocab-remove-btn');
  const btnAddVocab = document.getElementById('btn-add-vocab');
  const btnResetVocab = document.getElementById('btn-reset-vocab');

  // Spoken Result elements (Hiển thị câu nói & Typewriter)
  const vocabSpokenBox = document.getElementById('vocab-spoken-box');
  const vocabSpokenBadge = document.getElementById('vocab-spoken-badge');
  const vocabSpokenText = document.getElementById('vocab-spoken-text');
  const vocabTypingCursor = document.getElementById('vocab-typing-cursor');

  const spkSpokenBox = document.getElementById('spk-spoken-box');
  const spkSpokenBadge = document.getElementById('spk-spoken-badge');
  const spkSpokenText = document.getElementById('spk-spoken-text');
  const spkTypingCursor = document.getElementById('spk-typing-cursor');

  // Add Vocab Modal elements
  const addVocabModal = document.getElementById('add-vocab-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const modalSaveBtn = document.getElementById('modal-save-btn');
  const newVocabWord = document.getElementById('new-vocab-word');
  const newVocabVi = document.getElementById('new-vocab-vi');
  const newVocabIpa = document.getElementById('new-vocab-ipa');
  const newVocabTip = document.getElementById('new-vocab-tip');

  // Flashcards elements
  const flashcard = document.getElementById('flashcard');
  const fcCategory = document.getElementById('fc-category');
  const fcWord = document.getElementById('fc-word');
  const fcPhonetic = document.getElementById('fc-phonetic');
  const fcSoundBtn = document.getElementById('fc-sound-btn');
  const fcMeaning = document.getElementById('fc-meaning');
  const fcEasyRead = document.getElementById('fc-easy-read');
  const fcCounter = document.getElementById('fc-counter');
  const fcPrevBtn = document.getElementById('fc-prev-btn');
  const fcNextBtn = document.getElementById('fc-next-btn');

  // ==========================================
  // 1. Text-to-Speech (Ưu tiên giọng Nữ chuẩn Mỹ)
  // ==========================================
  function getPreferredVoice(gender = 'female') {
    const voices = window.speechSynthesis.getVoices();
    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    if (englishVoices.length === 0) return null;

    if (gender === 'female') {
      // Danh sách ưu tiên giọng nữ phổ biến & tự nhiên nhất trên Windows, Edge, Chrome, Mac
      const femaleKeywords = [
        'jenny', 'aria', 'zira', 'samantha', 'victoria', 'karen', 'google us english',
        'female', 'stephanie', 'susan', 'allison', 'ava', 'emma', 'olivia', 'cindy'
      ];
      for (const kw of femaleKeywords) {
        const found = englishVoices.find(v => v.name.toLowerCase().includes(kw));
        if (found) return found;
      }
      // Nếu không tìm thấy theo tên, loại trừ các giọng nam rõ ràng
      const fallbackFemale = englishVoices.find(v =>
        !v.name.toLowerCase().includes('david') &&
        !v.name.toLowerCase().includes('guy') &&
        !v.name.toLowerCase().includes('george') &&
        !v.name.toLowerCase().includes('mark') &&
        !v.name.toLowerCase().includes('male')
      );
      if (fallbackFemale) return fallbackFemale;
    } else {
      // Giọng nam
      const maleKeywords = ['guy', 'david', 'george', 'mark', 'google uk english male', 'male'];
      for (const kw of maleKeywords) {
        const found = englishVoices.find(v => v.name.toLowerCase().includes(kw));
        if (found) return found;
      }
    }

    return englishVoices[0];
  }

  function speak(text, lang = 'en-US') {
    if (typeof stopUserAudioPlayback === 'function') {
      stopUserAudioPlayback();
    }
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ phát âm tự động.');
      return;
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = currentSpeed;

    const chosenVoice = getPreferredVoice(currentVoiceGender);
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    // Điều chỉnh độ cao (pitch): giọng nữ thanh và trong trẻo hơn một chút
    if (currentVoiceGender === 'female') {
      utterance.pitch = 1.08;
    } else {
      utterance.pitch = 0.95;
    }

    window.speechSynthesis.speak(utterance);
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  // Voice Gender Buttons
  voiceBtns.forEach(btn => {
    if (btn.dataset.gender === currentVoiceGender) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      voiceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentVoiceGender = btn.dataset.gender;
      localStorage.setItem('voiceGender', currentVoiceGender);
      // Phát âm thử 1 câu chào mừng ngắn bằng giọng vừa chọn
      const sample = currentVoiceGender === 'female' ? "Hello! I am your female English tutor." : "Hello! I am your male English tutor.";
      speak(sample);
    });
  });

  // Khởi tạo trạng thái nút tốc độ nói từ localStorage
  speedBtns.forEach(btn => {
    btn.classList.toggle('active', parseFloat(btn.dataset.speed) === currentSpeed);
    btn.addEventListener('click', () => {
      speedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSpeed = parseFloat(btn.dataset.speed);
      localStorage.setItem('speechSpeed', currentSpeed);
    });
  });

  // ==========================================
  // 2. Navigation & Tabs
  // ==========================================
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.dataset.tab;
      switchTab(targetTab);
    });
  });

  function switchTab(tabId) {
    if (tabId !== 'speaking' && typeof clearAllTempRecordings === 'function') {
      clearAllTempRecordings();
    }
    currentTab = tabId;
    navItems.forEach(nav => {
      nav.classList.toggle('active', nav.dataset.tab === tabId);
    });
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    if (tabId === 'lessons') {
      pageTitle.textContent = 'Lộ trình bài học giao tiếp hàng ngày';
      pageSubtitle.textContent = 'Học qua phản xạ thực tế, nghe giọng bản ngữ và thực hành ngay lập tức';
    } else if (tabId === 'chat') {
      pageTitle.textContent = 'Luyện phản xạ giao tiếp với Trợ lý Alex';
      pageSubtitle.textContent = 'Tự tin đóng vai theo các tình huống đời sống thường gặp nhất';
    } else if (tabId === 'speaking') {
      pageTitle.textContent = 'Phòng luyện phát âm & Nhại giọng (Shadowing)';
      pageSubtitle.textContent = 'Nghe người bản xứ nói và nhại theo để chỉnh khẩu hình & ngữ điệu';
    } else if (tabId === 'flashcards') {
      pageTitle.textContent = 'Sổ tay từ vựng & Mẫu câu thông dụng';
      pageSubtitle.textContent = 'Lật thẻ ghi nhớ câu nói kèm phiên âm tiếng Việt dễ đọc';
    }
  }

  // ==========================================
  // 3. Render Lộ trình bài học
  // ==========================================
  function renderLessons() {
    lessonsGrid.innerHTML = '';
    LESSONS_DATA.forEach(lesson => {
      const card = document.createElement('div');
      card.className = 'lesson-card';
      card.innerHTML = `
        <div class="lesson-card-header">
          <span class="lesson-order-badge">${lesson.order} • ${lesson.badge}</span>
          <span class="lesson-status-icon">📖</span>
        </div>
        <div>
          <h3 class="lesson-card-title">${lesson.title}</h3>
          <div class="lesson-card-title-en">${lesson.titleEn}</div>
        </div>
        <p class="lesson-card-desc">${lesson.desc}</p>
        <div class="lesson-card-footer">
          <span class="lesson-card-meta">⏱️ ${lesson.duration} • ${lesson.phrases.length} mẫu câu</span>
          <span class="btn-open-lesson">Vào học ➔</span>
        </div>
      `;
      card.addEventListener('click', () => openLessonDetail(lesson));
      lessonsGrid.appendChild(card);
    });
  }

  function openLessonDetail(lesson) {
    currentLessonName = `${lesson.order}: ${lesson.title}`;
    localStorage.setItem('currentLessonName', currentLessonName);

    document.querySelector('.lessons-overview').style.display = 'none';
    lessonDetailView.classList.remove('hidden');

    let phrasesHtml = lesson.phrases.map((p, idx) => `
      <div class="phrase-item">
        <div class="phrase-content">
          <div class="phrase-en">
            <span>${idx + 1}. "${p.en}"</span>
          </div>
          <div class="phrase-ipa">${p.ipa} &nbsp;•&nbsp; <em>Đọc dễ: ${p.readVi}</em></div>
          <div class="phrase-vi">👉 ${p.vi}</div>
          <div style="font-size: 0.78rem; color: #a5b4fc; margin-top: 4px;">💡 Mẹo: ${p.tip}</div>
        </div>
        <button class="phrase-audio-btn" data-text="${p.en.replace(/"/g, '&quot;')}">
          🔊 Nghe
        </button>
      </div>
    `).join('');

    lessonDetailContent.innerHTML = `
      <div class="lesson-body">
        <div class="lesson-body-header">
          <span class="lesson-order-badge">${lesson.order}</span>
          <h2>${lesson.title}</h2>
          <p>${lesson.titleEn}</p>
        </div>

        <div style="background: rgba(99,102,241,0.08); padding: 16px; border-radius: 12px; border-left: 4px solid var(--primary);">
          <strong>🎯 Hướng dẫn học:</strong> Hãy bấm nút <strong>"🔊 Nghe"</strong> từng câu từ 2-3 lần. Nhắm mắt lắng nghe nhịp điệu, sau đó mở miệng đọc to nhại theo (Shadowing).
        </div>

        <div class="phrases-list">
          ${phrasesHtml}
        </div>
      </div>
    `;

    lessonDetailContent.querySelectorAll('.phrase-audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        speak(btn.dataset.text);
        incrementWordCount();
      });
    });

    syncProgress();
  }

  backToLessonsBtn.addEventListener('click', () => {
    lessonDetailView.classList.add('hidden');
    document.querySelector('.lessons-overview').style.display = 'block';
  });

  // ==========================================
  // 4. Luyện phản xạ Hội thoại AI (Roleplay)
  // ==========================================
  function renderScenarioSelect() {
    if (!scenarioSelect) return;
    scenarioSelect.innerHTML = '';
    const keys = Object.keys(CHAT_SCENARIOS || {});
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có bài hội thoại - Chờ nạp bài mới)';
      scenarioSelect.appendChild(opt);
    } else {
      keys.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = (CHAT_SCENARIOS[k] && CHAT_SCENARIOS[k].title) ? CHAT_SCENARIOS[k].title : k;
        scenarioSelect.appendChild(opt);
      });
    }
  }

  function loadScenario(scenarioKey) {
    currentScenario = scenarioKey;
    currentScenarioStep = 0;
    const scenario = CHAT_SCENARIOS ? CHAT_SCENARIOS[scenarioKey] : null;
    chatMessages.innerHTML = '';

    if (!scenario) {
      chatMessages.innerHTML = `
        <div style="text-align:center; padding: 48px 20px; color: var(--text-muted);">
          <div style="font-size: 2.8rem; margin-bottom: 14px;">💬</div>
          <h3 style="margin-bottom: 8px; color: var(--text-main);">Chưa có bài hội thoại nào</h3>
          <p style="font-size: 0.95rem; max-width: 480px; margin: 0 auto; line-height: 1.6;">
            Dữ liệu bài hội thoại đã được dọn sạch theo yêu cầu.<br>
            Bạn hãy gửi các đoạn hội thoại hoặc kế hoạch mới cho AI để nạp vào nhé!
          </p>
        </div>
      `;
      renderQuickReplies([]);
      return;
    }

    // Render tin nhắn mở đầu của Alex
    if (scenario.initialMessages && Array.isArray(scenario.initialMessages)) {
      scenario.initialMessages.forEach(msg => {
        appendChatMessage(msg.sender, msg.en, msg.vi, false);
      });
    }

    renderQuickReplies(scenario.initialReplies || scenario.replies || []);
  }

  function appendChatMessage(sender, textEn, textVi, recordHistory = true) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = `
      <div class="msg-bubble">
        <div class="msg-text-en">
          ${textEn}
          <button class="msg-sound-btn" title="Nghe câu này">🔊</button>
        </div>
        <div class="msg-text-vi">${textVi}</div>
      </div>
    `;

    msgDiv.querySelector('.msg-sound-btn').addEventListener('click', () => {
      speak(textEn);
    });

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (recordHistory) {
      chatHistory.push({
        sender,
        en: textEn,
        vi: textVi,
        time: new Date().toLocaleTimeString('vi-VN')
      });
      // Keep last 30 messages
      if (chatHistory.length > 30) chatHistory.shift();
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
      syncProgress();
    }

    if (sender === 'bot') {
      speak(textEn);
    }
  }

  function renderQuickReplies(replies) {
    quickRepliesContainer.innerHTML = '';
    if (!replies || replies.length === 0) {
      quickRepliesContainer.innerHTML = '<span style="color:var(--text-muted);font-size:0.8rem;">Hãy gõ câu trả lời của bạn vào ô phía dưới hoặc chọn tình huống khác 👇</span>';
      return;
    }

    replies.forEach(reply => {
      const chip = document.createElement('button');
      chip.className = 'quick-reply-chip';
      chip.innerHTML = `<span>💬 "${reply.en}"</span> <span style="font-size:0.75rem;opacity:0.8;">(${reply.vi})</span>`;
      chip.addEventListener('click', () => {
        handleUserMessage(reply.en, reply.vi);
      });
      quickRepliesContainer.appendChild(chip);
    });
  }

  function handleUserMessage(textEn, textVi = '') {
    if (!textEn.trim()) return;

    // Điều hướng nhanh khi người dùng bấm vào các nút gợi ý đặc biệt ở cuối bài
    if (textEn.includes("Let's practice this scenario one more time!")) {
      loadScenario(currentScenario);
      return;
    }
    if (textEn.includes("I want to try ordering coffee at Coffee House!")) {
      scenarioSelect.value = 'coffee';
      loadScenario('coffee');
      return;
    }
    if (textEn.includes("Let's try shopping & asking for prices next!")) {
      scenarioSelect.value = 'shopping';
      loadScenario('shopping');
      return;
    }
    if (textEn.includes("Let's try asking for directions next!")) {
      scenarioSelect.value = 'directions';
      loadScenario('directions');
      return;
    }
    if (textEn.includes("Let's go back to Lesson 1 practice!")) {
      switchTab('lessons');
      return;
    }

    appendChatMessage('user', textEn, textVi || 'Phản xạ của bạn', true);
    chatInput.value = '';
    quickRepliesContainer.innerHTML = '<span style="color:var(--text-muted);font-size:0.8rem;">Alex đang suy nghĩ phản hồi... ⏳</span>';

    incrementWordCount();

    setTimeout(() => {
      const scenario = CHAT_SCENARIOS[currentScenario];

      // Nếu kịch bản có các bước tuần tự phong phú (multi-turn dialogue)
      if (scenario.steps && scenario.steps.length > 0) {
        if (currentScenarioStep < scenario.steps.length) {
          const stepData = scenario.steps[currentScenarioStep];
          currentScenarioStep++;

          const botReply = typeof stepData.botReply === 'function' ? stepData.botReply(textEn) : stepData.botReply;
          appendChatMessage('bot', botReply.en, botReply.vi, true);
          renderQuickReplies(stepData.replies);
        } else {
          // Khi đã hoàn thành tất cả các lượt
          appendChatMessage('bot',
            "🎉 You have completed this full conversation! Would you like to practice again or explore another scenario?",
            "🎉 Bạn đã hoàn thành trọn vẹn bài hội thoại này! Bạn muốn luyện lại hay thử chủ đề khác?",
            true
          );
          renderQuickReplies([
            { en: "Let's practice this scenario one more time!", vi: "Hãy cùng luyện lại tình huống này một lần nữa!" },
            { en: "I want to try ordering coffee at Coffee House!", vi: "Tôi muốn thử tình huống gọi cà phê tại quán!" }
          ]);
        }
      } else {
        const botReply = scenario.responses ? scenario.responses.default : { en: "Thank you for chatting!", vi: "Cảm ơn bạn đã trò chuyện!" };
        appendChatMessage('bot', botReply.en, botReply.vi, true);
        renderQuickReplies(botReply.nextReplies || [
          { en: "Thank you for practicing with me!", vi: "Cảm ơn bạn đã luyện tập cùng tôi!" },
          { en: "Have a nice day! See you soon!", vi: "Chúc một ngày tốt lành! Hẹn gặp lại nhé!" }
        ]);
      }
    }, 700);
  }

  function stopChatListening() {
    if (isListeningChat && recognition) {
      userManuallyStopped = true;
      recognition.stop();
    }
  }

  chatSendBtn.addEventListener('click', () => {
    stopChatListening();
    handleUserMessage(chatInput.value.trim());
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      stopChatListening();
      handleUserMessage(chatInput.value.trim());
    }
  });

  if (chatClearBtn) {
    chatClearBtn.addEventListener('click', () => {
      chatInput.value = '';
      baseInputText = '';
      if (isListeningChat && recognition) {
        userManuallyStopped = true;
        recognition.stop();
      }
      chatInput.focus();
    });
  }

  scenarioSelect.addEventListener('change', (e) => {
    loadScenario(e.target.value);
  });

  // Chat Voice Input (Chủ động bật/tắt - Không tự ngắt khi ngập ngừng suy nghĩ)
  let isListeningChat = false;
  let userManuallyStopped = false;
  let baseInputText = '';
  let recognition = null;

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;

    chatMicBtn.addEventListener('click', () => {
      if (isListeningChat) {
        userManuallyStopped = true;
        recognition.stop();
        return;
      }
      try {
        userManuallyStopped = false;
        baseInputText = chatInput.value.trim() ? chatInput.value.trim() + ' ' : '';
        recognition.start();
        chatMicBtn.classList.add('recording');
        chatMicBtn.textContent = '⏹️';
        chatMicBtn.title = 'Đang lắng nghe... Bấm vào đây để DỪNG khi bạn nói xong';
        isListeningChat = true;
      } catch (err) {
        console.error(err);
      }
    });

    recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = 0; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' ';
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      chatInput.value = (baseInputText + finalTranscript + interimTranscript).trim();
      chatInput.focus();
    };

    recognition.onend = () => {
      // Nếu người dùng chưa bấm dừng mà trình duyệt tự ngắt do khoảng lặng suy nghĩ, tự động bật lại
      if (isListeningChat && !userManuallyStopped) {
        try {
          recognition.start();
          return;
        } catch (err) {
          // Tránh crash nếu trình duyệt chặn restart tức thì
        }
      }
      chatMicBtn.classList.remove('recording');
      chatMicBtn.textContent = '🎙️';
      chatMicBtn.title = 'Bấm để nói bằng giọng của bạn (Bấm lại để dừng)';
      isListeningChat = false;
    };

    recognition.onerror = (event) => {
      if (event.error === 'no-speech') {
        // Người học đang suy nghĩ từ ngữ, không cần báo lỗi
        return;
      }
      console.warn('Speech recognition warning:', event.error);
    };
  } else {
    chatMicBtn.title = 'Trình duyệt không hỗ trợ nhận diện giọng nói';
    chatMicBtn.style.opacity = '0.5';
  }

  // ==========================================
  // 5.1. Luyện nói theo từng từ vựng (Từ phản xạ)
  // ==========================================
  let currentVocabScenario = 'my_new_school';
  let currentVocabIdx = 0;

  // Khởi tạo & nạp dữ liệu từ vựng của người dùng (lưu trữ trong LocalStorage)
  let userVocabData = null;
  try {
    const savedVocab = localStorage.getItem('userVocabData');
    if (savedVocab) {
      userVocabData = JSON.parse(savedVocab);
    }
  } catch (e) {
    userVocabData = null;
  }
  // Nếu chưa có hoặc chỉ chứa các danh mục cũ, đồng bộ sang danh mục mới
  if (!userVocabData || !userVocabData.my_new_school) {
    userVocabData = JSON.parse(JSON.stringify(VOCAB_SCENARIOS_DATA));
    saveUserVocabData();
  }

  function saveUserVocabData() {
    localStorage.setItem('userVocabData', JSON.stringify(userVocabData));
  }

  function renderVocabScenarioSelect() {
    if (!vocabScenarioSelect) return;
    vocabScenarioSelect.innerHTML = '';
    const keys = Object.keys(userVocabData || VOCAB_SCENARIOS_DATA || {});
    keys.forEach(k => {
      const item = (userVocabData && userVocabData[k]) || VOCAB_SCENARIOS_DATA[k];
      if (item) {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = `${item.icon || '📖'} ${item.title || k}`;
        vocabScenarioSelect.appendChild(opt);
      }
    });
    vocabScenarioSelect.value = currentVocabScenario;
  }

  // Chuyển đổi giữa 2 chế độ: Luyện từ vựng vs Luyện cả câu
  if (btnModeVocab && btnModeSentence) {
    btnModeVocab.addEventListener('click', () => {
      if (typeof clearAllTempRecordings === 'function') {
        clearAllTempRecordings();
      }
      btnModeVocab.classList.add('active');
      btnModeSentence.classList.remove('active');
      vocabSpeakingSection.style.display = 'flex';
      sentenceSpeakingSection.style.display = 'none';
    });

    btnModeSentence.addEventListener('click', () => {
      btnModeSentence.classList.add('active');
      btnModeVocab.classList.remove('active');
      sentenceSpeakingSection.style.display = 'flex';
      vocabSpeakingSection.style.display = 'none';
    });
  }

  function loadVocabScenario(scenarioKey) {
    currentVocabScenario = scenarioKey;
    currentVocabIdx = 0;
    const scenarioData = userVocabData[scenarioKey];
    if (!scenarioData) return;

    vocabChipsWrapper.innerHTML = '';

    if (!scenarioData.words || scenarioData.words.length === 0) {
      vocabChipsWrapper.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:6px 0;">Danh sách trống. Hãy bấm "➕ Thêm từ" hoặc "🔄 Khôi phục" nhé!</span>';
      vocabCategory.textContent = `${scenarioData.title.toUpperCase()} (TRỐNG)`;
      vocabWordEn.textContent = "Không có từ nào";
      vocabWordIpa.textContent = "Bạn đã loại bỏ hết từ trong danh sách này.";
      vocabWordVi.textContent = "Bấm nút '➕ Thêm từ' ở trên để tự thêm từ vựng mới hoặc '🔄 Khôi phục' để lấy lại từ mặc định.";
      vocabWordTip.textContent = "";
      vocabFeedback.innerHTML = '<div class="feedback-status">Hãy thêm từ vựng để bắt đầu luyện nói!</div>';
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
    const scenarioData = userVocabData[currentVocabScenario];
    if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;

    if (idx >= scenarioData.words.length) idx = 0;
    currentVocabIdx = idx;
    const item = scenarioData.words[idx];

    // Cập nhật chip active
    const chips = vocabChipsWrapper.querySelectorAll('.vocab-chip');
    chips.forEach((c, i) => {
      if (i === idx) {
        c.classList.add('active');
        c.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        c.classList.remove('active');
      }
    });

    vocabCategory.textContent = `${scenarioData.title.toUpperCase()} (TỪ ${idx + 1} / ${scenarioData.words.length})`;
    vocabWordEn.textContent = item.word;
    vocabWordIpa.textContent = item.ipa ? `Phiên âm: ${item.ipa} ${item.readVi ? `(${item.readVi})` : ''}` : '';
    vocabWordVi.textContent = item.vi ? `Ý nghĩa: ${item.vi}` : '';
    vocabWordTip.textContent = item.tip ? `💡 Mẹo phát âm: ${item.tip}` : '';
    vocabFeedback.innerHTML = `<div class="feedback-status">Bấm <strong>"Nghe phát âm từ mẫu"</strong>, sau đó bấm <strong>"Bấm để nói từ này"</strong> nhé!</div>`;
    if (typeof resetVocabSpokenBox === 'function') resetVocabSpokenBox();
  }

  // Đổi tình huống từ vựng
  if (vocabScenarioSelect) {
    vocabScenarioSelect.addEventListener('change', (e) => {
      loadVocabScenario(e.target.value);
    });
  }

  // Loại bỏ từ không muốn học
  if (vocabRemoveBtn) {
    vocabRemoveBtn.addEventListener('click', () => {
      const scenarioData = userVocabData[currentVocabScenario];
      if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;

      const removedWord = scenarioData.words[currentVocabIdx].word;
      scenarioData.words.splice(currentVocabIdx, 1);
      saveUserVocabData();
      syncProgress();

      if (currentVocabIdx >= scenarioData.words.length) {
        currentVocabIdx = Math.max(0, scenarioData.words.length - 1);
      }

      loadVocabScenario(currentVocabScenario);
      if (scenarioData.words.length > 0) {
        loadVocabWord(currentVocabIdx);
      }

      vocabFeedback.innerHTML = `<div class="feedback-status" style="color:var(--accent-rose);">🗑️ Đã loại bỏ từ "<strong>${removedWord}</strong>" khỏi danh sách luyện tập!</div>`;
    });
  }

  // Khôi phục danh sách từ gốc
  if (btnResetVocab) {
    btnResetVocab.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn khôi phục lại danh sách từ vựng gốc cho chủ đề này không?')) {
        userVocabData[currentVocabScenario] = JSON.parse(JSON.stringify(VOCAB_SCENARIOS_DATA[currentVocabScenario]));
        saveUserVocabData();
        syncProgress();
        loadVocabScenario(currentVocabScenario);
      }
    });
  }

  // Mở modal thêm từ vựng mới
  if (btnAddVocab && addVocabModal) {
    btnAddVocab.addEventListener('click', () => {
      addVocabModal.style.display = 'flex';
      newVocabWord.value = '';
      newVocabVi.value = '';
      newVocabIpa.value = '';
      newVocabTip.value = '';
      newVocabWord.focus();
    });
  }

  // Đóng modal
  function closeAddVocabModal() {
    if (addVocabModal) addVocabModal.style.display = 'none';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeAddVocabModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeAddVocabModal);

  // Lưu từ mới từ modal
  if (modalSaveBtn) {
    modalSaveBtn.addEventListener('click', () => {
      const word = newVocabWord.value.trim();
      if (!word) {
        alert('Vui lòng nhập từ tiếng Anh bạn muốn học!');
        newVocabWord.focus();
        return;
      }

      const vi = newVocabVi.value.trim() || 'Từ do bạn tự thêm';
      const ipa = newVocabIpa.value.trim() || '';
      const tip = newVocabTip.value.trim() || 'Từ vựng do bạn tự thêm vào danh sách';

      const scenarioData = userVocabData[currentVocabScenario];
      if (!scenarioData.words) scenarioData.words = [];

      scenarioData.words.push({
        word,
        ipa,
        readVi: '',
        vi,
        tip
      });

      saveUserVocabData();
      syncProgress();
      closeAddVocabModal();

      loadVocabScenario(currentVocabScenario);
      loadVocabWord(scenarioData.words.length - 1);

      vocabFeedback.innerHTML = `<div class="feedback-success">✨ Đã thêm thành công từ "<strong>${word}</strong>"! Hãy bấm nghe phát âm và luyện nói ngay nhé!</div>`;
    });
  }

  if (vocabListenBtn) {
    vocabListenBtn.addEventListener('click', () => {
      const scenarioData = userVocabData[currentVocabScenario];
      if (scenarioData && scenarioData.words && scenarioData.words[currentVocabIdx]) {
        speak(scenarioData.words[currentVocabIdx].word);
      }
    });
  }

  if (vocabPrevBtn) {
    vocabPrevBtn.addEventListener('click', () => {
      const scenarioData = userVocabData[currentVocabScenario];
      if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
      currentVocabIdx = (currentVocabIdx - 1 + scenarioData.words.length) % scenarioData.words.length;
      loadVocabWord(currentVocabIdx);
    });
  }

  if (vocabNextBtn) {
    vocabNextBtn.addEventListener('click', () => {
      const scenarioData = userVocabData[currentVocabScenario];
      if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;
      currentVocabIdx = (currentVocabIdx + 1) % scenarioData.words.length;
      loadVocabWord(currentVocabIdx);
    });
  }

  // Hiệu ứng Typewriter hiển thị kết quả người nói (Typewriter & Live Speech)
  let activeTypewriterTimer = null;
  function animateTypewriter(textEl, cursorEl, fullText, callback) {
    if (activeTypewriterTimer) clearInterval(activeTypewriterTimer);
    if (!textEl) return;
    textEl.textContent = '';
    if (cursorEl) cursorEl.style.display = 'inline-block';
    let charIdx = 0;
    const speed = Math.max(12, Math.min(32, 450 / (fullText.length || 1)));
    activeTypewriterTimer = setInterval(() => {
      charIdx++;
      textEl.textContent = fullText.slice(0, charIdx);
      if (charIdx >= fullText.length) {
        clearInterval(activeTypewriterTimer);
        activeTypewriterTimer = null;
        setTimeout(() => {
          if (cursorEl) cursorEl.style.display = 'none';
        }, 1200);
        if (callback) callback();
      }
    }, speed);
  }

  function resetVocabSpokenBox() {
    if (activeTypewriterTimer) clearInterval(activeTypewriterTimer);
    if (vocabSpokenBox) {
      vocabSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (vocabSpokenBadge) {
      vocabSpokenBadge.textContent = 'Đang chờ bạn nói...';
    }
    if (vocabSpokenText) {
      vocabSpokenText.textContent = '"..."';
    }
    if (vocabTypingCursor) {
      vocabTypingCursor.style.display = 'none';
    }
  }

  function resetSpkSpokenBox() {
    if (activeTypewriterTimer) clearInterval(activeTypewriterTimer);
    if (spkSpokenBox) {
      spkSpokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (spkSpokenBadge) {
      spkSpokenBadge.textContent = 'Đang chờ bạn nói...';
    }
    if (spkSpokenText) {
      spkSpokenText.textContent = '"..."';
    }
    if (spkTypingCursor) {
      spkTypingCursor.style.display = 'none';
    }
  }

  // Nhận diện giọng nói cho từ vựng đơn lẻ (Module 1)
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const vocabRecognition = new SpeechRecognition();
    vocabRecognition.lang = 'en-US';
    vocabRecognition.interimResults = true;
    vocabRecognition.maxAlternatives = 1;

    let isVocabEvaluating = false;

    if (vocabRecordBtn) {
      vocabRecordBtn.addEventListener('click', () => {
        const scenarioData = userVocabData[currentVocabScenario];
        if (!scenarioData || !scenarioData.words || scenarioData.words.length === 0) return;

        try {
          isVocabEvaluating = false;
          vocabRecognition.start();
          vocabRecordBtn.classList.add('recording');
          vocabRecordBtn.textContent = '🔴 Đang nghe... Hãy đọc to từ này!';
          if (vocabSpokenBox) {
            vocabSpokenBox.classList.remove('match-success', 'match-retry');
            vocabSpokenBox.classList.add('is-recording');
          }
          if (vocabSpokenBadge) {
            vocabSpokenBadge.textContent = '🔴 Đang lắng nghe... Nói to rõ ràng!';
          }
          if (vocabSpokenText) {
            vocabSpokenText.textContent = '...';
          }
          if (vocabTypingCursor) {
            vocabTypingCursor.style.display = 'inline-block';
          }
          vocabFeedback.innerHTML = '<div class="feedback-status">Đang lắng nghe bạn đọc từ... Nói to rõ ràng nhé!</div>';
        } catch (err) {
          console.error(err);
        }
      });
    }

    vocabRecognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      // Stream trực tiếp chữ đang nói lên màn hình
      if (interimTranscript && !finalTranscript) {
        if (vocabSpokenText) {
          vocabSpokenText.textContent = `"${interimTranscript}`;
        }
        if (vocabSpokenBadge) {
          vocabSpokenBadge.textContent = '🎙️ Đang nghe thấy âm thanh...';
        }
      }

      if (finalTranscript && !isVocabEvaluating) {
        isVocabEvaluating = true;
        const transcript = finalTranscript.trim();
        const scenarioData = userVocabData[currentVocabScenario];
        if (!scenarioData || !scenarioData.words || !scenarioData.words[currentVocabIdx]) return;
        const item = scenarioData.words[currentVocabIdx];

        const cleanSpoken = transcript.toLowerCase().trim().replace(/[.,!?'"-]/g, '');
        const cleanTarget = item.word.toLowerCase().trim().replace(/[.,!?'"-]/g, '');

        // So khớp từ
        const isMatch = cleanSpoken === cleanTarget ||
          cleanSpoken.split(' ').includes(cleanTarget) ||
          cleanTarget.split(' ').includes(cleanSpoken) ||
          cleanSpoken.includes(cleanTarget);

        animateTypewriter(vocabSpokenText, vocabTypingCursor, `"${transcript}"`, () => {
          if (vocabSpokenBox) {
            vocabSpokenBox.classList.remove('is-recording');
          }

          if (isMatch) {
            if (vocabSpokenBox) {
              vocabSpokenBox.classList.add('match-success');
              vocabSpokenBox.classList.remove('match-retry');
            }
            if (vocabSpokenBadge) {
              vocabSpokenBadge.textContent = '✅ Chuẩn xác!';
            }
            vocabFeedback.innerHTML = `
              <div class="feedback-success">
                🎉 Tuyệt vời! Bạn phát âm từ "<strong>${item.word}</strong>" rất chuẩn xác!<br>
                <span style="font-size: 0.85rem; color: var(--text-main);">Máy đã nghe được chính xác: "<strong>${transcript}</strong>"</span>
              </div>
            `;
            spokenSentences.push({
              en: `[Từ vựng] ${item.word}`,
              vi: item.vi || '',
              accuracy: 'Rất chuẩn',
              time: new Date().toLocaleTimeString('vi-VN')
            });
            localStorage.setItem('spokenSentences', JSON.stringify(spokenSentences));
            incrementWordCount();
            syncProgress();
          } else {
            if (vocabSpokenBox) {
              vocabSpokenBox.classList.add('match-retry');
              vocabSpokenBox.classList.remove('match-success');
            }
            if (vocabSpokenBadge) {
              vocabSpokenBadge.textContent = '⚠️ Thử lại nhé';
            }
            vocabFeedback.innerHTML = `
              <div class="feedback-error">
                👏 Đã ghi nhận! Máy nghe được: "<strong>${transcript}</strong>" (Từ chuẩn: "<strong>${item.word}</strong>")<br>
                <span style="font-size: 0.85rem; color: var(--text-muted);">Hãy bấm nghe mẫu lại một lần và đọc to, dứt khoát âm tiết nhé!</span>
              </div>
            `;
          }
        });
      }
    };

    vocabRecognition.onerror = (event) => {
      if (vocabRecordBtn) {
        vocabRecordBtn.classList.remove('recording');
        vocabRecordBtn.innerHTML = '🎙️ Bấm để nói từ này';
      }
      if (vocabSpokenBox) {
        vocabSpokenBox.classList.remove('is-recording');
      }
      if (event.error === 'no-speech') {
        if (vocabSpokenBadge) vocabSpokenBadge.textContent = '⚠️ Không có âm thanh';
        if (vocabSpokenText) vocabSpokenText.textContent = '"(Chưa rõ)"';
        if (vocabTypingCursor) vocabTypingCursor.style.display = 'none';
        vocabFeedback.innerHTML = '<div class="feedback-status" style="color:var(--accent-amber);">Micro chưa thu được âm thanh. Hãy bấm và nói to rõ ràng hơn nhé!</div>';
      }
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

  // ==========================================
  // 5.2. Phòng luyện phát âm cả câu theo từng Unit (Shadowing Lab) & Ghi âm tạm thời 3 câu
  // ==========================================
  let currentSpkUnitKey = 'unit_1_my_new_school';
  currentSpeakingIdx = 0;

  // Quản lý ghi âm tạm thời 3 câu: Câu trước, Câu hiện tại, Câu sau
  const tempSentenceRecordings = new Map(); // key = index câu (number), value = { blob, url, time }
  let userAudioPlayer = new Audio();
  let currentPlayingRecIdx = null; // index câu đang phát âm thanh người dùng
  let labMediaRecorder = null;
  let labMediaStream = null;
  let labAudioChunks = [];
  let isLabRecordingActive = false;

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

  // Tự động giữ tối đa 3 câu: Câu trước (idx-1), Câu hiện tại (idx), Câu sau (idx+1). Xóa câu cũ hơn.
  function pruneTempRecordings() {
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

  // Xóa toàn bộ ghi âm tạm khi chuyển tab hoặc đóng trình duyệt (Tuyệt đối không lưu lại)
  function clearAllTempRecordings() {
    // 1. Nếu đang có quá trình thu âm dở dang, lập tức hủy bỏ và không lưu
    if (isLabRecordingActive) {
      isLabRecordingActive = false;
      labAudioChunks = [];
      if (spkRecordBtn) {
        spkRecordBtn.classList.remove('recording');
        spkRecordBtn.textContent = '🎙️ Bấm để nói thử';
      }
      if (labMediaRecorder && labMediaRecorder.state !== 'inactive') {
        labMediaRecorder.onstop = null; // Hủy callback onstop để tuyệt đối không lưu file
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

    // 2. Dừng phát âm thanh nếu đang phát
    stopUserAudioPlayback();

    // 3. Giải phóng toàn bộ URL bộ nhớ Blob để trình duyệt giải phóng RAM ngay lập tức
    for (const [keyIdx, data] of tempSentenceRecordings.entries()) {
      if (data.url) {
        URL.revokeObjectURL(data.url);
      }
    }

    // 4. Xóa sạch hoàn toàn Map lưu trữ ghi âm
    tempSentenceRecordings.clear();

    // 5. Đưa giao diện 3 thẻ về lại trạng thái Chưa có / Chưa ghi âm
    updateRecordingsUI();
    if (spkSentencesWrapper) {
      renderSpkSentencesList();
    }
  }

  function updateRecordingsUI() {
    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences) return;
    const total = unit.sentences.length;
    const prevIdx = (currentSpeakingIdx - 1 + total) % total;
    const currIdx = currentSpeakingIdx;
    const nextIdx = (currentSpeakingIdx + 1) % total;

    if (recLabelPrev) recLabelPrev.textContent = `Câu ${prevIdx + 1}`;
    if (recLabelCurr) recLabelCurr.textContent = `Câu ${currIdx + 1}`;
    if (recLabelNext) recLabelNext.textContent = `Câu ${nextIdx + 1}`;

    // 1. Câu hiện tại
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

    // 2. Câu trước
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

    // 3. Câu sau
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

  // Gắn sự kiện nghe lại cho các nút phát
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
      const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
      if (!unit || !unit.sentences) return;
      const total = unit.sentences.length;
      playUserRecording((currentSpeakingIdx - 1 + total) % total);
    });
  }
  if (btnPlayRecNext) {
    btnPlayRecNext.addEventListener('click', () => {
      const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
      if (!unit || !unit.sentences) return;
      const total = unit.sentences.length;
      playUserRecording((currentSpeakingIdx + 1) % total);
    });
  }

  // Dọn dẹp bản ghi âm tạm khi đóng tab, tải lại trang, ẩn cửa sổ hoặc chuyển sang tab trình duyệt khác
  window.addEventListener('beforeunload', clearAllTempRecordings);
  window.addEventListener('pagehide', clearAllTempRecordings);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearAllTempRecordings();
    }
  });

  function renderSpkUnitSelect() {
    if (!spkUnitSelect) return;
    spkUnitSelect.innerHTML = '';
    const keys = Object.keys(SENTENCE_UNITS_DATA || {});
    keys.forEach(k => {
      const unit = SENTENCE_UNITS_DATA[k];
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = `${unit.icon || '📖'} ${unit.title || k}`;
      spkUnitSelect.appendChild(opt);
    });
    spkUnitSelect.value = currentSpkUnitKey;
  }

  if (spkUnitSelect) {
    spkUnitSelect.addEventListener('change', (e) => {
      clearAllTempRecordings();
      loadSpkUnit(e.target.value);
    });
  }

  function loadSpkUnit(unitKey) {
    currentSpkUnitKey = unitKey;
    currentSpeakingIdx = 0;
    const unit = SENTENCE_UNITS_DATA[unitKey];
    if (!unit) return;

    renderSpkSentencesList();
    loadSpeakingChallenge(0);
  }

  function renderSpkSentencesList() {
    if (!spkSentencesWrapper) return;
    spkSentencesWrapper.innerHTML = '';
    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences) return;

    unit.sentences.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = `spk-sentence-item ${idx === currentSpeakingIdx ? 'active' : ''}`;

      // Nút nghe lại giọng người dùng nếu câu này có ghi âm tạm
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
            <div class="spk-item-en">${item.en}</div>
            <div class="spk-item-vi">${item.vi}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          ${userBtnHtml}
          <button class="spk-item-audio-btn" title="Nghe câu này">🔊 Nghe</button>
        </div>
      `;

      itemEl.querySelector('.spk-item-audio-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        speak(item.en);
      });

      const userBtn = itemEl.querySelector('.spk-item-user-audio-btn');
      if (userBtn) {
        userBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          playUserRecording(idx);
        });
      }

      itemEl.addEventListener('click', () => {
        loadSpeakingChallenge(idx);
      });

      spkSentencesWrapper.appendChild(itemEl);
    });
  }

  function loadSpeakingChallenge(idx) {
    const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
    if (!unit || !unit.sentences || unit.sentences.length === 0) return;

    if (idx >= unit.sentences.length) idx = 0;
    if (idx < 0) idx = unit.sentences.length - 1;

    stopUserAudioPlayback();
    currentSpeakingIdx = idx;

    // Giữ đúng 3 câu: Câu trước, Hiện tại, Câu sau. Các câu cũ hơn tự động xóa!
    pruneTempRecordings();
    updateRecordingsUI();

    const item = unit.sentences[idx];

    spkCategory.textContent = `${unit.title.toUpperCase()} (CÂU ${idx + 1} / ${unit.sentences.length})`;
    spkPhraseEn.textContent = `"${item.en}"`;
    spkPhraseIpa.textContent = `Phiên âm: ${item.ipa} ${item.readVi ? `(${item.readVi})` : ''}`;
    spkPhraseVi.textContent = `Ý nghĩa: ${item.vi}`;
    spkFeedback.innerHTML = `<div class="feedback-status">Bấm <strong>"Nghe phát âm mẫu"</strong> trước, sau đó bấm <strong>"Bấm để nói thử"</strong> nhé!</div>`;
    resetSpkSpokenBox();

    // Cập nhật trạng thái active trong danh sách bên dưới
    if (spkSentencesWrapper) {
      const items = spkSentencesWrapper.querySelectorAll('.spk-sentence-item');
      items.forEach((it, i) => {
        if (i === idx) {
          it.classList.add('active');
          it.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          it.classList.remove('active');
        }
      });
    }
  }

  if (spkListenBtn) {
    spkListenBtn.addEventListener('click', () => {
      const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
      if (unit && unit.sentences && unit.sentences[currentSpeakingIdx]) {
        speak(unit.sentences[currentSpeakingIdx].en);
      }
    });
  }

  if (spkPrevBtn) {
    spkPrevBtn.addEventListener('click', () => {
      const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
      if (!unit || !unit.sentences) return;
      currentSpeakingIdx = (currentSpeakingIdx - 1 + unit.sentences.length) % unit.sentences.length;
      loadSpeakingChallenge(currentSpeakingIdx);
    });
  }

  if (spkNextBtn) {
    spkNextBtn.addEventListener('click', () => {
      const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
      if (!unit || !unit.sentences) return;
      currentSpeakingIdx = (currentSpeakingIdx + 1) % unit.sentences.length;
      loadSpeakingChallenge(currentSpeakingIdx);
    });
  }

  // ==========================================
  // Khởi tạo Micro & Ghi âm thực tế bằng MediaRecorder song song với SpeechRecognition
  // ==========================================
  let labRecognition = null;
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    labRecognition = new SpeechRecognition();
    labRecognition.lang = 'en-US';
    labRecognition.interimResults = true;
    labRecognition.maxAlternatives = 1;
  }

  let isLabEvaluating = false;

  function startLabRecording() {
    stopUserAudioPlayback();
    isLabEvaluating = false;
    isLabRecordingActive = true;
    labAudioChunks = [];

    spkRecordBtn.classList.add('recording');
    spkRecordBtn.textContent = '⏹️ Đang thu âm & lắng nghe... (Bấm để DỪNG)';

    if (spkSpokenBox) {
      spkSpokenBox.classList.remove('match-success', 'match-retry');
      spkSpokenBox.classList.add('is-recording');
    }
    if (spkSpokenBadge) {
      spkSpokenBadge.textContent = '🔴 Đang lắng nghe & thu âm giọng bạn...';
    }
    if (spkSpokenText) {
      spkSpokenText.textContent = '...';
    }
    if (spkTypingCursor) {
      spkTypingCursor.style.display = 'inline-block';
    }
    spkFeedback.innerHTML = '<div class="feedback-status">Hãy đọc to câu trên vào micro... Nói rõ ràng từng từ nhé!</div>';

    // 1. Khởi động MediaRecorder để ghi âm giọng nói thực tế của người dùng
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          labMediaStream = stream;
          let mime = 'audio/webm';
          if (!MediaRecorder.isTypeSupported('audio/webm')) {
            mime = MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
          }
          try {
            labMediaRecorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
          } catch (e) {
            labMediaRecorder = new MediaRecorder(stream);
          }

          labMediaRecorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) {
              labAudioChunks.push(e.data);
            }
          };

          labMediaRecorder.onstop = () => {
            if (labAudioChunks.length > 0) {
              const audioBlob = new Blob(labAudioChunks, { type: labMediaRecorder.mimeType || 'audio/webm' });
              saveTempRecording(currentSpeakingIdx, audioBlob);
            }
            if (labMediaStream) {
              labMediaStream.getTracks().forEach(t => t.stop());
              labMediaStream = null;
            }
          };

          labMediaRecorder.start(100);
        })
        .catch(err => {
          console.warn('Microphone stream error:', err);
        });
    }

    // 2. Khởi động SpeechRecognition để chấm điểm phát âm
    if (labRecognition) {
      try {
        labRecognition.start();
      } catch (err) {
        console.warn('SpeechRecognition start warning:', err);
      }
    }
  }

  function stopLabRecording() {
    if (!isLabRecordingActive) return;
    isLabRecordingActive = false;

    spkRecordBtn.classList.remove('recording');
    spkRecordBtn.textContent = '🎙️ Bấm để nói thử';

    if (labMediaRecorder && labMediaRecorder.state !== 'inactive') {
      try { labMediaRecorder.stop(); } catch (e) {}
    } else if (labMediaStream) {
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

  // Bấm nút nói: Bấm lần 1 để bắt đầu, bấm lần 2 để dừng chủ động
  spkRecordBtn.addEventListener('click', () => {
    if (isLabRecordingActive) {
      stopLabRecording();
    } else {
      startLabRecording();
    }
  });

  if (labRecognition) {
    labRecognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      if (interimTranscript && !finalTranscript) {
        if (spkSpokenText) {
          spkSpokenText.textContent = `"${interimTranscript}`;
        }
        if (spkSpokenBadge) {
          spkSpokenBadge.textContent = '🎙️ Đang nghe thấy âm thanh...';
        }
      }

      if (finalTranscript && !isLabEvaluating) {
        isLabEvaluating = true;
        const transcript = finalTranscript.trim();
        const unit = SENTENCE_UNITS_DATA[currentSpkUnitKey];
        if (!unit || !unit.sentences || !unit.sentences[currentSpeakingIdx]) return;
        const item = unit.sentences[currentSpeakingIdx];

        const target = item.en.replace(/[!?,.]/g, '').toLowerCase().trim();
        const userSpoken = transcript.replace(/[!?,.]/g, '').toLowerCase().trim();

        const isMatch = userSpoken === target || userSpoken.includes(target) || target.includes(userSpoken);

        animateTypewriter(spkSpokenText, spkTypingCursor, `"${transcript}"`, () => {
          stopLabRecording();

          if (isMatch) {
            if (spkSpokenBox) {
              spkSpokenBox.classList.add('match-success');
              spkSpokenBox.classList.remove('match-retry');
            }
            if (spkSpokenBadge) {
              spkSpokenBadge.textContent = '✅ Chuẩn xác!';
            }
            spkFeedback.innerHTML = `
              <div class="feedback-success">
                🎉 Tuyệt vời! Bạn phát âm câu trong "<strong>${unit.title}</strong>" rất chuẩn xác!<br>
                <span style="font-size: 0.85rem; color: var(--text-main);">Máy đã nghe được chính xác: "<strong>${transcript}</strong>"</span><br>
                <span style="font-size: 0.82rem; color: #34d399; margin-top: 4px; display: inline-block;">👉 Bấm nút <strong>"▶️ Nghe lại giọng bạn"</strong> phía trên để nghe lại bản ghi âm vừa thu nhé!</span>
              </div>
            `;
            spokenSentences.push({
              en: item.en,
              vi: item.vi,
              accuracy: 'Rất chuẩn',
              time: new Date().toLocaleTimeString('vi-VN')
            });
            localStorage.setItem('spokenSentences', JSON.stringify(spokenSentences));
            incrementWordCount();
            syncProgress();
          } else {
            if (spkSpokenBox) {
              spkSpokenBox.classList.add('match-retry');
              spkSpokenBox.classList.remove('match-success');
            }
            if (spkSpokenBadge) {
              spkSpokenBadge.textContent = '⚠️ Thử lại nhé';
            }
            spkFeedback.innerHTML = `
              <div class="feedback-error">
                👏 Rất tốt vì đã thử! Máy nghe được: "<strong>${transcript}</strong>"<br>
                <span style="font-size: 0.85rem; color: var(--text-muted);">Bạn có thể bấm <strong>"▶️ Nghe lại giọng bạn"</strong> để tự kiểm tra ngữ điệu, sau đó bấm nghe mẫu lại để cải thiện nhé!</span>
              </div>
            `;
          }
        });
      }
    };

    labRecognition.onerror = (event) => {
      stopLabRecording();
      if (event.error === 'no-speech') {
        if (spkSpokenBadge) spkSpokenBadge.textContent = '⚠️ Không có âm thanh';
        if (spkSpokenText) spkSpokenText.textContent = '"(Chưa rõ)"';
        if (spkTypingCursor) spkTypingCursor.style.display = 'none';
        spkFeedback.innerHTML = '<div class="feedback-status" style="color:var(--accent-amber);">Micro chưa thu được âm thanh rõ. Hãy nói to và gần micro hơn nhé!</div>';
      }
    };

    labRecognition.onend = () => {
      if (isLabRecordingActive) {
        stopLabRecording();
      }
    };
  }

  // ==========================================
  // 6. Flashcards thông minh
  // ==========================================
  function loadFlashcard(idx) {
    const item = FLASHCARDS_ITEMS[idx];
    flashcard.classList.remove('flipped');

    fcCategory.textContent = item.category;
    fcWord.textContent = item.word;
    fcPhonetic.textContent = item.phonetic;
    fcMeaning.textContent = item.meaning;
    fcEasyRead.textContent = `Đọc tựa như: "${item.easyRead}"`;
    fcCounter.textContent = `${idx + 1} / ${FLASHCARDS_ITEMS.length}`;
  }

  flashcard.addEventListener('click', (e) => {
    if (e.target.closest('#fc-sound-btn')) return;
    flashcard.classList.toggle('flipped');
  });

  fcSoundBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = FLASHCARDS_ITEMS[currentFlashcardIdx];
    speak(item.word);
  });

  fcNextBtn.addEventListener('click', () => {
    currentFlashcardIdx = (currentFlashcardIdx + 1) % FLASHCARDS_ITEMS.length;
    loadFlashcard(currentFlashcardIdx);
  });

  fcPrevBtn.addEventListener('click', () => {
    currentFlashcardIdx = (currentFlashcardIdx - 1 + FLASHCARDS_ITEMS.length) % FLASHCARDS_ITEMS.length;
    loadFlashcard(currentFlashcardIdx);
  });

  // ==========================================
  // 7. Đồng bộ & Lưu tiến độ học tập (Sync & Storage)
  // ==========================================
  function getStudyData() {
    return {
      streakDays,
      wordsLearnedCount,
      currentLesson: currentLessonName,
      chatHistory,
      spokenSentences,
      userVocabData
    };
  }

  function syncProgress(notifySuccess = false) {
    const data = getStudyData();

    // 1. Luôn lưu trong LocalStorage của trình duyệt
    localStorage.setItem('wordsLearnedCount', wordsLearnedCount);
    localStorage.setItem('streakDays', streakDays);
    localStorage.setItem('currentLessonName', currentLessonName);

    // 2. Gửi về local server để ghi thẳng vào ổ cứng máy tính (study_log.md & study_log.json)
    fetch('/api/save-log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (notifySuccess) {
          alert('✅ Đã lưu tiến độ học tập thành công vào file study_log.md trên máy tính!');
        }
      })
      .catch(() => {
        // Nếu mở trực tiếp dạng file:/// không qua server
        if (notifySuccess) {
          downloadStudyLogMarkdown(data);
        }
      });
  }

  function downloadStudyLogMarkdown(data) {
    let md = `# 📝 NHẬT KÝ HỌC TIẾNG ANH (Cập nhật: ${new Date().toLocaleString('vi-VN')})\n\n`;
    md += `- **Chuỗi ngày học:** ${data.streakDays} ngày\n`;
    md += `- **Số mẫu câu đã học:** ${data.wordsLearnedCount} câu\n`;
    md += `- **Bài học gần nhất:** ${data.currentLesson}\n\n`;

    if (data.chatHistory && data.chatHistory.length > 0) {
      md += `### 💬 Các câu hội thoại bạn vừa luyện:\n`;
      data.chatHistory.forEach(msg => {
        md += `- **${msg.sender === 'user' ? '👤 Bạn' : '🤖 Alex'}**: "${msg.en}" (${msg.vi})\n`;
      });
      md += `\n`;
    }

    if (data.spokenSentences && data.spokenSentences.length > 0) {
      md += `### 🎙️ Các câu bạn đã phát âm chuẩn:\n`;
      data.spokenSentences.forEach(s => {
        md += `- "${s.en}" - ${s.vi}\n`;
      });
    }

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'study_log.md';
    a.click();
    alert('📥 Đã tải file study_log.md về máy! Bạn chỉ cần lưu vào thư mục dự án là ngày mai AI sẽ nhớ toàn bộ!');
  }

  saveLogBtn.addEventListener('click', () => {
    syncProgress(true);
  });

  copySummaryBtn.addEventListener('click', () => {
    const data = getStudyData();
    let summaryText = `[Báo cáo học tập tiếng Anh]\n`;
    summaryText += `- Chuỗi ngày: ${data.streakDays} ngày | Đã nạp: ${data.wordsLearnedCount} mẫu câu\n`;
    summaryText += `- Bài đang học: ${data.currentLesson}\n`;
    if (data.chatHistory.length > 0) {
      summaryText += `- Hội thoại gần nhất: Bạn vừa nói "${data.chatHistory[data.chatHistory.length - 1].en}"\n`;
    }
    if (data.spokenSentences.length > 0) {
      summaryText += `- Luyện nói chuẩn: "${data.spokenSentences[data.spokenSentences.length - 1].en}"\n`;
    }
    summaryText += `Hôm nay tôi đã học xong phần này, bạn hướng dẫn tôi tiếp nhé!`;

    navigator.clipboard.writeText(summaryText).then(() => {
      alert('📋 Đã sao chép tóm tắt tiến độ! Bạn chỉ cần dán (Ctrl + V) vào tin nhắn với tôi là tôi sẽ nhớ ngay lập tức!');
    });
  });

  function incrementWordCount() {
    wordsLearnedCount++;
    localStorage.setItem('wordsLearnedCount', wordsLearnedCount);
    updateStatsDisplay();
  }

  function updateStatsDisplay() {
    streakCountEl.textContent = `${streakDays} Ngày`;
    wordsLearnedEl.textContent = `${wordsLearnedCount} / 40`;
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Initial runs
  updateStatsDisplay();
  renderLessons();
  renderScenarioSelect();
  renderVocabScenarioSelect();
  renderSpkUnitSelect();
  const firstScenarioKey = Object.keys(CHAT_SCENARIOS || {})[0] || '';
  loadScenario(firstScenarioKey);
  loadVocabScenario('my_new_school');
  loadSpkUnit('unit_1_my_new_school');
  loadFlashcard(0);

  // Tự động tải tiến độ & từ vựng tùy chỉnh từ study_log.json (Đồng bộ giữa các máy)
  fetch('/api/get-log')
    .then(res => res.json())
    .then(logData => {
      if (logData && !logData.empty) {
        if (logData.userVocabData) {
          userVocabData = logData.userVocabData;
          localStorage.setItem('userVocabData', JSON.stringify(userVocabData));
          loadVocabScenario(currentVocabScenario);
        }
        if (typeof logData.streakDays === 'number') {
          streakDays = logData.streakDays;
          localStorage.setItem('streakDays', streakDays);
        }
        if (typeof logData.wordsLearnedCount === 'number') {
          wordsLearnedCount = logData.wordsLearnedCount;
          localStorage.setItem('wordsLearnedCount', wordsLearnedCount);
        }
        if (logData.currentLesson) {
          currentLessonName = logData.currentLesson;
          localStorage.setItem('currentLessonName', currentLessonName);
        }
        if (Array.isArray(logData.chatHistory)) {
          chatHistory = logData.chatHistory;
          localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        }
        if (Array.isArray(logData.spokenSentences)) {
          spokenSentences = logData.spokenSentences;
          localStorage.setItem('spokenSentences', JSON.stringify(spokenSentences));
        }
        updateStatsDisplay();
      }
    })
    .catch(() => { });
});
