export const ERROR_MESSAGE = Object.freeze({
  invalidDayInput: '유효하지 않은 날짜입니다.',
  invalidMenuInput: '유효하지 않은 주문입니다.',
});

export const CONSOLE_MESSAGE = Object.freeze({
  visitDayInput: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menuAndQuantityInput: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  startMessage: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  resultInitialMessage: (day) => `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  orderMenuMessage: '<주문 메뉴>',
  orderTotalPriceMessage: '<할인 전 총주문 금액>',
  presentationMenuMessage: '<증정 메뉴>',
  benefitListMessage: '<혜택 내역>',
  benefitPriceMessage: '<총혜택 금액>',
  finalPaymentPriceMessage: '<할인 후 예상 결제 금액>',
  eventBadgeMessage: '<12월 이벤트 배지>',
});
