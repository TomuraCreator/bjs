// 1 

let algebra = 2,
    geography = 4,
    physics = 4;

function getMidVal(...val) {
    let sum = 0;
    val.forEach(function(item) {
        sum += item;
    });
    console.log(Math.round(sum/val.length));
}
getMidVal(algebra, geography, physics);

// или 
let sum = (algebra + geography + physics) / 3;
console.log(Math.round(sum) + '\n');

// 2

let name = 'Маша';

console.log(`Привет, мир! Меня зовут ${name}!\n`);

// 3 

let x = 2,
    y = 2,
    z = 0;
let result = x * y + 5 * z + x - 1;
console.log(`Васина алгебра = ${result}\n`);