import Daemon from '../classes/Daemon';

test('make Daemon', () => {
  const hero = new Daemon('Da');
  const result = {
    name: 'Da',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(hero).toEqual(result);
});
