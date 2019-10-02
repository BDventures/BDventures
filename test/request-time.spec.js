const assert = require('chai').assert;
// const requestTime = require('../lib/request-time');
const sayHello = require('../lib/request-time').sayHello;
const addNumbers = require('../lib/request-time').addNumbers;

sayHelloResult = sayHello();
addNumbersResult = addNumbers(5,5);

describe('sayHello()', () => {
  it('should return hello', () => {
    assert.equal(sayHelloResult, 'hello');
  });

  it('should return type string', () => {
    assert.typeOf(sayHelloResult, 'string');
  });
});

describe('addNumbers()', () => {
  it('should return a value above 5', () => {
    assert.isAbove(addNumbersResult, 5);
  })

  it('should return type number', () => {
    assert.typeOf(addNumbersResult, 'number');
  })
})