// ========================================================
// APP.JS - Điểm khởi động ứng dụng chính (Application Orchestrator)
// Kết nối các module: Core, Speaking, Japanese, Reading, Vocab, Katakana
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo tất cả các Module
  AppCore.init();
  SpeakingModule.init();
  JapaneseModule.init();
  ReadingJaModule.init();
  ReadingEnModule.init();
  if (window.VocabJaModule) VocabJaModule.init();
  if (window.NotesJaModule) NotesJaModule.init();
  if (window.KatakanaModule) KatakanaModule.init();
  if (typeof GrammarJaModule !== 'undefined' && GrammarJaModule.init) {
    GrammarJaModule.init();
  } else if (window.GrammarJaModule && window.GrammarJaModule.init) {
    window.GrammarJaModule.init();
  }

  // 2. Hiển thị dữ liệu & Render giao diện ban đầu
  AppCore.updateStatsDisplay();
  SpeakingModule.renderSpkUnitSelect();
  ReadingEnModule.renderReadingSelect();
  JapaneseModule.renderJaSpkUnitSelect();
  ReadingJaModule.renderReadingSelect();
  if (window.GrammarJaModule && typeof window.GrammarJaModule.renderLessonSelect === 'function') {
    window.GrammarJaModule.renderLessonSelect();
  }

  // 3. Tải nội dung bài học mặc định (nếu có dữ liệu)
  const firstSpkKey = Object.keys(SENTENCE_UNITS_DATA || {})[0] || '';
  SpeakingModule.loadSpkUnit(firstSpkKey);

  const firstEnReadingKey = Object.keys(EN_READING_PASSAGES_DATA || {})[0] || '';
  ReadingEnModule.loadReadingPassage(firstEnReadingKey);

  const firstJaSpkKey = Object.keys(JA_SENTENCE_UNITS_DATA || {})[0] || '';
  JapaneseModule.loadJaSpkUnit(firstJaSpkKey);

  const firstReadingKey = Object.keys(JA_READING_PASSAGES_DATA || {})[0] || '';
  ReadingJaModule.loadReadingPassage(firstReadingKey);
});
