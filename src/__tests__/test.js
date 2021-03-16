/* eslint-disable no-undef */
import Magician from '../js/Magician.js';
import Daemon from '../js/Daemon.js';
import Character from '../js/Character.js';

test('magi_test', () => {
  const merlin = new Magician();
  merlin.getAttack = 100;
  merlin.distance = 2;
  merlin.stoned = true;
  expect(merlin.getAttack).toBe(85);
});
test('magi_test2', () => {
  const merlin = new Magician();
  merlin.getAttack = 100;
  merlin.distance = 10;
  merlin.stoned = true;
  expect(merlin.getAttack).toBe(0);
});
test('magi_test3', () => {
  const merlin = new Magician();
  merlin.getAttack = 100;
  merlin.distance = 4;
  merlin.stoned = false;
  expect(merlin.getAttack).toBe(70);
});

test('daemon_test', () => {
  const ad = new Daemon();
  ad.getAttack = 100;
  ad.distance = 2;
  ad.stoned = true;
  expect(ad.getAttack).toBe(85);
});
test('daemon_test2', () => {
  const ad = new Daemon();
  ad.getAttack = 100;
  ad.distance = 10;
  ad.stoned = true;
  expect(ad.getAttack).toBe(0);
});
test('daemon_test3', () => {
  const ad = new Daemon();
  ad.getAttack = 100;
  ad.distance = 4;
  ad.stoned = false;
  expect(ad.getAttack).toBe(70);
});

test('Character_test', () => {
  const archer = new Character();
  archer.getAttack = 100;
  archer.distance = 2;
  expect(archer.getAttack).toBe(100);
});
