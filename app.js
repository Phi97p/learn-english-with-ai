// ========================================================
// APP.JS - Điểm khởi động ứng dụng chính (Application Orchestrator)
// Kết nối các module: Core, Lessons, Chat, Vocab, Speaking, Japanese
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo tất cả các Module
  AppCore.init();
  LessonsModule.init();
  ChatModule.init();
  VocabModule.init();
  SpeakingModule.init();
  JapaneseModule.init();

  // 2. Hiển thị dữ liệu & Render giao diện ban đầu
  AppCore.updateStatsDisplay();
  LessonsModule.renderLessons();
  ChatModule.renderScenarioSelect();
  VocabModule.renderVocabScenarioSelect();
  SpeakingModule.renderSpkUnitSelect();
  JapaneseModule.renderJaVocabScenarioSelect();
  JapaneseModule.renderJaSpkUnitSelect();

  // 3. Tải nội dung bài học mặc định
  const firstScenarioKey = Object.keys(CHAT_SCENARIOS || {})[0] || '';
  ChatModule.loadScenario(firstScenarioKey);
  VocabModule.loadVocabScenario('my_new_school');
  SpeakingModule.loadSpkUnit('unit_1_my_new_school');

  const firstJaVocabKey = Object.keys(JA_VOCAB_SCENARIOS_DATA || {})[0] || 'vocab_1_greeting';
  const firstJaSpkKey = Object.keys(JA_SENTENCE_UNITS_DATA || {})[0] || 'unit_1_greeting';
  JapaneseModule.loadJaVocabScenario(firstJaVocabKey);
  JapaneseModule.loadJaSpkUnit(firstJaSpkKey);

  VocabModule.loadFlashcard(0);
});
