pushd %~dp0..\client
npm prune
npm install
bower prune
bower install --config.interactive=false
popd