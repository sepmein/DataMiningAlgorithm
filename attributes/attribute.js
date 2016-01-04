'use strict';

class Attribute{
    constructor(name){
        this.name = name;
    }
    verify(value){

    }

    calculateDifference(data1, data2) {
    }

    calculateSimilarity(data1, data2) {
        return 1 - this.calculateDifference(data1, data2);
    }
}

module.exports = Attribute;