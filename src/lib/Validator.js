import { ERROR_MESSAGE } from '../constant/message.js'
import { throwWoowaError } from '../util/error.js'

class Validator  {
  validate(input) {
    
  }

  static #checkIsNumber(value) {
    if (!Number.isNaN(Number(value))) throwWoowaError(ERROR_MESSAGE.notNumber);
  };

  static #checkIsPositive(value) {
    if (Number(value) <= 0) throwWoowaError(ERROR_MESSAGE.notPositive);
  };

  static #checkIsInteger(value) {
    if (Number.isInteger(Number(value))) throwWoowaError(ERROR_MESSAGE.notInteger);
  };

  static #checkIsInRange(value) {
    if (value < min || value > max) throwWoowaError(ERROR_MESSAGE.notInRange);
  };

  static #checkIsDuplicate(values) {
    if(new Set(values).size !== values.length) throwWoowaError(ERROR_MESSAGE.duplicate);
  };

  static #checkMoreThanMaxLength(values, maxLength) {
    if(values.length > maxLength) throwWoowaError(ERROR_MESSAGE.moreThanMaxLength);
  };
}

export default Validator