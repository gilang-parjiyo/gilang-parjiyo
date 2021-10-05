const { expect } = require('@jest/globals')
const addUp = require('./index-START')
// const { test } = require('picomatch')

test('addUp is a functiton', () => {
    expect(typeof addUp).toEqual('function')
});

test('addUp("addUp(4)")', () => {
    expect(addUp(4)).toEqual(10)
});

test('addUp("addUp(13)")', () => {
    expect(addUp(13)).toEqual(91)
});

test('addUp("addUp(600)")', () => {
    expect(addUp(600)).toEqual(180300)
});