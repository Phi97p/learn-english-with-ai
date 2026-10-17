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
  let selectedLessonKey = 'all'; // 'all' | 'bai_1' | ...

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

    let html = `<option value="all" ${selectedLessonKey === 'all' ? 'selected' : ''}>🎯 Đề tổng hợp (Tất cả các bài)</option>`;
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

  // Tạo đề thi mới (Chọn ngẫu nhiên 30 câu)
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

    if (!isRetrySame) {
      // Xáo trộn và cắt đúng tối đa 30 câu
      const shuffled = shuffleArray(pool);
      activeQuizQuestions = shuffled.slice(0, 30);
    }

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
      .replace(/[・,，、。.]/g, '') // bỏ dấu chấm ngăn cách, phẩy
      .toLowerCase();
  }

  // Kiểm tra đáp án câu hỏi (Hỗ trợ cả Multiple Choice và Điền từ)
  function checkQuestionAnswer(q, userAns) {
    if (userAns === undefined || userAns === null) return false;
    const strAns = userAns.toString().trim();
    if (!strAns) return false;

    const isFill = (q.type === 'fill' || !q.options || Object.keys(q.options).length === 0);
    if (!isFill) {
      return strAns === q.answer;
    }

    // Dạng điền từ
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
      const userAns = userAnswers[q.id];
      const correctOpt = q.answer;
      const hasAnswered = (userAns !== undefined && userAns !== null && userAns.toString().trim() !== '');
      const isCorrect = checkQuestionAnswer(q, userAns);

      let cardClass = 'grammar-question-card';
      let statusBadge = '';

      if (isSubmitted) {
        if (!hasAnswered) {
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

      html += `
        <div class="${cardClass}" id="grammar-q-${idx}" data-idx="${idx}">
          <div class="q-header">
            <div class="q-number-box">
              <span class="q-badge">Câu ${qNum} / ${total}</span>
              ${q.lessonTitle ? `<span class="q-lesson-tag">${q.lessonTitle}</span>` : ''}
              ${(q.type === 'fill' || !q.options || Object.keys(q.options).length === 0) ? `<span class="q-lesson-tag" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">✏️ Điền từ</span>` : ''}
            </div>
            <div class="q-header-right">
              ${statusBadge}
              <button type="button" class="q-audio-btn" data-qidx="${idx}" title="Nghe đọc câu hỏi tiếng Nhật">
                🔊 Nghe câu hỏi
              </button>
            </div>
          </div>

          <div class="q-body">
            <h3 class="q-text">${escapeHtml(q.question)}</h3>
          </div>
      `;

      const isFillQuestion = (q.type === 'fill' || !q.options || Object.keys(q.options).length === 0);

      if (isFillQuestion) {
        // Dạng Điền từ (Fill-in-the-blank)
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
      } else {
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
      const userAns = userAnswers[q.id];
      const hasAnswered = (userAns !== undefined && userAns !== null && userAns.toString().trim() !== '');
      let itemClass = 'palette-item';

      if (!isSubmitted) {
        if (hasAnswered) itemClass += ' answered';
      } else {
        if (!hasAnswered) {
          itemClass += ' skipped';
        } else if (checkQuestionAnswer(q, userAns)) {
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

    const answeredCount = Object.keys(userAnswers).filter(k => {
      const val = userAnswers[k];
      return (val !== undefined && val !== null && val.toString().trim() !== '');
    }).length;

    const percent = Math.round((answeredCount / total) * 100);

    if (dom.progressText) {
      dom.progressText.textContent = `Đã làm ${answeredCount} / ${total} câu (${percent}%)`;
    }
    if (dom.progressBar) {
      dom.progressBar.style.width = `${percent}%`;
    }
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

    // Sự kiện input cho dạng điền từ
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
            const nextInput = nextCard.querySelector('.q-fill-input');
            if (nextInput) nextInput.focus();
          }
        }
      });
    });

    // Sự kiện nút nghe âm thanh câu hỏi
    const audioBtns = dom.questionsContainer.querySelectorAll('.q-audio-btn');
    audioBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const qidx = parseInt(btn.dataset.qidx, 10);
        const q = activeQuizQuestions[qidx];
        if (q && window.AppCore && typeof window.AppCore.speakJa === 'function') {
          // Bỏ ký tự chỗ trống khi đọc tiếng Nhật để âm thanh tự nhiên
          const cleanText = q.question.replace(/\([_ ]+\)/g, '、').replace(/（[_ ]+）/g, '、').replace(/—/g, '、');
          window.AppCore.speakJa(cleanText);
        }
      });
    });
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

    const answeredCount = Object.keys(userAnswers).filter(k => {
      const val = userAnswers[k];
      return (val !== undefined && val !== null && val.toString().trim() !== '');
    }).length;

    const unansweredCount = total - answeredCount;

    if (unansweredCount > 0) {
      const confirmSubmit = window.confirm(`Bạn còn ${unansweredCount} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài để chấm điểm không?`);
      if (!confirmSubmit) return;
    }

    stopTimer();
    isSubmitted = true;

    // Chấm điểm: Mỗi câu 1 điểm
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    activeQuizQuestions.forEach(q => {
      const userAns = userAnswers[q.id];
      const hasAnswered = (userAns !== undefined && userAns !== null && userAns.toString().trim() !== '');
      if (!hasAnswered) {
        skippedCount++;
      } else if (checkQuestionAnswer(q, userAns)) {
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
    showScoreModal(correctCount, total, wrongCount, skippedCount);
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

