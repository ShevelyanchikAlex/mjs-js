'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return apple", () => {
    //given
    let expected = "apple";
    //when
    let actual = practicalTask.redundant("apple");
    //then
    expect(actual()).toEqual(expected);
});

test("Should return pear", () => {
    //given
    let expected = "pear";
    //when
    let actual = practicalTask.redundant("pear");
    //then
    expect(actual()).toEqual(expected);
});

test("Should return empty elem", () => {
    //given
    let expected = "";
    //when
    let actual = practicalTask.redundant("");
    //then
    expect(actual()).toEqual(expected);
});