pushd %~dp0..\client
call npm prune
call npm install
call bower prune
call bower install --config.interactive=false
popd