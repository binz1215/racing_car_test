//랜덤 값에 따라 전진 혹은 정지 여부를 결정

import { MissionUtils } from '@woowacourse/mission-utils';

class GoOrNot {
  #name;

  constructor(names) {
    this.#name = names;
  }

  oneSet() {
    const result = this.#drive();
    return result;
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

  #drive() {
    const result = {};
    let value = '';
    this.#name.forEach((name, index) => {
      const key = name;
      value += this.#go();

      result[key] = value;
    });

    return result;
  }

  getNames() {
    return this.#name;
  }
}

export default GoOrNot;
