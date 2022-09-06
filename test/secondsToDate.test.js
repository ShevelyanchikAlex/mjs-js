'use strict';
const practicalTask = require('../js_practical_task.js');

test("Should return 01.06.2021 Date", () => {
    //given
    let expected = new Date("2021-06-01T00:00:00Z");
    //when
    let actual = practicalTask.secondsToDate(31536000);
    //then
    expect(actual).toEqual(expected);
});

test("Should return 01.06.2020 Date", () => {
    //given
    let expected = new Date("2020-06-01T00:00:00Z");
    //when
    let actual = practicalTask.secondsToDate(0);
    //then
    expect(actual).toEqual(expected);
});

test("Should return 02.06.2020 Date", () => {
    //given
    let expected = new Date("2020-06-02T00:00:00Z");
    //when
    let actual = practicalTask.secondsToDate(86400);
    //then
    expect(actual).toEqual(expected);
});