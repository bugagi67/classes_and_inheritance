import Character from '../Character';

test('creating the character class', () => {
  const result = new Character('char', 'Bowerman');
  const expected = {
    health: 100,
    level: 1,
    name: 'char',
    type: 'Bowerman',
  };
  expect(result).toEqual(expected);
});

test('Creating a class with a name of 1 character', () => {
  expect(() => {
    const c = new Character('c', 'Bowerman');
    return c;
  }).toThrow(new Error('Имя должно являться строкой и содержать от 2х до 10 символов'));
});

test('Creating a class with a name over 10 characters', () => {
  expect(() => {
    const qwertyuiopa = new Character('qwertyuiopa', 'Bowerman');
    return qwertyuiopa;
  }).toThrow(new Error('Имя должно являться строкой и содержать от 2х до 10 символов'));
});

test('Creating a class with a name over 10 characters', () => {
  expect(() => {
    const character = new Character('character', 'Assasin');
    return character;
  }).toThrow(new Error('Введите допустимый тип персонажа.'));
});
