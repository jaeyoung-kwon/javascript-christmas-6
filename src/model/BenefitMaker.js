class BenefitMaker {
  static generateDdayBenefit(day) {
    if (day > 25) return null;

    const amount = 1_000 + (day - 1) * 100;
    return { name: 'dday', amount };
  }
}

export default BenefitMaker;
