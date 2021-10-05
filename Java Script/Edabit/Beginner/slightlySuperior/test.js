const { expect } = require('@jest/globals')
const isFirstSuperior = require('./index-START')
// const { test } = require('picomatch')

test('isFirstSuperior is a functiton', () => {
    expect(typeof isFirstSuperior).toEqual('function')
});

test('isFirstSuperior case 1', () => {
    expect(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])).toEqual(true)
});

test('isFirstSuperior case 2', () => {
    expect(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]))
        .toEqual(true)
});

test('isFirstSuperior case 3', () => {
    expect(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])).toEqual(false)
});

test('isFirstSuperior case 4', () => {
    expect(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])).toEqual(false)
});