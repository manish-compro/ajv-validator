const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-errors')(ajv);

const data = require('./data.json');
const schema = require('./score-schema');

const validator = getSchemaValidator(schema);

const { valid, errorMsg } = validator(data);
    if (!valid) {
      console.log('DATA IS INVALID, Errors :: ', errorMsg);
    }
    else{
        console.log('DATA IS VALID');
    }

function getSchemaValidator(schema) {
    const validate = ajv.compile(schema);
    return (data) => {
      const valid = validate(data);
      let errorMsg = null;
      if (!valid) {
        errorMsg = validate.errors.map((error) => error.message).join('\n');
      }
      return {
        valid,
        errorMsg
      };
    };
  }

