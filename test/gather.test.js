'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return abc", () => {
    //given
    let expected = "abc";
    //when
    let actual = practicalTask.gather("a")("b")("c").order(0)(1)(2).get();
    //then
    expect(actual).toEqual(expected);
});

test("Should return cba", () => {
    //given
    let expected = "cba";
    //when
    let actual = practicalTask.gather("a")("b")("c").order(2)(1)(0).get();
    //then
    expect(actual).toEqual(expected);
});

test("Should return hello", () => {
    //given
    let expected = "hello";
    //when
    let actual = practicalTask.gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2).get();
    //then
    expect(actual).toEqual(expected);
});