const { expect } = require('@jest/globals')
const nextEdge = require('./index-START')
// const { test } = require('picomatch')

test('maxEdgeTriangle is a functiton', () => {
    expect(typeof nextEdge).toEqual('function')
});

test('nextEdge(8, 10)', () => {
    expect(nextEdge(8, 10)).toEqual(17)
});

test('nextEdge(5, 7)', () => {
    expect(nextEdge(5, 7)).toEqual(11)
});

test('nextEdge(9, 2)', () => {
    expect(nextEdge(9, 2)).toEqual(10)
});