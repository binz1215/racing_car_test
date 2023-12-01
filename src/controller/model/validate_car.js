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
    if (!this.#carName.every((name) => name.length >= ValidateCar.MIN_LENGTH && name.length <= ValidateCar.MAX_LENGTH)) {
      throw Error('[ERROR] 1~5사이의 길이만 입력 가능합니다.');
    }
  }

  #validateDuple() {
    const nameSet = new Set(this.#carName);
    if (this.#carName.length !== nameSet.size) {
      throw Error('[ERROR] 중복된 이름은 입력할 수 없습니다.');
    }
  }

  getNames() {
    return this.#carName;
  }
}
export default ValidateCar;
