const { expect } = require('@jest/globals')
const hoursToSeconds = require('./index-START')
// const { test } = require('picomatch')

test('hoursToSeonds is a functiton', () => {
    expect(typeof hoursToSeconds).toEqual('function')
});

test('2 hours to seconds', () => {
    expect(hoursToSeconds(2)).toEqual(7200)
});

test('10 hours to seconds', () => {
    expect(hoursToSeconds(10)).toEqual(36000)
});

test('24 hours to seconds', () => {
    expect(hoursToSeconds(24)).toEqual(86400)
});