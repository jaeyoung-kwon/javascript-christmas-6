import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constant/message.js';
import Parser from '../lib/Parser.js';

class OutputView {
  static printStartMessage() {
    Console.print(CONSOLE_MESSAGE.startMessage);
  }

  static printResult(day, menus, result) {
    Console.print(CONSOLE_MESSAGE.resultInitialMessage(day));
    this.#printOrderMenu(menus);
    this.#printTotalPrice(result.totalPrice);
  }

  static #printOrderMenu(menus) {
    Console.print(CONSOLE_MESSAGE.orderMenuMessage);
    menus.forEach(({ name, quantity }) => {
      Console.print(`${name} ${quantity}개`);
    });
  }

  static #printTotalPrice(totalPrice) {
    Console.print(CONSOLE_MESSAGE.orderTotalPriceMessage);
    Console.print(`${Parser.priceToLocaleString(totalPrice)}원`);
  }
}

export default OutputView;
