// ========================================================
// APP.JS - Điểm khởi động ứng dụng chính (Application Orchestrator)
// Kết nối các module: Core, Lessons, Chat, Vocab, Speaking, Japanese
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo tất cả các Module
  AppCore.init();
  VocabModule.init();
  SpeakingModule.init();
  JapaneseModule.init();
  ReadingJaModule.init();
  ReadingEnModule.init();
  DialogueJaModule.init();

  // 2. Hiển thị dữ liệu & Render giao diện ban đầu
  AppCore.updateStatsDisplay();
  VocabModule.renderVocabScenarioSelect();
  SpeakingModule.renderSpkUnitSelect();
  ReadingEnModule.renderReadingSelect();
  JapaneseModule.renderJaVocabScenarioSelect();
  JapaneseModule.renderJaSpkUnitSelect();
  ReadingJaModule.renderReadingSelect();
  DialogueJaModule.renderDialogueSelect();

  // 3. Tải nội dung bài học mặc định (nếu có dữ liệu)
  const firstSpkKey = Object.keys(SENTENCE_UNITS_DATA || {})[0] || '';
  SpeakingModule.loadSpkUnit(firstSpkKey);

  const firstVocabKey = Object.keys(VOCAB_SCENARIOS_DATA || {})[0] || '';
  VocabModule.loadVocabScenario(firstVocabKey);

  const firstEnReadingKey = Object.keys(EN_READING_PASSAGES_DATA || {})[0] || '';
  ReadingEnModule.loadReadingPassage(firstEnReadingKey);

  const firstJaSpkKey = Object.keys(JA_SENTENCE_UNITS_DATA || {})[0] || '';
  const firstJaVocabKey = Object.keys(JA_VOCAB_SCENARIOS_DATA || {})[0] || '';
  JapaneseModule.loadJaSpkUnit(firstJaSpkKey);
  JapaneseModule.loadJaVocabScenario(firstJaVocabKey);

  const firstReadingKey = Object.keys(JA_READING_PASSAGES_DATA || {})[0] || '';
  ReadingJaModule.loadReadingPassage(firstReadingKey);

  const firstDiaKey = Object.keys(JA_DIALOGUE_DATA || {})[0] || '';
  DialogueJaModule.loadDialogue(firstDiaKey);
});
