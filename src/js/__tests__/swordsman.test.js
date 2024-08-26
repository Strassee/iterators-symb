import Swordsman from '../classes/Swordsman';

test('make Swordsman', () => {
  const hero = new Swordsman('Sw');
  const result = {
    name: 'Sw',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(hero).toEqual(result);
});
