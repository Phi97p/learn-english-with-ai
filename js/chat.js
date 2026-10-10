// ========================================================
// JS/CHAT.JS - Luyện phản xạ Hội thoại AI (Roleplay Chat)
// ========================================================

const ChatModule = (() => {
  let scenarioSelect;
  let chatMessages;
  let quickRepliesContainer;
  let chatInput;
  let chatSendBtn;
  let chatMicBtn;
  let chatClearBtn;

  let currentScenario = 'my_new_school';
  let currentScenarioStep = 0;

  let isListeningChat = false;
  let userManuallyStopped = false;
  let baseInputText = '';
  let recognition = null;

  function initDOM() {
    scenarioSelect = document.getElementById('scenario-select');
    chatMessages = document.getElementById('chat-messages');
    quickRepliesContainer = document.getElementById('quick-replies');
    chatInput = document.getElementById('chat-input');
    chatSendBtn = document.getElementById('chat-send-btn');
    chatMicBtn = document.getElementById('chat-mic-btn');
    chatClearBtn = document.getElementById('chat-clear-btn');
  }

  function renderScenarioSelect() {
    if (!scenarioSelect) return;
    scenarioSelect.innerHTML = '';
    const keys = Object.keys(CHAT_SCENARIOS || {});
    if (keys.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '(Chưa có bài hội thoại - Chờ nạp bài mới)';
      scenarioSelect.appendChild(opt);
    } else {
      keys.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k;
        opt.textContent = (CHAT_SCENARIOS[k] && CHAT_SCENARIOS[k].title) ? CHAT_SCENARIOS[k].title : k;
        scenarioSelect.appendChild(opt);
      });
    }
  }

  function loadScenario(scenarioKey) {
    currentScenario = scenarioKey;
    currentScenarioStep = 0;
    const scenario = CHAT_SCENARIOS ? CHAT_SCENARIOS[scenarioKey] : null;
    if (!chatMessages) return;
    chatMessages.innerHTML = '';

    if (!scenario) {
      chatMessages.innerHTML = `
        <div style="text-align:center; padding: 48px 20px; color: var(--text-muted);">
          <div style="font-size: 2.8rem; margin-bottom: 14px;">💬</div>
          <h3 style="margin-bottom: 8px; color: var(--text-main);">Chưa có bài hội thoại nào</h3>
          <p style="font-size: 0.95rem; max-width: 480px; margin: 0 auto; line-height: 1.6;">
            Dữ liệu bài hội thoại đã được dọn sạch theo yêu cầu.<br>
            Bạn hãy gửi các đoạn hội thoại hoặc kế hoạch mới cho AI để nạp vào nhé!
          </p>
        </div>
      `;
      renderQuickReplies([]);
      return;
    }

    if (scenario.initialMessages && Array.isArray(scenario.initialMessages)) {
      scenario.initialMessages.forEach(msg => {
        appendChatMessage(msg.sender, msg.en, msg.vi, false);
      });
    }

    renderQuickReplies(scenario.initialReplies || scenario.replies || []);
  }

  function appendChatMessage(sender, textEn, textVi, recordHistory = true) {
    if (!chatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = `
      <div class="msg-bubble">
        <div class="msg-text-en">
          ${textEn}
          <button class="msg-sound-btn" title="Nghe câu này">🔊</button>
        </div>
        <div class="msg-text-vi">${textVi}</div>
      </div>
    `;

    msgDiv.querySelector('.msg-sound-btn').addEventListener('click', () => {
      AppCore.speak(textEn);
    });

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (recordHistory) {
      AppCore.state.chatHistory.push({
        sender,
        en: textEn,
        vi: textVi,
        time: new Date().toLocaleTimeString('vi-VN')
      });
      if (AppCore.state.chatHistory.length > 30) AppCore.state.chatHistory.shift();
      localStorage.setItem('chatHistory', JSON.stringify(AppCore.state.chatHistory));
      AppCore.syncProgress();
    }

    if (sender === 'bot') {
      AppCore.speak(textEn);
    }
  }

  function renderQuickReplies(replies) {
    if (!quickRepliesContainer) return;
    quickRepliesContainer.innerHTML = '';
    if (!replies || replies.length === 0) {
      quickRepliesContainer.innerHTML = '<span style="color:var(--text-muted);font-size:0.8rem;">Hãy gõ câu trả lời của bạn vào ô phía dưới hoặc chọn tình huống khác 👇</span>';
      return;
    }

    replies.forEach(reply => {
      const chip = document.createElement('button');
      chip.className = 'quick-reply-chip';
      chip.innerHTML = `<span>💬 "${reply.en}"</span> <span style="font-size:0.75rem;opacity:0.8;">(${reply.vi})</span>`;
      chip.addEventListener('click', () => {
        handleUserMessage(reply.en, reply.vi);
      });
      quickRepliesContainer.appendChild(chip);
    });
  }

  function handleUserMessage(textEn, textVi = '') {
    if (!textEn.trim()) return;

    if (textEn.includes("Let's practice this scenario one more time!")) {
      loadScenario(currentScenario);
      return;
    }
    if (textEn.includes("I want to try ordering coffee at Coffee House!")) {
      if (scenarioSelect) scenarioSelect.value = 'coffee';
      loadScenario('coffee');
      return;
    }
    if (textEn.includes("Let's try shopping & asking for prices next!")) {
      if (scenarioSelect) scenarioSelect.value = 'shopping';
      loadScenario('shopping');
      return;
    }
    if (textEn.includes("Let's try asking for directions next!")) {
      if (scenarioSelect) scenarioSelect.value = 'directions';
      loadScenario('directions');
      return;
    }
    if (textEn.includes("Let's go back to Lesson 1 practice!")) {
      AppCore.switchTab('lessons');
      return;
    }

    appendChatMessage('user', textEn, textVi || 'Phản xạ của bạn', true);
    if (chatInput) chatInput.value = '';
    if (quickRepliesContainer) {
      quickRepliesContainer.innerHTML = '<span style="color:var(--text-muted);font-size:0.8rem;">Alex đang suy nghĩ phản hồi... ⏳</span>';
    }

    AppCore.incrementWordCount();

    setTimeout(() => {
      const scenario = CHAT_SCENARIOS ? CHAT_SCENARIOS[currentScenario] : null;
      if (!scenario) return;

      if (scenario.steps && scenario.steps.length > 0) {
        if (currentScenarioStep < scenario.steps.length) {
          const stepData = scenario.steps[currentScenarioStep];
          currentScenarioStep++;

          const botReply = typeof stepData.botReply === 'function' ? stepData.botReply(textEn) : stepData.botReply;
          appendChatMessage('bot', botReply.en, botReply.vi, true);
          renderQuickReplies(stepData.replies);
        } else {
          appendChatMessage('bot',
            "🎉 You have completed this full conversation! Would you like to practice again or explore another scenario?",
            "🎉 Bạn đã hoàn thành trọn vẹn bài hội thoại này! Bạn muốn luyện lại hay thử chủ đề khác?",
            true
          );
          renderQuickReplies([
            { en: "Let's practice this scenario one more time!", vi: "Hãy cùng luyện lại tình huống này một lần nữa!" },
            { en: "I want to try ordering coffee at Coffee House!", vi: "Tôi muốn thử tình huống gọi cà phê tại quán!" }
          ]);
        }
      } else {
        const botReply = scenario.responses ? scenario.responses.default : { en: "Thank you for chatting!", vi: "Cảm ơn bạn đã trò chuyện!" };
        appendChatMessage('bot', botReply.en, botReply.vi, true);
        renderQuickReplies(botReply.nextReplies || [
          { en: "Thank you for practicing with me!", vi: "Cảm ơn bạn đã luyện tập cùng tôi!" },
          { en: "Have a nice day! See you soon!", vi: "Chúc một ngày tốt lành! Hẹn gặp lại nhé!" }
        ]);
      }
    }, 700);
  }

  function stopChatListening() {
    if (isListeningChat && recognition) {
      userManuallyStopped = true;
      recognition.stop();
    }
  }

  function init() {
    initDOM();

    if (chatSendBtn) {
      chatSendBtn.addEventListener('click', () => {
        stopChatListening();
        handleUserMessage(chatInput.value.trim());
      });
    }

    if (chatInput) {
      chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          stopChatListening();
          handleUserMessage(chatInput.value.trim());
        }
      });
    }

    if (chatClearBtn) {
      chatClearBtn.addEventListener('click', () => {
        chatInput.value = '';
        baseInputText = '';
        if (isListeningChat && recognition) {
          userManuallyStopped = true;
          recognition.stop();
        }
        chatInput.focus();
      });
    }

    if (scenarioSelect) {
      scenarioSelect.addEventListener('change', (e) => {
        loadScenario(e.target.value);
      });
    }

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;

      if (chatMicBtn) {
        chatMicBtn.addEventListener('click', () => {
          if (isListeningChat) {
            userManuallyStopped = true;
            recognition.stop();
            return;
          }
          try {
            userManuallyStopped = false;
            baseInputText = chatInput.value.trim() ? chatInput.value.trim() + ' ' : '';
            recognition.start();
            chatMicBtn.classList.add('recording');
            chatMicBtn.textContent = '⏹️';
            chatMicBtn.title = 'Đang lắng nghe... Bấm vào đây để DỪNG khi bạn nói xong';
            isListeningChat = true;
          } catch (err) {
            console.error(err);
          }
        });
      }

      recognition.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
        for (let i = 0; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        if (chatInput) {
          chatInput.value = (baseInputText + finalTranscript + interimTranscript).trim();
          chatInput.focus();
        }
      };

      recognition.onend = () => {
        if (isListeningChat && !userManuallyStopped) {
          try {
            recognition.start();
            return;
          } catch (err) {}
        }
        if (chatMicBtn) {
          chatMicBtn.classList.remove('recording');
          chatMicBtn.textContent = '🎙️';
          chatMicBtn.title = 'Bấm để nói bằng giọng của bạn (Bấm lại để dừng)';
        }
        isListeningChat = false;
      };

      recognition.onerror = (event) => {
        if (event.error === 'no-speech') return;
        console.warn('Speech recognition warning:', event.error);
      };
    } else if (chatMicBtn) {
      chatMicBtn.title = 'Trình duyệt không hỗ trợ nhận diện giọng nói';
      chatMicBtn.style.opacity = '0.5';
    }
  }

  return {
    renderScenarioSelect,
    loadScenario,
    init
  };
})();

window.ChatModule = ChatModule;
