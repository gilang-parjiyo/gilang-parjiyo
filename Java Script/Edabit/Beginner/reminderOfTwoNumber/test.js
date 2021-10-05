const { expect } = require('@jest/globals')
const remainder = require('./index-START')
// const { test } = require('picomatch')

test('remainder is a functiton', () => {
    expect(typeof remainder).toEqual('function')
});

test('remainder(1, 3)', () => {
    expect(remainder(1, 3)).toEqual(1)
});

test('remainder(-9, 45)', () => {
    expect(remainder(-9, 45)).toEqual(-9)
});

test('remainder(5, 5)', () => {
    expect(remainder(5, 5)).toEqual(0)
});

test('remainder(3, 4)', () => {
    expect(remainder(3, 4)).toEqual(3)
});
