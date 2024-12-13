import { Console } from '@woowacourse/mission-utils';
import BenefitMaker from './BenefitMaker.js';

class BenefitCalculator {
  #benefitResult = {};

  calculateBenefit(day, menus) {
    this.#addOrSkipResult(BenefitMaker.generateDdayBenefit(day));
    this.#addOrSkipResult(BenefitMaker.generateWeekBenefit(day, menus));

    Console.print(this.#benefitResult);
  }

  #addOrSkipResult(result) {
    if (!result) return;

    this.#benefitResult[result.name] = result.amount;
  }
}

export default BenefitCalculator;
