import { Console } from '@woowacourse/mission-utils';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';
import { InputView, OutputView } from '../view/index.js';
import { RULE } from '../constant/rule.js';
import { MENU_INPUT_REGEX } from '../constant/regex.js';

class Controller {
  async start() {
    const visitDay = await this.#getValidatedVisitDay();
    const menuAnsQuantity = await this.#getValidatedMenuAndQuantity();

    Console.print(visitDay);
    // OutputView.print();
  }

  async #getValidatedVisitDay() {
    return InputView.getVisitDayInput()((input) => {
      const visitDay = Parser.stringToNumber(input);
      Validator.validateVisitDayInput(visitDay);

      return visitDay;
    });
  }

  async #getValidatedMenuAndQuantity() {
    return InputView.getMenuAndQuantityInput()((input) => {
      const inputs = Parser.splitInputWithSeparator(input, RULE.inputSeparator);
      Validator.validateMenuAndQuantityInput(inputs);
      const menus = inputs.map((eachInput) => {
        const { name, quantity } = eachInput.match(MENU_INPUT_REGEX).groups;
        return { name, quantity };
      });

      return menus;
    });
  }
}

export default Controller;
