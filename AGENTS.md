# AGENTS.md - Cấu Hình & Định Tuyến Agent Dự Án

Tài liệu định nghĩa các Agent chuyên trách trong dự án học ngoại ngữ **Learn English & Japanese with AI**.

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

## 2. Quy Định Chung Toàn Dự Án
- **Không tự động commit**: Tuyệt đối không tự ý chạy `git commit` khi người dùng không yêu cầu cụ thể.
- **Không bao giờ push**: Tuyệt đối KHÔNG BAO GIỜ thực hiện `git push` trong mọi hoàn cảnh.
- **Lưu trữ SPA**: Trạng thái học tập lưu tại `localStorage`, không ghi log vào file ổ cứng.
