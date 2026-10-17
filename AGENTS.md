# AGENTS.md - Cấu Hình & Định Tuyến Agent Dự Án

Tài liệu định nghĩa các Agent chuyên trách trong dự án học tiếng Nhật **Learn Japanese with AI**.

---

## 1. Japanese Reading Agent (Chuyên Viên Đồng Bộ Đọc Hiểu & Shadowing Tiếng Nhật)
- **Tập tin quy định chi tiết**: [.agents/agents/japanese-reading-agent.md](file:///.agents/agents/japanese-reading-agent.md)
- **Skill liên kết**: [sync-japanese-reading](file:///.agents/skills/sync-japanese-reading/SKILL.md)
- **Nguồn dữ liệu**: `datasss/jp/doc_hieu/` (file chính: `bai_1.txt`, `bai_2.txt`,...)
- **File đích**: `japanese_data/reading_data.js` (`JA_READING_PASSAGES_DATA`)
- **Nhiệm vụ chính**:
  1. Tự động đọc dữ liệu tiếng Nhật mới hoặc cập nhật từ `datasss/jp/doc_hieu/bai_1.txt`.
  2. Tách câu, sinh phiên âm Romaji chuẩn và dịch nghĩa Tiếng Việt tự nhiên.
  3. Cập nhật dữ liệu vào `JA_READING_PASSAGES_DATA`.
  4. **Quy định giao diện bắt buộc**: Kéo dài `.reading-passage-panel` bằng đúng tab `.speaking-challenge-card` (không để khoảng trống), chỉ cuộn nội dung bài đọc `.reading-passage-content`, tuyệt đối không scroll thẻ `🎙️ Máy nghe được:` và `🎯 Bấm để nói & Chấm điểm`. Giữ nguyên viewport màn hình `100vh` và không hiển thị tiêu đề trùng lặp.

---

## 2. Japanese Grammar Agent (Chuyên Viên Đồng Bộ & Quản Trị Ngữ Pháp Tiếng Nhật)
- **Tập tin quy định chi tiết**: [.agents/agents/japanese-grammar-agent.md](file:///.agents/agents/japanese-grammar-agent.md)
- **Skill liên kết**: [sync-japanese-grammar](file:///.agents/skills/sync-japanese-grammar/SKILL.md)
- **Nguồn dữ liệu**: `datasss/jp/ngu_phap/` (file chính: `bai_1.txt`, `bai_2.txt`,...)
- **File đích**: [japanese_data/grammar_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/grammar_data.js) (`JA_GRAMMAR_DATA`)
- **Nhiệm vụ chính**:
  1. Tự động đọc dữ liệu câu hỏi tiếng Nhật từ `datasss/jp/ngu_phap/` (mỗi file ứng với 1 chủ đề riêng biệt, tuyệt đối không lấy data ở file này gắn vào chủ đề của bài khác).
  2. Tự động phán định dạng câu hỏi: nhận diện trắc nghiệm 4 phương án A, B, C, D hoặc dạng bài tập điền từ trực tiếp (tự động phân tích từ cần điền và sinh giải thích chuẩn xác nếu người dùng chưa viết).
  3. Cập nhật dữ liệu vào `JA_GRAMMAR_DATA` trong [japanese_data/grammar_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/grammar_data.js) (luôn gán `window.JA_GRAMMAR_DATA`).
  4. Tuân thủ quy chuẩn đề thi: 30 câu ngẫu nhiên, mỗi câu 1 điểm, gom theo bài, chấm điểm tự động và tuyệt đối không lưu lịch sử làm bài.

---

## 3. Japanese Kanji Agent (Chuyên Viên Đồng Bộ & Quản Trị Hán Tự Tiếng Nhật)
- **Nguồn dữ liệu**: `datasss/jp/kanji/` (file chính: `bai_1.txt`, `bai_2.txt`,...)
- **File đích**: [japanese_data/kanji_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/kanji_data.js) (`JA_KANJI_DATA`)
- **Nhiệm vụ chính**:
  1. Tự động đọc dữ liệu Hán tự từ `datasss/jp/kanji/` theo từng bài học riêng biệt.
  2. Định dạng câu: Trong câu sẽ có từ Kanji được gạch chân `<u>...</u>`, bên cạnh có dấu ngoặc `（ ）` để người dùng điền cách đọc Hiragana tương ứng. Không có câu hỏi trắc nghiệm A, B, C, D riêng biệt.
  3. Cập nhật dữ liệu vào `JA_KANJI_DATA` trong [japanese_data/kanji_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/kanji_data.js).
  4. Tuân thủ quy chuẩn: Tối đa 30 câu ngẫu nhiên, mỗi câu 1 điểm, chấm điểm tự động bằng cách chuẩn hóa chuỗi so sánh Hiragana, hiển thị giải thích chi tiết và tuyệt đối không lưu lịch sử làm bài.

---

## 4. Quy Định Chung Toàn Dự Án
- **Không tự động commit**: Tuyệt đối không tự ý chạy `git commit` khi người dùng không yêu cầu cụ thể.
- **Không bao giờ push**: Tuyệt đối KHÔNG BAO GIỜ thực hiện `git push` trong mọi hoàn cảnh.
- **Lưu trữ SPA**: Trạng thái học tập lưu tại `localStorage` hoặc in-memory, không ghi log vào file ổ cứng.

