import { ERROR_MESSAGE } from '../constant/message.js';
import { MENU_INPUT_REGEX } from '../constant/regex.js';
import { RULE } from '../constant/rule.js';
import { getMenuName } from '../util/menuUtils.js';
import { throwWoowaError } from '../util/throwWoowaError.js';
import { MENU } from '../constant/menu.js';

class Validator {
  static validateVisitDayInput(input) {
    this.#checkIsNumber(input, ERROR_MESSAGE.invalidDayInput);
    this.#checkIsInteger(input, ERROR_MESSAGE.invalidDayInput);
    this.#checkIsInRange(input, RULE.dayInput.min, RULE.dayInput.max, ERROR_MESSAGE.invalidDayInput);
  }

  static validateMenuAndQuantityInput(inputs) {
    const allMenuNames = getMenuName(MENU);
    const menus = inputs.map((input) => {
      if (!MENU_INPUT_REGEX.test(input)) throwWoowaError(ERROR_MESSAGE.invalidMenuInput);
      const { name, quantity } = input.match(MENU_INPUT_REGEX).groups;

      if (!allMenuNames.includes(name)) throwWoowaError(ERROR_MESSAGE.invalidMenuInput);
      this.#checkIsNumber(quantity, ERROR_MESSAGE.invalidMenuInput);
      this.#checkIsInteger(quantity, ERROR_MESSAGE.invalidMenuInput);
      this.#checkLessThanMin(quantity, 1, ERROR_MESSAGE.invalidMenuInput);

      return { name, quantity };
    });

    const manusNames = getMenuName(menus);
    this.#checkIsDuplicate(manusNames, ERROR_MESSAGE.invalidMenuInput);
  }

  static #checkIsNumber(value, errorMessage) {
    if (Number.isNaN(Number(value))) throwWoowaError(errorMessage);
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

  static #checkLessThanMin(value, min, errorMessage) {
    if (value < min) throwWoowaError(errorMessage);
  }
}

export default Validator;
