import { carArray, countNum } from '../controller/make-array';

class Validate {
  #count;

  constructor(counts) {
    this.#count = counts;

    this.#validate();
  }

  #validate() {}

  getCounts() {
    return this.#count;
  }
}
export default Validate;
