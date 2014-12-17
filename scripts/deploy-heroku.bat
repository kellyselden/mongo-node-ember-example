pushd %~dp0
call build
for /f %%i in (heroku) do set heroku=%%i
pushd ..\server
md heroku
ROBOCOPY /MIR . heroku /XD node_modules heroku /XF .gitignore
pushd heroku
git init
git add . && git commit -a -m "deploy"
call heroku git:remote -a %heroku%
git push heroku master -f
popd
popd
popd