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

    calculateDifference(data1, data2){
        if(this.verify(data1) && this.verify(data2)){
            return data1 === data2;
        } else {
            throw(new Error('Binary Attribute # calculate - arguments should be one of true or false'));
        }
    }

}

module.exports = BinaryAttribute;