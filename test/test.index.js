/**
 * Created by Spencer on 15/12/24.
 */
'use strict';
const expect = require('chai').expect;
describe('basic',function () {
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
            expect
        });
    });

});