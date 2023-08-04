import Character from '../js/Character';

test('Character levelUp() Incorrect data test', () => {
  const character = new Character('Oleg', 'Undead', 45, 56);
  character.health = 0;
  // нужно обернуть вызов в функцию в самом expect, чтобы работало
  expect(() => { character.levelUp(); }).toThrow('Нельзя повысить левел умершего');
});

test('Character damage(points) Incorrect data test', () => {
  const character = new Character('Oleg', 'Undead', 45, 56);
  character.health = -10;
  // нужно обернуть вызов в функцию в самом expect, чтобы работало
  expect(() => { character.damage(10); }).toThrow('Здоровье оказалось ниже нуля');
});
