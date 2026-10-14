// ========================================================
// JS/KATAKANA.JS - Module Luyện Phản Xạ Bảng Chữ Cái Katakana
// Hiển thị 3 chữ ngẫu nhiên vào 3 ô vuông, kiểm tra đúng/sai và lặp lại
// ========================================================

const KatakanaModule = (() => {
  // Dữ liệu bảng chữ cái Katakana (Cơ bản + Âm đục & Bán đục)
  const KATAKANA_BASIC = [
    // Hàng A
    { char: 'ア', romaji: 'a', hiragana: 'あ', accepted: ['a', 'あ'] },
    { char: 'イ', romaji: 'i', hiragana: 'い', accepted: ['i', 'い'] },
    { char: 'ウ', romaji: 'u', hiragana: 'う', accepted: ['u', 'う'] },
    { char: 'エ', romaji: 'e', hiragana: 'え', accepted: ['e', 'え'] },
    { char: 'オ', romaji: 'o', hiragana: 'お', accepted: ['o', 'お'] },

    // Hàng Ka
    { char: 'カ', romaji: 'ka', hiragana: 'か', accepted: ['ka', 'ca', 'か'] },
    { char: 'キ', romaji: 'ki', hiragana: 'き', accepted: ['ki', 'き'] },
    { char: 'ク', romaji: 'ku', hiragana: 'く', accepted: ['ku', 'く'] },
    { char: 'ケ', romaji: 'ke', hiragana: 'け', accepted: ['ke', 'け'] },
    { char: 'コ', romaji: 'ko', hiragana: 'こ', accepted: ['ko', 'co', 'こ'] },

    // Hàng Sa
    { char: 'サ', romaji: 'sa', hiragana: 'さ', accepted: ['sa', 'さ'] },
    { char: 'シ', romaji: 'shi', hiragana: 'し', accepted: ['shi', 'si', 'ci', 'し'] },
    { char: 'ス', romaji: 'su', hiragana: 'す', accepted: ['su', 'す'] },
    { char: 'セ', romaji: 'se', hiragana: 'せ', accepted: ['se', 'ce', 'せ'] },
    { char: 'ソ', romaji: 'so', hiragana: 'そ', accepted: ['so', 'そ'] },

    // Hàng Ta
    { char: 'タ', romaji: 'ta', hiragana: 'た', accepted: ['ta', 'た'] },
    { char: 'チ', romaji: 'chi', hiragana: 'chi', accepted: ['chi', 'ti', 'ち'] },
    { char: 'ツ', romaji: 'tsu', hiragana: 'つ', accepted: ['tsu', 'tu', 'つ'] },
    { char: 'テ', romaji: 'te', hiragana: 'て', accepted: ['te', 'て'] },
    { char: 'ト', romaji: 'to', hiragana: 'と', accepted: ['to', 'と'] },

    // Hàng Na
    { char: 'ナ', romaji: 'na', hiragana: 'な', accepted: ['na', 'な'] },
    { char: 'ニ', romaji: 'ni', hiragana: 'に', accepted: ['ni', 'に'] },
    { char: 'ヌ', romaji: 'nu', hiragana: 'ぬ', accepted: ['nu', 'ぬ'] },
    { char: 'ネ', romaji: 'ne', hiragana: 'ね', accepted: ['ne', 'ね'] },
    { char: 'ノ', romaji: 'no', hiragana: 'の', accepted: ['no', 'の'] },

    // Hàng Ha
    { char: 'ハ', romaji: 'ha', hiragana: 'は', accepted: ['ha', 'wa', 'は'] },
    { char: 'ヒ', romaji: 'hi', hiragana: 'ひ', accepted: ['hi', 'ひ'] },
    { char: 'フ', romaji: 'fu', hiragana: 'ふ', accepted: ['fu', 'hu', 'ふ'] },
    { char: 'ヘ', romaji: 'he', hiragana: 'へ', accepted: ['he', 'e', 'へ'] },
    { char: 'ホ', romaji: 'ho', hiragana: 'ほ', accepted: ['ho', 'ほ'] },

    // Hàng Ma
    { char: 'マ', romaji: 'ma', hiragana: 'ま', accepted: ['ma', 'ま'] },
    { char: 'ミ', romaji: 'mi', hiragana: 'み', accepted: ['mi', 'み'] },
    { char: 'ム', romaji: 'mu', hiragana: 'む', accepted: ['mu', 'む'] },
    { char: 'メ', romaji: 'me', hiragana: 'め', accepted: ['me', 'め'] },
    { char: 'モ', romaji: 'mo', hiragana: 'も', accepted: ['mo', 'も'] },

    // Hàng Ya
    { char: 'ヤ', romaji: 'ya', hiragana: 'や', accepted: ['ya', 'や'] },
    { char: 'ユ', romaji: 'yu', hiragana: 'ゆ', accepted: ['yu', 'ゆ'] },
    { char: 'ヨ', romaji: 'yo', hiragana: 'よ', accepted: ['yo', 'よ'] },

    // Hàng Ra
    { char: 'ラ', romaji: 'ra', hiragana: 'ら', accepted: ['ra', 'la', 'ら'] },
    { char: 'リ', romaji: 'ri', hiragana: 'り', accepted: ['ri', 'li', 'り'] },
    { char: 'ル', romaji: 'ru', hiragana: 'る', accepted: ['ru', 'lu', 'る'] },
    { char: 'レ', romaji: 're', hiragana: 'れ', accepted: ['re', 'le', 'れ'] },
    { char: 'ロ', romaji: 'ro', hiragana: 'ろ', accepted: ['ro', 'lo', 'ろ'] },

    // Hàng Wa & N
    { char: 'ワ', romaji: 'wa', hiragana: 'わ', accepted: ['wa', 'わ'] },
    { char: 'ヲ', romaji: 'wo', hiragana: 'を', accepted: ['wo', 'o', 'を'] },
    { char: 'ン', romaji: 'n', hiragana: 'ん', accepted: ['n', 'nn', 'ん'] }
  ];

  const KATAKANA_DAKUTEN = [
    // Ga
    { char: 'ガ', romaji: 'ga', hiragana: 'が', accepted: ['ga', 'が'] },
    { char: 'ギ', romaji: 'gi', hiragana: 'ぎ', accepted: ['gi', 'ぎ'] },
    { char: 'グ', romaji: 'gu', hiragana: 'ぐ', accepted: ['gu', 'ぐ'] },
    { char: 'ゲ', romaji: 'ge', hiragana: 'げ', accepted: ['ge', 'げ'] },
    { char: 'ゴ', romaji: 'go', hiragana: 'ご', accepted: ['go', 'ご'] },

    // Za
    { char: 'ザ', romaji: 'za', hiragana: 'ざ', accepted: ['za', 'ざ'] },
    { char: 'ジ', romaji: 'ji', hiragana: 'じ', accepted: ['ji', 'zi', 'じ'] },
    { char: 'ズ', romaji: 'zu', hiragana: 'ず', accepted: ['zu', 'ず'] },
    { char: 'ゼ', romaji: 'ze', hiragana: 'ぜ', accepted: ['ze', 'ぜ'] },
    { char: 'ゾ', romaji: 'zo', hiragana: 'ぞ', accepted: ['zo', 'ぞ'] },

    // Da
    { char: 'ダ', romaji: 'da', hiragana: 'だ', accepted: ['da', 'だ'] },
    { char: 'ヂ', romaji: 'ji', hiragana: 'ぢ', accepted: ['ji', 'di', 'zi', 'ぢ'] },
    { char: 'ヅ', romaji: 'zu', hiragana: 'づ', accepted: ['zu', 'du', 'づ'] },
    { char: 'デ', romaji: 'de', hiragana: 'で', accepted: ['de', 'де', 'で'] },
    { char: 'ド', romaji: 'do', hiragana: 'ど', accepted: ['do', 'ど'] },

    // Ba
    { char: 'バ', romaji: 'ba', hiragana: 'ば', accepted: ['ba', 'ば'] },
    { char: 'ビ', romaji: 'bi', hiragana: 'び', accepted: ['bi', 'び'] },
    { char: 'ブ', romaji: 'bu', hiragana: 'ぶ', accepted: ['bu', 'ぶ'] },
    { char: 'ベ', romaji: 'be', hiragana: 'べ', accepted: ['be', 'べ'] },
    { char: 'ボ', romaji: 'bo', hiragana: 'ぼ', accepted: ['bo', 'ぼ'] },

    // Pa
    { char: 'パ', romaji: 'pa', hiragana: 'ぱ', accepted: ['pa', 'ぱ'] },
    { char: 'ピ', romaji: 'pi', hiragana: 'ぴ', accepted: ['pi', 'ぴ'] },
    { char: 'プ', romaji: 'pu', hiragana: 'ぷ', accepted: ['pu', 'ぷ'] },
    { char: 'ペ', romaji: 'pe', hiragana: 'ぺ', accepted: ['pe', 'ぺ'] },
    { char: 'ポ', romaji: 'po', hiragana: 'ぽ', accepted: ['po', 'ぽ'] }
  ];

  // Trạng thái phiên luyện tập
  let currentChars = [];
  let isEvaluated = false;
  let sessionScore = { total: 0, correct: 0 };
  let currentMode = 'all'; // 'basic', 'all', 'dakuten'

  // DOM Elements
  let modeSelect;
  let scoreTotalEl;
  let scoreCorrectEl;
  let feedbackBanner;
  let btnCheck;
  let btnNext;
  let refTableEl;

  const cardItems = [];
  const charGlyphs = [];
  const audioBtns = [];
  const answerInputs = [];
  const resultBadges = [];

  function getActivePool() {
    if (currentMode === 'basic') return KATAKANA_BASIC;
    if (currentMode === 'dakuten') return KATAKANA_DAKUTEN;
    return KATAKANA_BASIC.concat(KATAKANA_DAKUTEN);
  }

  function pickRandom3() {
    const pool = getActivePool();
    if (pool.length < 3) return pool.slice();

    const shuffled = pool.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }

  function initDOM() {
    modeSelect = document.getElementById('katakana-mode-select');
    scoreTotalEl = document.getElementById('katakana-score-total');
    scoreCorrectEl = document.getElementById('katakana-score-correct');
    feedbackBanner = document.getElementById('katakana-feedback-banner');
    btnCheck = document.getElementById('katakana-btn-check');
    btnNext = document.getElementById('katakana-btn-next');
    refTableEl = document.getElementById('katakana-reference-table');

    for (let i = 0; i < 3; i++) {
      cardItems[i] = document.getElementById(`katakana-card-${i}`);
      charGlyphs[i] = document.querySelector(`#katakana-char-${i} .katakana-glyph`);
      audioBtns[i] = document.getElementById(`katakana-audio-${i}`);
      answerInputs[i] = document.getElementById(`katakana-input-${i}`);
      resultBadges[i] = document.getElementById(`katakana-badge-${i}`);
    }
  }

  function startNewRound() {
    isEvaluated = false;
    currentChars = pickRandom3();

    for (let i = 0; i < 3; i++) {
      const item = currentChars[i];
      if (charGlyphs[i]) {
        charGlyphs[i].textContent = item ? item.char : '?';
      }
      if (answerInputs[i]) {
        answerInputs[i].value = '';
        answerInputs[i].disabled = false;
        answerInputs[i].classList.remove('is-correct', 'is-wrong');
      }
      if (cardItems[i]) {
        cardItems[i].classList.remove('is-correct', 'is-wrong');
      }
      if (resultBadges[i]) {
        resultBadges[i].innerHTML = '';
        resultBadges[i].className = 'katakana-result-badge';
      }
    }

    if (feedbackBanner) {
      feedbackBanner.className = 'katakana-feedback-banner';
      feedbackBanner.innerHTML = 'Nhập đáp án cho 3 ô rồi bấm <strong>Kiểm tra</strong> hoặc nhấn <strong>Enter</strong> nhé!';
    }

    if (btnCheck) {
      btnCheck.disabled = false;
      btnCheck.style.display = 'inline-flex';
    }

    // Tự động focus vào ô đầu tiên
    setTimeout(() => {
      if (answerInputs[0]) answerInputs[0].focus();
    }, 80);
  }

  function checkAnswers() {
    if (isEvaluated) return;
    if (currentChars.length < 3) return;

    isEvaluated = true;
    let roundCorrect = 0;

    for (let i = 0; i < 3; i++) {
      const item = currentChars[i];
      const rawInput = answerInputs[i] ? answerInputs[i].value.trim().toLowerCase() : '';

      // Chuẩn hóa input
      const cleanInput = rawInput.replace(/[^a-z0-9ぁ-んァ-ヶ]/g, '');

      // Kiểm tra có khớp với accepted list không
      const isCorrect = item.accepted.some(acc => {
        const cleanAcc = acc.toLowerCase();
        return cleanInput === cleanAcc;
      });

      if (isCorrect) {
        roundCorrect++;
        if (cardItems[i]) cardItems[i].classList.add('is-correct');
        if (answerInputs[i]) answerInputs[i].classList.add('is-correct');
        if (resultBadges[i]) {
          resultBadges[i].className = 'katakana-result-badge badge-correct';
          resultBadges[i].innerHTML = `✅ Đúng <span>(${item.romaji} / ${item.hiragana})</span>`;
        }
      } else {
        if (cardItems[i]) cardItems[i].classList.add('is-wrong');
        if (answerInputs[i]) answerInputs[i].classList.add('is-wrong');
        if (resultBadges[i]) {
          resultBadges[i].className = 'katakana-result-badge badge-wrong';
          resultBadges[i].innerHTML = `❌ Sai <span>(Là: <strong>${item.romaji}</strong> / ${item.hiragana})</span>`;
        }
      }
    }

    // Cập nhật thống kê phiên
    sessionScore.total += 3;
    sessionScore.correct += roundCorrect;
    updateScoreDisplay();

    // Hiển thị feedback tổng kết
    if (feedbackBanner) {
      if (roundCorrect === 3) {
        feedbackBanner.className = 'katakana-feedback-banner feedback-all-correct';
        feedbackBanner.innerHTML = '🎉 <strong>Tuyệt vời!</strong> Bạn trả lời đúng cả 3/3 chữ Katakana! Bấm <strong>Tiếp tục (Enter)</strong> để luyện thêm nhé!';
      } else if (roundCorrect > 0) {
        feedbackBanner.className = 'katakana-feedback-banner feedback-partial';
        feedbackBanner.innerHTML = `👍 Đúng <strong>${roundCorrect}/3</strong> chữ. Hãy ghi nhớ các chữ bị sai và bấm <strong>Tiếp tục (Enter)</strong> để thử lượt mới!`;
      } else {
        feedbackBanner.className = 'katakana-feedback-banner feedback-retry';
        feedbackBanner.innerHTML = '💡 Chưa đúng chữ nào. Đừng lo, hãy xem lại đáp án gợi ý ở từng ô rồi bấm <strong>Tiếp tục (Enter)</strong> nhé!';
      }
    }

    if (btnNext) {
      btnNext.focus();
    }
  }

  function updateScoreDisplay() {
    if (scoreTotalEl) scoreTotalEl.textContent = sessionScore.total;
    if (scoreCorrectEl) scoreCorrectEl.textContent = sessionScore.correct;
  }

  function playCharSound(idx) {
    if (!currentChars[idx]) return;
    const char = currentChars[idx].char;
    if (window.AppCore && typeof window.AppCore.speakJa === 'function') {
      window.AppCore.speakJa(char);
    }
  }

  function renderReferenceTable() {
    if (!refTableEl) return;
    const all = KATAKANA_BASIC.concat(KATAKANA_DAKUTEN);
    let html = '<div class="katakana-ref-grid">';
    all.forEach(item => {
      html += `
        <div class="katakana-ref-cell" onclick="AppCore.speakJa('${item.char}')" title="Bấm để nghe phát âm">
          <span class="ref-kata">${item.char}</span>
          <span class="ref-roma">${item.romaji}</span>
          <span class="ref-hira">${item.hiragana}</span>
        </div>
      `;
    });
    html += '</div>';
    refTableEl.innerHTML = html;
  }

  function init() {
    initDOM();
    renderReferenceTable();

    // Lắng nghe đổi chế độ
    if (modeSelect) {
      modeSelect.addEventListener('change', (e) => {
        currentMode = e.target.value;
        startNewRound();
      });
    }

    // Sự kiện nút Kiểm tra
    if (btnCheck) {
      btnCheck.addEventListener('click', () => {
        checkAnswers();
      });
    }

    // Sự kiện nút Tiếp tục
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        startNewRound();
      });
    }

    // Sự kiện loa phát âm
    for (let i = 0; i < 3; i++) {
      if (audioBtns[i]) {
        audioBtns[i].addEventListener('click', (e) => {
          e.stopPropagation();
          playCharSound(i);
        });
      }
      const charBox = document.getElementById(`katakana-char-${i}`);
      if (charBox) {
        charBox.addEventListener('click', () => {
          playCharSound(i);
        });
      }
    }

    // Điều hướng phím Enter mượt mà giữa 3 ô nhập
    for (let i = 0; i < 3; i++) {
      if (answerInputs[i]) {
        answerInputs[i].addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (isEvaluated) {
              startNewRound();
              return;
            }
            if (i < 2) {
              // Chuyển sang ô tiếp theo
              if (answerInputs[i + 1]) answerInputs[i + 1].focus();
            } else {
              // Ở ô cuối cùng: Thực hiện kiểm tra
              checkAnswers();
            }
          }
        });
      }
    }

    // Bắt đầu lượt đầu tiên
    startNewRound();
  }

  return {
    init,
    startNewRound,
    checkAnswers,
    playCharSound
  };
})();

window.KatakanaModule = KatakanaModule;
