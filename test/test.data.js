/**
 * Created by Spencer on 15/12/31.
 */
'use strict';

const NominalAttribute = require('../attributes/nominal_attribute');
const BinaryAttribute = require('../attributes/binary_attribute');
const OrdinalAttribute = require('../attributes/ordinal_attribute');
const NumericAttribute = require('../attributes/numeric_attribute');
const Table = require('../data');

describe('data', function () {
    describe('table', function () {
        it('should be able to create table', function () {
            let hairColor = new NominalAttribute('hairColor', ['yellow', 'black', 'white', 'brown']);
            let sex = new BinaryAttribute('sex');
            let figure = new OrdinalAttribute('figure', ['slim', 'beefy', 'fat']);
            let age = new NumericAttribute('age');
            let table = new Table([hairColor, sex, figure, age]);
            let line1 = ['yellow', false, 'fat', 15];
            let line2 = ['white', false, 'slim', 95];
            let line3 = ['brown', true, 'slim', 34];
            let line4 = ['yellow', false, 'beefy', 25];
            table
                .addLine(line1)
                .addLine(line2)
                .addLine(line3)
                .addLine(line4);
        });
    });
});