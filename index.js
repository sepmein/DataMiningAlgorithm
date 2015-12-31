/**
 * Created by Spencer on 15/12/24.
 */
'use strict';
/**
 * @method mean
 * @param {Array} array
 * */
let mean = function (array) {
    let sum = 0, n = 0;
    for (let value of array) {
        sum += value;
        n++;
    }
    return sum / n;
};
/**
 * @method trimmedMean
 * @param {Array} array
 * @param {number} percent
 * */
let trimmedMean = function (array, percent) {
    let length = array.length;
    array.sort();
    let trimNumber = Math.round(length * percent / 100);
    for (let i = trimNumber; i > 0; i++) {
        array.shift();
        array.pop();
    }
    return mean(array);
};
/**
 * @method median
 * @param {Array} array
 * @param {Function} sortFunction
 * @return {Number}
 * */
let median = function (array, sortFunction) {
    if (sortFunction) {
        array.sort(sortFunction);
    } else {
        array.sort();
    }
    let length = array.length;
    if (array.length % 2) {
        return array[Math.trim(length / 2) + 1];
    } else {
        return (array[length / 2] + array[length / 2 + 1]) / 2;
    }
};
/**
 * @method Jaccard
 * @param {Array} table 2-way array table
 * @result {Number} jaccard value
 * */
let jaccard = function (table) {
    let q = 0, r = 0, s = 0, t = 0;
    for (let key in table[1]) {
        if (key !== 'name') {
            let value1 = table[0][key],
                value2 = table[1][key];
            if (value1 && value2) {
                q++;
            }
            if (value1 === true && value2 === false) {
                r++;
            }
            if (value1 === false && value2 === true) {
                s++;
            }
            if (!(value1 && value2)) {
                t++;
            }
        }
    }
    return (q / (q + r + s));
};

module.exports = {
    mean: mean,
    trimmedMean: trimmedMean,
    median: median,
    jaccard: jaccard
};