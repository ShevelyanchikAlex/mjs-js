'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return [[140, 146], [320, 335]]", () => {
    //given
    let expected = [[140, 146], [320, 335]];
    //when
    let actual = practicalTask.matrixMultiplication([[1, 2, 3], [4, 5, 6]], [[10, 11], [20, 21], [30, 31]]);
    //then
    expect(actual).toEqual(expected);
});

test("Should return [[6, 6, 6], [12, 12, 12], [18, 18, 18]]", () => {
    //given
    let expected = [[6, 6, 6], [12, 12, 12], [18, 18, 18]];
    //when
    let actual = practicalTask.matrixMultiplication([[1, 1, 1], [2, 2, 2], [3, 3, 3]], [[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
    //then
    expect(actual).toEqual(expected);
});