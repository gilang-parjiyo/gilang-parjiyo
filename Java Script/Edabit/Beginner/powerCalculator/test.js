const { expect } = require('@jest/globals')
const circuitPower = require('./index-START')
// const { test } = require('picomatch')

test('circuitPower is a functiton', () => {
    expect(typeof circuitPower).toEqual('function')
});

test('circuitPower(230, 10)', () => {
    expect(circuitPower(230, 10)).toEqual(2300)
});

test('circuitPower(110, 7)', () => {
    expect(circuitPower(110, 3)).toEqual(330)
});

test('circuitPower(480, 2)', () => {
    expect(circuitPower(480, 20)).toEqual(9600)
});