const { expect } = require('@jest/globals')
const minutesToSeconds = require('./index-START')
// const { test } = require('picomatch')

test('minutesToSeonds is a functiton', () => {
    expect(typeof minutesToSeconds).toEqual('function')
});

test('5 minutes to seconds', () => {
    expect(minutesToSeconds(5)).toEqual(300)
});

test('3 minutes to seconds', () => {
    expect(minutesToSeconds(3)).toEqual(180)
});

test('2 minutes to seconds', () => {
    expect(minutesToSeconds(2)).toEqual(120)
});