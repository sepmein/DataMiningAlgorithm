/**
 * Created by Spencer on 15/12/24.
 */
'use strict';
/**
 * @method mean
 * @param {Array} array
 * */
exports.mean = function (array) {
    let sum = 0, n = 0;
    for (let value of array) {
        sum += value;
        n++;
    }
    return sum / n;
};
/**
 * @method Jaccard
 * @param {Array} table 2-way array table
 * @result {Number} jaccard value
 * */
exports.jaccard = function (table) {
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

