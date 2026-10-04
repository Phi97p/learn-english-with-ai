// ========================================================
// SERVER.JS - Máy chủ cục bộ siêu nhẹ (Node.js thuần - Không cần cài thêm thư viện)
// Tự động lưu lịch sử hội thoại & tiến độ học vào file trên máy tính của bạn!
// ========================================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const LOGS_DIR = path.join(__dirname, 'logs');
const LOG_JSON_PATH = path.join(__dirname, 'study_log.json');
const LOG_MD_PATH = path.join(__dirname, 'study_log.md');

// Đảm bảo thư mục logs/ luôn sẵn sàng
if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API 1: Lưu lịch sử và tiến độ học (Tự động lưu vào root & phân loại theo tháng trong logs/)
  if (req.method === 'POST' && req.url === '/api/save-log') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const now = new Date();
        data.lastUpdated = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

        // Xác định tháng hiện tại dạng YYYY-MM (Ví dụ: 2026-10)
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const monthKey = `${year}-${month}`;
        const monthJsonPath = path.join(LOGS_DIR, `study_log_${monthKey}.json`);
        const monthMdPath = path.join(LOGS_DIR, `study_log_${monthKey}.md`);

        const jsonStr = JSON.stringify(data, null, 2);

        // 1. Lưu JSON vào file tháng trong logs/ và file tổng ở root
        fs.writeFileSync(monthJsonPath, jsonStr, 'utf-8');
        fs.writeFileSync(LOG_JSON_PATH, jsonStr, 'utf-8');

        // 2. Tạo nội dung Markdown rõ ràng cho AI và người học
        let mdContent = `# 📝 NHẬT KÝ HỌC TIẾNG ANH - THÁNG ${month}/${year} (Cập nhật: ${data.lastUpdated})\n\n`;
        mdContent += `### 📊 Tổng quan tiến độ tháng ${month}/${year}\n`;
        mdContent += `- **Chuỗi ngày học (Streak):** ${data.streakDays || 1} ngày\n`;
        mdContent += `- **Số mẫu câu / từ đã học:** ${data.wordsLearnedCount || 0} từ\n`;
        mdContent += `- **Bài học đang học:** ${data.currentLesson || 'Bài 1: Chào hỏi & Làm quen'}\n\n`;

        if (data.chatHistory && data.chatHistory.length > 0) {
          mdContent += `### 💬 Lịch sử hội thoại phản xạ gần nhất\n`;
          data.chatHistory.forEach(msg => {
            const role = msg.sender === 'user' ? '👤 Bạn' : '🤖 Alex (AI)';
            mdContent += `- **${role}**: "${msg.en}" *(${msg.vi})*\n`;
          });
          mdContent += `\n`;
        }

        if (data.spokenSentences && data.spokenSentences.length > 0) {
          mdContent += `### 🎙️ Các câu bạn đã luyện nói thành công\n`;
          data.spokenSentences.forEach(s => {
            mdContent += `- "${s.en}" - ${s.vi} *(Độ chính xác: ${s.accuracy || 'Chuẩn'})*\n`;
          });
          mdContent += `\n`;
        }

        if (data.userVocabData) {
          let customWords = [];
          Object.keys(data.userVocabData).forEach(key => {
            const sc = data.userVocabData[key];
            if (sc && sc.words) {
              sc.words.forEach(w => {
                if (w.tip && (w.tip.includes('tự thêm') || w.readVi === '')) {
                  customWords.push({ ...w, scenarioTitle: sc.title });
                }
              });
            }
          });
          if (customWords.length > 0) {
            mdContent += `### 💡 Các từ vựng bạn đã tự thêm vào:\n`;
            customWords.forEach(w => {
              mdContent += `- **${w.word}**: ${w.vi} ${w.ipa ? `(${w.ipa})` : ''} *[${w.scenarioTitle || ''}]*\n`;
            });
            mdContent += `\n`;
          }
        }

        // Lưu Markdown vào file tháng trong logs/ và file tổng ở root
        fs.writeFileSync(monthMdPath, mdContent, 'utf-8');
        fs.writeFileSync(LOG_MD_PATH, mdContent, 'utf-8');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          success: true, 
          month: monthKey,
          message: `Đã lưu nhật ký vào logs/study_log_${monthKey}.md và study_log.md!` 
        }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // API 2: Đọc lịch sử đã lưu
  if (req.method === 'GET' && req.url === '/api/get-log') {
    if (fs.existsSync(LOG_JSON_PATH)) {
      const content = fs.readFileSync(LOG_JSON_PATH, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(content);
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ empty: true }));
    }
    return;
  }

  // API 3: Danh sách tất cả file log theo tháng trong thư mục logs/
  if (req.method === 'GET' && req.url === '/api/list-logs') {
    try {
      const files = fs.existsSync(LOGS_DIR) ? fs.readdirSync(LOGS_DIR) : [];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, logs: files }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, error: err.message }));
    }
    return;
  }

  // Serve static files
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath.split('?')[0]);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404: Không tìm thấy file');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`500: Lỗi máy chủ - ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Máy chủ học tiếng Anh đang chạy tại: http://localhost:${PORT}`);
  console.log(`📂 Dữ liệu học tập sẽ tự động lưu vào file: study_log.md & study_log.json\n`);
});
