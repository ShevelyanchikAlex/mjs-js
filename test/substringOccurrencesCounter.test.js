'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return 0", () => {
    //given
    let expected = 0;
    //when
    let actual = practicalTask.substringOccurrencesCounter("a", "test it");
    //then
    expect(actual).toBe(expected);
});

test("Should return 3", () => {
    //given
    let expected = 3;
    //when
    let actual = practicalTask.substringOccurrencesCounter("t", "test it");
    //then
    expect(actual).toBe(expected);
});

test("Should return 3", () => {
    //given
    let expected = 3;
    //when
    let actual = practicalTask.substringOccurrencesCounter("T", "test it");
    //then
    expect(actual).toBe(expected);
});