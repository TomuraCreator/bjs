'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a, b, c) { // 2x^2+4x-3=0.
    if(a == 0 || b == 0 || c == 0) return alert('Значение не может быть нулем!');
    let result = (Math.pow(b, 2)) - (4 * a * c),// b^2 - 4ac;
        arrResult = [];
    console.log(result, arrResult);
    if (result === 0) arrResult.push((-b + Math.sqrt(result)) / (2 * a)).toFixed(2);
    else if(result > 0) {
        arrResult[0] = ((-b + Math.sqrt(result)) / (2 * a)).toFixed(2);
        arrResult[1] = ((-b - Math.sqrt(result)) / (2 * a)).toFixed(2);
    }// x = -b +- Math.sqrt(D) / 2 * a
    return arrResult;
} // забыл посчитать 1 корень) 


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let value = 0, arr = marks.slice(0,5);
    if (marks.length > 5) console.log(`Оценок более пяти, посчитано только первые пять ${arr}`);
    for ( let val of arr) value += val;
    return Math.round(value / arr.length);
} // так действительно проще))

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let date = ((Math.floor(Date.now() / 1000) - Math.floor(dateOfBirthday / 1000)) * 1000) / 31536000000; //вычисление целых лет
    if (date < 18) return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    else return `Не желаете ли олд-фэшн, ${name}?`;
}
