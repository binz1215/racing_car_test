import { carArray, countNum } from './controller/make-array.js';
import GoOrNot from './model/go_or_not.js';
import ValidateCar from './model/validate_car.js';
import ValidateNum from './model/validate_num.js';
import { Console } from '@woowacourse/mission-utils';
import { winner } from './controller/find_winner.js';

class App {
  async play() {
    const names = await carArray();
    const validCar = new ValidateCar(names);
    const validName = validCar.getNames();

    const rawCount = await countNum();
    const numCount = new ValidateNum(rawCount);
    const validNum = numCount.getCounts();
    Console.print('\n');

    Console.print('실행결과\n');

    const goOrNot = new GoOrNot(validName, validNum);

    const oneSet = goOrNot.oneSet();

    const win = winner(oneSet);
    Console.print('최종 우승자 : ' + win);
  }
}

export default App;

const app = new App();
app.play();
