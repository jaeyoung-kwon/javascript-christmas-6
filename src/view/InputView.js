import { CONSOLE_MESSAGE } from '../constant/message.js';
import { repeatUntilComplete } from '../util/repeatUntilComplete.js';

class InputView {
  static getVisitDayInput() {
    return repeatUntilComplete(CONSOLE_MESSAGE.visitDayInput);
  }
}

export default InputView;
