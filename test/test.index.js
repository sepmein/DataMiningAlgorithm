/**
 * Created by Spencer on 15/12/24.
 */
'use strict';
const expect = require('chai').expect;
const algorithm = require('../index');
describe('basic', function () {
    describe('mean', function () {
        it('calculate mean', function () {
            let array = [1, 2, 3, 4, 5, 1, 2, 323, 23, 23, 23, 23, 2, 42, 4, 34, 23, 42, 34, 5345];
            console.log(algorithm.mean(array));
        });
    });
    describe('jaccard', function () {
        it('calculate', function () {
            let jaccard = require('../index').jaccard;
            let table = [
                {
                    name: 'Jack',
                    fever: true,
                    cough: false,
                    "test-1": true,
                    "test-2": false,
                    "test-3": true,
                    "test-4": false,
                    "test-5": true,
                    "test-6": false
                },
                {
                    name: 'Mary',
                    fever: false,
                    cough: true,
                    "test-1": true,
                    "test-2": false,
                    "test-3": false,
                    "test-4": false,
                    "test-5": false,
                    "test-6": true
                }
            ];
            expect(1).to.equal(1);
        });
    });
});