// ========================================================
// JS/NOTES_JA.JS - Sổ Tay Kiến Thức Quan Trọng (Tiếng Nhật)
// 1. hard_words: Trang tĩnh ghi chú từ khó (Bảng Chữ | Phát âm | Mẹo)
// 2. phrases: Trang text tĩnh ghi chú Ngữ pháp hay (Đơn giản, gọn nhẹ)
// ========================================================

const NotesJaModule = (() => {
  let currentMode = 'hard_words'; // 'hard_words' | 'phrases' | 'particles' | 'connectors' | 'counting'

  // DOM Elements
  let modeBtns = [];
  let hardWordsViewEl = null;
  let phrasesViewEl = null;
  let particlesViewEl = null;
  let connectorsViewEl = null;
  let countingViewEl = null;
  let hardWordsBodyEl = null;
  let phrasesBodyEl = null;
  let particlesBodyEl = null;
  let connectorsBodyEl = null;
  let countingBodyEl = null;

  function getHardWordsList() {
    if (typeof JA_NOTES_DATA === 'undefined') return [];
    if (JA_NOTES_DATA.hard_words && Array.isArray(JA_NOTES_DATA.hard_words.items)) {
      return JA_NOTES_DATA.hard_words.items;
    }
    return [];
  }

  function getPhrasesData() {
    if (typeof JA_NOTES_DATA === 'undefined') return null;
    return JA_NOTES_DATA.phrases || null;
  }

  function getParticlesData() {
    if (typeof JA_NOTES_DATA === 'undefined') return null;
    return JA_NOTES_DATA.particles || null;
  }

  function getConnectorsData() {
    if (typeof JA_NOTES_DATA === 'undefined') return null;
    return JA_NOTES_DATA.connectors || null;
  }

  function getCountingData() {
    if (typeof JA_NOTES_DATA === 'undefined') return null;
    return JA_NOTES_DATA.counting || null;
  }

  function initDOM() {
    modeBtns = Array.from(document.querySelectorAll('.notes-mode-btn'));
    hardWordsViewEl = document.getElementById('ja-notes-hard-words-view');
    phrasesViewEl = document.getElementById('ja-notes-phrases-view');
    particlesViewEl = document.getElementById('ja-notes-particles-view');
    connectorsViewEl = document.getElementById('ja-notes-connectors-view');
    countingViewEl = document.getElementById('ja-notes-counting-view');
    hardWordsBodyEl = document.getElementById('ja-hard-words-body');
    phrasesBodyEl = document.getElementById('ja-phrases-body');
    particlesBodyEl = document.getElementById('ja-particles-body');
    connectorsBodyEl = document.getElementById('ja-connectors-body');
    countingBodyEl = document.getElementById('ja-counting-body');

    try {
      const savedMode = localStorage.getItem('ja_notes_mode');
      if (savedMode && ['hard_words', 'phrases', 'particles', 'connectors', 'counting'].includes(savedMode)) {
        currentMode = savedMode;
      }
    } catch (e) {}
  }

  function updateModeButtonsUI() {
    modeBtns.forEach(btn => {
      const mode = btn.dataset.mode;
      btn.classList.toggle('active', mode === currentMode);
    });
  }

  // ==========================================
  // 1. TRANG TĨNH: CÁCH ĐỌC CÁC TỪ KHÓ (STATIC NOTE)
  // ==========================================
  function renderHardWordsStatic() {
    if (!hardWordsBodyEl) return;
    const items = getHardWordsList();

    let noticeHtml = '';
    const noticeText = (typeof JA_NOTES_DATA !== 'undefined' && JA_NOTES_DATA.hard_words && JA_NOTES_DATA.hard_words.notice)
      ? JA_NOTES_DATA.hard_words.notice
      : '';

    if (noticeText) {
      noticeHtml = `
        <div style="margin-bottom: 18px; font-size: 0.95rem; line-height: 1.6; color: var(--text-main); background: rgba(245, 158, 11, 0.08); border-left: 3px solid #f59e0b; padding: 10px 14px; border-radius: 4px;">
          <strong>⚠️ Chú ý:</strong> ${noticeText}
        </div>
      `;
    }

    if (items.length === 0) {
      hardWordsBodyEl.innerHTML = `
        ${noticeHtml}
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0;">
          Chưa có ghi chú chữ nào. Mở file <code>japanese_data/notes_data.js</code> để thêm.
        </div>
      `;
      return;
    }

    let rowsHtml = '';
    items.forEach((item) => {
      const char = item.char || item.word || '—';
      const pronunciation = item.pronunciation || item.reading || '—';
      const tip = item.tip || item.note || item.vi || '—';

      rowsHtml += `
        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 12px 14px; font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${char}</td>
          <td style="padding: 12px 14px; font-size: 0.95rem; color: var(--text-main);">${pronunciation}</td>
          <td style="padding: 12px 14px; font-size: 0.95rem; color: var(--text-main);">${tip}</td>
        </tr>
      `;
    });

    hardWordsBodyEl.innerHTML = `
      ${noticeHtml}
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="border-bottom: 2px solid var(--border-color);">
              <th style="padding: 12px 14px; width: 15%; color: var(--text-main);">Chữ</th>
              <th style="padding: 12px 14px; width: 42%; color: var(--text-main);">Cách phát âm</th>
              <th style="padding: 12px 14px; width: 43%; color: var(--text-main);">Mẹo phân biệt</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }

  // ==========================================
  // 2. TRANG TĨNH: NGỮ PHÁP HAY (STATIC NOTE ĐƠN GIẢN)
  // ==========================================
  function renderPhrasesStatic() {
    if (!phrasesBodyEl) return;
    const phrasesData = getPhrasesData();

    if (!phrasesData) {
      phrasesBodyEl.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0;">
          Chưa có dữ liệu ngữ pháp. Mở file <code>japanese_data/notes_data.js</code> để thêm.
        </div>
      `;
      return;
    }

    let noticeHtml = '';
    if (phrasesData.notice) {
      noticeHtml = `
        <div style="margin-bottom: 18px; font-size: 0.95rem; line-height: 1.6; color: var(--text-main); background: rgba(59, 130, 246, 0.08); border-left: 3px solid #3b82f6; padding: 10px 14px; border-radius: 4px;">
          <strong>💡 Chú ý:</strong> ${phrasesData.notice}
        </div>
      `;
    }

    let contentHtml = '';
    if (phrasesData.content) {
      contentHtml = `
        <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-main); white-space: pre-wrap; margin-bottom: 16px;">
          ${phrasesData.content}
        </div>
      `;
    }

    const items = Array.isArray(phrasesData.items) ? phrasesData.items : [];
    let itemsHtml = '';

    if (items.length > 0) {
      itemsHtml += '<div style="display: flex; flex-direction: column; gap: 14px;">';
      items.forEach((item, idx) => {
        if (typeof item === 'string') {
          itemsHtml += `
            <div style="padding: 12px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">
              ${item}
            </div>
          `;
        } else {
          const title = item.title || item.pattern || item.word || `Mục #${idx + 1}`;
          const meaning = item.meaning || item.vi || '';
          const example = item.example || '';
          const note = item.note || item.tip || '';

          itemsHtml += `
            <div style="padding: 14px 18px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
              <div style="font-size: 1.05rem; font-weight: 700; color: #f59e0b; margin-bottom: 6px;">${title}</div>
              ${meaning ? `<div style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 6px; line-height: 1.6; white-space: pre-wrap;"><strong>👉 Nội dung:</strong>\n${meaning}</div>` : ''}
              ${example ? `<div style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 6px; line-height: 1.6; white-space: pre-wrap;"><strong>📝 Ví dụ:</strong>\n${example}</div>` : ''}
              ${note ? `<div style="font-size: 0.88rem; color: #38bdf8; margin-top: 6px; line-height: 1.6; white-space: pre-wrap;">💡 <em>${note}</em></div>` : ''}
            </div>
          `;
        }
      });
      itemsHtml += '</div>';
    }

    if (!contentHtml && items.length === 0) {
      phrasesBodyEl.innerHTML = `
        ${noticeHtml}
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0; line-height: 1.7;">
          Chưa có ghi chú ngữ pháp nào. Mở file <code>japanese_data/notes_data.js</code> (mục <code>phrases</code>) để thêm ghi chú ngữ pháp của bạn.
        </div>
      `;
      return;
    }

    phrasesBodyEl.innerHTML = `${noticeHtml}${contentHtml}${itemsHtml}`;
  }

  // ==========================================
  // 3. TRANG TĨNH: TRỢ TỪ (STATIC NOTE CLONE TỪ NGỮ PHÁP)
  // ==========================================
  function renderParticlesStatic() {
    if (!particlesBodyEl) return;
    const particlesData = getParticlesData();

    if (!particlesData) {
      particlesBodyEl.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0;">
          Chưa có dữ liệu trợ từ. Mở file <code>japanese_data/notes_data.js</code> (mục <code>particles</code>) để thêm.
        </div>
      `;
      return;
    }

    let noticeHtml = '';
    if (particlesData.notice) {
      noticeHtml = `
        <div style="margin-bottom: 18px; font-size: 0.95rem; line-height: 1.6; color: var(--text-main); background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981; padding: 10px 14px; border-radius: 4px;">
          <strong>🔖 Chú ý:</strong> ${particlesData.notice}
        </div>
      `;
    }

    let contentHtml = '';
    if (particlesData.content) {
      contentHtml = `
        <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-main); white-space: pre-wrap; margin-bottom: 16px;">
          ${particlesData.content}
        </div>
      `;
    }

    const items = Array.isArray(particlesData.items) ? particlesData.items : [];
    let itemsHtml = '';

    if (items.length > 0) {
      itemsHtml += '<div style="display: flex; flex-direction: column; gap: 14px;">';
      items.forEach((item, idx) => {
        if (typeof item === 'string') {
          itemsHtml += `
            <div style="padding: 12px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">
              ${item}
            </div>
          `;
        } else {
          const title = item.title || item.pattern || item.particle || item.word || `Mục #${idx + 1}`;
          const meaning = item.meaning || item.vi || '';
          const example = item.example || '';
          const note = item.note || item.tip || '';

          itemsHtml += `
            <div style="padding: 14px 18px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
              <div style="font-size: 1.05rem; font-weight: 700; color: #10b981; margin-bottom: 6px;">${title}</div>
              ${meaning ? `<div style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 6px; line-height: 1.6; white-space: pre-wrap;"><strong>👉 Nội dung:</strong>\n${meaning}</div>` : ''}
              ${example ? `<div style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 6px; line-height: 1.6; white-space: pre-wrap;"><strong>📝 Ví dụ:</strong>\n${example}</div>` : ''}
              ${note ? `<div style="font-size: 0.88rem; color: #38bdf8; margin-top: 6px; line-height: 1.6; white-space: pre-wrap;">💡 <em>${note}</em></div>` : ''}
            </div>
          `;
        }
      });
      itemsHtml += '</div>';
    }

    if (!contentHtml && items.length === 0) {
      particlesBodyEl.innerHTML = `
        ${noticeHtml}
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0; line-height: 1.7;">
          Chưa có ghi chú trợ từ nào. Mở file <code>japanese_data/notes_data.js</code> (mục <code>particles</code>) để thêm ghi chú trợ từ của bạn.
        </div>
      `;
      return;
    }

    particlesBodyEl.innerHTML = `${noticeHtml}${contentHtml}${itemsHtml}`;
  }

  // ==========================================
  // 4. TRANG TĨNH: TỪ NỐI (STATIC NOTE CLONE TỪ TRỢ TỪ)
  // ==========================================
  function renderConnectorsStatic() {
    if (!connectorsBodyEl) return;
    const connectorsData = getConnectorsData();

    if (!connectorsData) {
      connectorsBodyEl.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0;">
          Chưa có dữ liệu từ nối. Mở file <code>japanese_data/notes_data.js</code> (mục <code>connectors</code>) để thêm.
        </div>
      `;
      return;
    }

    let noticeHtml = '';
    if (connectorsData.notice) {
      noticeHtml = `
        <div style="margin-bottom: 18px; font-size: 0.95rem; line-height: 1.6; color: var(--text-main); background: rgba(139, 92, 246, 0.08); border-left: 3px solid #8b5cf6; padding: 10px 14px; border-radius: 4px;">
          <strong>🔗 Chú ý:</strong> ${connectorsData.notice}
        </div>
      `;
    }

    let contentHtml = '';
    if (connectorsData.content) {
      contentHtml = `
        <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-main); white-space: pre-wrap; margin-bottom: 16px;">
          ${connectorsData.content}
        </div>
      `;
    }

    const items = Array.isArray(connectorsData.items) ? connectorsData.items : [];
    let itemsHtml = '';

    if (items.length > 0) {
      itemsHtml += '<div style="display: flex; flex-direction: column; gap: 14px;">';
      items.forEach((item, idx) => {
        if (typeof item === 'string') {
          itemsHtml += `
            <div style="padding: 12px 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">
              ${item}
            </div>
          `;
        } else {
          const title = item.title || item.pattern || item.connector || item.word || `Mục #${idx + 1}`;
          const meaning = item.meaning || item.vi || '';
          const example = item.example || '';
          const note = item.note || item.tip || '';

          itemsHtml += `
            <div style="padding: 14px 18px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
              <div style="font-size: 1.05rem; font-weight: 700; color: #8b5cf6; margin-bottom: 6px;">${title}</div>
              ${meaning ? `<div style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 6px; line-height: 1.6; white-space: pre-wrap;"><strong>👉 Nội dung:</strong>\n${meaning}</div>` : ''}
              ${example ? `<div style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 6px; line-height: 1.6; white-space: pre-wrap;"><strong>📝 Ví dụ:</strong>\n${example}</div>` : ''}
              ${note ? `<div style="font-size: 0.88rem; color: #38bdf8; margin-top: 6px; line-height: 1.6; white-space: pre-wrap;">💡 <em>${note}</em></div>` : ''}
            </div>
          `;
        }
      });
      itemsHtml += '</div>';
    }

    if (!contentHtml && items.length === 0) {
      connectorsBodyEl.innerHTML = `
        ${noticeHtml}
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0; line-height: 1.7;">
          Chưa có ghi chú từ nối nào. Mở file <code>japanese_data/notes_data.js</code> (mục <code>connectors</code>) để thêm ghi chú từ nối của bạn.
        </div>
      `;
      return;
    }

    connectorsBodyEl.innerHTML = `${noticeHtml}${contentHtml}${itemsHtml}`;
  }

  // ==========================================
  // 5. TRANG TĨNH: HỌC ĐẾM (TEXT THUẦN TÚY)
  // ==========================================
  function renderCountingStatic() {
    if (!countingBodyEl) return;
    const countingData = getCountingData();

    if (!countingData) {
      countingBodyEl.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.95rem; padding: 20px 0;">
          Chưa có dữ liệu học đếm. Mở file <code>japanese_data/notes_data.js</code> (mục <code>counting</code>) để thêm.
        </div>
      `;
      return;
    }

    if (Array.isArray(countingData.sections) && countingData.sections.length > 0) {
      let cardsHtml = '<div style="display: flex; flex-direction: column; gap: 14px;">';
      countingData.sections.forEach((sec, sIdx) => {
        const secTitle = sec.title || `Mục #${sIdx + 1}`;
        const secItems = Array.isArray(sec.items) ? sec.items : [];

        let itemsHtml = '';
        if (secItems.length > 0) {
          itemsHtml += '<div style="font-size: 0.95rem; line-height: 1.8; color: var(--text-main);">';
          secItems.forEach(item => {
            const text = typeof item === 'string' ? item : (item.title || item.text || '');
            itemsHtml += `<div>${text}</div>`;
          });
          itemsHtml += '</div>';
        }

        cardsHtml += `
          <div style="padding: 14px 18px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
            <div style="font-size: 1.05rem; font-weight: 700; color: #8b5cf6; margin-bottom: 8px;">${secTitle}</div>
            ${itemsHtml}
          </div>
        `;
      });
      cardsHtml += '</div>';
      countingBodyEl.innerHTML = cardsHtml;
      return;
    }

    const items = Array.isArray(countingData.items) ? countingData.items : [];
    let fallbackHtml = '';
    if (items.length > 0) {
      fallbackHtml += `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div style="padding: 14px 18px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
            <div style="font-size: 1.05rem; font-weight: 700; color: #8b5cf6; margin-bottom: 8px;">${countingData.title || 'Học đếm'}</div>
            <div style="font-size: 0.95rem; line-height: 1.8; color: var(--text-main);">
      `;
      items.forEach(item => {
        const text = typeof item === 'string' ? item : (item.title || item.text || '');
        fallbackHtml += `<div>${text}</div>`;
      });
      fallbackHtml += '</div></div></div>';
    }

    countingBodyEl.innerHTML = fallbackHtml;
  }

  // ==========================================
  // 6. ĐIỀU HƯỚNG & KHỞI TẠO
  // ==========================================
  function setMode(newMode) {
    if (!['hard_words', 'phrases', 'particles', 'connectors', 'counting'].includes(newMode)) return;
    currentMode = newMode;
    try {
      localStorage.setItem('ja_notes_mode', currentMode);
    } catch (e) {}

    updateModeButtonsUI();
    applyActiveModeView();
  }

  function applyActiveModeView() {
    if (hardWordsViewEl) hardWordsViewEl.style.display = currentMode === 'hard_words' ? 'block' : 'none';
    if (phrasesViewEl) phrasesViewEl.style.display = currentMode === 'phrases' ? 'block' : 'none';
    if (particlesViewEl) particlesViewEl.style.display = currentMode === 'particles' ? 'block' : 'none';
    if (connectorsViewEl) connectorsViewEl.style.display = currentMode === 'connectors' ? 'block' : 'none';
    if (countingViewEl) countingViewEl.style.display = currentMode === 'counting' ? 'block' : 'none';

    if (currentMode === 'hard_words') {
      renderHardWordsStatic();
    } else if (currentMode === 'phrases') {
      renderPhrasesStatic();
    } else if (currentMode === 'particles') {
      renderParticlesStatic();
    } else if (currentMode === 'connectors') {
      renderConnectorsStatic();
    } else if (currentMode === 'counting') {
      renderCountingStatic();
    }
  }

  function init() {
    initDOM();
    updateModeButtonsUI();

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setMode(btn.dataset.mode);
      });
    });

    applyActiveModeView();
  }

  return {
    init,
    setMode,
    renderHardWordsStatic,
    renderPhrasesStatic,
    renderParticlesStatic,
    renderConnectorsStatic,
    renderCountingStatic
  };
})();

window.NotesJaModule = NotesJaModule;
