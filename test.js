var Mocha = require('mocha');

var mocha = new Mocha();
mocha.reporter('dot').ui('bdd');

files = [
  'test/authenticate-test.js',
  'test/project-test.js'
]

for(var i = 0, _l = files.length; i < _l; i++) {
  mocha.addFile(files[i]);
}

var runner = mocha.run(function() {
  process.exit(1);
});

runner.on('pass', function(test) {
  // console.log('... %s passed', test.title);
});

runner.on('fail', function(test) {
  // console.log('... %s failed', test.title);
});