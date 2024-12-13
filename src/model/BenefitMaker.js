import { filterMenuWithType, getTotalMenuQuantity } from '../util/menuUtils.js';

class BenefitMaker {
  static generateDdayBenefit(day) {
    if (day > 25) return null;

    const amount = 1_000 + (day - 1) * 100;
    return { name: 'dday', amount };
  }

  static generateWeekBenefit(day, menus) {
    const dayIndex = day % 7;
    if (dayIndex === 1 || dayIndex === 2) {
      return this.#generateWeekendBenefit();
    }
    return this.#generateWeekdayBenefit(day, menus);
  }

  static #generateWeekendBenefit() {}

  static #generateWeekdayBenefit(day, menus) {
    const dessertMenu = filterMenuWithType(menus, 'dessert');
    console.log(menus, dessertMenu);

    if (dessertMenu.length === 0) return null;

    const amount = getTotalMenuQuantity(dessertMenu) * 2_023;
    console.log(amount);
    return { name: 'weekday', amount };
  }
}

export default BenefitMaker;
