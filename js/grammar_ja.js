// ========================================================
// JS/GRAMMAR_JA.JS - Quản trị Luyện tập Ngữ pháp Tiếng Nhật Tổng Hợp
// Trắc nghiệm A, B, C, D - Mỗi câu 1 điểm - 30 câu ngẫu nhiên
// Nộp bài xong chấm điểm, không lưu lịch sử làm bài
// ========================================================

const GrammarJaModule = (() => {
  // Trạng thái phiên làm bài hiện tại (Không lưu vào localStorage)
  let activeQuizQuestions = []; // Danh sách câu hỏi trong đề hiện tại (tối đa 30 câu)
  let userAnswers = {}; // { [questionId]: 'A' | 'B' | 'C' | 'D' }
  let isSubmitted = false;
  let currentScore = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let selectedLessonKey = ''; // 'bai_1' | 'bai_2' | ...

  // DOM Elements
  let dom = {};

  function initDOM() {
    dom = {
      lessonSelect: document.getElementById('ja-grammar-lesson-select'),
      newQuizBtn: document.getElementById('ja-grammar-new-quiz-btn'),
      timerDisplay: document.getElementById('ja-grammar-timer'),
      progressText: document.getElementById('ja-grammar-progress-text'),
      progressBar: document.getElementById('ja-grammar-progress-bar'),
      submitBtn: document.getElementById('ja-grammar-submit-btn'),
      quickSubmitBtn: document.getElementById('ja-grammar-quick-submit-btn'),
      questionsContainer: document.getElementById('ja-grammar-questions-container'),
      paletteGrid: document.getElementById('ja-grammar-palette-grid'),
      scoreModal: document.getElementById('ja-grammar-score-modal'),
      scorePointsEl: document.getElementById('ja-grammar-score-points'),
      scoreTotalEl: document.getElementById('ja-grammar-score-total'),
      scorePercentEl: document.getElementById('ja-grammar-score-percent'),
      scoreBadgeEl: document.getElementById('ja-grammar-score-badge'),
      scoreTimeEl: document.getElementById('ja-grammar-score-time'),
      scoreCorrectCountEl: document.getElementById('ja-grammar-score-correct-count'),
      scoreWrongCountEl: document.getElementById('ja-grammar-score-wrong-count'),
      scoreSkippedCountEl: document.getElementById('ja-grammar-score-skipped-count'),
      scoreFeedbackEl: document.getElementById('ja-grammar-score-feedback'),
      closeModalBtn: document.getElementById('ja-grammar-close-modal-btn'),
      reviewBtn: document.getElementById('ja-grammar-review-btn'),
      modalNewQuizBtn: document.getElementById('ja-grammar-modal-new-quiz-btn'),
      modalRetryBtn: document.getElementById('ja-grammar-modal-retry-btn'),
      emptyState: document.getElementById('ja-grammar-empty-state')
    };
  }

  // Lấy toàn bộ dữ liệu bài học từ JA_GRAMMAR_DATA
  function getAllLessonsData() {
    return (typeof JA_GRAMMAR_DATA !== 'undefined') ? JA_GRAMMAR_DATA : {};
  }

  // Thu thập danh sách câu hỏi theo bài đã chọn
  function getQuestionsForSelectedLesson() {
    const allData = getAllLessonsData();
    const lessonKeys = Object.keys(allData);

    if ((!selectedLessonKey || !allData[selectedLessonKey]) && lessonKeys.length > 0) {
      selectedLessonKey = lessonKeys[0];
    }

    const lesson = allData[selectedLessonKey];
    if (lesson && Array.isArray(lesson.questions)) {
      return lesson.questions.map(q => Object.assign({}, q, { lessonTitle: lesson.title || selectedLessonKey }));
    }
    return [];
  }

  // Thuật toán xáo trộn Fisher-Yates shuffle
  function shuffleArray(arr) {
    const clone = arr.slice();
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = clone[i];
      clone[i] = clone[j];
      clone[j] = temp;
    }
    return clone;
  }

  // Render danh sách Bài học vào Dropdown
  function renderLessonSelect() {
    if (!dom.lessonSelect) return;
    const allData = getAllLessonsData();
    const lessonKeys = Object.keys(allData);

    if ((!selectedLessonKey || !allData[selectedLessonKey]) && lessonKeys.length > 0) {
      selectedLessonKey = lessonKeys[0];
    }

    let html = '';
    lessonKeys.forEach(key => {
      const lesson = allData[key];
      const count = (lesson && Array.isArray(lesson.questions)) ? lesson.questions.length : 0;
      const title = (lesson && lesson.title) ? lesson.title : key;
      const isSelected = selectedLessonKey === key ? 'selected' : '';
      html += `<option value="${key}" ${isSelected}>${title} (${count} câu)</option>`;
    });

    dom.lessonSelect.innerHTML = html;
  }

  // Bắt đầu / Dừng đồng hồ đếm giờ
  function startTimer() {
    stopTimer();
    elapsedSeconds = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      updateTimerDisplay();
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    if (dom.timerDisplay) {
      dom.timerDisplay.textContent = formatTime(elapsedSeconds);
    }
  }

  // Khởi tạo bài làm cho bài học đang chọn
  function generateNewQuiz(isRetrySame = false) {
    stopTimer();
    const pool = getQuestionsForSelectedLesson();

    if (pool.length === 0) {
      activeQuizQuestions = [];
      userAnswers = {};
      isSubmitted = false;
      renderEmptyState();
      return;
    }

    // Giữ nguyên toàn bộ câu hỏi của bài học theo đúng thứ tự SGK
    activeQuizQuestions = pool.slice();

    // Reset trạng thái làm bài (Không lưu lịch sử)
    userAnswers = {};
    isSubmitted = false;
    currentScore = 0;

    renderQuizUI();
    startTimer();

    // Scroll nhẹ lên đầu container
    const container = document.querySelector('.grammar-quiz-main');
    if (container) container.scrollTop = 0;
  }

  // Render giao diện khi không có câu hỏi
  function renderEmptyState() {
    if (dom.emptyState) dom.emptyState.style.display = 'block';
    if (dom.questionsContainer) dom.questionsContainer.innerHTML = '';
    if (dom.paletteGrid) dom.paletteGrid.innerHTML = '';
    if (dom.progressText) dom.progressText.textContent = '0 / 0 câu';
    if (dom.progressBar) dom.progressBar.style.width = '0%';
  }

  // Render câu hỏi và thanh điều hướng
  function renderQuizUI() {
    if (dom.emptyState) dom.emptyState.style.display = 'none';
    renderQuestionsList();
    renderPalette();
    updateProgressUI();
  }

  // Chuẩn hóa chuỗi để so sánh đáp án dạng điền từ thông minh
  function normalizeAnswerText(str) {
    if (!str) return '';
    return str.toString()
      .trim()
      .replace(/[\s\u3000]+/g, '') // bỏ khoảng trắng ASCII & khoảng trắng tiếng Nhật
      .replace(/[・,，、。.\\/|\-;()[\]（）：:]/g, '') // bỏ dấu chấm ngăn cách, phẩy, gạch chéo, ngoặc
      .replace(/[×✕✖✗]/g, 'x') // chuẩn hóa các ký tự dấu x/nhân thành 'x'
      .toLowerCase();
  }

  // Nhận diện ký tự chỗ trống:
  // 1. Dạng ngoặc đơn: （____）, (____), （　）, (   )
  // 2. Dạng đường kẻ gạch dưới: ＿＿＿＿, ____ (tối thiểu 2 dấu gạch dưới)
  const INLINE_BLANK_REGEX = /(?:[（\(][\s\u3000_—]*[）\)]|[＿_—–]{2,})/g;

  function countInlineBlanks(questionStr) {
    if (!questionStr) return 0;
    const matches = questionStr.match(INLINE_BLANK_REGEX);
    return matches ? matches.length : 0;
  }

  function checkSingleBlankAnswer(userVal, targetAns) {
    if (!userVal) return false;
    const normUser = normalizeAnswerText(userVal);
    if (!normUser) return false;

    let targets = [];
    if (Array.isArray(targetAns)) {
      targets = targetAns;
    } else if (typeof targetAns === 'string') {
      targets = targetAns.split(/[\/|]/).map(s => s.trim());
    } else {
      targets = [targetAns];
    }

    return targets.some(target => {
      const normTarget = normalizeAnswerText(target);
      if (!normTarget) return false;
      if (normUser === normTarget) return true;
      if (normTarget === 'は' && (normUser === 'wa' || normUser === 'ha')) return true;
      if (normTarget === 'へ' && (normUser === 'e' || normUser === 'he')) return true;
      if (normTarget === 'を' && (normUser === 'o' || normUser === 'wo')) return true;
      return false;
    });
  }

  // Render panel bảng phương án lựa chọn (cho dạng bài tập matching/chọn từ có sẵn)
  function renderChoicesPanelHtml(q, qIdx) {
    if (!q.choices || !Array.isArray(q.choices)) return '';
    const isSubmittedState = isSubmitted;

    // Tìm xem mỗi key được điền ở blank nào
    const usedMap = {};
    const blankCount = countInlineBlanks(q.question);
    for (let bIdx = 0; bIdx < blankCount; bIdx++) {
      const val = userAnswers[`${q.id}_blank_${bIdx}`];
      if (val) {
        const norm = normalizeAnswerText(val);
        if (norm) {
          usedMap[norm] = bIdx + 1;
        }
      }
    }

    let itemsHtml = '';
    q.choices.forEach(ch => {
      const isEx = !!ch.isExample;
      const keyNorm = normalizeAnswerText(ch.key);
      const usedSubNum = usedMap[keyNorm];
      const isUsed = !isEx && !!usedSubNum;

      let extraBadge = '';
      if (isEx) {
        extraBadge = '<span class="choice-example-tag">Ví dụ</span>';
      } else if (isUsed) {
        extraBadge = `<span class="choice-used-tag">Câu ${usedSubNum}</span>`;
      }

      itemsHtml += `
        <div class="grammar-choice-item ${isEx ? 'is-example' : ''} ${isUsed ? 'is-used' : ''} ${isSubmittedState ? 'disabled' : ''}" data-qid="${q.id}" data-key="${escapeHtml(ch.key)}" title="${isEx ? 'Câu mẫu ví dụ' : (isSubmittedState ? '' : 'Bấm để điền nhanh vào ô trống')}">
          <span class="choice-key-badge">${escapeHtml(ch.key)}</span>
          <span class="choice-text">${escapeHtml(ch.text)}</span>
          ${extraBadge}
        </div>
      `;
    });

    return `
      <div class="grammar-choices-panel">
        <div class="grammar-choices-header">
          <span class="grammar-choices-title">📋 Bảng phương án lựa chọn</span>
          <span class="grammar-choices-hint">${isSubmittedState ? 'Đối chiếu phương án đã chọn' : '💡 Bấm vào phương án để điền nhanh'}</span>
        </div>
        <div class="grammar-choices-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  }

  // Render panel Bảng lịch (cho dạng bài tập nhìn lịch nói thứ ngày)
  function renderCalendarHtml(cal) {
    if (!cal) return '';
    const title = cal.title || cal.month || '3月';
    const headers = cal.headers || ['日', '月', '火', '水', '木', '金', '土'];
    const days = cal.days || cal.weeks || [];

    const ths = headers.map((h, i) => {
      let cls = '';
      if (i === 0) cls = 'cal-sun';
      else if (i === 6) cls = 'cal-sat';
      return `<th class="${cls}">${escapeHtml(h)}</th>`;
    }).join('');

    const trs = days.map(week => {
      const tds = week.map((d, i) => {
        let cls = '';
        if (i === 0) cls = 'cal-sun';
        else if (i === 6) cls = 'cal-sat';
        const dStr = (d !== null && d !== undefined) ? String(d) : '';
        return `<td class="${cls}">${escapeHtml(dStr)}</td>`;
      }).join('');
      return `<tr>${tds}</tr>`;
    }).join('');

    return `
      <div class="grammar-calendar-card">
        <div class="grammar-calendar-header">
          <span class="grammar-calendar-icon">📅</span>
          <span class="grammar-calendar-title">${escapeHtml(title)}</span>
        </div>
        <table class="grammar-calendar-table">
          <thead>
            <tr>${ths}</tr>
          </thead>
          <tbody>
            ${trs}
          </tbody>
        </table>
      </div>
    `;
  }

  // Render panel Bảng thông tin dữ liệu (hỗ trợ cả bảng tĩnh và bảng có ô điền từ trực tiếp)
  function renderInfoTableHtml(tbl, q, qIdx) {
    if (!tbl) return '';
    const title = (tbl.title !== undefined) ? tbl.title : '';
    const headers = tbl.headers || [];
    const rows = tbl.rows || [];
    const isCentered = !headers || headers.length === 0;
    const isSubmittedState = isSubmitted;

    let autoBlankCounter = 0;

    const ths = (headers && headers.length > 0) ? headers.map(h => `<th>${escapeHtml(h)}</th>`).join('') : '';
    const trs = rows.map((row, rIdx) => {
      const isEx = rIdx === 0 && (row[0] || '').includes('例');
      const tds = row.map(cell => {
        const rawCell = (cell !== undefined && cell !== null) ? String(cell).trim() : '';

        // Kiểm tra xem cell có chứa ô điền từ hay không
        const hasBlank = INLINE_BLANK_REGEX.test(rawCell) || /^\d+\)\s*（[\s\u3000_—]*）$/.test(rawCell);
        if (hasBlank && q) {
          // Trích xuất số thứ tự câu hỏi (ví dụ 1), 5), 6)...)
          const subMatch = rawCell.match(/^(\d+)\)/);
          let bIdx = autoBlankCounter++;
          let subNum = '';
          if (subMatch) {
            subNum = subMatch[1];
            bIdx = parseInt(subNum, 10) - 1;
          }

          const rawTarget = (Array.isArray(q.answers) && q.answers[bIdx] !== undefined)
            ? q.answers[bIdx]
            : (q.answer || '');
          const primaryAns = Array.isArray(rawTarget)
            ? rawTarget[0]
            : (typeof rawTarget === 'string' ? rawTarget.split(/[\/|]/)[0].trim() : rawTarget);

          const userVal = userAnswers[`${q.id}_blank_${bIdx}`] || '';
          let inputClass = '';
          let feedbackHtml = '';

          if (isSubmittedState) {
            const isBlankCorrect = checkSingleBlankAnswer(userVal, rawTarget);
            if (!userVal || !userVal.trim()) {
              inputClass = 'input-skipped';
              feedbackHtml = `<span class="table-blank-feedback skipped" title="Chưa điền! Đáp án chuẩn: ${escapeHtml(primaryAns)}">⚪ <strong>${escapeHtml(primaryAns)}</strong></span>`;
            } else if (isBlankCorrect) {
              inputClass = 'input-correct';
              feedbackHtml = `<span class="table-blank-feedback correct" title="Chính xác!">✅</span>`;
            } else {
              inputClass = 'input-wrong';
              feedbackHtml = `<span class="table-blank-feedback wrong" title="Sai rồi! Đáp án chuẩn: ${escapeHtml(primaryAns)}">❌ <strong>${escapeHtml(primaryAns)}</strong></span>`;
            }
          }

          const inputSize = Math.max((primaryAns || '').length + 2, 5);

          return `
            <td class="grammar-table-blank-cell">
              <div class="table-cell-blank-wrapper">
                ${subNum ? `<span class="table-cell-sub-num">${escapeHtml(subNum)})</span>` : ''}
                <span class="bracket-open">（</span><input type="text"
                  class="grammar-inline-input grammar-table-cell-input ${inputClass}"
                  id="grammar-blank-${q.id}-${bIdx}"
                  data-qid="${q.id}"
                  data-qidx="${qIdx}"
                  data-blank-idx="${bIdx}"
                  size="${inputSize}"
                  value="${escapeHtml(userVal)}"
                  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                  ${isSubmittedState ? 'disabled' : ''} /><span class="bracket-close">）</span>
                ${feedbackHtml}
              </div>
            </td>
          `;
        }

        return `<td style="${isCentered ? 'text-align: center; font-size: 0.98rem; font-weight: 600; padding: 10px 16px;' : ''}">${escapeHtml(rawCell)}</td>`;
      }).join('');
      return `<tr class="${isEx ? 'example-row' : ''}">${tds}</tr>`;
    }).join('');

    return `
      <div class="grammar-info-table-card">
        ${title ? `<div class="grammar-info-table-title">${escapeHtml(title)}</div>` : ''}
        <table class="grammar-info-table">
          ${ths ? `<thead><tr>${ths}</tr></thead>` : ''}
          <tbody>${trs}</tbody>
        </table>
      </div>
    `;
  }

  // Format câu hỏi có chỗ trống inline
  function formatGrammarQuestionWithBlanks(q, qIdx) {
    const rawText = q.question || '';
    let blankCounter = 0;
    const isSubmittedState = isSubmitted;
    const isChoiceBlank = !!(q.choices && Array.isArray(q.choices));

    const formatted = rawText.replace(INLINE_BLANK_REGEX, (match) => {
      const bIdx = blankCounter++;
      const blankKey = `${q.id}_blank_${bIdx}`;
      const userVal = userAnswers[blankKey] || '';
      const rawTarget = (Array.isArray(q.answers) && q.answers[bIdx] !== undefined)
        ? q.answers[bIdx]
        : (q.answer || '');
      const primaryAns = Array.isArray(rawTarget) ? rawTarget[0] : (typeof rawTarget === 'string' ? rawTarget.split(/[\/|]/)[0].trim() : rawTarget);

      let inputClass = '';
      let feedbackHtml = '';

      if (isSubmittedState) {
        if (q.type === 'open_ended') {
          // Dạng câu hỏi mở: Không chấm điểm đúng sai, hiện 1 đáp án mẫu để người học tự đối chiếu
          inputClass = (userVal && userVal.trim()) ? 'input-open-ended' : 'input-skipped';
          feedbackHtml = `<span class="grammar-slot-feedback"><span class="grammar-blank-badge sample-ref" title="Đáp án mẫu đối chiếu: ${escapeHtml(primaryAns)}">💡 Mẫu: <strong>${escapeHtml(primaryAns)}</strong></span></span>`;
        } else {
          const isBlankCorrect = checkSingleBlankAnswer(userVal, rawTarget);
          if (!userVal || !userVal.trim()) {
            inputClass = 'input-skipped';
            feedbackHtml = `<span class="grammar-slot-feedback"><span class="grammar-blank-badge skipped" title="Chưa điền! Đáp án chuẩn: ${escapeHtml(primaryAns)}">⚪ <strong>${escapeHtml(primaryAns)}</strong></span></span>`;
          } else if (isBlankCorrect) {
            inputClass = 'input-correct';
            feedbackHtml = `<span class="grammar-slot-feedback"><span class="grammar-blank-badge correct" title="Chính xác!">✅</span></span>`;
          } else {
            inputClass = 'input-wrong';
            feedbackHtml = `<span class="grammar-slot-feedback"><span class="grammar-blank-badge wrong" title="Sai rồi! Đáp án chuẩn: ${escapeHtml(primaryAns)}">❌ <strong>${escapeHtml(primaryAns)}</strong></span></span>`;
          }
        }
      }

      // Phân biệt: Nếu là dạng gạch dưới (không bắt đầu bằng dấu ngoặc)
      const isUnderline = !match.startsWith('（') && !match.startsWith('(');
      const inputSize = (q.type === 'open_ended')
        ? 22
        : (isUnderline
          ? Math.max((primaryAns || '').length + 4, 14)
          : (isChoiceBlank ? 2 : Math.max((primaryAns || '').length + 2, 4)));

      if (isUnderline) {
        return `<span class="grammar-blank-wrapper grammar-underline-blank-wrapper"><input type="text" class="grammar-inline-input grammar-underline-input ${inputClass}" id="grammar-blank-${q.id}-${bIdx}" data-qid="${q.id}" data-qidx="${qIdx}" data-blank-idx="${bIdx}" size="${inputSize}" value="${escapeHtml(userVal)}" placeholder="" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ${isSubmittedState ? 'disabled' : ''} />${feedbackHtml}</span>`;
      }

      const choiceInputClass = isChoiceBlank ? 'grammar-choice-letter-input' : '';
      return `<span class="grammar-blank-wrapper"><span class="bracket-open">（</span><input type="text" class="grammar-inline-input ${choiceInputClass} ${inputClass}" id="grammar-blank-${q.id}-${bIdx}" data-qid="${q.id}" data-qidx="${qIdx}" data-blank-idx="${bIdx}" size="${inputSize}" maxlength="${isChoiceBlank ? 20 : ''}" value="${escapeHtml(userVal)}" placeholder="" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ${isSubmittedState ? 'disabled' : ''} /><span class="bracket-close">）</span>${feedbackHtml}</span>`;
    });

    if (q.columns && q.columns > 1) {
      const lines = formatted.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
      const headerLines = [];
      const itemBlocks = [];
      let currentItemLines = null;

      lines.forEach(line => {
        if (/^\d+\)/.test(line)) {
          if (currentItemLines) {
            itemBlocks.push(currentItemLines.join('<br>'));
          }
          currentItemLines = [line];
        } else if (currentItemLines) {
          currentItemLines.push(line);
        } else {
          headerLines.push(line);
        }
      });
      if (currentItemLines) {
        itemBlocks.push(currentItemLines.join('<br>'));
      }

      if (itemBlocks.length > 0) {
        const headerHtml = headerLines.join('<br>');
        const itemsHtml = itemBlocks.map(item => `<div class="grammar-grid-item">${item}</div>`).join('');
        return `
          <div class="grammar-interactive-text grammar-has-grid">
            ${headerHtml ? `<div class="grammar-grid-header">${headerHtml}</div>` : ''}
            <div class="grammar-items-grid grammar-grid-cols-${q.columns}">
              ${itemsHtml}
            </div>
          </div>
        `;
      }
    }

    const htmlWithBr = formatted
      .replace(/\r?\n\s*\r?\n/g, '<div class="grammar-para-gap"></div>')
      .replace(/\r?\n/g, '<br>');
    return `<div class="grammar-interactive-text">${htmlWithBr}</div>`;
  }

  // ========================================================
  // DẠNG BÀI TẬP: CHỌN 1 TRONG 2 TỪ (BINARY / INLINE CHOICE)
  // Ký hiệu trong câu: 〔A／B〕, 〔A、B〕 hoặc [A / B]
  // ========================================================
  const BINARY_CHOICE_REGEX = /〔([^〕]+)〕|\[([^\]]+)\]/g;

  function countBinaryChoiceSlots(questionStr) {
    if (!questionStr) return 0;
    const matches = questionStr.match(BINARY_CHOICE_REGEX);
    if (!matches) return 0;
    return matches.filter(m => !m.includes('<u>')).length;
  }

  function formatBinaryChoiceQuestion(q, qIdx) {
    const rawText = q.question || '';
    let slotCounter = 0;
    const isSubmittedState = isSubmitted;

    const formatted = rawText.replace(BINARY_CHOICE_REGEX, (match, p1, p2) => {
      const innerContent = (p1 || p2 || '').trim();

      // Tách các phương án lựa chọn, tránh split '/' bên trong thẻ HTML (như </u>)
      const splitChoices = (str) => str.split(/(?<!<)\/(?!>)|[／、,]/).map(s => s.trim());

      // Nếu là câu ví dụ mẫu (có chứa thẻ <u>)
      if (innerContent.includes('<u>')) {
        const parts = splitChoices(innerContent);
        const part1 = parts[0] || '';
        const part2 = parts[1] || '';
        const is1Active = part1.includes('<u>');
        const is2Active = part2.includes('<u>');
        const text1 = part1.replace(/<\/?u>/g, '');
        const text2 = part2.replace(/<\/?u>/g, '');
        return `<span class="inline-choice-group inline-choice-example"><span class="inline-choice-bracket">〔</span><span class="inline-choice-preview ${is1Active ? 'example-active' : ''}">${escapeHtml(text1)}</span><span class="inline-choice-divider">/</span><span class="inline-choice-preview ${is2Active ? 'example-active' : ''}">${escapeHtml(text2)}</span><span class="inline-choice-bracket">〕</span></span>`;
      }

      // Slot làm bài thực tế
      const sIdx = slotCounter++;
      const slotKey = `${q.id}_slot_${sIdx}`;
      const userVal = userAnswers[slotKey] || '';
      const rawTarget = (Array.isArray(q.answers) && q.answers[sIdx] !== undefined)
        ? q.answers[sIdx]
        : (q.answer || '');

      const parts = splitChoices(innerContent);
      const opt1 = parts[0] || '';
      const opt2 = parts[1] || '';

      let btn1Class = '';
      let btn2Class = '';
      let feedbackHtml = '';

      const isSelected1 = (userVal === opt1);
      const isSelected2 = (userVal === opt2);

      if (isSubmittedState) {
        const isOpt1Correct = checkSingleBlankAnswer(opt1, rawTarget);
        const isOpt2Correct = checkSingleBlankAnswer(opt2, rawTarget);

        if (!userVal) {
          // Chưa chọn
          feedbackHtml = `<span class="inline-choice-feedback skipped" title="Chưa chọn!">⚪</span>`;
          if (isOpt1Correct) btn1Class += ' choice-target';
          if (isOpt2Correct) btn2Class += ' choice-target';
        } else if (checkSingleBlankAnswer(userVal, rawTarget)) {
          // Chọn đúng
          feedbackHtml = `<span class="inline-choice-feedback correct" title="Chính xác!">✅</span>`;
          if (isSelected1) btn1Class += ' choice-correct';
          if (isSelected2) btn2Class += ' choice-correct';
        } else {
          // Chọn sai
          feedbackHtml = `<span class="inline-choice-feedback wrong" title="Sai rồi!">❌</span>`;
          if (isSelected1) btn1Class += ' choice-wrong';
          if (isSelected2) btn2Class += ' choice-wrong';
          if (isOpt1Correct) btn1Class += ' choice-target';
          if (isOpt2Correct) btn2Class += ' choice-target';
        }
      }

      return `<span class="inline-choice-group" data-qid="${q.id}" data-slot-idx="${sIdx}"><span class="inline-choice-bracket">〔</span><button type="button" class="inline-choice-btn ${isSelected1 ? 'selected' : ''} ${btn1Class}" data-qid="${q.id}" data-qidx="${qIdx}" data-slot-idx="${sIdx}" data-val="${escapeHtml(opt1)}" ${isSubmittedState ? 'disabled' : ''}>${escapeHtml(opt1)}</button><span class="inline-choice-divider">/</span><button type="button" class="inline-choice-btn ${isSelected2 ? 'selected' : ''} ${btn2Class}" data-qid="${q.id}" data-qidx="${qIdx}" data-slot-idx="${sIdx}" data-val="${escapeHtml(opt2)}" ${isSubmittedState ? 'disabled' : ''}>${escapeHtml(opt2)}</button><span class="inline-choice-bracket">〕</span>${feedbackHtml}</span>`;
    });

    const htmlWithBr = formatted
      .replace(/\r?\n\s*\r?\n/g, '<div class="grammar-para-gap"></div>')
      .replace(/\r?\n/g, '<br>');
    return `<div class="grammar-interactive-text">${htmlWithBr}</div>`;
  }

  // ========================================================
  // DẠNG BÀI TẬP: GHÉP CÁC TỪ THÀNH CÂU HOÀN CHỈNH (WORD ORDER / SCRAMBLE)
  // ========================================================
  function formatWordOrderQuestion(q, qIdx) {
    const rawText = q.question || '';
    let blankCounter = 0;
    const isSubmittedState = isSubmitted;

    const lines = rawText.split(/\r?\n/);
    const resultBlocks = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Nếu là câu ví dụ mẫu 例:
      if (line.includes('例：') || line.includes('例:')) {
        resultBlocks.push(`<div class="word-order-example-row">${line}</div>`);
        continue;
      }

      // Nếu là dòng bài con có chứa từ xáo trộn (chứa ／ hoặc /)
      if (line.includes('／') || line.includes('/')) {
        const matchPrefix = line.match(/^(\d+\))\s*(.*)$/);
        let prefix = '';
        let wordsPart = line;
        if (matchPrefix) {
          prefix = matchPrefix[1] + ' ';
          wordsPart = matchPrefix[2];
        }

        const words = wordsPart.split(/[\/／]/).map(w => w.trim()).filter(Boolean);
        const subIdx = blankCounter++; // Blank index cho câu này

        const blankKey = `${q.id}_blank_${subIdx}`;
        const userVal = userAnswers[blankKey] || '';
        const rawTarget = (Array.isArray(q.answers) && q.answers[subIdx] !== undefined)
          ? q.answers[subIdx]
          : (q.answer || '');
        const primaryAns = Array.isArray(rawTarget) ? rawTarget[0] : (typeof rawTarget === 'string' ? rawTarget.split(/[\/|]/)[0].trim() : rawTarget);

        const chipsHtml = words.map((w, wIdx) => {
          return `<button type="button" class="word-chip-btn" data-qid="${q.id}" data-qidx="${qIdx}" data-blank-idx="${subIdx}" data-word-idx="${wIdx}" data-word="${escapeHtml(w)}" ${isSubmittedState ? 'disabled' : ''}>${escapeHtml(w)}</button>`;
        }).join('');

        let inputClass = '';
        let feedbackHtml = '';

        if (isSubmittedState) {
          const isCorrect = checkSingleBlankAnswer(userVal, rawTarget);
          if (!userVal || !userVal.trim()) {
            inputClass = 'input-skipped';
            feedbackHtml = `<span class="grammar-slot-feedback"><span class="grammar-blank-badge skipped" title="Chưa làm! Đáp án chuẩn: ${escapeHtml(primaryAns)}">⚪ Đáp án: <strong>${escapeHtml(primaryAns)}</strong></span></span>`;
          } else if (isCorrect) {
            inputClass = 'input-correct';
            feedbackHtml = `<span class="grammar-slot-feedback"><span class="grammar-blank-badge correct" title="Chính xác!">✅</span></span>`;
          } else {
            inputClass = 'input-wrong';
            feedbackHtml = `<span class="grammar-slot-feedback"><span class="grammar-blank-badge wrong" title="Sai rồi! Đáp án chuẩn: ${escapeHtml(primaryAns)}">❌ Đáp án: <strong>${escapeHtml(primaryAns)}</strong></span></span>`;
          }
        }

        const blockHtml = `
          <div class="word-order-sub-card">
            <div class="word-order-prompt-row">
              <span class="word-order-num">${escapeHtml(prefix)}</span>
              <div class="word-chips-pool" data-qid="${q.id}" data-blank-idx="${subIdx}">
                ${chipsHtml}
              </div>
            </div>
            <div class="word-order-input-row">
              <input type="text" class="grammar-inline-input grammar-underline-input grammar-order-input ${inputClass}" id="grammar-blank-${q.id}-${subIdx}" data-qid="${q.id}" data-qidx="${qIdx}" data-blank-idx="${subIdx}" size="34" value="${escapeHtml(userVal)}" placeholder="Bấm các từ ở trên để ghép câu..." autocomplete="off" spellcheck="false" ${isSubmittedState ? 'disabled' : ''} />
              <button type="button" class="word-order-clear-btn" data-qid="${q.id}" data-qidx="${qIdx}" data-blank-idx="${subIdx}" title="Xoá làm lại dòng này" ${isSubmittedState ? 'disabled' : ''}>↺ Xếp lại</button>
              ${feedbackHtml}
            </div>
          </div>
        `;
        resultBlocks.push(blockHtml);

        // Bỏ qua dòng trống hoặc dòng đường kẻ tiếp theo nếu có
        if (i + 1 < lines.length && (lines[i + 1].includes('＿＿') || lines[i + 1].includes('___') || lines[i + 1].trim().startsWith('…') || lines[i + 1].trim().startsWith('...'))) {
          i++;
        }
        continue;
      }

      resultBlocks.push(`<div>${line}</div>`);
    }

    return `<div class="grammar-interactive-text grammar-word-order-interactive">${resultBlocks.join('')}</div>`;
  }

  // Kiểm tra câu hỏi đã được làm hay chưa
  function hasQuestionAnswered(q) {
    if (q.type === 'binary_choice') {
      const slotCount = countBinaryChoiceSlots(q.question);
      for (let sIdx = 0; sIdx < slotCount; sIdx++) {
        const userVal = userAnswers[`${q.id}_slot_${sIdx}`];
        if (userVal !== undefined && userVal !== null && userVal.toString().trim() !== '') {
          return true;
        }
      }
      return false;
    }

    const isFill = (q.type === 'fill' || q.type === 'matching' || !q.options || Object.keys(q.options).length === 0);
    if (!isFill) {
      const userAns = userAnswers[q.id];
      return (userAns !== undefined && userAns !== null && userAns.toString().trim() !== '');
    }

    const blankCount = (Array.isArray(q.answers) && q.answers.length > 0)
      ? q.answers.length
      : countInlineBlanks(q.question);
    if (blankCount > 0) {
      for (let bIdx = 0; bIdx < blankCount; bIdx++) {
        const userVal = userAnswers[`${q.id}_blank_${bIdx}`];
        if (userVal !== undefined && userVal !== null && userVal.toString().trim() !== '') {
          return true;
        }
      }
      return false;
    }

    const userAns = userAnswers[q.id];
    return (userAns !== undefined && userAns !== null && userAns.toString().trim() !== '');
  }

  // Kiểm tra đáp án câu hỏi (Hỗ trợ Multiple Choice, Điền từ inline, Điền từ hộp, và Chọn 1 trong 2 từ)
  function checkQuestionAnswer(q) {
    if (q.type === 'binary_choice') {
      const slotCount = countBinaryChoiceSlots(q.question);
      if (slotCount === 0) return false;
      for (let sIdx = 0; sIdx < slotCount; sIdx++) {
        const userVal = userAnswers[`${q.id}_slot_${sIdx}`];
        const targetAns = (Array.isArray(q.answers) && q.answers[sIdx] !== undefined)
          ? q.answers[sIdx]
          : (q.answer || '');
        if (!checkSingleBlankAnswer(userVal, targetAns)) {
          return false;
        }
      }
      return true;
    }

    const isFill = (q.type === 'fill' || q.type === 'matching' || !q.options || Object.keys(q.options).length === 0);
    if (!isFill) {
      const userAns = userAnswers[q.id];
      return userAns === q.answer;
    }

    const blankCount = (Array.isArray(q.answers) && q.answers.length > 0)
      ? q.answers.length
      : countInlineBlanks(q.question);
    if (blankCount > 0) {
      for (let bIdx = 0; bIdx < blankCount; bIdx++) {
        const userVal = userAnswers[`${q.id}_blank_${bIdx}`];
        const targetAns = (Array.isArray(q.answers) && q.answers[bIdx] !== undefined)
          ? q.answers[bIdx]
          : (q.answer || '');
        if (!checkSingleBlankAnswer(userVal, targetAns)) {
          return false;
        }
      }
      return true;
    }

    // Dạng điền từ hộp ở đáy
    const userAns = userAnswers[q.id];
    if (userAns === undefined || userAns === null) return false;
    const strAns = userAns.toString().trim();
    if (!strAns) return false;

    const normUser = normalizeAnswerText(strAns);
    const normCorrect = normalizeAnswerText(q.answer);
    if (normUser === normCorrect) return true;

    if (Array.isArray(q.acceptable_answers)) {
      return q.acceptable_answers.some(ans => normalizeAnswerText(ans) === normUser);
    }
    return false;
  }

  // Render danh sách câu hỏi
  function renderQuestionsList() {
    if (!dom.questionsContainer) return;
    const total = activeQuizQuestions.length;

    let html = '';
    activeQuizQuestions.forEach((q, idx) => {
      const qNum = idx + 1;
      const isBinaryChoice = (q.type === 'binary_choice');
      const isFillQuestion = !isBinaryChoice && (q.type === 'fill' || q.type === 'matching' || !q.options || Object.keys(q.options).length === 0);
      const blankCount = isFillQuestion
        ? ((Array.isArray(q.answers) && q.answers.length > 0)
            ? q.answers.length
            : countInlineBlanks(q.question))
        : 0;
      const useInlineBlanks = isFillQuestion && (blankCount > 0 || !!q.table || !!q.calendar || !!q.choices);

      const userAns = userAnswers[q.id];
      const correctOpt = q.answer;
      const hasAnswered = hasQuestionAnswered(q);
      const isCorrect = checkQuestionAnswer(q);

      let cardClass = 'grammar-question-card';
      let statusBadge = '';

      if (isSubmitted) {
        if (q.type === 'open_ended') {
          if (hasAnswered) {
            statusBadge = `<span class="q-status-badge badge-open-done">💬 Đã điền (Tự đối chiếu)</span>`;
          } else {
            statusBadge = `<span class="q-status-badge badge-skipped">⚪ Chưa điền (Tự đối chiếu)</span>`;
          }
        } else if (!hasAnswered) {
          cardClass += ' q-skipped';
          statusBadge = `<span class="q-status-badge badge-skipped">⚪ Chưa làm (0đ)</span>`;
        } else if (isCorrect) {
          cardClass += ' q-correct';
          statusBadge = `<span class="q-status-badge badge-correct">✅ Chính xác (+1đ)</span>`;
        } else {
          cardClass += ' q-wrong';
          statusBadge = `<span class="q-status-badge badge-wrong">❌ Sai rồi (0đ)</span>`;
        }
      }

      // Xác định nhãn dạng bài tập (hỗ trợ tag tuỳ chỉnh hoặc tự nhận diện)
      let typeTagHtml = '';
      const customTag = q.tag || (isBinaryChoice ? 'Chọn 1 trong 2 từ' : (isFillQuestion ? (q.choices ? 'Chọn câu trả lời phù hợp từ các từ có sẵn' : (q.question && (q.question.includes('＿＿') || q.question.includes('___')) ? 'Hoàn thành câu dựa vào câu có sẵn' : 'Điền từ')) : ''));
      if (customTag) {
        const isCompletion = customTag.toLowerCase().includes('hoàn thành');
        const isMatching = customTag.toLowerCase().includes('bảng') || !!(q.choices && q.choices.length > 0);
        const isCalendar = customTag.toLowerCase().includes('lịch') || !!q.calendar;
        const isBinary = isBinaryChoice || customTag.toLowerCase().includes('chọn 1 trong 2') || customTag.toLowerCase().includes('2 từ');
        const isHiragana = customTag.toLowerCase().includes('hiragana') || customTag.toLowerCase().includes('cách đọc');
        const isOpenEnded = (q.type === 'open_ended') || customTag.toLowerCase().includes('mở');
        const isWordOrder = (q.type === 'word_order') || customTag.toLowerCase().includes('ghép') || customTag.toLowerCase().includes('sắp xếp');
        let icon = '✏️';
        let colorStyle = 'background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);';
        if (isCalendar) {
          icon = '📅';
          colorStyle = 'background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.35);';
        } else if (isWordOrder) {
          icon = '🧩';
          colorStyle = 'background: rgba(14, 165, 233, 0.15); color: #38bdf8; border: 1px solid rgba(14, 165, 233, 0.3);';
        } else if (isOpenEnded) {
          icon = '💬';
          colorStyle = 'background: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3);';
        } else if (isHiragana) {
          icon = '🈸';
          colorStyle = 'background: rgba(244, 63, 94, 0.15); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.3);';
        } else if (isBinary) {
          icon = '⚖️';
          colorStyle = 'background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3);';
        } else if (isCompletion) {
          icon = '✍️';
          colorStyle = 'background: rgba(6, 182, 212, 0.15); color: #06b6d4; border: 1px solid rgba(6, 182, 212, 0.3);';
        } else if (isMatching) {
          icon = '📋';
          colorStyle = 'background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);';
        }
        const cleanTag = customTag.replace(/^(✍️|✏️|📋|🔠|⚖️|🔘|🈸|🔤|💬|🧩|📅)\s*/, '');
        typeTagHtml = `<span class="q-lesson-tag" style="${colorStyle}">${icon} ${escapeHtml(cleanTag)}</span>`;
      }

      let bodyContent = '';
      if (q.type === 'word_order') {
        bodyContent = formatWordOrderQuestion(q, idx);
      } else if (isBinaryChoice) {
        bodyContent = formatBinaryChoiceQuestion(q, idx);
      } else if (useInlineBlanks) {
        if (q.choices && Array.isArray(q.choices)) {
          bodyContent = `
            <div class="grammar-matching-layout">
              <div class="grammar-matching-left">
                ${formatGrammarQuestionWithBlanks(q, idx)}
              </div>
              <div class="grammar-matching-right">
                ${renderChoicesPanelHtml(q, idx)}
              </div>
            </div>
          `;
        } else if (q.calendar) {
          bodyContent = `
            <div class="grammar-calendar-layout">
              <div class="grammar-calendar-left">
                ${renderCalendarHtml(q.calendar)}
              </div>
              <div class="grammar-calendar-right">
                ${formatGrammarQuestionWithBlanks(q, idx)}
              </div>
            </div>
          `;
        } else if (q.table) {
          const hasQuestionTextBlanks = countInlineBlanks(q.question) > 0;
          bodyContent = `
            <div class="grammar-table-layout">
              ${q.question && q.question.trim() && !hasQuestionTextBlanks ? `<div class="grammar-table-desc"><h3 class="q-text">${escapeHtml(q.question)}</h3></div>` : ''}
              <div class="grammar-table-top">
                ${renderInfoTableHtml(q.table, q, idx)}
              </div>
              ${hasQuestionTextBlanks ? `
              <div class="grammar-table-bottom">
                ${formatGrammarQuestionWithBlanks(q, idx)}
              </div>` : ''}
            </div>
          `;
        } else {
          bodyContent = formatGrammarQuestionWithBlanks(q, idx);
        }
      } else {
        bodyContent = `<h3 class="q-text">${escapeHtml(q.question)}</h3>`;
      }

      html += `
        <div class="${cardClass}" id="grammar-q-${idx}" data-idx="${idx}">
          <div class="q-header">
            <div class="q-number-box">
              <span class="q-badge">Câu ${qNum} / ${total}</span>
              ${q.lessonTitle ? `<span class="q-lesson-tag">${q.lessonTitle}</span>` : ''}
              ${typeTagHtml}
            </div>
            <div class="q-header-right">
              ${statusBadge}
            </div>
          </div>

          <div class="q-body">
            ${bodyContent}
          </div>
      `;

      if (isFillQuestion && !useInlineBlanks) {
        // Dạng Điền từ hộp ở đáy (dành cho câu không có chỗ trống trong dấu ngoặc)
        let inputClass = 'q-fill-input';
        let resultMsg = '';

        if (isSubmitted) {
          if (isCorrect) {
            inputClass += ' fill-correct';
            resultMsg = `<div class="q-fill-result-badge correct">✅ Chính xác! Đáp án chuẩn: <span class="target-ans">${escapeHtml(q.answer)}</span></div>`;
          } else if (!hasAnswered) {
            inputClass += ' fill-wrong';
            resultMsg = `<div class="q-fill-result-badge wrong">⚪ Chưa điền! Đáp án chuẩn: <span class="target-ans">${escapeHtml(q.answer)}</span></div>`;
          } else {
            inputClass += ' fill-wrong';
            resultMsg = `<div class="q-fill-result-badge wrong">❌ Chưa chính xác! Đáp án chuẩn: <span class="target-ans">${escapeHtml(q.answer)}</span></div>`;
          }
        }

        html += `
          <div class="q-fill-box">
            <div class="q-fill-input-group">
              <input type="text" class="${inputClass}" data-qid="${q.id}" data-qidx="${idx}" placeholder="Nhập từ hoặc cụm từ cần điền..." value="${escapeHtml(userAns || '')}" ${isSubmitted ? 'disabled' : ''} autocomplete="off" spellcheck="false" />
            </div>
            ${resultMsg}
          </div>
        `;
      } else if (!isFillQuestion && !isBinaryChoice) {
        // Dạng trắc nghiệm 4 lựa chọn (A, B, C, D)
        html += `<div class="q-options-grid">`;
        ['A', 'B', 'C', 'D'].forEach(optKey => {
          const optText = (q.options && q.options[optKey]) ? q.options[optKey] : '';
          if (!optText) return;

          let optClass = 'q-option-item';
          let optBadge = '';

          if (!isSubmitted) {
            if (userAns === optKey) {
              optClass += ' selected';
            }
          } else {
            // Khi đã nộp bài
            optClass += ' disabled';
            if (optKey === correctOpt) {
              optClass += ' opt-correct';
              optBadge = '<span class="opt-result-icon">✅ Đáp án đúng</span>';
            }
            if (userAns === optKey) {
              if (optKey === correctOpt) {
                optClass += ' opt-user-correct';
              } else {
                optClass += ' opt-user-wrong';
                optBadge = '<span class="opt-result-icon">❌ Bạn đã chọn</span>';
              }
            }
          }

          html += `
            <div class="${optClass}" data-qidx="${idx}" data-qid="${q.id}" data-opt="${optKey}">
              <div class="opt-prefix">${optKey}</div>
              <div class="opt-content">${escapeHtml(optText)}</div>
              ${optBadge}
            </div>
          `;
        });
        html += `</div>`;
      }

      // Hộp giải thích (chỉ hiển thị sau khi nộp bài)
      if (isSubmitted && q.explanation) {
        html += `
          <div class="q-explanation-box">
            <div class="explanation-title">💡 Giải thích chi tiết:</div>
            <div class="explanation-content">${escapeHtml(q.explanation)}</div>
          </div>
        `;
      }

      html += `</div>`;
    });

    dom.questionsContainer.innerHTML = html;
    bindQuestionEvents();
  }

  // Render dải số câu hỏi điều hướng (Question Palette)
  function renderPalette() {
    if (!dom.paletteGrid) return;
    const total = activeQuizQuestions.length;

    let html = '';
    for (let idx = 0; idx < total; idx++) {
      const q = activeQuizQuestions[idx];
      const hasAnswered = hasQuestionAnswered(q);
      let itemClass = 'palette-item';

      if (!isSubmitted) {
        if (hasAnswered) itemClass += ' answered';
      } else {
        if (q.type === 'open_ended') {
          if (hasAnswered) {
            itemClass += ' open-ended-done';
          } else {
            itemClass += ' skipped';
          }
        } else if (!hasAnswered) {
          itemClass += ' skipped';
        } else if (checkQuestionAnswer(q)) {
          itemClass += ' correct';
        } else {
          itemClass += ' wrong';
        }
      }

      html += `
        <button type="button" class="${itemClass}" data-goto="${idx}" title="Tới câu ${idx + 1}">
          ${idx + 1}
        </button>
      `;
    }

    dom.paletteGrid.innerHTML = html;
    bindPaletteEvents();
  }

  // Cập nhật thanh tiến độ
  function updateProgressUI() {
    const total = activeQuizQuestions.length;
    if (total === 0) {
      if (dom.progressText) dom.progressText.textContent = '0 / 0 câu';
      if (dom.progressBar) dom.progressBar.style.width = '0%';
      return;
    }

    let answeredCount = 0;
    activeQuizQuestions.forEach(q => {
      if (hasQuestionAnswered(q)) answeredCount++;
    });

    const percent = Math.round((answeredCount / total) * 100);

    if (dom.progressText) {
      dom.progressText.textContent = `Đã làm ${answeredCount} / ${total} câu (${percent}%)`;
    }
    if (dom.progressBar) {
      dom.progressBar.style.width = `${percent}%`;
    }
  }

  // Cập nhật trạng thái đã dùng trên Bảng phương án lựa chọn (choices panel)
  function updateChoicesPanelState(qid) {
    if (!dom.questionsContainer) return;
    const choiceItems = dom.questionsContainer.querySelectorAll(`.grammar-choice-item[data-qid="${qid}"]`);
    if (choiceItems.length === 0) return;

    const qCard = choiceItems[0].closest('.grammar-question-card');
    if (!qCard) return;

    const qidx = parseInt(qCard.dataset.idx, 10);
    const q = activeQuizQuestions[qidx];
    if (!q || !q.choices) return;

    const usedMap = {};
    const blankCount = countInlineBlanks(q.question);
    for (let bIdx = 0; bIdx < blankCount; bIdx++) {
      const val = userAnswers[`${qid}_blank_${bIdx}`];
      if (val) {
        const norm = normalizeAnswerText(val);
        if (norm) {
          usedMap[norm] = bIdx + 1;
        }
      }
    }

    choiceItems.forEach(item => {
      if (item.classList.contains('is-example')) return;
      const keyNorm = normalizeAnswerText(item.dataset.key);
      const usedSubNum = usedMap[keyNorm];
      if (usedSubNum) {
        item.classList.add('is-used');
        let tag = item.querySelector('.choice-used-tag');
        if (!tag) {
          tag = document.createElement('span');
          tag.className = 'choice-used-tag';
          item.appendChild(tag);
        }
        tag.textContent = `Câu ${usedSubNum}`;
      } else {
        item.classList.remove('is-used');
        const tag = item.querySelector('.choice-used-tag');
        if (tag) tag.remove();
      }
    });
  }

  // Gán sự kiện cho từng câu hỏi
  function bindQuestionEvents() {
    // Sự kiện click chọn đáp án (Trắc nghiệm A, B, C, D)
    const optionEls = dom.questionsContainer.querySelectorAll('.q-option-item');
    optionEls.forEach(el => {
      el.addEventListener('click', () => {
        if (isSubmitted) return; // Khoá khi đã nộp bài
        const qidx = parseInt(el.dataset.qidx, 10);
        const qid = el.dataset.qid;
        const opt = el.dataset.opt;

        userAnswers[qid] = opt;

        // Cập nhật giao diện trong câu này
        const card = document.getElementById(`grammar-q-${qidx}`);
        if (card) {
          card.querySelectorAll('.q-option-item').forEach(item => {
            item.classList.toggle('selected', item.dataset.opt === opt);
          });
        }

        // Cập nhật Palette và Tiến độ
        updatePaletteItem(qidx, true);
        updateProgressUI();
      });
    });

    // 1. Sự kiện input dạng điền từ trực tiếp vào từng dấu () giống sheet Kanji
    const inlineInputs = Array.from(dom.questionsContainer.querySelectorAll('.grammar-inline-input'));
    inlineInputs.forEach((input, inputIdx) => {
      input.addEventListener('input', () => {
        if (isSubmitted) return;
        const qid = input.dataset.qid;
        const qidx = parseInt(input.dataset.qidx, 10);
        const bidx = parseInt(input.dataset.blankIdx, 10);

        if (input.classList.contains('grammar-choice-letter-input')) {
          input.value = input.value.toLowerCase();
        }

        const val = input.value.trim();
        const blankKey = `${qid}_blank_${bidx}`;
        if (val) {
          userAnswers[blankKey] = input.value;
        } else {
          delete userAnswers[blankKey];
        }

        // Cập nhật bảng phương án lựa chọn
        updateChoicesPanelState(qid);

        const q = activeQuizQuestions[qidx];
        const isAnswered = hasQuestionAnswered(q);
        updatePaletteItem(qidx, isAnswered);
        updateProgressUI();
      });

      // Nhấn Enter chuyển nhanh sang ô input () tiếp theo
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (inputIdx + 1 < inlineInputs.length) {
            inlineInputs[inputIdx + 1].focus();
          } else {
            if (dom.submitBtn) dom.submitBtn.focus();
          }
        }
      });
    });

    // 2. Sự kiện click vào thẻ phương án trong bảng choices
    const choiceCards = dom.questionsContainer.querySelectorAll('.grammar-choice-item');
    choiceCards.forEach(card => {
      card.addEventListener('click', () => {
        if (isSubmitted) return;
        if (card.classList.contains('is-example')) return;

        const qid = card.dataset.qid;
        const key = card.dataset.key;
        if (!qid || !key) return;

        const qCard = card.closest('.grammar-question-card');
        if (!qCard) return;

        const inputs = Array.from(qCard.querySelectorAll('.grammar-inline-input'));
        if (inputs.length === 0) return;

        // Ưu tiên ô đang focus trong câu này
        let targetInput = inputs.find(inp => inp === document.activeElement);
        if (!targetInput) {
          // Nếu không có ô nào focus, chọn ô trống đầu tiên
          targetInput = inputs.find(inp => !inp.value.trim()) || inputs[0];
        }

        if (targetInput) {
          targetInput.value = key;
          targetInput.dispatchEvent(new Event('input', { bubbles: true }));
          targetInput.focus();

          // Tự động chuyển con trỏ sang ô trống tiếp theo (nếu còn)
          const currentIdx = inputs.indexOf(targetInput);
          const nextEmpty = inputs.slice(currentIdx + 1).find(inp => !inp.value.trim());
          if (nextEmpty) {
            setTimeout(() => nextEmpty.focus(), 50);
          }
        }
      });
    });

    // 3. Sự kiện click chọn 1 trong 2 từ (binary / inline choice)
    const binaryBtns = dom.questionsContainer.querySelectorAll('.inline-choice-btn');
    binaryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (isSubmitted) return;
        const qid = btn.dataset.qid;
        const qidx = parseInt(btn.dataset.qidx, 10);
        const sidx = parseInt(btn.dataset.slotIdx, 10);
        const val = btn.dataset.val;

        const slotKey = `${qid}_slot_${sidx}`;
        if (userAnswers[slotKey] === val) {
          // Bấm lại từ đã chọn -> hủy chọn
          delete userAnswers[slotKey];
        } else {
          userAnswers[slotKey] = val;
        }

        // Cập nhật giao diện của slot group này
        const group = btn.closest('.inline-choice-group');
        if (group) {
          group.querySelectorAll('.inline-choice-btn').forEach(b => {
            b.classList.toggle('selected', !!(userAnswers[slotKey] && b.dataset.val === userAnswers[slotKey]));
          });
        }

        const q = activeQuizQuestions[qidx];
        const isAnswered = hasQuestionAnswered(q);
        updatePaletteItem(qidx, isAnswered);
        updateProgressUI();
      });
    });

    // 4. Sự kiện input cho dạng điền từ hộp ở đáy (fallback)
    const fillInputs = dom.questionsContainer.querySelectorAll('.q-fill-input');
    fillInputs.forEach(input => {
      input.addEventListener('input', () => {
        if (isSubmitted) return;
        const qid = input.dataset.qid;
        const qidx = parseInt(input.dataset.qidx, 10);
        const val = input.value.trim();
        if (val) {
          userAnswers[qid] = input.value;
          updatePaletteItem(qidx, true);
        } else {
          delete userAnswers[qid];
          updatePaletteItem(qidx, false);
        }
        updateProgressUI();
      });

      // Nhấn Enter chuyển nhanh sang câu tiếp theo
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const qidx = parseInt(input.dataset.qidx, 10);
          const nextCard = document.getElementById(`grammar-q-${qidx + 1}`);
          if (nextCard) {
            nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const nextInput = nextCard.querySelector('.q-fill-input, .grammar-inline-input');
            if (nextInput) nextInput.focus();
          }
        }
      });
    });

    // 5. Sự kiện click vào thẻ từ (Word Chips) trong bài tập Ghép từ thành câu
    const chipBtns = dom.questionsContainer.querySelectorAll('.word-chip-btn');
    chipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (isSubmitted) return;
        const qid = btn.dataset.qid;
        const qidx = parseInt(btn.dataset.qidx, 10);
        const blankIdx = parseInt(btn.dataset.blankIdx, 10);
        const word = btn.dataset.word;
        if (!qid || !word) return;

        const input = document.getElementById(`grammar-blank-${qid}-${blankIdx}`);
        if (!input) return;

        const currentVal = input.value || '';
        input.value = currentVal + word;
        userAnswers[`${qid}_blank_${blankIdx}`] = input.value;

        btn.classList.add('chip-used');

        const q = activeQuizQuestions[qidx];
        const isAnswered = hasQuestionAnswered(q);
        updatePaletteItem(qidx, isAnswered);
        updateProgressUI();
      });
    });

    // 6. Sự kiện bấm nút Xoá xếp lại (Reset)
    const clearBtns = dom.questionsContainer.querySelectorAll('.word-order-clear-btn');
    clearBtns.forEach(cBtn => {
      cBtn.addEventListener('click', () => {
        if (isSubmitted) return;
        const qid = cBtn.dataset.qid;
        const qidx = parseInt(cBtn.dataset.qidx, 10);
        const blankIdx = parseInt(cBtn.dataset.blankIdx, 10);

        const input = document.getElementById(`grammar-blank-${qid}-${blankIdx}`);
        if (input) {
          input.value = '';
        }
        delete userAnswers[`${qid}_blank_${blankIdx}`];

        const pool = dom.questionsContainer.querySelector(`.word-chips-pool[data-qid="${qid}"][data-blank-idx="${blankIdx}"]`);
        if (pool) {
          pool.querySelectorAll('.word-chip-btn').forEach(b => b.classList.remove('chip-used'));
        }

        const q = activeQuizQuestions[qidx];
        const isAnswered = hasQuestionAnswered(q);
        updatePaletteItem(qidx, isAnswered);
        updateProgressUI();
      });
    });

    // (Đã loại bỏ nút nghe âm thanh câu hỏi theo yêu cầu)
  }

  // Gán sự kiện cho Question Palette (Cuộn tới câu hỏi)
  function bindPaletteEvents() {
    const items = dom.paletteGrid.querySelectorAll('.palette-item');
    items.forEach(btn => {
      btn.addEventListener('click', () => {
        const gotoIdx = parseInt(btn.dataset.goto, 10);
        const targetCard = document.getElementById(`grammar-q-${gotoIdx}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('highlight-flash');
          setTimeout(() => {
            targetCard.classList.remove('highlight-flash');
          }, 1200);
        }
      });
    });
  }

  function updatePaletteItem(idx, answered) {
    if (!dom.paletteGrid) return;
    const item = dom.paletteGrid.querySelector(`[data-goto="${idx}"]`);
    if (item && !isSubmitted) {
      item.classList.toggle('answered', answered);
    }
  }

  // NỘP BÀI VÀ CHẤM ĐIỂM
  function submitQuiz() {
    if (isSubmitted) return;
    const total = activeQuizQuestions.length;
    if (total === 0) return;

    let answeredCount = 0;
    activeQuizQuestions.forEach(q => {
      if (hasQuestionAnswered(q)) answeredCount++;
    });

    const unansweredCount = total - answeredCount;

    if (unansweredCount > 0) {
      const confirmSubmit = window.confirm(`Bạn còn ${unansweredCount} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài để chấm điểm không?`);
      if (!confirmSubmit) return;
    }

    stopTimer();
    isSubmitted = true;

    // Chấm điểm: Mỗi câu 1 điểm (bỏ qua câu hỏi mở open_ended vì không tính điểm)
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    const gradableQuestions = activeQuizQuestions.filter(q => q.type !== 'open_ended');
    const gradableTotal = gradableQuestions.length;

    gradableQuestions.forEach(q => {
      const hasAnswered = hasQuestionAnswered(q);
      if (!hasAnswered) {
        skippedCount++;
      } else if (checkQuestionAnswer(q)) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    currentScore = correctCount; // Mỗi câu 1 điểm

    // Render lại chi tiết bài làm với đáp án đúng/sai & giải thích
    renderQuestionsList();
    renderPalette();

    // Hiển thị Score Modal
    showScoreModal(correctCount, gradableTotal, wrongCount, skippedCount);
  }

  // Hiển thị Modal chấm điểm hoành tráng
  function showScoreModal(correct, total, wrong, skipped) {
    if (!dom.scoreModal) return;

    const percent = Math.round((correct / total) * 100);

    if (dom.scorePointsEl) dom.scorePointsEl.textContent = correct;
    if (dom.scoreTotalEl) dom.scoreTotalEl.textContent = total;
    if (dom.scorePercentEl) dom.scorePercentEl.textContent = `${percent}%`;
    if (dom.scoreTimeEl) dom.scoreTimeEl.textContent = formatTime(elapsedSeconds);
    if (dom.scoreCorrectCountEl) dom.scoreCorrectCountEl.textContent = correct;
    if (dom.scoreWrongCountEl) dom.scoreWrongCountEl.textContent = wrong;
    if (dom.scoreSkippedCountEl) dom.scoreSkippedCountEl.textContent = skipped;

    // Đánh giá huy hiệu & lời khen
    let badgeText = '';
    let badgeClass = '';
    let feedback = '';

    if (percent === 100) {
      badgeText = '🏆 XUẤT SẮC TUYỆT ĐỐI!';
      badgeClass = 'badge-gold';
      feedback = 'Quá tuyệt vời! Bạn nắm vững 100% ngữ pháp của bài học này!';
    } else if (percent >= 80) {
      badgeText = '🌟 KẾT QUẢ RẤT TỐT!';
      badgeClass = 'badge-silver';
      feedback = 'Kiến thức ngữ pháp của bạn rất vững vàng. Hãy xem lại vài câu chưa đúng nhé!';
    } else if (percent >= 50) {
      badgeText = '👍 ĐẠT YÊU CẦU!';
      badgeClass = 'badge-bronze';
      feedback = 'Bạn đã vượt qua bài thi! Hãy xem phần giải thích chi tiết để cải thiện thêm.';
    } else {
      badgeText = '💪 CẦN ÔN TẬP THÊM!';
      badgeClass = 'badge-retry';
      feedback = 'Đừng nản lòng! Hãy bấm "Xem lại bài làm" để đọc kỹ giải thích từng câu và làm lại nhé!';
    }

    if (dom.scoreBadgeEl) {
      dom.scoreBadgeEl.textContent = badgeText;
      dom.scoreBadgeEl.className = `score-result-badge ${badgeClass}`;
    }
    if (dom.scoreFeedbackEl) {
      dom.scoreFeedbackEl.textContent = feedback;
    }

    dom.scoreModal.classList.add('active');
  }

  function hideScoreModal() {
    if (dom.scoreModal) {
      dom.scoreModal.classList.remove('active');
    }
  }

  // Khởi tạo Module
  function init() {
    initDOM();

    // Render danh sách bài học
    renderLessonSelect();

    // Sự kiện đổi bài học
    if (dom.lessonSelect) {
      dom.lessonSelect.addEventListener('change', (e) => {
        selectedLessonKey = e.target.value;
        generateNewQuiz(false);
      });
    }

    // Nút Tạo đề mới
    if (dom.newQuizBtn) {
      dom.newQuizBtn.addEventListener('click', () => {
        generateNewQuiz(false);
      });
    }

    // Nút Nộp bài
    if (dom.submitBtn) {
      dom.submitBtn.addEventListener('click', submitQuiz);
    }
    if (dom.quickSubmitBtn) {
      dom.quickSubmitBtn.addEventListener('click', submitQuiz);
    }

    // Các nút trong Modal Chấm điểm
    if (dom.closeModalBtn) {
      dom.closeModalBtn.addEventListener('click', hideScoreModal);
    }
    if (dom.reviewBtn) {
      dom.reviewBtn.addEventListener('click', () => {
        hideScoreModal();
        const firstCard = document.getElementById('grammar-q-0');
        if (firstCard) firstCard.scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (dom.modalNewQuizBtn) {
      dom.modalNewQuizBtn.addEventListener('click', () => {
        hideScoreModal();
        generateNewQuiz(false);
      });
    }
    if (dom.modalRetryBtn) {
      dom.modalRetryBtn.addEventListener('click', () => {
        hideScoreModal();
        generateNewQuiz(true); // Giữ nguyên 30 câu vừa làm để làm lại
      });
    }

    // Khởi tạo đề đầu tiên
    generateNewQuiz(false);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  return {
    init,
    generateNewQuiz,
    submitQuiz,
    renderLessonSelect
  };
})();

window.GrammarJaModule = GrammarJaModule;

