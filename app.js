// ========================================================
// APP.JS - Điểm khởi động ứng dụng chính (Application Orchestrator)
// Kết nối các module tiếng Nhật: Core, Japanese, Reading, Vocab, Notes, Katakana, Grammar
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo tất cả các Module tiếng Nhật
  AppCore.init();
  JapaneseModule.init();
  ReadingJaModule.init();
  if (window.VocabJaModule) VocabJaModule.init();
  if (window.NotesJaModule) NotesJaModule.init();
  if (window.KatakanaModule) KatakanaModule.init();
  if (typeof GrammarJaModule !== 'undefined' && GrammarJaModule.init) {
    GrammarJaModule.init();
  } else if (window.GrammarJaModule && window.GrammarJaModule.init) {
    window.GrammarJaModule.init();
  }
  if (typeof KanjiJaModule !== 'undefined' && KanjiJaModule.init) {
    KanjiJaModule.init();
  } else if (window.KanjiJaModule && window.KanjiJaModule.init) {
    window.KanjiJaModule.init();
  }

  // 2. Hiển thị dữ liệu & Render giao diện ban đầu
  AppCore.updateStatsDisplay();
  JapaneseModule.renderJaSpkUnitSelect();
  ReadingJaModule.renderReadingSelect();
  if (window.GrammarJaModule && typeof window.GrammarJaModule.renderLessonSelect === 'function') {
    window.GrammarJaModule.renderLessonSelect();
  }
  if (window.KanjiJaModule && typeof window.KanjiJaModule.renderLessonSelect === 'function') {
    window.KanjiJaModule.renderLessonSelect();
  }

  // 3. Tải nội dung bài học mặc định (nếu có dữ liệu)
  const firstJaSpkKey = Object.keys(JA_SENTENCE_UNITS_DATA || {})[0] || '';
  JapaneseModule.loadJaSpkUnit(firstJaSpkKey);

  const firstReadingKey = Object.keys(JA_READING_PASSAGES_DATA || {})[0] || '';
  ReadingJaModule.loadReadingPassage(firstReadingKey);
});
