@echo off
cd /d "D:\OneDrive\Dokumen\id proofs\Desktop\Cts_practice"
git add .
git commit -m "Update on %date% %time%"
git push origin main
echo.
echo Done! Press any key to close.
pause
