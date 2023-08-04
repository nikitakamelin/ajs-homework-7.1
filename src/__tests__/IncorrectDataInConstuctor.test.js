import Character from '../js/Character';

test('Incorrect name length', () => {
  // нужно обернуть вызов в функцию в самом expect, чтобы работало
  expect(() => { new Character('O', 'Undead', 45, 56); }).toThrow('Некорректная длина строки');
});

test('Incorrect type', () => {
  // нужно обернуть вызов в функцию в самом expect, чтобы работало
  expect(() => { new Character('Oleg', 'Dead', 45, 56); }).toThrow('Некорректный тип игрока');
});
