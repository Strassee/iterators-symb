import Undead from '../classes/Undead';

test('make Undead', () => {
  const hero = new Undead('Un');
  const result = {
    name: 'Un',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(hero).toEqual(result);
});
