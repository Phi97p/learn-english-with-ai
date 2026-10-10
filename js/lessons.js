// ========================================================
// JS/LESSONS.JS - Lộ trình Bài học SGK Giao tiếp
// ========================================================

const LessonsModule = (() => {
  let lessonsGrid;
  let lessonDetailView;
  let lessonDetailContent;
  let backToLessonsBtn;

  function initDOM() {
    lessonsGrid = document.getElementById('lessons-grid');
    lessonDetailView = document.getElementById('lesson-detail-view');
    lessonDetailContent = document.getElementById('lesson-detail-content');
    backToLessonsBtn = document.getElementById('back-to-lessons-btn');
  }

  function renderLessons() {
    if (!lessonsGrid || typeof LESSONS_DATA === 'undefined') return;
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
    AppCore.state.currentLessonName = `${lesson.order}: ${lesson.title}`;
    localStorage.setItem('currentLessonName', AppCore.state.currentLessonName);

    const overviewEl = document.querySelector('.lessons-overview');
    if (overviewEl) overviewEl.style.display = 'none';
    if (lessonDetailView) lessonDetailView.classList.remove('hidden');

    const phrasesHtml = lesson.phrases.map((p, idx) => `
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

    if (lessonDetailContent) {
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
          AppCore.speak(btn.dataset.text);
          AppCore.incrementWordCount();
        });
      });
    }

    AppCore.syncProgress();
  }

  function init() {
    initDOM();
    if (backToLessonsBtn) {
      backToLessonsBtn.addEventListener('click', () => {
        if (lessonDetailView) lessonDetailView.classList.add('hidden');
        const overviewEl = document.querySelector('.lessons-overview');
        if (overviewEl) overviewEl.style.display = 'block';
      });
    }
  }

  return {
    renderLessons,
    openLessonDetail,
    init
  };
})();

window.LessonsModule = LessonsModule;
