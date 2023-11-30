import { carArray, countNum } from '../controller/make-array';

class ValidateNum {
  static MIN_NUM = 1;
  #count;

  constructor(counts) {
    this.#count = counts;

    this.#validate();
  }

  #validate() {
    this.#validateIsNum();
    this.#validatePositive();
    this.#validateIsInteger();
  }

  #validateIsNum() {
    if (Number.isNaN(this.#count)) {
      throw Error('[ERROR] 숫자만 입력 가능합니다.');
    }
  }

  #validatePositive() {
    if (this.#count < MIN_NUM) {
      throw Error('[ERROR] 1이상의 수만 입력 가능합니다.');
    }
  }

  #validateIsInteger() {
    if (Number.isInteger(this.#count)) {
      throw Error('[ERROR] 정수만 입력 가능합니다.');
    }
  }

  getCounts() {
    return this.#count;
  }
}
export default ValidateNum;
