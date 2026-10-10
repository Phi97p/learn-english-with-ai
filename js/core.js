// ========================================================
// JS/CORE.JS - Quản trị Trạng thái, Âm thanh & Điều hướng cốt lõi
// ========================================================

const AppCore = (() => {
  // 1. Trạng thái dùng chung (Shared State)
  const state = {
    speechSpeed: parseFloat(localStorage.getItem('speechSpeed') || '1.0'),
    voiceGender: localStorage.getItem('voiceGender') || 'female',
    currentTab: 'lessons',
    wordsLearnedCount: parseInt(localStorage.getItem('wordsLearnedCount') || '0', 10),
    streakDays: parseInt(localStorage.getItem('streakDays') || '1', 10),
    currentLessonName: localStorage.getItem('currentLessonName') || 'Unit 1: Bạn Mới & Năm Học Mới (My New School - Lớp 6)',
    chatHistory: JSON.parse(localStorage.getItem('chatHistory') || '[]'),
    spokenSentences: JSON.parse(localStorage.getItem('spokenSentences') || '[]')
  };

  // 2. DOM Elements cốt lõi
  let dom = {};

  function initDOM() {
    dom = {
      themeToggle: document.getElementById('theme-toggle'),
      copySummaryBtn: document.getElementById('copy-summary-btn'),
      streakCountEl: document.getElementById('streak-count'),
      wordsLearnedEl: document.getElementById('words-learned'),
      speedBtns: document.querySelectorAll('.speed-btn'),
      voiceBtns: document.querySelectorAll('.voice-btn'),
      navItems: document.querySelectorAll('.nav-item'),
      tabPanes: document.querySelectorAll('.tab-pane'),
      pageTitle: document.getElementById('page-title'),
      pageSubtitle: document.getElementById('page-subtitle')
    };
  }

  // 3. Text-to-Speech (Tiếng Anh & Tiếng Nhật)
  function getPreferredVoice(gender = 'female') {
    const voices = window.speechSynthesis.getVoices();
    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    if (englishVoices.length === 0) return null;

    if (gender === 'female') {
      const femaleKeywords = [
        'jenny', 'aria', 'zira', 'samantha', 'victoria', 'karen', 'google us english',
        'female', 'stephanie', 'susan', 'allison', 'ava', 'emma', 'olivia', 'cindy'
      ];
      for (const kw of femaleKeywords) {
        const found = englishVoices.find(v => v.name.toLowerCase().includes(kw));
        if (found) return found;
      }
      const fallbackFemale = englishVoices.find(v =>
        !v.name.toLowerCase().includes('david') &&
        !v.name.toLowerCase().includes('guy') &&
        !v.name.toLowerCase().includes('george') &&
        !v.name.toLowerCase().includes('mark') &&
        !v.name.toLowerCase().includes('male')
      );
      if (fallbackFemale) return fallbackFemale;
    } else {
      const maleKeywords = ['guy', 'david', 'george', 'mark', 'google uk english male', 'male'];
      for (const kw of maleKeywords) {
        const found = englishVoices.find(v => v.name.toLowerCase().includes(kw));
        if (found) return found;
      }
    }
    return englishVoices[0];
  }

  function speak(text, lang = 'en-US') {
    if (window.SpeakingModule && typeof window.SpeakingModule.stopUserAudioPlayback === 'function') {
      window.SpeakingModule.stopUserAudioPlayback();
    }
    if (window.JapaneseModule && typeof window.JapaneseModule.stopJaUserAudioPlayback === 'function') {
      window.JapaneseModule.stopJaUserAudioPlayback();
    }
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ phát âm tự động.');
      return;
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = state.speechSpeed;

    const chosenVoice = getPreferredVoice(state.voiceGender);
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    if (state.voiceGender === 'female') {
      utterance.pitch = 1.08;
    } else {
      utterance.pitch = 0.95;
    }

    window.speechSynthesis.speak(utterance);
  }

  function getJapaneseVoice(gender = 'female') {
    const voices = window.speechSynthesis.getVoices();
    const jaVoices = voices.filter(v => (v.lang && (v.lang.startsWith('ja') || v.lang.includes('JP'))));
    if (jaVoices.length === 0) return null;

    if (gender === 'female') {
      const femaleKeywords = ['haruka', 'ayumi', 'kyoko', 'otoya', 'female', 'google 日本語', 'sayaka'];
      for (const kw of femaleKeywords) {
        const found = jaVoices.find(v => v.name.toLowerCase().includes(kw));
        if (found) return found;
      }
      const fallbackFemale = jaVoices.find(v => !v.name.toLowerCase().includes('ichiro') && !v.name.toLowerCase().includes('male'));
      if (fallbackFemale) return fallbackFemale;
    } else {
      const maleKeywords = ['ichiro', 'male', 'kenji', 'keita'];
      for (const kw of maleKeywords) {
        const found = jaVoices.find(v => v.name.toLowerCase().includes(kw));
        if (found) return found;
      }
    }
    return jaVoices[0];
  }

  function speakJa(text) {
    if (window.SpeakingModule && typeof window.SpeakingModule.stopUserAudioPlayback === 'function') {
      window.SpeakingModule.stopUserAudioPlayback();
    }
    if (window.JapaneseModule && typeof window.JapaneseModule.stopJaUserAudioPlayback === 'function') {
      window.JapaneseModule.stopJaUserAudioPlayback();
    }
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ phát âm tự động.');
      return;
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = state.speechSpeed;

    const chosenVoice = getJapaneseVoice(state.voiceGender);
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }
    if (state.voiceGender === 'female') {
      utterance.pitch = 1.05;
    } else {
      utterance.pitch = 0.95;
    }
    window.speechSynthesis.speak(utterance);
  }

  // 4. Hiệu ứng Typewriter hiển thị câu nói
  let activeTypewriterTimer = null;
  function animateTypewriter(textEl, cursorEl, fullText, callback) {
    if (activeTypewriterTimer) clearInterval(activeTypewriterTimer);
    if (!textEl) return;
    textEl.textContent = '';
    if (cursorEl) cursorEl.style.display = 'inline-block';

    let charIdx = 0;
    activeTypewriterTimer = setInterval(() => {
      charIdx++;
      textEl.textContent = fullText.slice(0, charIdx);
      if (charIdx >= fullText.length) {
        clearInterval(activeTypewriterTimer);
        activeTypewriterTimer = null;
        setTimeout(() => {
          if (cursorEl) cursorEl.style.display = 'none';
          if (typeof callback === 'function') callback();
        }, 300);
      }
    }, 28);
  }

  // 5. Điều hướng Tab
  function switchTab(tabId) {
    if (tabId !== 'speaking' && window.SpeakingModule && typeof window.SpeakingModule.clearAllTempRecordings === 'function') {
      window.SpeakingModule.clearAllTempRecordings();
    }
    if (tabId !== 'speaking-ja' && window.JapaneseModule && typeof window.JapaneseModule.clearAllJaTempRecordings === 'function') {
      window.JapaneseModule.clearAllJaTempRecordings();
    }
    state.currentTab = tabId;
    dom.navItems.forEach(nav => {
      nav.classList.toggle('active', nav.dataset.tab === tabId);
    });
    dom.tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    if (tabId === 'lessons') {
      dom.pageTitle.textContent = 'Lộ trình bài học giao tiếp hàng ngày';
      dom.pageSubtitle.textContent = 'Học qua phản xạ thực tế, nghe giọng bản ngữ và thực hành ngay lập tức';
    } else if (tabId === 'chat') {
      dom.pageTitle.textContent = 'Luyện phản xạ giao tiếp với Trợ lý Alex';
      dom.pageSubtitle.textContent = 'Tự tin đóng vai theo các tình huống đời sống thường gặp nhất';
    } else if (tabId === 'speaking') {
      dom.pageTitle.textContent = 'Phòng luyện phát âm & Nhại giọng (Shadowing)';
      dom.pageSubtitle.textContent = 'Nghe người bản xứ nói và nhại theo để chỉnh khẩu hình & ngữ điệu';
    } else if (tabId === 'speaking-ja') {
      dom.pageTitle.textContent = '🌸 Phòng Luyện Phát Âm Tiếng Nhật (Shadowing Lab)';
      dom.pageSubtitle.textContent = 'Luyện nghe & nhại giọng tiếng Nhật chuẩn Tokyo theo từng câu và từ vựng thông dụng';
    } else if (tabId === 'flashcards') {
      dom.pageTitle.textContent = 'Sổ tay từ vựng & Mẫu câu thông dụng';
      dom.pageSubtitle.textContent = 'Lật thẻ ghi nhớ câu nói kèm phiên âm tiếng Việt dễ đọc';
    }
  }

  // 6. Đồng bộ tiến độ & Thống kê
  function getStudyData() {
    return {
      streakDays: state.streakDays,
      wordsLearnedCount: state.wordsLearnedCount,
      currentLesson: state.currentLessonName,
      chatHistory: state.chatHistory,
      spokenSentences: state.spokenSentences,
      userVocabData: window.VocabModule ? window.VocabModule.getUserVocabData() : null,
      userJaVocabData: window.JapaneseModule ? window.JapaneseModule.getUserJaVocabData() : null
    };
  }

  function syncProgress() {
    localStorage.setItem('wordsLearnedCount', state.wordsLearnedCount);
    localStorage.setItem('streakDays', state.streakDays);
    localStorage.setItem('currentLessonName', state.currentLessonName);
    localStorage.setItem('chatHistory', JSON.stringify(state.chatHistory));
    localStorage.setItem('spokenSentences', JSON.stringify(state.spokenSentences));
  }

  function incrementWordCount() {
    state.wordsLearnedCount++;
    localStorage.setItem('wordsLearnedCount', state.wordsLearnedCount);
    updateStatsDisplay();
  }

  function updateStatsDisplay() {
    if (dom.streakCountEl) dom.streakCountEl.textContent = `${state.streakDays} Ngày`;
    if (dom.wordsLearnedEl) dom.wordsLearnedEl.textContent = `${state.wordsLearnedCount} / 40`;
  }

  // 7. Khởi tạo Core listeners
  function init() {
    initDOM();

    // Voice voiceschanged hook
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    // Voice buttons
    dom.voiceBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.gender === state.voiceGender);
      btn.addEventListener('click', () => {
        dom.voiceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.voiceGender = btn.dataset.gender;
        localStorage.setItem('voiceGender', state.voiceGender);
        const sample = state.voiceGender === 'female' ? "Hello! I am your female English tutor." : "Hello! I am your male English tutor.";
        speak(sample);
      });
    });

    // Speed buttons
    dom.speedBtns.forEach(btn => {
      btn.classList.toggle('active', parseFloat(btn.dataset.speed) === state.speechSpeed);
      btn.addEventListener('click', () => {
        dom.speedBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.speechSpeed = parseFloat(btn.dataset.speed);
        localStorage.setItem('speechSpeed', state.speechSpeed);
      });
    });

    // Navigation tabs
    dom.navItems.forEach(item => {
      item.addEventListener('click', () => {
        switchTab(item.dataset.tab);
      });
    });

    // Theme toggle
    if (dom.themeToggle) {
      dom.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Copy Summary button
    if (dom.copySummaryBtn) {
      dom.copySummaryBtn.addEventListener('click', () => {
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
    }

    // Dọn dẹp âm thanh khi tắt / chuyển trang
    window.addEventListener('beforeunload', () => {
      if (window.SpeakingModule && typeof window.SpeakingModule.clearAllTempRecordings === 'function') {
        window.SpeakingModule.clearAllTempRecordings();
      }
      if (window.JapaneseModule && typeof window.JapaneseModule.clearAllJaTempRecordings === 'function') {
        window.JapaneseModule.clearAllJaTempRecordings();
      }
    });

    window.addEventListener('pagehide', () => {
      if (window.SpeakingModule && typeof window.SpeakingModule.clearAllTempRecordings === 'function') {
        window.SpeakingModule.clearAllTempRecordings();
      }
      if (window.JapaneseModule && typeof window.JapaneseModule.clearAllJaTempRecordings === 'function') {
        window.JapaneseModule.clearAllJaTempRecordings();
      }
    });
  }

  return {
    state,
    speak,
    speakJa,
    getPreferredVoice,
    getJapaneseVoice,
    animateTypewriter,
    switchTab,
    getStudyData,
    syncProgress,
    incrementWordCount,
    updateStatsDisplay,
    init
  };
})();

window.AppCore = AppCore;
