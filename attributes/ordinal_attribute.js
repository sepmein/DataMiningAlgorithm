'use strict';
const Attribute = require('./attribute');
class OrdinalAttribute extends Attribute{
    constructor(){
        super();
        this.type = 'ordinal';
    }
}

module.exports = OrdinalAttribute;