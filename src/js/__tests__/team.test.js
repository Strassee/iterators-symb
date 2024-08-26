import Team from '../classes/Team';
import Bowman from '../classes/Bowman';
import Swordsman from '../classes/Swordsman';

test('add new hero to Team', () => {
  const team = new Team('Bo');
  team.add(new Bowman('Bo'));
  const result = { members: new Set([{ attack: 25, defence: 25, health: 100, level: 1, name: 'Bo', type: 'Bowman' }]) };
  expect(team).toEqual(result);
});

test('add same hero to Team', () => {
  expect(() => {
    const team = new Team('Bo');
    const hero = new Bowman('Bo');
    team.add(hero);
    team.add(hero);
  }).toThrow();
});

test('add all heroes to Team', () => {
  const team = new Team('Bo');
  const heroes = [new Bowman('Bo'), new Swordsman('Sw')];
  team.addAll(...heroes);
  const result = { members: new Set([{ attack: 25, defence: 25, health: 100, level: 1, name: 'Bo', type: 'Bowman' }, { attack: 40, defence: 10, health: 100, level: 1, name: 'Sw', type: 'Swordsman' }]) };
  expect(team).toEqual(result);
});

test('Set Team to array', () => {
  const team = new Team('Bo');
  const heroes = [new Bowman('Bo'), new Swordsman('Sw')];
  team.addAll(...heroes);
  const arr = team.toArray();
  const result = [{ attack: 25, defence: 25, health: 100, level: 1, name: 'Bo', type: 'Bowman' }, { attack: 40, defence: 10, health: 100, level: 1, name: 'Sw', type: 'Swordsman' }];
  expect(arr).toEqual(result);
});

test('Symbol.iterator', () => {
  const team = new Team('Bo');
  const heroes = [new Bowman('Bo'), new Swordsman('Sw')];
  team.addAll(...heroes);
  const result = [{ attack: 25, defence: 25, health: 100, level: 1, name: 'Bo', type: 'Bowman' }, { attack: 40, defence: 10, health: 100, level: 1, name: 'Sw', type: 'Swordsman' }];
  let index = 0;
  for (const hero of team) {
    expect(hero).toEqual(result[index++]);
  }
});
