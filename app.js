// ========================================================
// APP.JS - Điểm khởi động ứng dụng chính (Application Orchestrator)
// Kết nối các module: Core, Speaking, Japanese, Reading, Dialogue
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Khởi tạo tất cả các Module
  AppCore.init();
  SpeakingModule.init();
  JapaneseModule.init();
  ReadingJaModule.init();
  ReadingEnModule.init();
  DialogueEnModule.init();
  DialogueJaModule.init();
  if (window.VocabJaModule) VocabJaModule.init();
  if (window.KatakanaModule) KatakanaModule.init();

  // 2. Hiển thị dữ liệu & Render giao diện ban đầu
  AppCore.updateStatsDisplay();
  SpeakingModule.renderSpkUnitSelect();
  ReadingEnModule.renderReadingSelect();
  DialogueEnModule.renderDialogueSelect();
  JapaneseModule.renderJaSpkUnitSelect();
  ReadingJaModule.renderReadingSelect();
  DialogueJaModule.renderDialogueSelect();

  // 3. Tải nội dung bài học mặc định (nếu có dữ liệu)
  const firstSpkKey = Object.keys(SENTENCE_UNITS_DATA || {})[0] || '';
  SpeakingModule.loadSpkUnit(firstSpkKey);

  const firstEnReadingKey = Object.keys(EN_READING_PASSAGES_DATA || {})[0] || '';
  ReadingEnModule.loadReadingPassage(firstEnReadingKey);

  const firstEnDiaKey = Object.keys(EN_DIALOGUE_DATA || {})[0] || '';
  DialogueEnModule.loadDialogue(firstEnDiaKey);

  const firstJaSpkKey = Object.keys(JA_SENTENCE_UNITS_DATA || {})[0] || '';
  JapaneseModule.loadJaSpkUnit(firstJaSpkKey);

  const firstReadingKey = Object.keys(JA_READING_PASSAGES_DATA || {})[0] || '';
  ReadingJaModule.loadReadingPassage(firstReadingKey);

  const firstDiaKey = Object.keys(JA_DIALOGUE_DATA || {})[0] || '';
  DialogueJaModule.loadDialogue(firstDiaKey);
});
