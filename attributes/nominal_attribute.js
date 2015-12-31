'use strict';
const Attribute = require('./attribute');
const isArray = require('is-js').array;
class NominalAttribute extends Attribute{
    constructor(){
        let name = arguments[0];
        let validatedValues = arguments[1];
        super(name);
        if (!isArray(validatedValues)) {
            throw (new Error('create nominal attribute# second argument should be an array'));
        }
        this.type = 'nomimal';
        this.validatedValues = arguments[1];
    }

    verify(value) {
        return this.validatedValues.some((element)=> {
            return element === value;
        });
    }
}

module.exports = NominalAttribute;