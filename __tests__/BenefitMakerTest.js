import BenefitMaker from '../src/model/BenefitMaker.js';

const generateDdayBenefitTestCases = [
  { day: 3, result: { name: '크리스마스 디데이 할인', amount: 1200 } },
  { day: 13, result: { name: '크리스마스 디데이 할인', amount: 2200 } },
  { day: 22, result: { name: '크리스마스 디데이 할인', amount: 3100 } },
  { day: 26, result: null },
  { day: 28, result: null },
];

const generateWeekBenefitTestCases = [
  {
    day: 1,
    menus: [
      { name: '해산물파스타', quantity: 2 },
      { name: '제로콜라', quantity: 2 },
    ],
    result: { name: '주말 할인', amount: 4046 },
  },
  {
    day: 22,
    menus: [
      { name: '양송이수프', quantity: 2 },
      { name: '초코케이크', quantity: 2 },
    ],
    result: null,
  },
  {
    day: 4,
    menus: [
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 2 },
    ],
    result: { name: '평일 할인', amount: 4046 },
  },
  {
    day: 11,
    menus: [
      { name: '양송이수프', quantity: 2 },
      { name: '제로콜라', quantity: 2 },
    ],
    result: null,
  },
];

const generateSpecialBenefitTestCases = [
  { day: 10, result: { name: '특별 할인', amount: 1_000 } },
  { day: 25, result: { name: '특별 할인', amount: 1_000 } },
  { day: 5, result: null },
  { day: 26, result: null },
];

const generatePresentEventTestCases = [
  { totalPrice: 130_000, result: { name: '샴페인', quantity: 1, amount: 25_000 } },
  { totalPrice: 245_000, result: { name: '샴페인', quantity: 1, amount: 25_000 } },
  { totalPrice: 10_000, result: null },
  { totalPrice: 55_000, result: null },
];

const generateEventBadgeTestCases = [
  { totalBenefitPrice: 30_000, result: '산타' },
  { totalBenefitPrice: 15_000, result: '트리' },
  { totalBenefitPrice: 5_000, result: '별' },
  { totalBenefitPrice: 0, result: null },
];

describe('BenefitMaker 클래스 테스트', () => {
  test.each(generateDdayBenefitTestCases)('generateDdayBenefit 메서드 테스트', ({ day, result }) => {
    expect(BenefitMaker.generateDdayBenefit(day)).toEqual(result);
  });

  test.each(generateWeekBenefitTestCases)('generateWeekBenefit 메서드 테스트', ({ day, menus, result }) => {
    expect(BenefitMaker.generateWeekBenefit(day, menus)).toEqual(result);
  });

  test.each(generateSpecialBenefitTestCases)('generateSpecialBenefit 메서드 테스트', ({ day, result }) => {
    expect(BenefitMaker.generateSpecialBenefit(day)).toEqual(result);
  });

  test.each(generatePresentEventTestCases)('generatePresentEvent 메서드 테스트', ({ totalPrice, result }) => {
    expect(BenefitMaker.generatePresentEvent(totalPrice)).toEqual(result);
  });

  test.each(generateEventBadgeTestCases)('generateEventBadge 메서드 테스트', ({ totalBenefitPrice, result }) => {
    expect(BenefitMaker.generateEventBadge(totalBenefitPrice)).toEqual(result);
  });
});
