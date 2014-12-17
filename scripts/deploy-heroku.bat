pushd %~dp0
call build
pushd ..\server
md heroku
ROBOCOPY /MIR . heroku /XD node_modules heroku /XF .gitignore
pushd heroku
git init
git add . && git commit -a -m "deploy"
call heroku git:remote -a gentle-crag-3506
git push heroku master -f
popd
popd
popd