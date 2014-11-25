import {Foo} from './deps/foo';

// goog.module('BasicImport');
// var foo = goog.require('Foo');
// var Foo = foo.Foo;

assert.equal('Foo from foo.js', Foo);
