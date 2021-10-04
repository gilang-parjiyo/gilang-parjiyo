/* 
triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50
 */

const { expect } = require('@jest/globals')
const triArea = require('./index-START')
// const { test } = require('picomatch')

test('triArea is a functiton', () => {
    expect(typeof triArea).toEqual('function')
});

test('triArea(3, 2)', () => {
    expect(triArea(3, 2)).toEqual(3)
});

test('triArea(7, 4)', () => {
    expect(triArea(7, 4)).toEqual(14)
});

test('triArea(480, 2)', () => {
    expect(triArea(10, 10)).toEqual(50)
});