import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constant/message.js';

class OutputView {
  static printStartMessage() {
    Console.print(CONSOLE_MESSAGE.startMessage);
  }

  static printResult(day) {
    Console.print(CONSOLE_MESSAGE.resultInitialMessage(day));
  }
}

export default OutputView;
