import { getTotalPrice } from '../util/menuUtils.js';
import { copyObject } from '../util/objectUtils.js';
import BenefitMaker from './BenefitMaker.js';

class BenefitCalculator {
  #result = {};

  constructor() {
    this.#result = {
      totalPrice: 0,
      totalBenefitPrice: 0,
      benefitResult: {},
      presentEvent: {},
      eventBadge: {},
    };
  }

  calculateBenefitAndEvent(day, menus) {
    this.#result.totalPrice = getTotalPrice(menus);
    if (this.#result.totalPrice >= 10_000) {
      this.#addOrSkipResult(BenefitMaker.generateDdayBenefit(day), 'benefitResult');
      this.#addOrSkipResult(BenefitMaker.generateWeekBenefit(day, menus), 'benefitResult');
      this.#addOrSkipResult(BenefitMaker.generateSpecialBenefit(day), 'benefitResult');
      this.#addOrSkipResult(BenefitMaker.generatePresentEvent(this.#result.totalPrice), 'presentEvent');
      this.#addOrSkipResult(BenefitMaker.generateEventBadge(this.#result.totalBenefitPrice), 'eventBadge');
    }
  }

  #addOrSkipResult(result, key) {
    if (!result) return;

    if (key === 'benefitResult' || key === 'presentEvent') {
      this.#result.totalBenefitPrice += result.amount;
      if (key === 'presentEvent') {
        this.#result.presentEvent = result;
        this.#result.benefitResult['증정 이벤트'] = result.amount;
        return;
      }
      this.#result.benefitResult[result.name] = result.amount;
      return;
    }
    this.#result[key] = result;
  }

  getResult() {
    return copyObject(this.#result);
  }
}

export default BenefitCalculator;
