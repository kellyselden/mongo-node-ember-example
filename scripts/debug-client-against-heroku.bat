pushd %~dp0
for /f %%i in (heroku) do set heroku=%%i
pushd ..\client
echo http://%heroku%.herokuapp.com>host
call ember s --environment=heroku
del /q host
popd
popd