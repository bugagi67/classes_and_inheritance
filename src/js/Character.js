export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error(
        'Имя должно являться строкой и содержать от 2х до 10 символов',
      );
    }

    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!types.includes(type) || typeof type !== 'string') {
      throw new Error('Введите допустимый тип персонажа.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
