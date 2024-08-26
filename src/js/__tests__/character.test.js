import Character from '../classes/Character';
import Bowman from '../classes/Bowman';
import Swordsman from '../classes/Swordsman';
import Zombie from '../classes/Zombie';

test('make name error', () => {
  expect(() => {
    new Zombie('Z');
  }).toThrow();
});

test('make type error', () => {
  expect(() => {
    new Character('Zo', 'Zombie1', 40, 10);
  }).toThrow();
});

test('method levelUp', () => {
  const hero = new Swordsman('Sw');
  hero.levelUp();
  const result = {
    name: 'Sw',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };

  expect(hero).toEqual(result);
});

test('method levelUp health 0', () => {
  expect(() => {
    const hero = new Swordsman('Sw');
    hero.health = 0;
    hero.levelUp();
  }).toThrow();
});

test('method damage(points)', () => {
  const hero = new Bowman('Bo');
  hero.damage(133);
  const result = {
    name: 'Bo',
    type: 'Bowman',
    health: 0.25,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});

test('method damage(points) health 0', () => {
  const hero = new Bowman('Bo');
  hero.damage(137);
  const result = {
    name: 'Bo',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});
