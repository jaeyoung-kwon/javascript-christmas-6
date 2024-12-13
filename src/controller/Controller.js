import { InputView, OutputView } from '../view/index.js';

class Controller {
  async start() {
    const visitDay = await InputView.getVisitDayInput()((input) => input);
    const menuAnsQuantity = await InputView.getMenuAndQuantityInput()((input) => input);
    // OutputView.print();
  }
}

export default Controller;
