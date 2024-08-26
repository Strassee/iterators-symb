import Bowman from './classes/Bowman';
import Daemon from './classes/Daemon';
import Magician from './classes/Magician';
import Swordsman from './classes/Swordsman';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';
import Team from './classes/Team';

const heroes = [new Bowman('Bo'), new Swordsman('Sw'), new Magician('Ma'), new Daemon('Da'), new Undead('Un'), new Zombie('Zo')];

// heroes.forEach((hero, ind) => {
//   console.log(ind, hero);
// });

heroes[0].damage(133);
heroes[1].levelUp();
// console.log(heroes[0], heroes[1]);

const teamOfHeroes = new Team();
teamOfHeroes.add(heroes[0]);
// console.log(teamOfHeroes);
// teamOfHeroes.add(heroes[0]);
// console.log(teamOfHeroes);
teamOfHeroes.add(heroes[1]);
// console.log(teamOfHeroes);
teamOfHeroes.addAll(...heroes);
console.log(...teamOfHeroes);
for (const hero of teamOfHeroes) {
  console.log(hero);
}
// console.log(teamOfHeroes);
// console.log(teamOfHeroes.toArray());
