import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constant/message.js';
import Parser from '../lib/Parser.js';
import { isEmptyObject } from '../util/objectUtils.js';

class OutputView {
  static printStartMessage() {
    Console.print(CONSOLE_MESSAGE.startMessage);
  }

  static printResult(day, menus, result) {
    Console.print(CONSOLE_MESSAGE.resultInitialMessage(day));
    this.#printOrderMenu(menus);
    this.#printTotalPrice(result.totalPrice);
    this.#printPresentEvent(result.presentEvent);
    this.#printBenefitList(result.benefitResult);
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

  static #printPresentEvent(presentEvent) {
    Console.print(CONSOLE_MESSAGE.presentEventMessage);
    if (isEmptyObject(presentEvent)) {
      Console.print(CONSOLE_MESSAGE.nothingMessage);
      return;
    }
    Console.print(`${presentEvent.name} ${presentEvent.quantity}개`);
  }

  static #printBenefitList(benefitResult) {
    Console.print(CONSOLE_MESSAGE.benefitListMessage);
    if (isEmptyObject(benefitResult)) {
      Console.print(CONSOLE_MESSAGE.nothingMessage);
    }
    Object.entries(benefitResult).forEach(([name, amount]) => {
      Console.print(`${name}: -${Parser.priceToLocaleString(amount)}원`);
    });
  }
}

export default OutputView;
