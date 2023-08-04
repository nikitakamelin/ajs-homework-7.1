import Character from '../js/Character';

test('Character basic test', () => {
  const character = new Character('Oleg', 'Undead', 45, 56);

  const result = {
    _name: 'Oleg',
    _type: 'Undead',
    health: 100,
    level: 1,
    attack: 45,
    defence: 56,
  };

  expect(result).toEqual(character);
});

test('Character name test', () => {
  const character = new Character('Oleg', 'Undead', 45, 56);
  const result = 'Oleg';

  expect(result).toBe(character.name);
});

test('Character type test', () => {
  const character = new Character('Oleg', 'Undead', 45, 56);
  const result = 'Undead';

  expect(result).toBe(character.type);
});
