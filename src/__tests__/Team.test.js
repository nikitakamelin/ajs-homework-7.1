import Character from '../js/Character';
import Team from '../js/Team';

const character1 = new Character('Alex', 'Swordsman', 50, 50);
const character2 = new Character('Anna', 'Bowman', 60, 40);
const character3 = new Character('Oleg', 'Magician', 40, 60);
const character4 = new Character('Tanya', 'Undead', 10, 10);

const team = new Team();

//* -- Тест метода add()
test('Team.js add() test', () => {
  team.add(character1);

  expect(team.members).toContain(character1);
});

//* -- Тест метода addAll()
test('Team.js addAll() test', () => {
  team.add(character1);
  const characters = [character1, character2, character3, character4];
  team.addAll(characters);

  expect(team.members.size).toBe(4);
});

//* -- Тест метода toArray()
test('Team.js toArray() test', () => {
  team.add(character1);
  const characters = [character1, character2, character3, character4];
  team.addAll(characters);

  expect(Array.isArray(team.toArray())).toBe(true);
});
