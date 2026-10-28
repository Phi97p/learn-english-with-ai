// ========================================================
// JS/KANJI_JA.JS - Quản trị Luyện tập Hán tự (Kanji) Tiếng Nhật
// Định dạng: Câu văn gạch chân từ Kanji, điền Hiragana vào dấu ngoặc ()
// Hỗ trợ 1 hoặc nhiều ô điền trong 1 câu - Mỗi câu 1 điểm
// Tối đa 30 câu ngẫu nhiên - Không lưu lịch sử làm bài
// ========================================================

const KanjiJaModule = (() => {
  // Trạng thái phiên làm bài hiện tại (Không lưu vào localStorage)
  let activeQuizQuestions = []; // Danh sách câu hỏi trong đề hiện tại
  let userAnswers = {}; // { [`${qId}_${subIdx}`]: 'câu trả lời' }
  let isSubmitted = false;
  let currentScore = 0;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let selectedLessonKey = 'all';

  // DOM Elements
  let dom = {};

  function initDOM() {
    dom = {
      lessonSelect: document.getElementById('ja-kanji-lesson-select'),
      newQuizBtn: document.getElementById('ja-kanji-new-quiz-btn'),
      timerDisplay: document.getElementById('ja-kanji-timer'),
      progressText: document.getElementById('ja-kanji-progress-text'),
      progressBar: document.getElementById('ja-kanji-progress-bar'),
      quickSubmitBtn: document.getElementById('ja-kanji-quick-submit-btn'),
      questionsContainer: document.getElementById('ja-kanji-questions-container'),
      paletteGrid: document.getElementById('ja-kanji-palette-grid'),
      scoreModal: document.getElementById('ja-kanji-score-modal'),
      scorePointsEl: document.getElementById('ja-kanji-score-points'),
      scoreTotalEl: document.getElementById('ja-kanji-score-total'),
      scorePercentEl: document.getElementById('ja-kanji-score-percent'),
      scoreBadgeEl: document.getElementById('ja-kanji-score-badge'),
      scoreTimeEl: document.getElementById('ja-kanji-score-time'),
      scoreCorrectCountEl: document.getElementById('ja-kanji-score-correct-count'),
      scoreWrongCountEl: document.getElementById('ja-kanji-score-wrong-count'),
      scoreSkippedCountEl: document.getElementById('ja-kanji-score-skipped-count'),
      scoreFeedbackEl: document.getElementById('ja-kanji-score-feedback'),
      closeModalBtn: document.getElementById('ja-kanji-close-modal-btn'),
      reviewBtn: document.getElementById('ja-kanji-review-btn'),
      modalNewQuizBtn: document.getElementById('ja-kanji-modal-new-quiz-btn'),
      modalRetryBtn: document.getElementById('ja-kanji-modal-retry-btn'),
      emptyState: document.getElementById('ja-kanji-empty-state')
    };
  }

  function getAllLessonsData() {
    return (typeof JA_KANJI_DATA !== 'undefined') ? JA_KANJI_DATA : {};
  }

  function normalizeAnswerText(str) {
    if (!str) return '';
    return str
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[\s\u3000]+/g, '')
      .replace(/[・,.，。]/g, '')
      .replace(/じっぷん/g, 'じゅっぷん');
  }

  function getQuestionsForSelectedLesson() {
    const allData = getAllLessonsData();
    if (selectedLessonKey === 'all') {
      let pool = [];
      Object.keys(allData).forEach(key => {
        const lesson = allData[key];
        if (lesson && Array.isArray(lesson.questions)) {
          lesson.questions.forEach(q => {
            pool.push(Object.assign({}, q, { lessonTitle: lesson.title || key }));
          });
        }
      });
      return pool;
    }

    const lesson = allData[selectedLessonKey];
    if (lesson && Array.isArray(lesson.questions)) {
      return lesson.questions.map(q => Object.assign({}, q, { lessonTitle: lesson.title || selectedLessonKey }));
    }
    return [];
  }

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

  function renderLessonSelect() {
    if (!dom.lessonSelect) return;
    const allData = getAllLessonsData();
    const lessonKeys = Object.keys(allData).sort((a, b) => {
      const numA = parseInt((String(a).match(/\d+/) || [9999])[0], 10);
      const numB = parseInt((String(b).match(/\d+/) || [9999])[0], 10);
      return numA - numB;
    });

    let html = `<option value="all" ${selectedLessonKey === 'all' ? 'selected' : ''}>🎯 Đề tổng hợp (Tất cả các bài Hán tự)</option>`;
    lessonKeys.forEach(key => {
      const lesson = allData[key];
      const count = (lesson && Array.isArray(lesson.questions)) ? lesson.questions.length : 0;
      const title = (lesson && lesson.title) ? lesson.title : key;
      const isSelected = selectedLessonKey === key ? 'selected' : '';
      html += `<option value="${key}" ${isSelected}>📖 ${title} (${count} câu)</option>`;
    });

    dom.lessonSelect.innerHTML = html;
  }

  // Chuẩn bị danh sách đáp án cho câu hỏi (lấy từ mảng q.answers, hoặc q.answer, hoặc tự bóc tách trong ngoặc)
  function extractCorrectAnswers(q) {
    if (Array.isArray(q.answers) && q.answers.length > 0) {
      return q.answers.map(a => (a || '').trim());
    }
    if (q.answer) {
      return [(q.answer || '').trim()];
    }

    // Tự động phân tích tìm nội dung trong các cặp ngoặc （ ... ）
    const answers = [];
    const regex = /[（\(]([^）\)]*?)[）\)]/g;
    let match;
    const raw = q.sentence || q.question || '';
    while ((match = regex.exec(raw)) !== null) {
      const inside = match[1].trim();
      if (inside) {
        answers.push(inside);
      }
    }
    return answers;
  }

  function startNewQuiz() {
    const pool = getQuestionsForSelectedLesson();

    if (!pool || pool.length === 0) {
      activeQuizQuestions = [];
      userAnswers = {};
      isSubmitted = false;
      stopTimer();
      renderEmptyState();
      return;
    }

    const shuffled = shuffleArray(pool);
    activeQuizQuestions = shuffled.slice(0, 30).map((q, idx) => {
      return Object.assign({}, q, {
        _parsedAnswers: extractCorrectAnswers(q)
      });
    });

    userAnswers = {};
    isSubmitted = false;
    currentScore = 0;

    resetTimer();
    startTimer();

    renderQuestionsList();
    renderPalette();
    updateProgress();

    if (dom.emptyState) dom.emptyState.style.display = 'none';
    if (dom.questionsContainer) dom.questionsContainer.style.display = 'block';

    const mainSection = document.getElementById('tab-kanji-ja');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function renderEmptyState() {
    if (dom.emptyState) dom.emptyState.style.display = 'block';
    if (dom.questionsContainer) dom.questionsContainer.style.display = 'none';
    if (dom.paletteGrid) dom.paletteGrid.innerHTML = '';
    if (dom.progressText) dom.progressText.textContent = '0 / 0 câu (0%)';
    if (dom.progressBar) dom.progressBar.style.width = '0%';
    if (dom.timerDisplay) dom.timerDisplay.textContent = '00:00';
  }

  // Chuyển đổi câu văn: gạch chân chữ Hán <u>...</u>, và thay mọi cặp ngoặc （...） bằng ô input vuông nhỏ gọn
  function formatKanjiSentence(rawSentence, qIdx, qId) {
    let sentence = rawSentence || '';

    let subCounter = 0;
    // Thay thế tất cả các cặp ngoặc （...） hoặc (...) bằng ô input
    sentence = sentence.replace(/[（\(]([^）\)]*?)[）\)]/g, (match, p1) => {
      const currentSubIdx = subCounter++;
      const inputKey = `${qId}_${currentSubIdx}`;
      const currentVal = userAnswers[inputKey] || '';
      const ansHint = (p1 || '').trim();
      const inputSize = Math.max(ansHint.length + 1, 4);

      return `
        <span class="kanji-bracket-wrapper">
          <span class="bracket-open">（</span>
          <input 
            type="text" 
            class="kanji-hiragana-input" 
            id="ja-kanji-input-${qIdx}-${currentSubIdx}" 
            data-qidx="${qIdx}" 
            data-qid="${qId}" 
            data-subidx="${currentSubIdx}" 
            size="${inputSize}"
            placeholder="" 
            value="${escapeHtml(currentVal)}" 
            autocomplete="off" 
            autocorrect="off" 
            autocapitalize="off" 
            spellcheck="false" 
            ${isSubmitted ? 'disabled' : ''}
          />
          <span class="bracket-close">）</span>
          <span class="kanji-slot-feedback" id="ja-kanji-hint-${qIdx}-${currentSubIdx}"></span>
        </span>
      `;
    });

    // Thẻ <u> thành class .kanji-target-word gạch chân
    sentence = sentence.replace(/<u>(.*?)<\/u>/g, '<span class="kanji-target-word">$1</span>');

    return sentence;
  }

  function renderQuestionsList() {
    if (!dom.questionsContainer) return;

    let html = '';
    activeQuizQuestions.forEach((q, idx) => {
      const qNum = idx + 1;
      const qId = q.id || `q_${idx}`;
      const formattedSentenceHtml = formatKanjiSentence(q.sentence || q.question || '', idx, qId);

      html += `
        <div class="grammar-question-card kanji-question-card" id="ja-kanji-card-${idx}" data-qid="${qId}">
          <div class="question-header">
            <span class="question-index-badge">Câu ${qNum}</span>
          </div>

          <div class="kanji-interactive-sentence">
            ${formattedSentenceHtml}
          </div>
        </div>
      `;
    });

    dom.questionsContainer.innerHTML = html;

    // Gắn sự kiện cho các ô input
    const inputs = Array.from(dom.questionsContainer.querySelectorAll('.kanji-hiragana-input'));
    inputs.forEach((input, inputIdx) => {
      input.addEventListener('input', (e) => {
        if (isSubmitted) return;
        const qId = input.dataset.qid;
        const qIdx = parseInt(input.dataset.qidx, 10);
        const subIdx = parseInt(input.dataset.subidx, 10);
        onKanjiInputChange(qIdx, qId, subIdx, e.target.value);
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          // Chuyển sang ô input tiếp theo trong toàn bộ bài thi
          if (inputIdx + 1 < inputs.length) {
            const nextInput = inputs[inputIdx + 1];
            const nextQIdx = parseInt(nextInput.dataset.qidx, 10);
            scrollToQuestion(nextQIdx);
            setTimeout(() => {
              nextInput.focus();
              nextInput.select();
            }, 200);
          }
        }
      });
    });
  }

  function onKanjiInputChange(qIdx, qId, subIdx, value) {
    const inputKey = `${qId}_${subIdx}`;
    const trimmed = (value || '').trim();
    if (trimmed) {
      userAnswers[inputKey] = trimmed;
    } else {
      delete userAnswers[inputKey];
    }

    // Kiểm tra xem câu này đã điền ít nhất 1 ô chưa
    const isAnswered = isQuestionPartiallyOrFullyAnswered(qId);
    updatePaletteItem(qIdx, isAnswered);
    updateProgress();
  }

  function isQuestionPartiallyOrFullyAnswered(qId) {
    return Object.keys(userAnswers).some(k => k.startsWith(`${qId}_`) && userAnswers[k]);
  }

  function isQuestionFullyAnswered(q, qId) {
    const answers = q._parsedAnswers || [];
    if (answers.length === 0) return !!userAnswers[`${qId}_0`];
    return answers.every((_, subIdx) => !!userAnswers[`${qId}_${subIdx}`]);
  }

  function renderPalette() {
    if (!dom.paletteGrid) return;
    let html = '';
    activeQuizQuestions.forEach((q, idx) => {
      const qNum = idx + 1;
      const qId = q.id || `q_${idx}`;
      const isAnswered = isQuestionPartiallyOrFullyAnswered(qId);
      html += `
        <button 
          type="button" 
          class="palette-btn ${isAnswered ? 'answered' : ''}" 
          id="ja-kanji-palette-${idx}" 
          data-idx="${idx}" 
          title="Câu ${qNum}"
        >
          ${qNum}
        </button>
      `;
    });
    dom.paletteGrid.innerHTML = html;

    const paletteBtns = dom.paletteGrid.querySelectorAll('.palette-btn');
    paletteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        scrollToQuestion(idx);
        const firstInput = document.getElementById(`ja-kanji-input-${idx}-0`);
        if (firstInput && !isSubmitted) {
          setTimeout(() => firstInput.focus(), 250);
        }
      });
    });
  }

  function scrollToQuestion(idx) {
    const card = document.getElementById(`ja-kanji-card-${idx}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('highlight-pulse');
      setTimeout(() => card.classList.remove('highlight-pulse'), 1200);
    }
  }

  function updatePaletteItem(idx, isAnswered) {
    const pBtn = document.getElementById(`ja-kanji-palette-${idx}`);
    if (pBtn) {
      pBtn.classList.toggle('answered', isAnswered);
    }
  }

  function updateProgress() {
    const total = activeQuizQuestions.length;
    let answeredCount = 0;
    activeQuizQuestions.forEach((q, idx) => {
      const qId = q.id || `q_${idx}`;
      if (isQuestionPartiallyOrFullyAnswered(qId)) {
        answeredCount++;
      }
    });

    const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

    if (dom.progressText) {
      dom.progressText.textContent = `Đã làm ${answeredCount} / ${total} câu (${percent}%)`;
    }
    if (dom.progressBar) {
      dom.progressBar.style.width = `${percent}%`;
    }
  }

  function startTimer() {
    stopTimer();
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      if (dom.timerDisplay) {
        dom.timerDisplay.textContent = formatTime(elapsedSeconds);
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function resetTimer() {
    stopTimer();
    elapsedSeconds = 0;
    if (dom.timerDisplay) {
      dom.timerDisplay.textContent = '00:00';
    }
  }

  function formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // NỘP BÀI VÀ CHẤM ĐIỂM
  function submitQuiz() {
    if (isSubmitted) {
      showScoreModal();
      return;
    }

    const total = activeQuizQuestions.length;
    if (total === 0) return;

    let answeredCount = 0;
    activeQuizQuestions.forEach((q, idx) => {
      const qId = q.id || `q_${idx}`;
      if (isQuestionFullyAnswered(q, qId)) answeredCount++;
    });

    if (answeredCount < total) {
      const remaining = total - answeredCount;
      const confirmSubmit = window.confirm(`Bạn còn ${remaining} câu chưa điền xong. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`);
      if (!confirmSubmit) return;
    }

    isSubmitted = true;
    stopTimer();

    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    activeQuizQuestions.forEach((q, qIdx) => {
      const qId = q.id || `q_${qIdx}`;
      const correctAnswers = q._parsedAnswers || [];
      const card = document.getElementById(`ja-kanji-card-${qIdx}`);
      const pBtn = document.getElementById(`ja-kanji-palette-${qIdx}`);

      let allSlotsCorrect = true;
      let hasAnyInput = false;

      correctAnswers.forEach((correctAns, subIdx) => {
        const inputKey = `${qId}_${subIdx}`;
        const userAns = userAnswers[inputKey];
        const inputEl = document.getElementById(`ja-kanji-input-${qIdx}-${subIdx}`);
        const hintEl = document.getElementById(`ja-kanji-hint-${qIdx}-${subIdx}`);

        if (inputEl) inputEl.disabled = true;

        if (!userAns) {
          allSlotsCorrect = false;
          if (inputEl) inputEl.classList.add('input-skipped');
          if (hintEl) {
            hintEl.innerHTML = `<span class="kanji-correct-hint">(${escapeHtml(correctAns)})</span>`;
          }
        } else {
          hasAnyInput = true;
          const isSlotCorrect = (normalizeAnswerText(userAns) === normalizeAnswerText(correctAns));
          if (isSlotCorrect) {
            if (inputEl) inputEl.classList.add('input-correct');
          } else {
            allSlotsCorrect = false;
            if (inputEl) inputEl.classList.add('input-wrong');
            if (hintEl) {
              hintEl.innerHTML = `<span class="kanji-correct-hint">(${escapeHtml(correctAns)})</span>`;
            }
          }
        }
      });

      if (!hasAnyInput) {
        skippedCount++;
        if (card) card.classList.add('card-skipped');
        if (pBtn) pBtn.className = 'palette-btn result-skipped';
      } else if (allSlotsCorrect) {
        correctCount++;
        if (card) card.classList.add('card-correct');
        if (pBtn) pBtn.className = 'palette-btn result-correct';
      } else {
        wrongCount++;
        if (card) card.classList.add('card-wrong');
        if (pBtn) pBtn.className = 'palette-btn result-wrong';
      }
    });

    currentScore = correctCount;

    if (dom.quickSubmitBtn) {
      dom.quickSubmitBtn.textContent = '📊 Xem lại bảng điểm';
    }

    showScoreModal({
      correct: correctCount,
      wrong: wrongCount,
      skipped: skippedCount,
      total: total,
      time: formatTime(elapsedSeconds)
    });
  }

  function showScoreModal(customStats) {
    if (!dom.scoreModal) return;

    const total = activeQuizQuestions.length;
    const stats = customStats || {
      correct: currentScore,
      wrong: total - currentScore,
      skipped: 0,
      total: total,
      time: formatTime(elapsedSeconds)
    };

    const percent = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

    if (dom.scorePointsEl) dom.scorePointsEl.textContent = stats.correct;
    if (dom.scoreTotalEl) dom.scoreTotalEl.textContent = stats.total;
    if (dom.scorePercentEl) dom.scorePercentEl.textContent = `${percent}%`;
    if (dom.scoreCorrectCountEl) dom.scoreCorrectCountEl.textContent = stats.correct;
    if (dom.scoreWrongCountEl) dom.scoreWrongCountEl.textContent = stats.wrong;
    if (dom.scoreSkippedCountEl) dom.scoreSkippedCountEl.textContent = stats.skipped;
    if (dom.scoreTimeEl) dom.scoreTimeEl.textContent = stats.time;

    let badgeText = '🏆 KẾT QUẢ BÀI THI HÁN TỰ';
    let badgeClass = 'badge-gold';
    let feedback = '';

    if (percent === 100) {
      badgeText = '👑 XUẤT SẮC - ĐIỂM TUYỆT ĐỐI!';
      badgeClass = 'badge-gold';
      feedback = 'Bạn đọc Hán tự cực kỳ chính xác! Phong độ tuyệt vời!';
    } else if (percent >= 80) {
      badgeText = '🌟 KẾT QUẢ RẤT TỐT!';
      badgeClass = 'badge-green';
      feedback = 'Khả năng chuyển Kanji sang Hiragana rất vững!';
    } else if (percent >= 50) {
      badgeText = '💪 CỐ GẮNG LÊN!';
      badgeClass = 'badge-blue';
      feedback = 'Đã nắm được phần lớn từ Kanji. Cố gắng thêm nhé!';
    } else {
      badgeText = '📖 CẦN ÔN TẬP THÊM';
      badgeClass = 'badge-red';
      feedback = 'Xem lại đáp án màu xanh và làm lại để nhớ mặt chữ hơn nhé!';
    }

    if (dom.scoreBadgeEl) {
      dom.scoreBadgeEl.className = `score-result-badge ${badgeClass}`;
      dom.scoreBadgeEl.textContent = badgeText;
    }
    if (dom.scoreFeedbackEl) {
      dom.scoreFeedbackEl.textContent = feedback;
    }

    dom.scoreModal.classList.add('active');
  }

  function closeScoreModal() {
    if (dom.scoreModal) dom.scoreModal.classList.remove('active');
  }

  function retryCurrentQuiz() {
    closeScoreModal();
    userAnswers = {};
    isSubmitted = false;
    currentScore = 0;

    resetTimer();
    startTimer();

    if (dom.quickSubmitBtn) {
      dom.quickSubmitBtn.textContent = '🎯 Nộp bài & Chấm điểm';
    }

    renderQuestionsList();
    renderPalette();
    updateProgress();

    const mainSection = document.getElementById('tab-kanji-ja');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  function init() {
    initDOM();

    if (dom.lessonSelect) {
      dom.lessonSelect.addEventListener('change', (e) => {
        selectedLessonKey = e.target.value;
        startNewQuiz();
      });
    }

    if (dom.newQuizBtn) {
      dom.newQuizBtn.addEventListener('click', () => {
        startNewQuiz();
      });
    }

    if (dom.quickSubmitBtn) {
      dom.quickSubmitBtn.addEventListener('click', () => {
        submitQuiz();
      });
    }

    if (dom.closeModalBtn) {
      dom.closeModalBtn.addEventListener('click', closeScoreModal);
    }
    if (dom.scoreModal) {
      dom.scoreModal.addEventListener('click', (e) => {
        if (e.target === dom.scoreModal) closeScoreModal();
      });
    }

    if (dom.reviewBtn) {
      dom.reviewBtn.addEventListener('click', () => {
        closeScoreModal();
        const mainSection = document.getElementById('tab-kanji-ja');
        if (mainSection) {
          mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    if (dom.modalNewQuizBtn) {
      dom.modalNewQuizBtn.addEventListener('click', () => {
        closeScoreModal();
        startNewQuiz();
      });
    }

    if (dom.modalRetryBtn) {
      dom.modalRetryBtn.addEventListener('click', retryCurrentQuiz);
    }

    startNewQuiz();
  }

  return {
    init,
    renderLessonSelect,
    startNewQuiz,
    submitQuiz,
    retryCurrentQuiz
  };
})();

if (typeof window !== 'undefined') {
  window.KanjiJaModule = KanjiJaModule;
}
