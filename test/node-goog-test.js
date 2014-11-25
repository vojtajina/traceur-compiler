// Pretend XHR in Node, as `goog.retrieveAndExecModule_` depends on it.
// TODO(vojta): Fix goog to get goog.module working under Node.js (extract the XMLHttpRequest out of the retrieveAndExecModule)
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

global.XMLHttpRequest = function() {
  var xhr = new XMLHttpRequest();
  var originalOpen = xhr.open;
  xhr.open = function(method, url, async) {
    return originalOpen.call(this, 'GET', 'file://' + __dirname + '/..' + url, async);
  };
  return xhr;
};

// Include Google Closure.
require('../third_party/closure-library/closure/goog/bootstrap/nodejs');


// Patch CLOSURE_IMPORT_SCRIPT
// To respect the second argument.
// This needs to be fixed in goog.
var vm = require('vm');
global.CLOSURE_IMPORT_SCRIPT = function(src, opt_sourceText) {
  if (opt_sourceText === undefined) {
    require('../bower_components/closure-library/closure/goog/' + src);
  } else {
    vm.runInNewContext(opt_sourceText, {global: global, goog: global.goog}, '<unknown filename>');
  }

  return true;
};


// TODO(vojta): generate deps.js
goog.addDependency('../../../../test/goog/BasicImport.js', ['BasicImport'], ['Foo'], true);
goog.addDependency('../../../../test/goog/deps/foo.js', ['Foo'], [], true);


suite('goog', function() {
  // TODO(vojta): generate from `test/goog/*.js files`.
  test('BasicImport', function() {
    goog.require('BasicImport');
  });
});
