'use strict';

module.exports.secondsToDate = secondsToDate;
module.exports.toBase2Converter = toBase2Converter;
module.exports.toBase2StringConverter = toBase2StringConverter;
module.exports.substringOccurrencesCounter = substringOccurrencesCounter;
module.exports.repeatingLitters = repeatingLitters;
module.exports.redundant = redundant;
module.exports.towerHanoi = towerHanoi;
module.exports.matrixMultiplication = matrixMultiplication;
module.exports.gather = gather;

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    let startDate = new Date("2020-06-01T00:00:00Z");
    return new Date(startDate.getTime() + seconds * 1000);
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    let binaryFormat = [];
    do {
        binaryFormat.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    } while (decimal > 0)
    return binaryFormat.reverse().join('');
}

/**
 * Alternative function using toString([radix]).
 * radix - Optional parameter. An integer between 2 and 36
 * that specifies the base of the number system used to represent the numeric value.
 * @param decimal
 * @returns {string}
 */
function toBase2StringConverter(decimal) {
    const BINARY_BASE = 2;
    return decimal.toString(BINARY_BASE);
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 3
 *      'T', 'test it' -> 3
 */
function substringOccurrencesCounter(substring, text) {
    return text.toUpperCase().split(substring.toUpperCase()).length - 1;
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    let repeatedString = "";
    let incomingCharacters = [];
    string.split('').forEach(function (char) {
        if (incomingCharacters.includes(char)) {
            if ((repeatedString.length > 0) && (repeatedString[repeatedString.length - 1] !== char)) {
                repeatedString += char;
            }
        } else {
            repeatedString += char.repeat(2);
            incomingCharacters.push(char);
        }
    });
    return repeatedString;
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    return () => str;
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    const FROM_ROD = 1;
    const TO_ROD = 3;
    const USING_ROD = 2;
    let counter = 0;
    resolveTowerHanoi(disks, FROM_ROD, TO_ROD, USING_ROD);

    function resolveTowerHanoi(n, fromRod, toRod, usingRod) {
        if (n === 0) return;
        resolveTowerHanoi(n - 1, fromRod, usingRod, toRod);
        // console.log("Move disk " + n + " from rod " + fromRod + " to rod " + toRod + "");
        counter++;
        resolveTowerHanoi(n - 1, usingRod, toRod, fromRod);
    }

    return counter;
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    let array = [];
    for (let i = 0; i < matrix1.length; i++) {
        array[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            array[i][j] = sum;
        }
    }
    return array;
}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {any}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    let enteredStrings = [str];
    let resultStr = "";

    function chainFunc(newStr) {
        chainFunc.order = function order(number) {
            order.get = function get() {
                return resultStr;
            }
            resultStr += enteredStrings[number];
            return order;
        }

        enteredStrings.push(newStr);
        return chainFunc;
    }

    return chainFunc;
}