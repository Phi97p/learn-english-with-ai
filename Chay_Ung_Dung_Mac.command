#!/bin/bash
cd "$(dirname "$0")"

echo "========================================================"
echo "  Đang khởi động English AI Buddy trên MacBook..."
echo "  Địa chỉ: http://localhost:3000"
echo "========================================================"

# Kiểm tra xem máy đã cài Node.js chưa
if ! command -v node &> /dev/null
then
    echo "[THÔNG BÁO] MacBook này chưa cài Node.js."
    echo "Đang mở trực tiếp giao diện ứng dụng index.html..."
    open "index.html"
    exit 1
fi

# Mở trình duyệt mặc định trên Mac (Chrome, Safari, Edge...) vào localhost:3000
open "http://localhost:3000"

# Khởi chạy máy chủ cục bộ
node server.js
