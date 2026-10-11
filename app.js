// ========================================================
// APP.JS - Điểm khởi động ứng dụng chính (Application Orchestrator)
// Kết nối các module: Core, Lessons, Chat, Vocab, Speaking, Japanese
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo tất cả các Module
  AppCore.init();
  ChatModule.init();
  VocabModule.init();
  SpeakingModule.init();
  JapaneseModule.init();
  ReadingJaModule.init();

  // 2. Hiển thị dữ liệu & Render giao diện ban đầu
  AppCore.updateStatsDisplay();
  ChatModule.renderScenarioSelect();
  VocabModule.renderVocabScenarioSelect();
  SpeakingModule.renderSpkUnitSelect();
  JapaneseModule.renderJaVocabScenarioSelect();
  JapaneseModule.renderJaSpkUnitSelect();
  ReadingJaModule.renderReadingSelect();

  // 3. Tải nội dung bài học mặc định
  const firstScenarioKey = Object.keys(CHAT_SCENARIOS || {})[0] || '';
  ChatModule.loadScenario(firstScenarioKey);
  VocabModule.loadVocabScenario('my_new_school');
  SpeakingModule.loadSpkUnit('unit_1_my_new_school');

  const firstJaVocabKey = Object.keys(JA_VOCAB_SCENARIOS_DATA || {})[0] || 'vocab_1_greeting';
  const firstJaSpkKey = Object.keys(JA_SENTENCE_UNITS_DATA || {})[0] || 'unit_1_greeting';
  JapaneseModule.loadJaVocabScenario(firstJaVocabKey);
  JapaneseModule.loadJaSpkUnit(firstJaSpkKey);

  const firstReadingKey = Object.keys(JA_READING_PASSAGES_DATA || {})[0] || 'reading_1_intro';
  ReadingJaModule.loadReadingPassage(firstReadingKey);

  VocabModule.loadFlashcard(0);
});
