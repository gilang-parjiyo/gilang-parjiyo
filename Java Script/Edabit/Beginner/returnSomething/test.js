const { expect } = require('@jest/globals')
const giveMeSomething = require('./index-START')
// const { test } = require('picomatch')

test('giveMeSomething is a functiton', () => {
    expect(typeof giveMeSomething).toEqual('function')
});

test('giveMeSomething("is better than nothing")', () => {
    expect(giveMeSomething("is better than nothing")).toEqual("something is better than nothing")
});

test('giveMeSomething("something Bob Jane")', () => {
    expect(giveMeSomething("Bob Jane")).toEqual('something Bob Jane')
});