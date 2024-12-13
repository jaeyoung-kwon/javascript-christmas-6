import BenefitMaker from './BenefitMaker.js';

class BenefitCalculator {
  #benefitResult = {};

  calculateBenefit(day) {
    this.#addOrSkipResult(BenefitMaker.generateDdayBenefit(day));

    console.log(this.#benefitResult);
  }

  #addOrSkipResult(result) {
    if (!result) return;

    this.#benefitResult[result.name] = result.amount;
  }
}

export default BenefitCalculator;
