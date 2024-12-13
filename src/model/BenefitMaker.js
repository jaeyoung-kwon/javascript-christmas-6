import { filterMenuWithType, getTotalMenuQuantity } from '../util/menuUtils.js';
import { STAR_DAY } from '../constant/calendar.js';

class BenefitMaker {
  static generateDdayBenefit(day) {
    if (day > 25) return null;

    const amount = 1_000 + (day - 1) * 100;
    return { name: '크리스마스 디데이 할인', amount };
  }

  static generateWeekBenefit(day, menus) {
    const dayIndex = day % 7;
    if (dayIndex === 1 || dayIndex === 2) {
      return this.#generateWeekendBenefit(menus);
    }
    return this.#generateWeekdayBenefit(menus);
  }

  static generateSpecialBenefit(day) {
    if (STAR_DAY.includes(day)) return { name: '특별 할인', amount: 1_000 };

    return null;
  }

  static generatePresentEvent(totalPrice) {
    if (totalPrice >= 120_000) return { name: '샴페인', quantity: 1, amount: 25_000 };

    return null;
  }

  static generateEventBadge(totalBenefitPrice) {
    if (totalBenefitPrice >= 20_000) return '산타';
    if (totalBenefitPrice >= 10_000) return '트리';
    if (totalBenefitPrice >= 5_000) return '별';

    return null;
  }

  static #generateWeekendBenefit(menus) {
    const mainMenu = filterMenuWithType(menus, 'main');

    if (mainMenu.length === 0) return null;

    const amount = getTotalMenuQuantity(mainMenu) * 2_023;
    return { name: '주말 할인', amount };
  }

  static #generateWeekdayBenefit(menus) {
    const dessertMenu = filterMenuWithType(menus, 'dessert');

    if (dessertMenu.length === 0) return null;

    const amount = getTotalMenuQuantity(dessertMenu) * 2_023;
    return { name: '평일 할인', amount };
  }
}

export default BenefitMaker;
