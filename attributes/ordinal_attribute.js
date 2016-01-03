'use strict';
const NominalAttribute = require('./nominal_attribute');
class OrdinalAttribute extends NominalAttribute {
    constructor(name, validatedValues) {
        super(name, validatedValues);
        this.type = 'ordinal';
    }
}

module.exports = OrdinalAttribute;