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

    calculateDifference(data1, data2){
        if(this.verify(data1)&&this.verify(data2)) {
            return data1 === data2;
        } else {
            throw(new Error('Nominal Attribute # calculate difference - arguments should be verified'));
        }
    }
}

module.exports = NominalAttribute;