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
    if(a == 0 || b == 0 || c == 0) alert('Введите числа не равные "0"');
    else {
        let result = (Math.pow(b, 2)) - (4 * a * c),// b^2 - 4ac;
            arrResult = [];
        console.log(result, arrResult);
        if (result === 0) arrResult.push(result);
        else if (result < 0) arrResult.push('нет корня');
        else if(result > 0) {
            arrResult[0] = Math.round((-b + Math.sqrt(result)) / (2 * a));
            arrResult[1] = Math.round((-b - Math.sqrt(result)) / (2 * a));
        }// x = -b +- Math.sqrt(D) / 2 * a
        return arrResult;
    }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let value = 0;
    function getSearch(a) {
        for (let i = 0; i < a; i++) {
            value += marks[i];
            }
    } // просто чтобы не повторяться
    if (marks.length <= 5) getSearch(marks.length);   
    else if (marks.length > 5) {
        getSearch(5); 
        console.log(marks.slice(0,5));
    }
    return (marks.length <= 5) ? Math.round(value / marks.length) : Math.round(value / 5);
}

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
