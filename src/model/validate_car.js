import { carArray, countNum } from '../controller/make-array';

class ValidateCar {
  static MAX_LENGTH = 5;
  static MIN_LENGTH = 1;

  #carName;

  constructor(names) {
    this.#carName = names;

    this.#validate();
  }

  #validate() {
    this.#validateLength();
    this.#validateDuple();
  }

  #validateLength() {
    return this.#carName.every((name) => name.length >= MIN_LENGTH && name.length <= MAX_LENGTH);
  }

  #validateDuple() {
    const nameSet = new Set(this.#carName);
    if (this.#carName.length !== nameSet.size) return false;
    return true;
  }

  getNames() {
    return this.#carName;
  }
}
export default ValidateCar;
