@echo off
chcp 65001 >nul
title English AI Buddy - Trợ lý học tiếng Anh AI
cd /d "%~dp0"

echo ========================================================
echo   Đang khởi động English AI Buddy trên Windows...
echo   Địa chỉ: http://localhost:3000
echo ========================================================

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [THÔNG BÁO] Máy tính này chưa cài Node.js, đang mở trực tiếp index.html...
    start "" "index.html"
    exit /b
)

start "" http://localhost:3000
node server.js
