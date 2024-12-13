import { repeatUntilComplete } from '../util/repeatUntilComplete.js';

class InputView {
  static getInput() {
    return repeatUntilComplete('입력해주세요.\n');
  }
}

export default InputView;
