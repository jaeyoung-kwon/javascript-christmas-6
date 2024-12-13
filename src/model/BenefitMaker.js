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
      return this.#generateWeekendBenefit(menus);
    }
    return this.#generateWeekdayBenefit(menus);
  }

  static #generateWeekendBenefit(menus) {
    const mainMenu = filterMenuWithType(menus, 'main');

    if (mainMenu.length === 0) return null;

    const amount = getTotalMenuQuantity(mainMenu) * 2_023;
    return { name: 'weekend', amount };
  }

  static #generateWeekdayBenefit(menus) {
    const dessertMenu = filterMenuWithType(menus, 'dessert');

    if (dessertMenu.length === 0) return null;

    const amount = getTotalMenuQuantity(dessertMenu) * 2_023;
    return { name: 'weekday', amount };
  }
}

export default BenefitMaker;
