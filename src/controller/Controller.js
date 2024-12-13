import { Console } from '@woowacourse/mission-utils';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';
import { InputView, OutputView } from '../view/index.js';

class Controller {
  async start() {
    const visitDay = await this.#getValidatedVisitDay();
    const menuAnsQuantity = await InputView.getMenuAndQuantityInput()((input) => input);

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
}

export default Controller;
