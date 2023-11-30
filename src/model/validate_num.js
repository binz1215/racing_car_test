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
      return false;
    }
    return true;
  }

  #validatePositive() {
    if (this.#count < MIN_NUM) {
      return false;
    }
    return true;
  }

  #validateIsInteger() {
    return Number.isInteger(this.#count);
  }

  getCounts() {
    return this.#count;
  }
}
export default ValidateNum;
