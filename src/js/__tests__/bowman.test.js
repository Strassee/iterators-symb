import Bowman from '../classes/Bowman';

test('make Bowman', () => {
  const hero = new Bowman('Bo');
  const result = {
    name: 'Bo',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});
