'use strict';
const NominalAttribute = require('./nominal_attribute');
class OrdinalAttribute extends NominalAttribute {
    constructor(name, validatedValues) {
        super(name, validatedValues);
        this.type = 'ordinal';
    }

    calculateDifference(data1, data2) {
        if (this.verify(data1) && this.verify(data2)) {
            const mf = this.validatedValues.length;
            let r1 = this.convert(data1);
            let r2 = this.convert(data2);
            let z1 = this.calculateZ(r1, mf);
            let z2 = this.calculateZ(r2, mf);
        }
    }

    convert(data) {
        let z = this.validatedValues.findIndex((element, index)=> {
            return element === data;
        });
        return z++;
    }

    calculateZ(r, mf) {
        return (r - 1) / (mf - 1);
    }
}

module.exports = OrdinalAttribute;