class Weapon {
    constructor(obj) {
        this.name = obj.name,
        this.attack = obj.attack,
        this.durability = obj.durability,
        this.range = obj.range,
        this.constDurality = obj.durability;
    }
    takeDamage(damage) {
        this.durability = (this.durability >= 0 && this.durability >= damage) ? this.durability - damage : `Прочность оружия ${this.durability}`;
        return this.durability;
    }
    getDamage() {
        let attackValueProcent = (this.durability / this.constDurality) * 100;
        return (attackValueProcent >= 30) ? this.attack : this.attack / 2;
    }
    isBroken() {
        return (this.durability <= 0) ? true : false;
    }
}

const stuff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
  })
const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
  });
const bow = new Weapon({
    name: 'Лук',
    attack: 20,
    durability: 200,
    range: 3,
    })
const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
  })
const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
  });

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: bow.durability,
    range: 4,
  })
const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword.range,
  })
const stormStuff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: stuff.durability,
    range: 3,
})
console.log(knife.takeDamage(215));
console.log(knife.takeDamage(85));
console.log(knife.takeDamage(5));
console.log(knife.getDamage());
console.log(arm.durability);

// задача 2 

console.log( '\n')

class Weapon1 {
  constructor(name, attack, durability, range) {
      this.name = name,
      this.attack = attack,
      this.durability = durability,
      this.range = range,
      this.constDurality = durability;
  }
  takeDamage(damage) {
      this.durability = (this.durability >= 0 && this.durability >= damage) ? this.durability - damage : (damage > this.durability) ? 0 : '';
      return this.durability;
  }
  getDamage() {
      let attackValueProcent = (this.durability / this.constDurality) * 100;
      return (attackValueProcent >= 30) ? this.attack : this.attack / 2;
  }
  isBroken() {
      return (this.durability <= 0) ? true : false;
  }
}
class Bow extends Weapon1 {
  constructor() {
    super('Лук', 10, 200, 3)
  }
}
class Arm extends Weapon1 {
  constructor() {
    super('Рука', 1, Infinity, 1)
  }
}
class Sword extends Weapon1 {
  constructor() {
    super('Меч', 25, 500, 1)
  }
}
class Knife extends Weapon1 {
  constructor() {
    super('Нож', 5, 300, 1)
  }
}
class Stuff extends Weapon1 {
  constructor() {
    super('Посох', 8, 300, 2)
  }
}
class LongBow extends Weapon1 {
  constructor() {
    super('Длинный лук', 15, bow1.durability, 4)
  }
}
class Axe extends Weapon1 {
  constructor() {
    super('Секира', 27, 800, sword1.range)
  }
}
class StaffOfTheStorm extends Weapon1 {
  constructor() {
    super('Посох Бури', 10, stuff1.durability, 3)
  }
}
const bow1 = new Bow();
const arm1 = new Arm();
const sword1 = new Sword();
const knife1 = new Knife();
const stuff1 = new Stuff();
const longBow1 = new LongBow();
const axe1 = new Axe();
const staffOfTheStorm = new StaffOfTheStorm();

console.log(knife1.takeDamage(215));
console.log(stuff1.takeDamage(85));
console.log(longBow1.takeDamage(5));
console.log(knife1.getDamage());
console.log(arm.durability);




