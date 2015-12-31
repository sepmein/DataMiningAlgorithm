'use strict';
const Attribute = require('./attribute');
class NumericAttribute extends Attribute {
    constructor() {
        super();
        this.type = 'nomimal';
        this.scales = ['numeric', 'ratio'];
    }
}

module.exports = NumericAttribute;