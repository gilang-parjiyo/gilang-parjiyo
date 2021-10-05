const { expect } = require('@jest/globals')
const calcAge = require('./index-START')
// const { test } = require('picomatch')

test('calcAge is a functiton', () => {
    expect(typeof calcAge).toEqual('function')
});

test('calcAge("calcAge(65)")', () => {
    expect(calcAge(65)).toEqual(23725)
});

test('calcAge("calcAge(0)")', () => {
    expect(calcAge(0)).toEqual(0)
});

test('calcAge("calcAge(-1)")', () => {
    expect(calcAge(-1)).toEqual(0)
});

