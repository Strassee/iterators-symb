import Zombie from '../classes/Zombie';

test('make Zombie', () => {
  const hero = new Zombie('Zo');
  const result = {
    name: 'Zo',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(hero).toEqual(result);
});
