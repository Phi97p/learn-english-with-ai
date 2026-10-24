// ========================================================
// JS/CORE.JS - Quản trị Trạng thái, Âm thanh & Điều hướng cốt lõi
// ========================================================

const AppCore = (() => {
  // 1. Trạng thái dùng chung (Shared State)
  const savedTab = localStorage.getItem('currentTab');
  const initialTab = (!savedTab || savedTab === 'speaking' || savedTab === 'reading-en') ? 'speaking-ja' : savedTab;

  const state = {
    speechSpeed: parseFloat(localStorage.getItem('speechSpeed') || '1.0'),
    voiceGender: localStorage.getItem('voiceGender') || 'female',
    currentTab: initialTab,
    showPhonetics: localStorage.getItem('showPhonetics') !== 'false',
    wordsLearnedCount: parseInt(localStorage.getItem('wordsLearnedCount') || '0', 10),
    streakDays: parseInt(localStorage.getItem('streakDays') || '1', 10),
    spokenSentences: JSON.parse(localStorage.getItem('spokenSentences') || '[]')
  };

  // 2. DOM Elements cốt lõi
  let dom = {};

  function initDOM() {
    dom = {
      themeToggle: document.getElementById('theme-toggle'),
      phoneticToggles: document.querySelectorAll('.phonetic-toggle-btn'),
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

  function speak(text, lang = 'ja-JP') {
    speakJa(text);
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
    if (window.ReadingJaModule && typeof window.ReadingJaModule.stopReadingUserAudioPlayback === 'function') {
      window.ReadingJaModule.stopReadingUserAudioPlayback();
    }
    if (window.ReadingEnModule && typeof window.ReadingEnModule.stopReadingUserAudioPlayback === 'function') {
      window.ReadingEnModule.stopReadingUserAudioPlayback();
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
    if (tabId === 'speaking' || tabId === 'reading-en') {
      tabId = 'speaking-ja';
    }
    if (tabId !== 'speaking-ja' && window.JapaneseModule && typeof window.JapaneseModule.clearAllJaTempRecordings === 'function') {
      window.JapaneseModule.clearAllJaTempRecordings();
    }
    if (tabId !== 'reading-ja' && window.ReadingJaModule && typeof window.ReadingJaModule.clearAllReadingTempRecordings === 'function') {
      window.ReadingJaModule.clearAllReadingTempRecordings();
    }
    state.currentTab = tabId;
    localStorage.setItem('currentTab', tabId);
    dom.navItems.forEach(nav => {
      nav.classList.toggle('active', nav.dataset.tab === tabId);
    });
    dom.tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    if (tabId === 'speaking-ja') {
      dom.pageTitle.textContent = '🌸 Phòng Luyện Phát Âm Tiếng Nhật (Shadowing Lab)';
      dom.pageSubtitle.textContent = 'Luyện nghe & nhại giọng tiếng Nhật chuẩn Tokyo theo từng câu và từ vựng thông dụng';
    } else if (tabId === 'reading-ja') {
      dom.pageTitle.textContent = '📖 Luyện Đọc Hiểu & Shadowing Đoạn Văn (Tiếng Nhật)';
      dom.pageSubtitle.textContent = 'Luyện ngữ điệu mạch lạc theo đoạn văn bản ngữ - Bấm vào từng câu để luyện nói, nghe toàn bài hoặc nghe câu lẻ';
    } else if (tabId === 'vocab-ja') {
      dom.pageTitle.textContent = '🗂️ Sổ Tay Từ Vựng Tiếng Nhật (Từ Khó Tự Chọn)';
      dom.pageSubtitle.textContent = 'Luyện nghe & phát âm các từ vựng bạn thấy khó nhớ do bạn tự thêm vào sổ tay';
    } else if (tabId === 'notes-ja') {
      dom.pageTitle.textContent = '📌 Kiến Thức & Ghi Chú Quan Trọng (Tiếng Nhật)';
      dom.pageSubtitle.textContent = 'Sổ tay cá nhân: Cách đọc các từ khó & các cụm từ hay cần học thuộc lòng';
    } else if (tabId === 'katakana') {
      dom.pageTitle.textContent = '🈂️ Luyện Phản Xạ Bảng Chữ Cái Katakana';
      dom.pageSubtitle.textContent = 'Nhìn 3 chữ Katakana ngẫu nhiên và nhập Romaji hoặc Hiragana tương ứng để kiểm tra phản xạ';
    } else if (tabId === 'grammar-ja') {
      dom.pageTitle.textContent = '📝 Luyện Tập Ngữ Pháp Tổng Hợp (Tiếng Nhật)';
      dom.pageSubtitle.textContent = 'Trắc nghiệm 30 câu ngẫu nhiên - Mỗi câu 1 điểm - Tự động chấm điểm & giải thích chi tiết';
    } else if (tabId === 'kanji-ja') {
      dom.pageTitle.textContent = '🈸 Luyện Tập Hán Tự (Kanji Practice)';
      dom.pageSubtitle.textContent = 'Điền Hiragana cho từ Kanji được gạch chân trong câu - Mỗi câu 1 điểm - Tự động chấm điểm';
      if (window.KanjiJaModule && typeof window.KanjiJaModule.renderLessonSelect === 'function') {
        window.KanjiJaModule.renderLessonSelect();
      }
    }
    updatePhoneticDisplay();
  }

  // 6. Đồng bộ tiến độ & Thống kê
  function getStudyData() {
    return {
      streakDays: state.streakDays,
      wordsLearnedCount: state.wordsLearnedCount,
      spokenSentences: state.spokenSentences,
      userVocabData: window.VocabModule ? window.VocabModule.getUserVocabData() : null,
      userJaVocabData: window.JapaneseModule ? window.JapaneseModule.getUserJaVocabData() : null
    };
  }

  function syncProgress() {
    localStorage.setItem('wordsLearnedCount', state.wordsLearnedCount);
    localStorage.setItem('streakDays', state.streakDays);
    localStorage.setItem('spokenSentences', JSON.stringify(state.spokenSentences));
  }

  function incrementWordCount() {
    state.wordsLearnedCount++;
    localStorage.setItem('wordsLearnedCount', state.wordsLearnedCount);
    updateStatsDisplay();
  }

  function updateStatsDisplay() {
    if (dom.streakCountEl) dom.streakCountEl.textContent = `${state.streakDays} Ngày`;
    if (dom.wordsLearnedEl) dom.wordsLearnedEl.textContent = `${state.wordsLearnedCount} Mẫu câu`;
  }

  function updatePhoneticDisplay() {
    const isShown = state.showPhonetics;
    document.body.classList.toggle('hide-phonetics', !isShown);
    const btns = dom.phoneticToggles && dom.phoneticToggles.length > 0 
      ? dom.phoneticToggles 
      : document.querySelectorAll('.phonetic-toggle-btn');
    btns.forEach(btn => {
      btn.classList.toggle('is-hidden', !isShown);
      btn.setAttribute('aria-pressed', isShown ? 'true' : 'false');
      btn.setAttribute('title', isShown
        ? 'Bấm để ẩn phiên âm Romaji'
        : 'Bấm để hiện phiên âm Romaji');
      const label = btn.querySelector('.phonetic-toggle-label');
      if (label) {
        label.textContent = isShown ? 'Romaji: Hiện' : 'Romaji: Ẩn';
      }
    });
  }

  function togglePhonetics() {
    state.showPhonetics = !state.showPhonetics;
    localStorage.setItem('showPhonetics', state.showPhonetics ? 'true' : 'false');
    updatePhoneticDisplay();
  }

  // 7. Khởi tạo Core listeners
  function init() {
    // Tự động xóa sạch tiến độ học cũ từ phiên bản trước
    const dataVersion = 'v_cleared_clean_slate';
    if (localStorage.getItem('dataVersion') !== dataVersion) {
      localStorage.removeItem('userVocabData');
      localStorage.removeItem('userJaVocabData');
      localStorage.removeItem('wordsLearnedCount');
      localStorage.removeItem('spokenSentences');
      localStorage.removeItem('currentLessonName');
      localStorage.removeItem('chatHistory');
      localStorage.setItem('dataVersion', dataVersion);
      state.wordsLearnedCount = 0;
      state.spokenSentences = [];
    }

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



    // Nhóm Cài đặt âm thanh (Collapsible Group)
    const navGroupSettings = document.getElementById('nav-group-settings');
    const navGroupSettingsToggle = document.getElementById('nav-group-settings-toggle');
    if (navGroupSettings && navGroupSettingsToggle) {
      navGroupSettingsToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isCollapsed = navGroupSettings.classList.toggle('collapsed');
        navGroupSettingsToggle.setAttribute('aria-expanded', !isCollapsed);
        localStorage.setItem('nav_settings_collapsed', isCollapsed ? '1' : '0');
      });

      const savedSettingsCollapsed = localStorage.getItem('nav_settings_collapsed');
      if (savedSettingsCollapsed === '0') {
        navGroupSettings.classList.remove('collapsed');
        navGroupSettingsToggle.setAttribute('aria-expanded', 'true');
      } else {
        navGroupSettings.classList.add('collapsed');
        navGroupSettingsToggle.setAttribute('aria-expanded', 'false');
      }
    }

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

    // Phonetic toggle (Ẩn/Hiện Romaji trên các thẻ)
    const phoneticBtns = dom.phoneticToggles && dom.phoneticToggles.length > 0
      ? dom.phoneticToggles
      : document.querySelectorAll('.phonetic-toggle-btn');
    phoneticBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePhonetics();
      });
    });
    updatePhoneticDisplay();

    // Copy Summary button
    if (dom.copySummaryBtn) {
      dom.copySummaryBtn.addEventListener('click', () => {
        const data = getStudyData();
        let summaryText = `[Báo cáo học tập tiếng Anh & Tiếng Nhật]\n`;
        summaryText += `- Chuỗi ngày: ${data.streakDays} ngày | Đã nạp: ${data.wordsLearnedCount} mẫu câu\n`;
        if (data.spokenSentences && data.spokenSentences.length > 0) {
          summaryText += `- Luyện nói chuẩn: "${data.spokenSentences[data.spokenSentences.length - 1].en}"\n`;
        }
        summaryText += `Hôm nay tôi đã hoàn thành phần luyện nói này, bạn hướng dẫn tôi tiếp nhé!`;

        navigator.clipboard.writeText(summaryText).then(() => {
          alert('📋 Đã sao chép tóm tắt tiến độ! Bạn chỉ cần dán (Ctrl + V) vào tin nhắn với tôi là tôi sẽ nhớ ngay lập tức!');
        });
      });
    }

    // Dọn dẹp âm thanh khi tắt / chuyển trang
    window.addEventListener('beforeunload', () => {
      if (window.JapaneseModule && typeof window.JapaneseModule.clearAllJaTempRecordings === 'function') {
        window.JapaneseModule.clearAllJaTempRecordings();
      }
      if (window.ReadingJaModule && typeof window.ReadingJaModule.clearAllReadingTempRecordings === 'function') {
        window.ReadingJaModule.clearAllReadingTempRecordings();
      }
    });

    window.addEventListener('pagehide', () => {
      if (window.JapaneseModule && typeof window.JapaneseModule.clearAllJaTempRecordings === 'function') {
        window.JapaneseModule.clearAllJaTempRecordings();
      }
      if (window.ReadingJaModule && typeof window.ReadingJaModule.clearAllReadingTempRecordings === 'function') {
        window.ReadingJaModule.clearAllReadingTempRecordings();
      }
    });
  }

  // 6. Hệ thống Chuẩn hóa & Chấm điểm Tiếng Nhật Thông minh (Kanji, Hiragana, Katakana, Romaji)
  const JA_KANJI_MAP = [
    // Tuổi & Số đếm
    ['何歳', 'なんさい'], ['何才', 'なんさい'],
    ['1歳', 'いっさい'], ['1才', 'いっさい'],
    ['2歳', 'にさい'], ['2才', 'にさい'],
    ['3歳', 'さんさい'], ['3才', 'さんさい'],
    ['4歳', 'よんさい'], ['4才', 'よんさい'],
    ['5歳', 'ごさい'], ['5才', 'ごさい'],
    ['6歳', 'ろくさい'], ['6才', 'ろくさい'],
    ['7歳', 'ななさい'], ['7才', 'ななさい'],
    ['8歳', 'はっさい'], ['8才', 'はっさい'],
    ['9歳', 'きゅうさい'], ['9才', 'きゅうさい'],
    ['10歳', 'じゅっさい'], ['10才', 'じゅっさい'],
    ['20歳', 'はたち'], ['20才', 'はたち'],
    ['歳', 'さい'], ['才', 'さい'],
    ['一', 'いち'], ['二', 'に'], ['三', 'さん'], ['四', 'よん'],
    ['五', 'ご'], ['六', 'ろく'], ['七', 'なな'], ['八', 'はち'],
    ['九', 'きゅう'], ['十', 'じゅう'], ['百', 'ひゃく'], ['千', 'せん'], ['万', 'まん'], ['円', 'えん'],

    // Đại từ & Con người
    ['わたし', 'わたし'], ['私', 'わたし'],
    ['貴方', 'あなた'], ['あなた', 'あなた'],
    ['あの人', 'あのひと'], ['あの方', 'あのかた'],
    ['彼', 'かれ'], ['彼女', 'かのじょ'],
    ['誰', 'だれ'], ['何方', 'どなた'],
    ['皆さん', 'みなさん'], ['皆様', 'みなさま'], ['皆', 'みんな'],
    ['友達', 'ともだち'], ['家族', 'かぞく'],
    ['人', 'ひと'], ['方', 'かた'], ['男', 'おとこ'], ['女', 'おんな'],
    ['子ども', 'こども'], ['子供', 'こども'],

    // Tên riêng & Địa danh
    ['さくら大学', 'さくらだいがく'],
    ['富士大学', 'ふじだいがく'],
    ['木村', 'きむら'], ['山田', 'やまだ'], ['佐藤', 'さとう'],
    ['田中', 'たなか'], ['松本', 'まつもと'], ['鈴木', 'すずき'],
    ['高橋', 'たかはし'], ['富士', 'ふじ'], ['桜', 'さくら'],

    // Quốc tịch & Quốc gia
    ['アメリカ人', 'あめりかじん'], ['ブラジル人', 'ぶらじるじん'],
    ['中国人', 'ちゅうごくじん'], ['日本人', 'にほんじん'],
    ['韓国人', 'かんこくじん'], ['ベトナム人', 'べとなむじん'],
    ['英国人', 'えいこくじん'], ['ドイツ人', 'どいつじん'],
    ['フランス人', 'ふらんすじん'],
    ['中国', 'ちゅうごく'], ['日本', 'にほん'], ['韓国', 'かんこく'], ['国', 'くに'],

    // Nghề nghiệp & Cơ quan
    ['会社員', 'かいしゃいん'], ['銀行員', 'ぎんこういん'],
    ['研究者', 'けんきゅうしゃ'], ['公務員', 'こうむいん'],
    ['エンジニア', 'えんじにあ'],
    ['社員', 'しゃいん'], ['会社', 'かいしゃ'], ['銀行', 'ぎんこう'],
    ['医者', 'いしゃ'], ['学生', 'がくせい'], ['留学生', 'りゅうがくせい'],
    ['先生', 'せんせい'], ['教師', 'きょうし'],
    ['大学', 'だいがく'], ['学校', 'がっこう'], ['高校', 'こうこう'],
    ['病院', 'びょういん'], ['教室', 'きょうしつ'], ['食堂', 'しょくどう'],
    ['事務所', 'じむしょ'], ['部屋', 'へや'], ['郵便局', 'ゆうびんきょく'],
    ['図書館', 'としょかん'], ['美術館', 'びじゅつかん'], ['駅', 'えき'],

    // Đồ vật & Phương tiện
    ['自転車', 'じてんしゃ'], ['自動車', 'じどうしゃ'], ['車', 'くるま'],
    ['電車', 'でんしゃ'], ['地下鉄', 'ちかてつ'], ['飛行機', 'ひこうき'],
    ['机', 'つくえ'], ['時計', 'とけい'], ['傘', 'かさ'], ['靴', 'くつ'],
    ['鞄', 'かばん'], ['鍵', 'かぎ'], ['本', 'ほん'], ['辞書', 'じしょ'],
    ['雑誌', 'ざっし'], ['新聞', 'しんぶん'], ['手帳', 'てちょう'],
    ['名刺', 'めいし'], ['手紙', 'てがみ'], ['写真', 'しゃしん'],
    ['お土産', 'おみやげ'], ['土産', 'みやげ'],

    // Ăn uống
    ['ご飯', 'ごはん'], ['朝ご飯', 'あさごはん'], ['昼ご飯', 'ひるごはん'],
    ['晩ご飯', 'ばんごはん'], ['水', 'みず'], ['お茶', 'おちゃ'],
    ['茶', 'ちゃ'], ['お酒', 'おさけ'], ['酒', 'さけ'],
    ['肉', 'にく'], ['魚', 'さかな'], ['野菜', 'やさい'], ['果物', 'くだもの'],

    // Thời gian
    ['去年', 'きょねん'], ['来週', 'らいしゅう'], ['先週', 'せんしゅう'], ['今週', 'こんしゅう'],
    ['来月', 'らいげつ'], ['先月', 'せんげつ'], ['今月', 'こんげつ'],
    ['来年', 'らいねん'], ['今年', 'ことし'],
    ['今日', 'きょう'], ['明日', 'あした'], ['昨日', 'きのう'],
    ['毎日', 'まいにち'], ['毎朝', 'まいあさ'], ['毎晩', 'まいばん'],
    ['朝', 'あさ'], ['昼', 'ひる'], ['晩', 'ばん'], ['夜', 'よる'],
    ['今', 'いま'], ['時', 'じ'], ['分', 'ふん'], ['半', 'はん'],
    ['月曜日', 'げつようび'], ['火曜日', 'かようび'], ['水曜日', 'すいようび'],
    ['木曜日', 'もくようび'], ['金曜日', 'きんようび'], ['土曜日', 'どようび'],
    ['日曜日', 'にちようび'],

    // Động từ & Tính từ thông dụng
    ['初めまして', 'はじめまして'],
    ['お願いします', 'おねがいします'],
    ['失礼ですが', 'しつれいですが'],
    ['お名前は', 'おなまえは'],
    ['来ました', 'きました'], ['来ます', 'きます'], ['来て', 'きて'],
    ['行きました', 'いきました'], ['行きます', 'いきます'], ['行って', 'いって'],
    ['帰りました', 'かえりました'], ['帰ります', 'かえります'], ['帰って', 'かえって'],
    ['返しました', 'かえしました'], ['返します', 'かえします'],
    ['借りました', 'かりました'], ['借ります', 'かります'],
    ['貸しました', 'かしました'], ['貸します', 'かします'],
    ['もらいました', 'もらいました'], ['あげました', 'あげました'],
    ['食べました', 'たべました'], ['食べます', 'たべます'],
    ['飲みました', 'のみました'], ['飲みます', 'のみます'],
    ['見ました', 'みました'], ['見ます', 'みます'],
    ['聞きました', 'ききました'], ['聞きます', 'ききます'],
    ['読みました', 'よみました'], ['読みます', 'よみました'],
    ['書きました', 'かきました'], ['書きます', 'かきます'],
    ['買いました', 'かいまし​​た'], ['買います', 'かいます'],
    ['会いました', 'あいました'], ['会います', 'あいます'],
    ['切りました', 'きりました'], ['切ります', 'きります'],
    ['送りました', 'おくりました'], ['送ります', 'おくりました'],
    ['教えました', 'おしえました'], ['教えます', 'おしえます'],
    ['習いました', 'ならいました'], ['習います', 'ならいます'],
    ['分かります', 'わかります'], ['分かりました', 'わかりました'],
    ['終わります', 'おわります'], ['働きます', 'はたらきます'],
    ['休みます', 'やすみます'], ['好き', 'すき'], ['上手', 'じょうず'],
    ['下手', 'へた'], ['大きい', 'おおきい'], ['小さい', 'ちいさい'],
    ['新しい', 'あたらしい'], ['古い', 'ふるい'], ['高い', 'たかい'],
    ['安い', 'やすい'], ['静か', 'しずか'], ['親切', 'しんせつ'],
    ['元気', 'げんき'], ['暇', 'ひま'], ['便利', 'べんり'],
    ['何', 'なん']
  ];

  function katakanaToHiragana(str) {
    if (!str) return '';
    return str.replace(/[\u30a1-\u30f6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
              .replace(/ヴ/g, 'ゔ');
  }

  function normalizeJapanese(text) {
    if (!text) return '';
    let s = String(text);
    // Chuyển ký tự full-width sang half-width
    s = s.replace(/[\uff01-\uff5e]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xfee0));
    // Bỏ dấu câu, dấu cách, ngoặc, chấm giữa
    s = s.replace(/[\s\.\,\?\!、。・…\-\_\~\:;\/\"\'\^`「」『』\(\)（）]/g, '');
    // Chuẩn hóa cấu trúc phủ định lịch sự
    s = s.replace(/ではありません/g, 'じゃありません');
    s = s.replace(/ではない/g, 'じゃない');
    // Chuẩn hóa trợ từ chào hỏi
    s = s.replace(/こんにちわ/g, 'こんにちは');
    s = s.replace(/こんばんわ/g, 'こんばんは');

    // Chuyển đổi Kanji sang Hiragana
    for (const [k, v] of JA_KANJI_MAP) {
      s = s.split(k).join(v);
    }
    // Chuyển đổi Katakana sang Hiragana
    s = katakanaToHiragana(s);
    return s;
  }

  function getJaBigramSimilarity(s1, s2) {
    if (!s1 || !s2) return 0;
    if (s1 === s2) return 1;
    if (s1.length < 2 || s2.length < 2) return s1 === s2 ? 1 : 0;
    const bg1 = new Map();
    for (let i = 0; i < s1.length - 1; i++) {
      const pair = s1.substr(i, 2);
      bg1.set(pair, (bg1.get(pair) || 0) + 1);
    }
    const bg2 = new Map();
    for (let i = 0; i < s2.length - 1; i++) {
      const pair = s2.substr(i, 2);
      bg2.set(pair, (bg2.get(pair) || 0) + 1);
    }
    let intersection = 0;
    for (const [pair, count] of bg1.entries()) {
      if (bg2.has(pair)) {
        intersection += Math.min(count, bg2.get(pair));
      }
    }
    return (2.0 * intersection) / ((s1.length - 1) + (s2.length - 1));
  }

  function isJapaneseMatch(spoken, targetJa, targetRomaji = '') {
    if (!spoken || !targetJa) return false;

    const rawSpoken = spoken.trim();
    const rawTarget = targetJa.trim();

    // 1. Kiểm tra đối chiếu Romaji trực tiếp nếu thiết bị nhận diện ra chữ cái Latinh
    if (/[a-zA-Z]/.test(rawSpoken) && targetRomaji) {
      const cleanSpokenRo = rawSpoken.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanTargetRo = targetRomaji.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (cleanSpokenRo && cleanTargetRo) {
        if (cleanSpokenRo.includes(cleanTargetRo) || cleanTargetRo.includes(cleanSpokenRo)) return true;
        if (getJaBigramSimilarity(cleanSpokenRo, cleanTargetRo) >= 0.70) return true;
      }
    }

    // 2. Tạo các biến thể câu đích (toàn bộ, bỏ ngoặc, hoặc bỏ phần nằm trong ngoặc)
    const targetVariants = [rawTarget];
    const withoutBrackets = rawTarget.replace(/[「」『』\(\)（）]/g, '');
    if (withoutBrackets !== rawTarget) targetVariants.push(withoutBrackets);
    const withoutBracketedContent = rawTarget.replace(/「.*?」|『.*?』|\(.*?\)|（.*?）/g, '');
    if (withoutBracketedContent && withoutBracketedContent !== rawTarget) {
      targetVariants.push(withoutBracketedContent);
    }

    // Hỗ trợ trường hợp câu có thoại hỏi-đáp nối bằng '……'
    if (rawTarget.includes('……')) {
      const parts = rawTarget.split('……').map(p => p.trim()).filter(Boolean);
      parts.forEach(p => targetVariants.push(p));
    }

    // 3. Khớp chuỗi trực tiếp (loại bỏ dấu câu và khoảng trắng)
    const simpleSpoken = rawSpoken.replace(/[\s\.\,\?\!、。・]/g, '');
    for (const t of targetVariants) {
      const simpleTarget = t.replace(/[\s\.\,\?\!、。・]/g, '');
      if (simpleSpoken.includes(simpleTarget) || simpleTarget.includes(simpleSpoken)) {
        return true;
      }
    }

    // 4. Chuẩn hóa ngữ âm thông minh (Kanji -> Hiragana, Katakana -> Hiragana)
    const normSpoken = normalizeJapanese(rawSpoken);
    const normSpokenNoChouon = normSpoken.replace(/ー/g, '');

    for (const t of targetVariants) {
      const normTarget = normalizeJapanese(t);
      const normTargetNoChouon = normTarget.replace(/ー/g, '');

      if (!normTarget) continue;

      // Khớp chuẩn xác hoặc là chuỗi con của nhau
      if (normSpoken === normTarget || normSpokenNoChouon === normTargetNoChouon) return true;
      if (normSpoken.includes(normTarget) || normTarget.includes(normSpoken)) return true;
      if (normSpokenNoChouon.includes(normTargetNoChouon) || normTargetNoChouon.includes(normSpokenNoChouon)) return true;

      // Khớp tiền tố 4 âm tiết trở lên cho câu dài
      if (normTarget.length >= 4 && normSpoken.length >= 4) {
        if (normTarget.slice(0, 4) === normSpoken.slice(0, 4)) return true;
      }

      // Khớp độ tương đồng ký tự >= 70%
      if (getJaBigramSimilarity(normSpoken, normTarget) >= 0.70) return true;
      if (getJaBigramSimilarity(normSpokenNoChouon, normTargetNoChouon) >= 0.70) return true;
    }

    return false;
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
    normalizeJapanese,
    isJapaneseMatch,
    updatePhoneticDisplay,
    togglePhonetics,
    init
  };
})();

window.AppCore = AppCore;
