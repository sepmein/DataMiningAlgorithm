'use strict';
const NominalAttribute = require('./nominal_attribute');
class OrdinalAttribute extends NominalAttribute {
    constructor(){
        super();
        this.type = 'ordinal';
    }
}

module.exports = OrdinalAttribute;