export default class Character {
  // eslint-disable-next-line no-useless-constructor
  constructor(attack) {
    this.attack = attack;
  }

  get getAttack() {
    return this.attack;
  }

  set getAttack(value) {
    this.attack = value;
  }
}
