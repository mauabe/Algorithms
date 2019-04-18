/*
Compose
Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

Example
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var welcome = compose(greet, exclaim);
welcome('phillip'); //=> 'hi: PHILLIP!'

*/
var compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));


/* THIS ALSO WORKS Using Array.prototype.slice

var compose = function(fun1){
  var args = Array.prototype.slice.call(arguments, 1);
  return function(x) {
    args.forEach(function(fun2) {
        x = fun2(x);
    })
    return fun1(x);
  }
};

var pipe = function(){
  var args = Array.prototype.slice.call(arguments);
  return function(x) {
    args.forEach(function(fun) {
        x = fun(x);
    })
    return x;
  }
};

*/



// tests


'use strict';

var should = chai.should();

describe('composePipe', function() {

  describe('Step 1: Compose', function() {

    it('should exist', function() {
      should.exist(compose);
    });
    it('should be a function', function() {
      compose.should.be.a.Function;
    });
    it('should return a function', function() {
      var result = compose(function() {return 'Hi!';});
      should.exist(result);
      result.should.be.a.Function;
    });
    it('should be able to compose 2 functions', function() {
      var greet = function(name){return 'hi: ' + name;};
      var exclaim = function(statement){return statement.toUpperCase() + '!'};
      var welcome = compose(greet, exclaim);
      welcome.should.be.a.Function;
      welcome('phillip').should.equal('hi: PHILLIP!');
      welcome('kia').should.equal('hi: KIA!');
    });
    it('should be able to compose multiple functions', function() {
      var first = function(array){return array[0];};
      var shift = function(array){return array.slice(1);};
      var fifth = compose(first, shift, shift,shift, shift);
      fifth.should.be.a.Function;
      (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
    });

    it('should handle multiple composes', function() {
      var first = function(array){return array[0];};
      var shift = function(array){return array.slice(1);};
      var fifth = compose(first, shift, shift, compose(shift, shift));
      fifth.should.be.a.Function;
      (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
    });
  });

});