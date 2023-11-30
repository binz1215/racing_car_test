import { carArray, countNum } from './controller/make-array.js';
import ValidateCar from './model/validate_car.js';
import ValidateNum from './model/validate_num.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const names = await carArray();
    const validCar = new ValidateCar(names);
    const validName = validCar.getNames();
    Console.print(validName);
  }
}

export default App;

const app = new App();
app.play();
