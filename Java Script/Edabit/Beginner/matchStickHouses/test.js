const { expect } = require('@jest/globals')
const matchHouses = require('./index-START')
// const { test } = require('picomatch')

test('matchHouses is a functiton', () => {
    expect(typeof matchHouses).toEqual('function')
});

test('matchHouses(1)', () => {
    expect(matchHouses(1)).toEqual(6)
});

test('matchHouses(4)', () => {
    expect(matchHouses(4)).toEqual(21)
});

test('matchHouses(87)', () => {
    expect(matchHouses(87)).toEqual(436)
});

test('matchHouses(0)', () => {
    expect(matchHouses(0)).toEqual(0)
});