'use strict';
const Attribute = require('./attribute');
class BinaryAttribute extends Attribute{
    constructor(){
        super();
        this.type = 'binary';
    }
}

module.exports = BinaryAttribute;