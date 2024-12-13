import { getTotalPrice } from '../util/menuUtils.js';
import BenefitMaker from './BenefitMaker.js';

class BenefitCalculator {
  // #benefitResult = {};
  // #totalPrice = 0;
  // #totalBenefitPrice = 0;
  // #presentEvent = {};
  #result = {};

  constructor() {
    this.#result = {
      totalPrice: 0,
      totalBenefitPrice: 0,
      benefitResult: {},
      presentEvent: {},
    };
  }

  calculateBenefitAndEvent(day, menus) {
    this.#result.totalPrice = getTotalPrice(menus);
    this.#addOrSkipResult(BenefitMaker.generateDdayBenefit(day), 'benefitResult');
    this.#addOrSkipResult(BenefitMaker.generateWeekBenefit(day, menus), 'benefitResult');
    this.#addOrSkipResult(BenefitMaker.generateSpecialBenefit(day), 'benefitResult');
    this.#addOrSkipResult(BenefitMaker.generatePresentEvent(this.#result.totalPrice), 'presentEvent');
  }

  #addOrSkipResult(result, key) {
    if (!result) return;

    if (key === 'benefitResult') {
      this.#result.totalBenefitPrice += result.amount;
      this.#result.benefitResult[result.name] = result.amount;
      return;
    }
    this.#result[key] = result;
  }

  getResult() {
    return this.#result;
    // return { totalPrice: this.#totalPrice };
  }
}

export default BenefitCalculator;
