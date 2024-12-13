import { InputView, OutputView } from '../view/index.js';

class Controller {
  async start() {
    const visitDay = await InputView.getVisitDayInput()((input) => input);
    // OutputView.print();
  }
}

export default Controller;
