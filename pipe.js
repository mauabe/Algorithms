/*
Pipe:
Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.

Example
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

pipe(add2, multiplyBy3)(5) //=> 21
pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63
HINT: You should use the functions reduce() and reduceRight() in your solutions.

*/

var pipe = (fn,...fns) => (...args) => fns.reduce( (acc, f) => f(acc), fn(...args));


//tests

'use strict';

var should = chai.should();


  describe('Step 2: Pipe', function() {

    it('should exist', function() {
      should.exist(pipe);
    });
    it('should be a function', function() {
      pipe.should.be.a.Function;
    });
    it('should return a function', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(add2, multiplyBy3)).should.be.a.Function;
    });
    it('should pass the input through a function', function() {
      function add2(value){return value + 2;}
      (pipe(add2)(21)).should.equal(23);
    });
    it('should pass the input through 2 functions', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(add2, multiplyBy3)(5).should.equal(21));
    });
    it('should pass the input through multiple functions', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(add2, multiplyBy3, add2, multiplyBy3)(7).should.equal(87));
    });
    it('should be able to handle multiple pipes', function() {
      function add2(value){return value + 2;}
      function multiplyBy3(number){return number * 3;}
      (pipe(pipe(add2, multiplyBy3), multiplyBy3)(7).should.equal(81));
    });

});