import { ERROR_MESSAGE } from '../constant/message.js';
import { RULE } from '../constant/rule.js';
import { throwWoowaError } from '../util/throwWoowaError.js';

class Validator {
  static validateVisitDayInput(input) {
    this.#checkIsNumber(input, ERROR_MESSAGE.invalidDayInput);
    this.#checkIsInteger(input, ERROR_MESSAGE.invalidDayInput);
    this.#checkIsInRange(input, RULE.dayInput.min, RULE.dayInput.max, ERROR_MESSAGE.invalidDayInput);
  }

  static #checkIsNumber(value, errorMessage) {
    if (Number.isNaN(Number(value))) throwWoowaError(errorMessage);
  }

  static #checkIsPositive(value, errorMessage) {
    if (Number(value) <= 0) throwWoowaError(errorMessage);
  }

  static #checkIsInteger(value, errorMessage) {
    if (!Number.isInteger(Number(value))) throwWoowaError(errorMessage);
  }

  static #checkIsInRange(value, min, max, errorMessage) {
    if (value < min || value > max) throwWoowaError(errorMessage);
  }

  static #checkIsDuplicate(values, errorMessage) {
    if (new Set(values).size !== values.length) throwWoowaError(errorMessage);
  }

  static #checkMoreThanMaxLength(values, maxLength, errorMessage) {
    if (values.length > maxLength) throwWoowaError(errorMessage);
  }
}

export default Validator;
