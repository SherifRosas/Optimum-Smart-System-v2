@echo off
REM Optimum Smart System - Simple Batch Script to Start Servers
REM This opens two command windows - one for each server

echo Starting Optimum Smart System...
echo.

REM Start Backend in new window
start "Optimum Backend" cmd /k "cd /d %~dp0optimum-backend && if exist venv\Scripts\activate.bat (call venv\Scripts\activate.bat) && set DJANGO_ENV=development && set DEBUG=True && python manage.py runserver"

REM Wait a bit
timeout /t 3 /nobreak >nul

REM Start Frontend in new window
start "Optimum Frontend" cmd /k "cd /d %~dp0optimum-frontend && npm run dev"

echo.
echo Servers started in separate windows!
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000
echo Admin:    http://localhost:8000/admin/
echo.
echo Close the server windows to stop them.
echo.
pause

