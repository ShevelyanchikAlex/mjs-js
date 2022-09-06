'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return 101", () => {
    //given
    let expected = "101";
    //when
    let actual = practicalTask.toBase2Converter(5);
    //then
    expect(actual).toEqual(expected);
});

test("Should return 1010", () => {
    //given
    let expected = "1010";
    //when
    let actual = practicalTask.toBase2Converter(10);
    //then
    expect(actual).toEqual(expected);
});

test("Should return 101 with alternative function", () => {
    //given
    let expected = "101";
    //when
    let actual = practicalTask.toBase2StringConverter(5);
    //then
    expect(actual).toEqual(expected);
});

test("Should return 1010 with alternative function", () => {
    //given
    let expected = "1010";
    //when
    let actual = practicalTask.toBase2StringConverter(10);
    //then
    expect(actual).toEqual(expected);
});