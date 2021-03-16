import Character from './Character.js';

export default class MathCharacterAttack extends Character {
  // eslint-disable-next-line no-useless-constructor
  get getAttack() {
    // eslint-disable-next-line no-underscore-dangle
    if (this._stoned) {
      return this.stoned;
    }
    // eslint-disable-next-line no-return-assign
    return this.attack *= ((10 - (this.distance - 1)) / 10);
  }

  set getAttack(value) {
    this.attack = value;
  }

  get stoned() {
    // eslint-disable-next-line max-len
    const charAttack = this.attack * ((10 - (this.distance - 1)) / 10) - Math.round(Math.log2(this.distance) * 5);
    if (charAttack < 0) {
      return 0;
    }
    return charAttack;
  }

  set stoned(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._stoned = value;
  }
}
