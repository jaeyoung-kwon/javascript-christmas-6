import { ERROR_MESSAGE } from '../src/constant/message.js';
import { RULE } from '../src/constant/rule.js';
import Parser from '../src/lib/Parser.js';
import Validator from '../src/lib/Validator.js';

const visitDayInputTestCases = [
  {
    description: '방문 날짜에 숫자가 아닌 것을 입력',
    inputs: Number('aaa'),
    expectedErrorMessage: ERROR_MESSAGE.invalidDayInput,
  },
  {
    description: '방문 날짜에 정수가 아닌 것을 입력',
    inputs: Number('3.4'),
    expectedErrorMessage: ERROR_MESSAGE.invalidDayInput,
  },
  {
    description: '방문 날짜에 범위 내의 숫자가 아닌 것을 입력',
    inputs: Number('45'),
    expectedErrorMessage: ERROR_MESSAGE.invalidDayInput,
  },
];

const menuAndQuantityInputTestCases = [
  {
    description: '입력 형태가 이상할 경우',
    inputs: '[형태가-이상함]',
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
  {
    description: '개수가 숫자가 아닐 경우',
    inputs: '해산물파스타-개수',
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
  {
    description: '개수에 정수가 아닌 수가 들어갈 경우',
    inputs: '해산물파스타-1.2',
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
  {
    description: '개수에 0이 들어갈 경우',
    inputs: '해산물파스타-0',
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
  {
    description: '입력한 메뉴가 존재하지 않을 경우',
    inputs: '존재하지않음-2',
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
  {
    description: '메뉴가 중복될 경우',
    inputs: '해산물파스타-1,해산물파스타-3',
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
];

const menusTestCases = [
  {
    description: '음료만 주문했을 경우',
    inputs: [
      { name: '제로콜라', quantity: 3 },
      { name: '레드와인', quantity: 3 },
    ],
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
  {
    description: '총 주문 수량이 20이 넘을 경우',
    inputs: [
      // 내가 이것을 다 먹을 수 있을까... 생각하며 메뉴 고름 (불가능할 것 같기도)
      { name: '양송이수프', quantity: 2 },
      { name: '시저샐러드', quantity: 4 },
      { name: '해산물파스타', quantity: 2 },
      { name: '티본스테이크', quantity: 1 },
      { name: '초코케이크', quantity: 1 },
      { name: '아이스크림', quantity: 3 },
      { name: '레드와인', quantity: 2 },
      { name: '샴페인', quantity: 2 },
      { name: '제로콜라', quantity: 5 },
    ],
    expectedErrorMessage: ERROR_MESSAGE.invalidMenuInput,
  },
];

describe('Validator 클래스 테스트', () => {
  test.each(visitDayInputTestCases)('$description', ({ inputs, expectedErrorMessage }) => {
    expect(() => Validator.validateVisitDayInput(inputs)).toThrow(expectedErrorMessage);
  });

  test.each(menuAndQuantityInputTestCases)('$description', ({ inputs, expectedErrorMessage }) => {
    const inputArray = Parser.splitInputWithSeparator(inputs, RULE.inputSeparator);
    expect(() => Validator.validateMenuAndQuantityInput(inputArray)).toThrow(expectedErrorMessage);
  });

  test.each(menusTestCases)('$description', ({ inputs, expectedErrorMessage }) => {
    expect(() => Validator.validateMenus(inputs)).toThrow(expectedErrorMessage);
  });
});
