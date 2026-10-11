// ========================================================
// JS/DIALOGUE_JA.JS - Phòng Luyện Hội Thoại Đối Thoại Tiếng Nhật (2 Người)
// Phục vụ luyện giao tiếp 2 người: Tôi & Bạn tôi hoặc Tôi & AI
// Nguồn dữ liệu: datasss/jp/hoi_thoai/ (JA_DIALOGUE_DATA)
// ========================================================

const DialogueJaModule = (() => {
  let currentDialogueKey = 'bai_1';
  let currentTurnIdx = 0;
  let activeRoleMode = 'duo'; // 'duo' (2 người), 'role_a' (Tôi vai A), 'role_b' (Tôi vai B)
  let isAutoPlayingDialogue = false;
  let autoPlayTimer = null;

  // Ghi âm giọng người dùng
  let dialogueMediaRecorder = null;
  let dialogueMediaStream = null;
  let dialogueAudioChunks = [];
  let isDialogueUserRecording = false;
  let dialogueRecordings = new Map(); // turnIdx -> audioBlobUrl
  let userAudioPlayer = new Audio();

  // Nhận diện giọng nói AI
  let dialogueRecognition = null;
  let isSpeechRecognizing = false;
  let lastRecognizedText = '';
  let hasEvaluatedTurn = false;

  // DOM Elements
  let unitSelect;
  let roleModeSelect;
  let btnPlayAll;
  let btnResetDialogue;
  let timelineContainer;

  // Focus Lab Card Elements
  let turnSpeakerAvatar;
  let turnSpeakerName;
  let turnSpeakerRole;
  let turnPhraseJa;
  let turnPhraseRomaji;
  let turnPhraseVi;
  let turnTip;
  let btnListenTurn;
  let btnRecordTurn;
  let btnUserAudioTurn;
  let btnPrevTurn;
  let btnNextTurn;
  let spokenBox;
  let spokenBadge;
  let spokenText;
  let typingCursor;
  let feedbackBox;

  function initDOM() {
    unitSelect = document.getElementById('ja-dialogue-unit-select');
    roleModeSelect = document.getElementById('ja-dialogue-role-mode');
    btnPlayAll = document.getElementById('ja-dialogue-play-all-btn');
    btnResetDialogue = document.getElementById('ja-dialogue-reset-btn');
    timelineContainer = document.getElementById('ja-dialogue-timeline');

    turnSpeakerAvatar = document.getElementById('ja-dia-speaker-avatar');
    turnSpeakerName = document.getElementById('ja-dia-speaker-name');
    turnSpeakerRole = document.getElementById('ja-dia-speaker-role');
    turnPhraseJa = document.getElementById('ja-dia-phrase-ja');
    turnPhraseRomaji = document.getElementById('ja-dia-phrase-romaji');
    turnPhraseVi = document.getElementById('ja-dia-phrase-vi');
    turnTip = document.getElementById('ja-dia-tip');
    btnListenTurn = document.getElementById('ja-dia-listen-btn');
    btnRecordTurn = document.getElementById('ja-dia-record-btn');
    btnUserAudioTurn = document.getElementById('ja-dia-user-audio-btn');
    btnPrevTurn = document.getElementById('ja-dia-prev-btn');
    btnNextTurn = document.getElementById('ja-dia-next-btn');
    spokenBox = document.getElementById('ja-dia-spoken-box');
    spokenBadge = document.getElementById('ja-dia-spoken-badge');
    spokenText = document.getElementById('ja-dia-spoken-text');
    typingCursor = document.getElementById('ja-dia-typing-cursor');
    feedbackBox = document.getElementById('ja-dia-feedback');
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

  function renderDialogueTimeline() {
    if (!timelineContainer || typeof JA_DIALOGUE_DATA === 'undefined') return;
    timelineContainer.innerHTML = '';
    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (!dialogue || !dialogue.turns) return;

    dialogue.turns.forEach((turn, idx) => {
      const isRoleA = turn.role === 'A';
      const bubble = document.createElement('div');
      bubble.className = `dialogue-bubble-row ${isRoleA ? 'bubble-role-a' : 'bubble-role-b'} ${idx === currentTurnIdx ? 'is-active-turn' : ''}`;
      bubble.id = `dia-bubble-${idx}`;
      bubble.dataset.idx = idx;

      // Nhãn vai trò theo mode hiện tại
      let roleLabel = '';
      if (activeRoleMode === 'role_a') {
        roleLabel = isRoleA ? '👤 BẠN (Tôi)' : '🤖 AI (Máy)';
      } else if (activeRoleMode === 'role_b') {
        roleLabel = !isRoleA ? '👤 BẠN (Tôi)' : '🤖 AI (Máy)';
      } else {
        roleLabel = isRoleA ? '👥 Người A (Tôi)' : '👥 Người B (Bạn tôi)';
      }

      bubble.innerHTML = `
        <div class="dialogue-avatar-col">
          <div class="dialogue-avatar" title="${turn.speaker}">${turn.avatar || (isRoleA ? '👩' : '👨')}</div>
          <div class="dialogue-avatar-name">${turn.speaker}</div>
          <span class="dialogue-role-tag ${isRoleA ? 'tag-role-a' : 'tag-role-b'}">${roleLabel}</span>
        </div>
        <div class="dialogue-bubble-content">
          <div class="dialogue-bubble-header">
            <span class="dialogue-turn-num">Lượt #${idx + 1}</span>
            <div class="dialogue-bubble-actions">
              <button class="dia-btn-mini dia-btn-listen" title="Nghe câu này" data-idx="${idx}">🔊 Nghe</button>
              <button class="dia-btn-mini dia-btn-practice" title="Luyện nói câu này" data-idx="${idx}">🎙️ Luyện câu này</button>
            </div>
          </div>
          <div class="dialogue-text-ja">${turn.ja}</div>
          <div class="dialogue-text-romaji">${turn.romaji} • <span class="dialogue-text-readvi">${turn.readVi}</span></div>
          <div class="dialogue-text-vi">👉 ${turn.vi}</div>
        </div>
      `;

      // Bấm vào bubble để chọn lượt
      bubble.addEventListener('click', (e) => {
        if (e.target.closest('.dia-btn-mini')) return;
        loadTurn(idx);
      });

      // Nút nghe mini
      const btnListen = bubble.querySelector('.dia-btn-listen');
      if (btnListen) {
        btnListen.addEventListener('click', (e) => {
          e.stopPropagation();
          speakTurn(idx);
        });
      }

      // Nút luyện mini
      const btnPractice = bubble.querySelector('.dia-btn-practice');
      if (btnPractice) {
        btnPractice.addEventListener('click', (e) => {
          e.stopPropagation();
          loadTurn(idx);
          if (btnRecordTurn) btnRecordTurn.click();
        });
      }

      timelineContainer.appendChild(bubble);
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
    const isRoleA = turn.role === 'A';

    // Highlight timeline bubble
    if (timelineContainer) {
      const allBubbles = timelineContainer.querySelectorAll('.dialogue-bubble-row');
      allBubbles.forEach((b, i) => {
        if (i === idx) {
          b.classList.add('is-active-turn');
          b.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          b.classList.remove('is-active-turn');
        }
      });
    }

    // Cập nhật card chi tiết
    if (turnSpeakerAvatar) turnSpeakerAvatar.textContent = turn.avatar || (isRoleA ? '👩' : '👨');
    if (turnSpeakerName) turnSpeakerName.textContent = turn.speaker;

    let roleDescription = '';
    if (activeRoleMode === 'role_a') {
      roleDescription = isRoleA ? '👤 VAI CỦA BẠN (Tôi nói)' : '🤖 VAI CỦA AI (Máy nói)';
    } else if (activeRoleMode === 'role_b') {
      roleDescription = !isRoleA ? '👤 VAI CỦA BẠN (Tôi nói)' : '🤖 VAI CỦA AI (Máy nói)';
    } else {
      roleDescription = isRoleA ? '👥 LƯỢT NGƯỜI A (Tôi)' : '👥 LƯỢT NGƯỜI B (Bạn tôi)';
    }
    if (turnSpeakerRole) turnSpeakerRole.textContent = `${roleDescription} • (CÂU ${idx + 1} / ${dialogue.turns.length})`;

    if (turnPhraseJa) turnPhraseJa.textContent = turn.ja;
    if (turnPhraseRomaji) turnPhraseRomaji.textContent = `Romaji: ${turn.romaji} • Đọc tựa như: "${turn.readVi}"`;
    if (turnPhraseVi) turnPhraseVi.textContent = `👉 Ý nghĩa: ${turn.vi}`;
    if (turnTip) turnTip.textContent = turn.tip ? `💡 Mẹo ngữ cảnh: ${turn.tip}` : '';

    if (feedbackBox) {
      feedbackBox.innerHTML = '<div class="feedback-status">Hãy bấm "🔊 Nghe câu này" để cảm nhận ngữ điệu, sau đó bấm "🎙️ Bấm để nói thử" nhé!</div>';
    }

    resetSpokenBox();
    updateUserAudioBtnUI();
  }

  function resetSpokenBox() {
    if (spokenBox) {
      spokenBox.classList.remove('is-recording', 'match-success', 'match-retry');
    }
    if (spokenBadge) spokenBadge.textContent = 'Đang chờ bạn nói câu này...';
    if (spokenText) spokenText.textContent = '"..."';
    if (typingCursor) typingCursor.style.display = 'none';
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

    // Điều chỉnh cao độ để phân biệt giọng Nữ (Sato) và Nam (Yamada / Miller)
    if (turn.gender === 'male') {
      utterance.pitch = 0.85;
      utterance.rate = 0.95;
    } else {
      utterance.pitch = 1.15;
      utterance.rate = 1.0;
    }

    // Hiệu ứng nhấp nháy bubble đang nói
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

  // Chạy toàn bộ hội thoại tuần tự (Auto Play)
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
          autoPlayTimer = setTimeout(playStep, 1000); // Nghỉ 1s giữa các lượt thoại tự nhiên
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
    const allBubbles = document.querySelectorAll('.dialogue-bubble-row');
    allBubbles.forEach(b => b.classList.remove('is-speaking-now'));
    stopSpeechRecognition();
    stopUserAudioRecording();
  }

  // --- NHẬN DIỆN GIỌNG NÓI AI CHO LƯỢT THOẠI ---
  function startSpeechRecognition() {
    if (!dialogueRecognition) return;
    stopAllAudio();
    try {
      hasEvaluatedTurn = false;
      lastRecognizedText = '';
      isSpeechRecognizing = true;
      dialogueRecognition.start();
      if (btnRecordTurn) {
        btnRecordTurn.classList.add('btn-recording-pulse');
        btnRecordTurn.textContent = '⏹️ Đang lắng nghe... Bấm để dừng';
      }
      if (spokenBox) {
        spokenBox.classList.add('is-recording');
        spokenBox.classList.remove('match-success', 'match-retry');
      }
      if (spokenBadge) spokenBadge.textContent = '🎙️ Hãy đọc to câu tiếng Nhật này...';
      if (spokenText) spokenText.textContent = '';
      if (typingCursor) typingCursor.style.display = 'inline-block';
    } catch (e) {
      console.warn('SpeechRecognition error:', e);
    }
  }

  function stopSpeechRecognition() {
    isSpeechRecognizing = false;
    if (dialogueRecognition) {
      try { dialogueRecognition.stop(); } catch (e) {}
    }
    if (btnRecordTurn) {
      btnRecordTurn.classList.remove('btn-recording-pulse');
      btnRecordTurn.textContent = '🎙️ Bấm để nói thử lượt này';
    }
  }

  function evaluateSpokenTurn(transcript) {
    if (hasEvaluatedTurn) return;
    hasEvaluatedTurn = true;
    stopSpeechRecognition();

    const dialogue = JA_DIALOGUE_DATA[currentDialogueKey];
    if (!dialogue || !dialogue.turns) return;
    const item = dialogue.turns[currentTurnIdx];
    if (!item) return;

    if (spokenText) spokenText.textContent = `"${transcript}"`;
    if (typingCursor) typingCursor.style.display = 'none';

    // Chuẩn hóa và so khớp
    const cleanActual = transcript.replace(/[.,!?、。・\s]/g, '').toLowerCase();
    const cleanExpected = item.ja.replace(/[.,!?、。・\s]/g, '').toLowerCase();

    const isMatch = cleanActual.includes(cleanExpected) || cleanExpected.includes(cleanActual) || (cleanActual.length > 2 && cleanExpected.startsWith(cleanActual.slice(0, 3)));

    if (isMatch) {
      if (spokenBox) spokenBox.classList.add('match-success');
      if (spokenBadge) spokenBadge.textContent = '🎉 Tuyệt vời! Phát âm rất chuẩn!';
      if (feedbackBox) {
        feedbackBox.innerHTML = `
          <div class="feedback-success">
            ✨ Bạn đã đối thoại thành công câu này: "<strong>${item.ja}</strong>"<br>
            <small>👉 Bấm "Lượt tiếp theo ➔" để tiếp tục kịch bản hội thoại!</small>
          </div>
        `;
      }
      // Đánh dấu bubble đã hoàn thành
      const bubble = document.getElementById(`dia-bubble-${currentTurnIdx}`);
      if (bubble) bubble.classList.add('is-completed-turn');
    } else {
      if (spokenBox) spokenBox.classList.add('match-retry');
      if (spokenBadge) spokenBadge.textContent = 'Cần luyện thêm ngữ điệu...';
      if (feedbackBox) {
        feedbackBox.innerHTML = `
          <div class="feedback-retry">
            💡 AI nhận diện bạn đọc: "<strong>${transcript}</strong>"<br>
            Câu mẫu: "<strong>${item.ja}</strong>" <em>(${item.readVi})</em>.<br>
            <small>👉 Hãy đọc to, rõ ràng và thử lại nhé!</small>
          </div>
        `;
      }
    }
  }

  // --- THU ÂM NGHE LẠI GIỌNG NGƯỜI NÓI ---
  async function startUserAudioRecording() {
    try {
      dialogueMediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      dialogueMediaRecorder = new MediaRecorder(dialogueMediaStream);
      dialogueAudioChunks = [];

      dialogueMediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) dialogueAudioChunks.push(e.data);
      };

      dialogueMediaRecorder.onstop = () => {
        const audioBlob = new Blob(dialogueAudioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        dialogueRecordings.set(currentTurnIdx, audioUrl);
        updateUserAudioBtnUI();
        if (dialogueMediaStream) {
          dialogueMediaStream.getTracks().forEach(track => track.stop());
          dialogueMediaStream = null;
        }
      };

      dialogueMediaRecorder.start();
      isDialogueUserRecording = true;
      if (btnUserAudioTurn) {
        btnUserAudioTurn.classList.add('btn-recording-pulse');
        btnUserAudioTurn.textContent = '⏹️ Dừng ghi âm giọng bạn';
      }
    } catch (err) {
      console.warn('Mic access error:', err);
      alert('Không thể mở micro để ghi âm. Vui lòng cho phép quyền truy cập micro trên trình duyệt.');
    }
  }

  function stopUserAudioRecording() {
    if (dialogueMediaRecorder && dialogueMediaRecorder.state !== 'inactive') {
      dialogueMediaRecorder.stop();
    }
    isDialogueUserRecording = false;
    if (btnUserAudioTurn) {
      btnUserAudioTurn.classList.remove('btn-recording-pulse');
    }
  }

  function playUserRecording(turnIdx) {
    const url = dialogueRecordings.get(turnIdx);
    if (!url) {
      alert('Bạn chưa ghi âm câu này. Hãy bấm "Ghi âm giọng bạn" trước nhé!');
      return;
    }
    userAudioPlayer.src = url;
    userAudioPlayer.play();
  }

  function updateUserAudioBtnUI() {
    if (!btnUserAudioTurn) return;
    const hasRec = dialogueRecordings.has(currentTurnIdx);
    if (hasRec) {
      btnUserAudioTurn.textContent = '🎧 Nghe lại giọng bạn đã thu';
      btnUserAudioTurn.onclick = () => playUserRecording(currentTurnIdx);
    } else {
      btnUserAudioTurn.textContent = '🎙️ Thu âm nghe lại giọng bạn';
      btnUserAudioTurn.onclick = () => {
        if (isDialogueUserRecording) {
          stopUserAudioRecording();
        } else {
          startUserAudioRecording();
        }
      };
    }
  }

  // --- KHỞI TẠO MODULE ---
  function init() {
    initDOM();

    if (unitSelect) {
      unitSelect.addEventListener('change', (e) => {
        loadDialogue(e.target.value);
      });
    }

    if (roleModeSelect) {
      roleModeSelect.addEventListener('change', (e) => {
        activeRoleMode = e.target.value;
        renderDialogueTimeline();
        loadTurn(currentTurnIdx);
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
        loadTurn(0);
      });
    }

    if (btnListenTurn) {
      btnListenTurn.addEventListener('click', () => {
        stopAllAudio();
        speakTurn(currentTurnIdx);
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

    // Nhận diện giọng nói SpeechRecognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      dialogueRecognition = new SpeechRecognition();
      dialogueRecognition.lang = 'ja-JP';
      dialogueRecognition.continuous = false;
      dialogueRecognition.interimResults = true;

      if (btnRecordTurn) {
        btnRecordTurn.addEventListener('click', () => {
          if (isSpeechRecognizing) {
            stopSpeechRecognition();
            if (lastRecognizedText && !hasEvaluatedTurn) {
              evaluateSpokenTurn(lastRecognizedText);
            }
          } else {
            startSpeechRecognition();
          }
        });
      }

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
          if (spokenText) spokenText.textContent = `"${text}"`;
          if (spokenBadge) spokenBadge.textContent = '🎙️ Đang lắng nghe tiếng Nhật...';
        }
        if (final) {
          evaluateSpokenTurn(final.trim());
        }
      };

      dialogueRecognition.onend = () => {
        if (isSpeechRecognizing) {
          stopSpeechRecognition();
          if (lastRecognizedText && !hasEvaluatedTurn) {
            evaluateSpokenTurn(lastRecognizedText);
          } else if (!hasEvaluatedTurn) {
            if (spokenBadge) spokenBadge.textContent = 'Đã kết thúc lượt nghe';
            if (spokenBox) spokenBox.classList.remove('is-recording');
          }
        }
      };

      dialogueRecognition.onerror = (e) => {
        console.warn('Dialogue speech recognition error:', e.error);
        stopSpeechRecognition();
        if (spokenBox) spokenBox.classList.remove('is-recording');
        if (feedbackBox) {
          if (e.error === 'no-speech') {
            feedbackBox.innerHTML = '<div class="feedback-error">⚠️ Không nhận được tiếng nói. Bạn hãy nói to hơn nhé!</div>';
          } else if (e.error === 'not-allowed') {
            feedbackBox.innerHTML = '<div class="feedback-error">⚠️ Chưa được cấp quyền Micro trên trình duyệt.</div>';
          }
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
