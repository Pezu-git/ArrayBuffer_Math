/* eslint-disable no-underscore-dangle */
export default class Character {
  // eslint-disable-next-line no-useless-constructor
  constructor(attack) {
    this.attack = attack;
  }

  get attack() {
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }
}
