/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

const ROMAN_CHAR = new Map();

ROMAN_CHAR.set('I',1);
ROMAN_CHAR.set('V',5);
ROMAN_CHAR.set('X',10);
ROMAN_CHAR.set('L',50);
ROMAN_CHAR.set('C',100);
ROMAN_CHAR.set('D',500);
ROMAN_CHAR.set('M',1000);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const len = s.length;

    let res = 0;
    let temp = 0;

    for(let i = len-1; i > -1; i--) {
        const char = s[i];
        const value = ROMAN_CHAR.get(char);
        if(value >= temp) {
            res += value;
        } else {
            res -= value;
        }
        temp = value;
    }

    return res;
};

