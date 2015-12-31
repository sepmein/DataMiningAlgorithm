'use strict';
const OrdinalAttribute = require('../attributes').OrdinalAttribute;
const NominalAttribute = require('../attributes').NominalAttribute;
const BinaryAttribute = require('../attributes').BinaryAttribute;
const NumericAttribute = require('../attributes').NumericAttribute;

const isArray = require('is-js').array;
class Table {
    constructor(schemaArray) {
        this.schemas = [];
        for (let schema of schemaArray) {
            if (schema instanceof OrdinalAttribute) {
            } else if (schema instanceof NominalAttribute) {
            } else if (schema instanceof BinaryAttribute) {
            } else if (schema instanceof NumericAttribute) {
            } else {
                //Todo: better Error
                throw(new Error('Table#type error'));
            }
            this.schemas.push(schema);
        }
    }

    /**
     * @method add line
     * @param {array} line
     * @return {this}
     * */
    addLine(line) {
        if (!isArray(line) && line.length !== this.schemas.length) {
            throw(new Error('Table#addline - line should be an array and length of it should equal the schema length'));
        }
        for (let i = line.length; i > 0; i--) {
            let verifyResult = this.schemas[i].verify(line[i]);
            if (!verifyResult) {
                //TODO better Error
                throw (new Error('Table#addline - '));
            }
        }
    }
}

module.exports = Table;