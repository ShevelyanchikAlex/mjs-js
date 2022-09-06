'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return 7", () => {
    //given
    let expected = 7;
    //when
    let actual = practicalTask.towerHanoi(3);
    //then
    expect(actual).toEqual(expected);
});

test("Should return 31", () => {
    //given
    let expected = 31;
    //when
    let actual = practicalTask.towerHanoi(5);
    //then
    expect(actual).toEqual(expected);
});