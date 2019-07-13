class Weapon {
    constructor(obj) {
        this.name = obj.name,
        this.attack = obj.attack,
        this.durability = obj.durability,
        this.range = obj.range;
    }
    takeDamage(damage) {
        this.durability = this.durability - damage;
        return this.durability;
    }
    getDamage() {
        let attackValueProcent = (this.durability / this.durability) * 100;
        this.attack = (attackValueProcent >= 30) ? this.attack : this.attack / 2;
        return (this.durability <= 0) ? 0 : this.attack;
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
const knee = new Weapon({
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
console.log(knee.takeDamage(299));
console.log(knee.isBroken());
console.log(longBow.durability);
console.log(axe.range);






