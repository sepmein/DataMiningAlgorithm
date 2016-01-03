'use strict';
const Attribute = require('./attribute');
const isArray = require('is-js').array;
class NominalAttribute extends Attribute{
    constructor(name, validatedValues) {
        super(name);
        if (!isArray(validatedValues)) {
            throw (new Error('create nominal attribute# second argument should be an array'));
        }
        this.type = 'nomimal';
        this.validatedValues = validatedValues;
    }

    verify(value) {
        return this.validatedValues.some((element)=> {
            return element === value;
        });
    }
}

module.exports = NominalAttribute;