import { Console } from '@woowacourse/mission-utils';
import BenefitMaker from './BenefitMaker.js';
import { getTotalPrice } from '../util/menuUtils.js';

class BenefitCalculator {
  #benefitResult = {};
  #totalPrice = 0;

  calculateBenefit(day, menus) {
    this.#totalPrice = getTotalPrice(menus);
    this.#addOrSkipResult(BenefitMaker.generateDdayBenefit(day));
    this.#addOrSkipResult(BenefitMaker.generateWeekBenefit(day, menus));
    this.#addOrSkipResult(BenefitMaker.generateSpecialBenefit(day));

    Console.print(this.#benefitResult);
  }

  #addOrSkipResult(result) {
    if (!result) return;

    this.#benefitResult[result.name] = result.amount;
  }
}

export default BenefitCalculator;
