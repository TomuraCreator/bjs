'use strict';
function calculateMortgage() {
    let percent = +window.percent.value;
    let contribution = +window.contribution.value;
    let amount = +window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent = 0, contribution = 0, amount = 0, date) {
    let mounth = (Date.parse(date) - Date.now()) / 2592000000;
    if(typeof percent === 'number' || typeof contribution === 'number' || typeof amount === 'number') {
        let S = amount - contribution;
        let P = Math.round(percent / 12);
        let totalAmount = S * (P + P / (((1 + P) ^ mounth) - 1)); // S*(P+P/(((1+P)^n)-1))
        console.log(totalAmount, mounth, S, P);
        return totalAmount.toFixed(2);
    } else {
        console.log('Нихера');
    }
    
    
}   

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}