/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstStr = strs[0];
    if(firstStr == undefined){
        return '';
    }

    const extraStrs = strs.slice(1);
    const strLen = firstStr.length;
    for(let i = 0; i < strLen; i++){
        const char = firstStr[i];
        const isEqual = extraStrs.every(str => str[i] === char);
        if(!isEqual){
            return firstStr.slice(0,i);
        }
    }

    return firstStr;
};

