---
name: sync-japanese-kanji
description: Use this skill whenever the user adds, updates, or modifies Japanese Kanji practice files in datasss/jp/kanji/ (such as bai_1.txt, bai_2.txt). Guides parsing sentences with underlined Kanji and Hiragana parentheses, updating JA_KANJI_DATA in japanese_data/kanji_data.js.
---

# Hướng Dẫn Đồng Bộ Bài Tập Hán Tự (Kanji Practice Sync)

Kỹ năng này chịu trách nhiệm tự động đọc, xử lý và đồng bộ ngân hàng câu hỏi Hán tự Tiếng Nhật từ thư mục `datasss/jp/kanji/` vào `japanese_data/kanji_data.js` (`JA_KANJI_DATA`).

---

## 1. Nguồn Dữ Liệu & Quy Tắc Cô Lập
- **Thư mục nguồn**: `datasss/jp/kanji/` (ví dụ `bai_1.txt`, `bai_2.txt`...).
- **Quy tắc quan trọng**: Mỗi file trong folder `datasss/jp/kanji/` ứng với đúng **1 chủ đề / bài học độc lập**. Tuyệt đối không lấy dữ liệu ở file này gắn vào chủ đề của bài khác.
- **File đích**: `japanese_data/kanji_data.js` (`JA_KANJI_DATA` và gán vào `window.JA_KANJI_DATA`).

---

## 2. Định Dạng Câu Trong File Nguồn
- Tab Bài tập Kanji **không có trắc nghiệm A, B, C, D tách riêng**.
- Các câu được đưa vào dưới dạng câu hoàn chỉnh, từ Kanji cần điền cách đọc sẽ được gạch chân bằng thẻ `<u>...</u>` (hoặc định dạng rõ ràng), bên cạnh là dấu ngoặc `（ ... ）` hoặc `（）` chứa Hiragana:
```text
Bài 1: Hán tự Bài 1 (Nhập môn - Chữ số & Thời gian)

Câu 1:
わたしは <u>学生</u>（ がくせい ）です。
Ý nghĩa: Tôi là học sinh.
Giải thích: 学生 (HỌC SINH) đọc là がくせい, nghĩa là học sinh/sinh viên.

Câu 2:
あの 人は <u>先生</u>（ せんせい ）です。
Ý nghĩa: Người kia là giáo viên.
Giải thích: 先生 (TIÊN SINH) đọc là せんせい, nghĩa là thầy cô giáo.
```

---

## 3. Cấu Trúc Object Trong `JA_KANJI_DATA`
```javascript
const JA_KANJI_DATA = {
  "bai_1": {
    "title": "Hán tự Bài 1 - Chữ số, danh từ & Thời gian (一, 二, 学生, 先生...)",
    "questions": [
      {
        "id": "ja_kj_1_1",
        "sentence": "わたしは <u>学生</u>（ ）です。",
        "kanji": "学生",
        "answer": "がくせい",
        "meaning": "Tôi là học sinh.",
        "explanation": "学生 (HỌC SINH) đọc là がくせい, nghĩa là học sinh/sinh viên."
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.JA_KANJI_DATA = JA_KANJI_DATA;
}
```

---

## 4. Quy Chuẩn Làm Bài & Giao Diện
1. Mỗi đề thi ngẫu nhiên tối đa 30 câu (nếu bài có ít hơn 30 câu thì lấy toàn bộ).
2. Mỗi câu đúng được 1 điểm.
3. Người dùng nhập Hiragana trực tiếp vào ô input inline ngay trong dấu ngoặc `（ [ô nhập] ）` cạnh chữ Hán gạch chân. Nhấn Enter tự động chuyển sang câu tiếp theo.
4. Nộp bài xong chấm điểm tự động bằng cách chuẩn hóa so sánh chuỗi (`normalizeAnswerText`).
5. Tuyệt đối không lưu lịch sử làm bài vào ổ cứng hay `localStorage`.
