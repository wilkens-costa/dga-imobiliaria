@echo off
cd /d "%~dp0"
echo Executando verificacao de codigo...
call npm run lint
if errorlevel 1 goto :error
echo.
echo Gerando build de producao...
call npm run build
if errorlevel 1 goto :error
echo.
echo Build concluido com sucesso.
pause
exit /b 0

:error
echo.
echo O processo encontrou um erro. Revise as mensagens acima.
pause
exit /b 1
