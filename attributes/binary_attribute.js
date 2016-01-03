'use strict';
const Attribute = require('./attribute');

class BinaryAttribute extends Attribute{
    constructor(){
        super(arguments);
        this.type = 'binary';
    }

    verify(value) {
        return (value === true || value === false);
    }
}

module.exports = BinaryAttribute;