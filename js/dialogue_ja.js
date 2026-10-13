// ========================================================
// JS/DIALOGUE_JA.JS - Phòng Luyện Hội Thoại Đối Thoại Tiếng Nhật (2 Người)
// Giao diện tin nhắn thuần túy: Các bong bóng hiển thị sẵn để input giọng nói
// Nguồn dữ liệu: datasss/jp/hoi_thoai/ (JA_DIALOGUE_DATA)
// ========================================================

const DialogueJaModule = (() => {
  let currentDialogueKey = 'bai_1';
  let currentTurnIdx = 0;
  let activeRoleMode = 'duo';
  let isAutoPlayingDialogue = false;
  let autoPlayTimer = null;

  // Lưu trữ các câu người dùng đã nói vào từng bong bóng
  const userSpokenInputs = new Map(); // idx -> spokenText

  // Nhận diện giọng nói AI
  let dialogueRecognition = null;
  let isSpeechRecognizing = false;
  let lastRecognizedText = '';
  let recognizingTurnIdx = 0;

  // DOM Elements
  let unitSelect;
  let roleModeSelect;
  let btnPlayAll;
  let btnResetDialogue;
  let timelineContainer;
  let turnIndicator;
  let btnListenTurn;
  let btnRecordTurn;
  let micLabel;
  let btnPrevTurn;
  let btnNextTurn;

  function initDOM() {
    unitSelect = document.getElementById('ja-dialogue-unit-select');
    roleModeSelect = document.getElementById('ja-dialogue-role-mode');
    btnPlayAll = document.getElementById('ja-dialogue-play-all-btn');
    btnResetDialogue = document.getElementById('ja-dialogue-reset-btn');
    timelineContainer = document.getElementById('ja-dialogue-timeline');
    turnIndicator = document.getElementById('ja-dialogue-turn-indicator');

    btnListenTurn = document.getElementById('ja-dia-listen-btn');
    btnRecordTurn = document.getElementById('ja-dia-record-btn');
    micLabel = document.getElementById('ja-dia-mic-label');
    btnPrevTurn = document.getElementById('ja-dia-prev-btn');
    btnNextTurn = document.getElementById('ja-dia-next-btn');
  }

  function renderDialogueSelect() {
    if (!unitSelect || typeof JA_DIALOGUE_DATA === 'undefined') return;
    unitSelect.innerHTML = '';
    const keys = Object.keys(JA_DIALOGUE_DATA);
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có bài hội thoại - Chờ nạp bài)';
      unitSelect.appendChild(opt);
      return;
    }
    keys.forEach(k => {
      const item = JA_DIALOGUE_DATA[k];
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = `${item.icon || '💬'} ${item.title || k}`;
      unitSelect.appendChild(opt);
    });
    if (!currentDialogueKey || !JA_DIALOGUE_DATA[currentDialogueKey]) {
      currentDialogueKey = keys.includes('bai_1') ? 'bai_1' : keys[0];
    }
    unitSelect.value = currentDialogueKey;
  }

  function loadDialogue(dialogueKey) {
    if (typeof JA_DIALOGUE_DATA === 'undefined') return;
    stopAllAudio();
    currentDialogueKey = dialogueKey;
    if (unitSelect && unitSelect.value !== dialogueKey) {
      unitSelect.value = dialogueKey;
    }
    currentTurnIdx = 0;
    userSpokenInputs.clear();

    const dialogue = JA_DIALOGUE_DATA[dialogueKey];
    if (!dialogue || !dialogue.turns || dialogue.turns.length === 0) {
      if (timelineContainer) {
        timelineContainer.innerHTML = '<div style="color:var(--text-muted);padding:20px;text-align:center;">Chưa có dữ liệu bài hội thoại.</div>';
      }
      return;
    }

    renderDialogueTimeline();
    loadTurn(0);
  }

  // Render các bong bóng tin nhắn (A lệch trái, B căn sát lề phải, chỉ có câu tiếng Nhật và ô input)
  function renderDialogueTimeline() {
    if (!timelineContainer || typeof JA_DIALOGUE_DATA === 'undefined') return;
    timelineContainer.innerHTML = '';
    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (!dialogue || !dialogue.turns) return;

    dialogue.turns.forEach((turn, idx) => {
      const isRoleA = turn.role === 'A';
      const bubbleRow = document.createElement('div');
      bubbleRow.className = `chat-msg-row ${isRoleA ? 'msg-left' : 'msg-right'} ${idx === currentTurnIdx ? 'is-active-turn' : ''}`;
      bubbleRow.id = `dia-bubble-row-${idx}`;
      bubbleRow.dataset.idx = idx;

      const hasUserInput = userSpokenInputs.has(idx);
      const userInputText = userSpokenInputs.get(idx) || '';

      bubbleRow.innerHTML = `
        <div class="chat-avatar" title="${turn.speaker}">${turn.avatar || (isRoleA ? '👩' : '👨')}</div>
        <div class="chat-body">
          <div class="chat-sender-name">${turn.speaker}</div>
          <div class="chat-bubble" id="dia-bubble-${idx}">
            <div class="chat-bubble-tools">
              <button class="chat-btn-tool chat-btn-listen" title="Nghe câu này" data-idx="${idx}">🔊</button>
              <button class="chat-btn-tool chat-btn-mic" title="Bấm nói câu này" data-idx="${idx}">🎙️</button>
            </div>
            <div class="chat-text-ja">${turn.ja}</div>
            ${turn.romaji ? `<div class="chat-text-romaji phonetic-text">${turn.romaji}</div>` : ''}
            <div class="chat-user-input ${hasUserInput ? 'has-input' : ''}" id="dia-user-input-${idx}">
              ${hasUserInput ? `<span class="user-spoken-tag">🗣️ Bạn:</span> "${userInputText}"` : '<span class="input-placeholder">🎙️ Bấm mic để nói câu này...</span>'}
            </div>
          </div>
        </div>
      `;

      // Click vào dòng tin nhắn để chọn lượt
      bubbleRow.addEventListener('click', (e) => {
        if (e.target.closest('.chat-btn-listen')) {
          e.stopPropagation();
          speakTurn(idx);
          return;
        }
        if (e.target.closest('.chat-btn-mic')) {
          e.stopPropagation();
          loadTurn(idx);
          startSpeechForTurn(idx);
          return;
        }
        loadTurn(idx);
      });

      timelineContainer.appendChild(bubbleRow);
    });
  }

  function loadTurn(idx) {
    if (typeof JA_DIALOGUE_DATA === 'undefined') return;
    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (!dialogue || !dialogue.turns || dialogue.turns.length === 0) return;
    if (idx < 0) idx = 0;
    if (idx >= dialogue.turns.length) idx = dialogue.turns.length - 1;

    currentTurnIdx = idx;
    const turn = dialogue.turns[idx];

    // Highlight bong bóng tin nhắn
    if (timelineContainer) {
      const allRows = timelineContainer.querySelectorAll('.chat-msg-row');
      allRows.forEach((r, i) => {
        if (i === idx) {
          r.classList.add('is-active-turn');
          r.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          r.classList.remove('is-active-turn');
        }
      });
    }

    // Cập nhật indicator & nhãn nút mic ở thanh chat bar
    if (turnIndicator) {
      turnIndicator.textContent = `Lượt ${idx + 1} / ${dialogue.turns.length}`;
    }
    if (micLabel) {
      micLabel.textContent = `Bấm nói (Lượt ${idx + 1}: ${turn.speaker})`;
    }
  }

  // Phát âm một lượt thoại tiếng Nhật
  function speakTurn(idx, callback) {
    if (typeof JA_DIALOGUE_DATA === 'undefined') return;
    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (!dialogue || !dialogue.turns || !dialogue.turns[idx]) return;

    const turn = dialogue.turns[idx];
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(turn.ja);
    utterance.lang = 'ja-JP';

    if (turn.gender === 'male') {
      utterance.pitch = 0.85;
      utterance.rate = 0.95;
    } else {
      utterance.pitch = 1.15;
      utterance.rate = 1.0;
    }

    const bubble = document.getElementById(`dia-bubble-${idx}`);
    if (bubble) bubble.classList.add('is-speaking-now');

    utterance.onend = () => {
      if (bubble) bubble.classList.remove('is-speaking-now');
      if (typeof callback === 'function') callback();
    };

    utterance.onerror = () => {
      if (bubble) bubble.classList.remove('is-speaking-now');
      if (typeof callback === 'function') callback();
    };

    window.speechSynthesis.speak(utterance);
  }

  // Phát toàn bộ hội thoại tuần tự
  function playFullDialogue() {
    if (typeof JA_DIALOGUE_DATA === 'undefined') return;
    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (!dialogue || !dialogue.turns || dialogue.turns.length === 0) return;

    if (isAutoPlayingDialogue) {
      stopAllAudio();
      return;
    }

    isAutoPlayingDialogue = true;
    if (btnPlayAll) {
      btnPlayAll.classList.add('is-playing');
      btnPlayAll.innerHTML = '⏹️ Dừng cuộc trò chuyện';
    }

    let playIdx = 0;
    function playStep() {
      if (!isAutoPlayingDialogue || playIdx >= dialogue.turns.length) {
        stopAllAudio();
        return;
      }
      loadTurn(playIdx);
      speakTurn(playIdx, () => {
        if (!isAutoPlayingDialogue) return;
        playIdx++;
        if (playIdx < dialogue.turns.length) {
          autoPlayTimer = setTimeout(playStep, 900);
        } else {
          stopAllAudio();
        }
      });
    }

    playStep();
  }

  function stopAllAudio() {
    isAutoPlayingDialogue = false;
    if (autoPlayTimer) {
      clearTimeout(autoPlayTimer);
      autoPlayTimer = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (btnPlayAll) {
      btnPlayAll.classList.remove('is-playing');
      btnPlayAll.innerHTML = '🔊 Phát toàn bộ hội thoại';
    }
    const allBubbles = document.querySelectorAll('.chat-bubble');
    allBubbles.forEach(b => b.classList.remove('is-speaking-now'));
    stopSpeechRecognition();
  }

  // Bắt đầu nhận diện giọng nói cho một lượt và input trực tiếp vào bong bóng đó
  function startSpeechForTurn(idx) {
    if (!dialogueRecognition) return;
    stopAllAudio();

    recognizingTurnIdx = idx;
    lastRecognizedText = '';
    isSpeechRecognizing = true;

    try {
      dialogueRecognition.start();
    } catch (e) {
      console.warn('SpeechRecognition start error:', e);
    }

    const bubble = document.getElementById(`dia-bubble-${idx}`);
    if (bubble) bubble.classList.add('is-recording-turn');

    const inputEl = document.getElementById(`dia-user-input-${idx}`);
    if (inputEl) {
      inputEl.className = 'chat-user-input is-listening';
      inputEl.innerHTML = '<span class="pulse-mic">🎙️</span> <em>Đang lắng nghe giọng bạn nói tiếng Nhật...</em>';
    }

    if (btnRecordTurn) {
      btnRecordTurn.classList.add('btn-recording-pulse');
      if (micLabel) micLabel.textContent = '⏹️ Đang nghe... Bấm để dừng';
    }
  }

  function stopSpeechRecognition() {
    isSpeechRecognizing = false;
    if (dialogueRecognition) {
      try { dialogueRecognition.stop(); } catch (e) {}
    }
    const allBubbles = document.querySelectorAll('.chat-bubble');
    allBubbles.forEach(b => b.classList.remove('is-recording-turn'));

    if (btnRecordTurn) {
      btnRecordTurn.classList.remove('btn-recording-pulse');
    }
    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (dialogue && dialogue.turns && dialogue.turns[currentTurnIdx] && micLabel) {
      micLabel.textContent = `Bấm nói (Lượt ${currentTurnIdx + 1}: ${dialogue.turns[currentTurnIdx].speaker})`;
    }
  }

  // Kết thúc lượt nói và input kết quả vào bong bóng
  function finishSpokenInput(idx, transcript) {
    stopSpeechRecognition();
    const cleanText = transcript.trim();
    if (!cleanText) {
      const inputEl = document.getElementById(`dia-user-input-${idx}`);
      if (inputEl && !userSpokenInputs.has(idx)) {
        inputEl.className = 'chat-user-input';
        inputEl.innerHTML = '<span class="input-placeholder">🎙️ Bấm mic để nói câu này...</span>';
      }
      return;
    }

    userSpokenInputs.set(idx, cleanText);
    const inputEl = document.getElementById(`dia-user-input-${idx}`);
    if (inputEl) {
      inputEl.className = 'chat-user-input has-input';
      inputEl.innerHTML = `
        <span class="user-spoken-tag">🗣️ Bạn:</span>
        <span class="user-spoken-text">"${cleanText}"</span>
        <span class="check-badge">✔️</span>
      `;
    }

    // Tự động chuyển sang lượt tiếp theo để người kia đối đáp
    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (dialogue && dialogue.turns && idx + 1 < dialogue.turns.length) {
      setTimeout(() => {
        loadTurn(idx + 1);
      }, 700);
    }
  }

  function init() {
    initDOM();

    if (unitSelect) {
      unitSelect.addEventListener('change', (e) => {
        loadDialogue(e.target.value);
      });
    }

    if (btnPlayAll) {
      btnPlayAll.addEventListener('click', () => {
        playFullDialogue();
      });
    }

    if (btnResetDialogue) {
      btnResetDialogue.addEventListener('click', () => {
        stopAllAudio();
        userSpokenInputs.clear();
        renderDialogueTimeline();
        loadTurn(0);
      });
    }

    if (btnListenTurn) {
      btnListenTurn.addEventListener('click', () => {
        stopAllAudio();
        speakTurn(currentTurnIdx);
      });
    }

    if (btnRecordTurn) {
      btnRecordTurn.addEventListener('click', () => {
        if (isSpeechRecognizing) {
          stopSpeechRecognition();
          if (lastRecognizedText) {
            finishSpokenInput(recognizingTurnIdx, lastRecognizedText);
          }
        } else {
          startSpeechForTurn(currentTurnIdx);
        }
      });
    }

    if (btnPrevTurn) {
      btnPrevTurn.addEventListener('click', () => {
        if (typeof JA_DIALOGUE_DATA === 'undefined') return;
        const d = JA_DIALOGUE_DATA[currentDialogueKey];
        if (!d || !d.turns) return;
        stopAllAudio();
        const prevIdx = (currentTurnIdx - 1 + d.turns.length) % d.turns.length;
        loadTurn(prevIdx);
      });
    }

    if (btnNextTurn) {
      btnNextTurn.addEventListener('click', () => {
        if (typeof JA_DIALOGUE_DATA === 'undefined') return;
        const d = JA_DIALOGUE_DATA[currentDialogueKey];
        if (!d || !d.turns) return;
        stopAllAudio();
        const nextIdx = (currentTurnIdx + 1) % d.turns.length;
        loadTurn(nextIdx);
      });
    }

    // Nhận diện giọng nói
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      dialogueRecognition = new SpeechRecognition();
      dialogueRecognition.lang = 'ja-JP';
      dialogueRecognition.continuous = false;
      dialogueRecognition.interimResults = true;

      dialogueRecognition.onresult = (event) => {
        let interim = '';
        let final = '';
        for (let i = 0; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) final += res[0].transcript;
          else interim += res[0].transcript;
        }
        const text = (final || interim).trim();
        if (text) {
          lastRecognizedText = text;
          const inputEl = document.getElementById(`dia-user-input-${recognizingTurnIdx}`);
          if (inputEl) {
            inputEl.innerHTML = `<span class="pulse-mic">🎙️</span> "${text}"`;
          }
        }
        if (final) {
          finishSpokenInput(recognizingTurnIdx, final.trim());
        }
      };

      dialogueRecognition.onend = () => {
        if (isSpeechRecognizing) {
          if (lastRecognizedText) {
            finishSpokenInput(recognizingTurnIdx, lastRecognizedText);
          } else {
            stopSpeechRecognition();
          }
        }
      };

      dialogueRecognition.onerror = (e) => {
        console.warn('Dialogue speech recognition error:', e.error);
        stopSpeechRecognition();
        const inputEl = document.getElementById(`dia-user-input-${recognizingTurnIdx}`);
        if (inputEl && !userSpokenInputs.has(recognizingTurnIdx)) {
          inputEl.className = 'chat-user-input';
          inputEl.innerHTML = '<span class="input-placeholder">⚠️ Chưa nhận được giọng nói. Bấm mic thử lại nhé!</span>';
        }
      };
    } else if (btnRecordTurn) {
      btnRecordTurn.title = 'Trình duyệt không hỗ trợ Web Speech API';
      btnRecordTurn.style.opacity = '0.5';
    }
  }

  return {
    init,
    renderDialogueSelect,
    loadDialogue,
    loadTurn,
    stopAllAudio
  };
})();

window.DialogueJaModule = DialogueJaModule;
