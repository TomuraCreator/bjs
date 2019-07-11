function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);
    document.getElementById('sound').innerHTML = result;   
}
function getAnimalSound(animal) {
    if (animal === undefined) return null;
    else return animal.sound;
}

////////////////////////////////////////////////////////////////

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;
    marks.forEach(element => {
        average += +element;
    });
    let roundedAverage = Math.round(average / marks.length);
    return roundedAverage;
}
////////////////////////////////////////////////////////////////

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let diff = (Date.now() - Date.parse(birthday)) / 31536000000;
    if (diff > 18) return true;
    else return false

}

//////////////////////////////////////////////////////////////////////

