import { getTotalPrice } from '../util/menuUtils.js';
import BenefitMaker from './BenefitMaker.js';

class BenefitCalculator {
  #benefitResult = {};
  #totalPrice = 0;
  #totalBenefitPrice = 0;

  calculateBenefit(day, menus) {
    this.#totalPrice = getTotalPrice(menus);
    this.#addOrSkipResult(BenefitMaker.generateDdayBenefit(day));
    this.#addOrSkipResult(BenefitMaker.generateWeekBenefit(day, menus));
    this.#addOrSkipResult(BenefitMaker.generateSpecialBenefit(day));
  }

  #addOrSkipResult(result) {
    if (!result) return;

    this.#totalBenefitPrice += result.amount;
    this.#benefitResult[result.name] = result.amount;
  }

  getResult() {
    return { totalPrice: this.#totalPrice };
  }
}

export default BenefitCalculator;
