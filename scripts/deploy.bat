@echo off
cd /d "..\docs"
for /F "delims=" %%i in ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)
xcopy /e /i /v /h /k "..\resources\public" ".\"
cd /d ".."
git add -A
git commit -m "Update blog"
git push origin master --force