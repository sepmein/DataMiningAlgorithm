'use strict';
const Attribute = require('./attribute');
const isNumber = require('is-js').number;
class NumericAttribute extends Attribute {
    constructor() {
        super(arguments);
        this.type = 'numeric';
    }

    verify(value) {
        return isNumber(value);
    }

    oDistance() {

    }

    mahatanDistance() {

    }

    minkowskiDistance() {

    }
}

module.exports = NumericAttribute;