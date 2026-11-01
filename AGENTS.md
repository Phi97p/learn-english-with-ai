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
- **Skill liên kết**: [sync-japanese-grammar](file:///.agents/skills/sync-japanese-grammar/SKILL.md), [sync-japanese-sentence-completion](file:///.agents/skills/sync-japanese-sentence-completion/SKILL.md), [sync-japanese-choice-selection](file:///.agents/skills/sync-japanese-choice-selection/SKILL.md), [sync-japanese-binary-choice](file:///.agents/skills/sync-japanese-binary-choice/SKILL.md), [sync-japanese-hiragana-reading](file:///.agents/skills/sync-japanese-hiragana-reading/SKILL.md), [sync-japanese-open-ended](file:///.agents/skills/sync-japanese-open-ended/SKILL.md), [sync-japanese-word-order](file:///.agents/skills/sync-japanese-word-order/SKILL.md), [sync-japanese-table-completion](file:///.agents/skills/sync-japanese-table-completion/SKILL.md)
- **Nguồn dữ liệu**: `datasss/jp/ngu_phap/` (file chính: `bai_1.txt`, `bai_2.txt`,...)
- **File đích**: [japanese_data/grammar_data.js](file:///d:/phi-learning-english/learn-english-with-ai/japanese_data/grammar_data.js) (`JA_GRAMMAR_DATA`)
- **Nhiệm vụ & Quy trình kích hoạt**:
  1. **Quy trình khi người dùng gửi ảnh + số bài, số câu**:
     - **Tập trung xử lý ảnh người dùng gửi**: Bóc tách trực tiếp câu hỏi từ hình ảnh được cung cấp; tuyệt đối không tự tra cứu lan man ngoài lề.
     - **Hỏi ít thôi / Không hỏi rườm rà**: Tự động nhận diện dạng bài và xử lý linh hoạt (dạng câu hỏi mở thì tự sinh câu trả lời mẫu đối chiếu), không hỏi lại khi ảnh đã rõ nội dung.
     - **Tự sinh đáp án & giải thích**: Soạn đáp án với đầy đủ biến thể và giải thích chi tiết từng câu (`• 例:`, `• 1):`, `• 2):`...).
     - **Ghi file nguồn & đồng bộ 2 bước**: Ghi vào `datasss/jp/ngu_phap/bai_[X].txt`, đồng bộ vào `JA_GRAMMAR_DATA` trong `japanese_data/grammar_data.js` (`b[X]_q[Y]`), đặt `"completed": false` và tăng version cache buster trong `index.html`.
  2. **Phán định dạng câu hỏi linh hoạt**: Trắc nghiệm 4 phương án; Điền trợ từ vào ngoặc (`b1_q1`); Hoàn thành câu trên đường kẻ gạch dưới (`b1_q2`); Chọn câu trả lời từ bảng có sẵn (`b1_q3`); Chọn 1 trong 2 từ trực tiếp trong câu (`b1_q4`); Điền Hiragana cho từ/số gạch chân (`b1_q5`); Trả lời câu hỏi mở tự đối chiếu (`b1_q6`); Ghép từ thành câu (`b2_q3`); Bảng điền từ (`b4_q2`).
  3. **Tuân thủ quy chuẩn đề thi & Kỷ luật**: Gom theo bài, hiển thị theo đúng thứ tự SGK, mỗi câu 1 điểm (câu hỏi mở không tính điểm), chấm điểm tự động, không lưu lịch sử làm bài. Tuyệt đối không tự ý commit và không bao giờ push.

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
- **Quy tắc cốt lõi về localStorage**:
  - Ưu tiên quản lý in-memory và tự động clear `localStorage` khi người dùng đóng ứng dụng hoặc tải lại trang để tránh phình dung lượng.
  - Tuyệt đối không lưu quá nhiều dữ liệu hoặc cache dữ liệu lớn vào `localStorage`.
  - Trong mọi trường hợp cần lưu trạng thái vào `localStorage`, AI **bắt buộc phải thông báo và giải thích cụ thể cho người dùng** trước khi tiến hành.

