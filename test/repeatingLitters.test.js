'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return HHeelloo", () => {
    //given
    let expected = "HHeelloo";
    //when
    let actual = practicalTask.repeatingLitters("Hello");
    //then
    expect(actual).toEqual(expected);
});

test("Should return HHeelloo  wworrldd", () => {
    //given
    let expected = "HHeelloo  wworrldd";
    //when
    let actual = practicalTask.repeatingLitters("Hello world");
    //then
    expect(actual).toEqual(expected);
});