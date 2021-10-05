const { expect } = require('@jest/globals')
const findPerimeter = require('./index-START')
// const { test } = require('picomatch')

test('findPerimeter is a functiton', () => {
    expect(typeof findPerimeter).toEqual('function')
});

test('findPerimeter(6, 7)', () => {
    expect(findPerimeter(6, 7)).toEqual(26)
});

test('findPerimeter(20, 10)', () => {
    expect(findPerimeter(20, 10)).toEqual(60)
});

test('findPerimeter(2, 9)', () => {
    expect(findPerimeter(2, 9)).toEqual(22)
});