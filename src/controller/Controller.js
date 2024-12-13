import { MENU_INPUT_REGEX } from '../constant/regex.js';
import { RULE } from '../constant/rule.js';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';
import BenefitCalculator from '../model/BenefitCalculator.js';
import { InputView, OutputView } from '../view/index.js';

class Controller {
  async start() {
    OutputView.printStartMessage();
    const visitDay = await this.#getValidatedVisitDay();
    const menus = await this.#getValidatedMenuAndQuantity();

    const benefitCalculator = new BenefitCalculator();
    benefitCalculator.calculateBenefit(visitDay, menus);

    OutputView.printResult(visitDay, menus);
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
