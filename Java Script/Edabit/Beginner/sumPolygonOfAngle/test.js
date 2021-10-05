const { expect } = require('@jest/globals')
const sumPolygon = require('./index-START')
// const { test } = require('picomatch')

test('sumPolygon is a functiton', () => {
    expect(typeof sumPolygon).toEqual('function')
});

test('sumPolygon(3)', () => {
    expect(sumPolygon(3)).toEqual(180)
});

test('sumPolygon(4)', () => {
    expect(sumPolygon(4)).toEqual(360)
});

test('sumPolygon(6)', () => {
    expect(sumPolygon(6)).toEqual(720)
});

test('sumPolygon(6)', () => {
    expect(sumPolygon(1)).toEqual('Please insert sided greater than 2')
});