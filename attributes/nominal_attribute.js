'use strict';
const Attribute = require('./attribute');
class NominalAttribute extends Attribute{
    constructor(){
        super();
        this.type = 'nomimal';
    }
}

module.exports = NominalAttribute;