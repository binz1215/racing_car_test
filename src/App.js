import { carArray, countNum } from './controller/make-array.js';
import GoOrNot from './model/go_or_not.js';
import ValidateCar from './model/validate_car.js';
import ValidateNum from './model/validate_num.js';
import { Console } from '@woowacourse/mission-utils';
import { output } from './view/output.js';

class App {
  async play() {
    const names = await carArray();
    const validCar = new ValidateCar(names);
    const validName = validCar.getNames();
    Console.print(validName);

    const rawCount = await countNum();
    const numCount = new ValidateNum(rawCount);
    const validNum = numCount.getCounts();
    Console.print(validNum);

    const goOrNot = new GoOrNot(validName);
    const valid = goOrNot.getNames();
    const oneSet = goOrNot.oneSet();
    output(oneSet);
  }
}

export default App;

const app = new App();
app.play();
