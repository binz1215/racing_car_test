//랜덤 값에 따라 전진 혹은 정지 여부를 결정

import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { outputPrint } from '../view/output.js'; //모델이랑 직접 소통하면 안되늗데 방법이 생각이 안남.

class GoOrNot {
  #name;
  #count;
  #result = {};

  constructor(names, counts) {
    this.#name = names;
    this.#count = counts;
  }

  oneSet() {
    this.#makeObject();
    for (let i = 0; i < this.#count; i++) {
      const oneSet = this.#drive();
      outputPrint(oneSet);
      Console.print('\n');
    }

    return this.#result;
  }

  #makeRandom() {
    const random = Number(MissionUtils.Random.pickNumberInRange(0, 9));

    return random;
  }

  #go() {
    const GO_MIN = 4;
    const random = this.#makeRandom();
    let marker = '';
    if (random >= 4) {
      marker = '-';
    }

    return marker;
  }

  #makeObject() {
    this.#name.forEach((name) => {
      const key = name;
      const value = '';

      this.#result[key] = value;
    });

    return this.#result;
  }

  #drive() {
    this.#name.forEach((name) => {
      this.#result[name] += this.#go();
    });

    return this.#result;
  }

  getNames() {
    return this.#name;
  }
  getCounts() {
    return this.#count;
  }
}

export default GoOrNot;
