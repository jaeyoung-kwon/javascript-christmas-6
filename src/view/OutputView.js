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
    this.#printTotalBenefitPrice(result.totalBenefitPrice);
    this.#printFinalPaymentPrice(result.totalPrice, result.totalBenefitPrice, result.presentEvent);
    this.#printEventBadge(result.eventBadge);
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

  static #printTotalBenefitPrice(price) {
    Console.print(CONSOLE_MESSAGE.benefitPriceMessage);
    Console.print(`-${Parser.priceToLocaleString(price)}원`);
  }

  static #printFinalPaymentPrice(totalPrice, totalBenefitPrice, presentEvent) {
    let finalPaymentPrice = totalPrice - totalBenefitPrice;
    if (!isEmptyObject(presentEvent)) finalPaymentPrice += presentEvent.amount;
    Console.print(CONSOLE_MESSAGE.finalPaymentPriceMessage);
    Console.print(`${Parser.priceToLocaleString(finalPaymentPrice)}원`);
  }

  static #printEventBadge(eventBadge) {
    Console.print(CONSOLE_MESSAGE.eventBadgeMessage);
    if (!eventBadge.length) {
      Console.print(CONSOLE_MESSAGE.nothingMessage);
      return;
    }
    Console.print(eventBadge);
  }
}

export default OutputView;
