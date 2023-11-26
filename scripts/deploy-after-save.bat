@echo off
cd /d %~dp0
cd /d "..\..\fatfingererr.github.io"
for /F "delims=" %%i in ('dir /b') do (rmdir "%%i" /s/q || del "%%i" /s/q)
xcopy /e /i /v /h /k "..\lisp.rocks\resources\public" "."
git add -A
git commit -m "Update blog"
git push origin master --force
cd "..\lisp.rocks"
git add -A
git commit -m "Update blog"
git push origin master --force
