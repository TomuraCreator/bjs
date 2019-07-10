function getSolutions(a,b,c) {
    let D = (b ** 2) - (4 * a * c);
    let x1, x2;
    if (D < 0) {
        return {
            'D' : D
        } 
    } else if (D === 0) {
        x1 = -b / (2 * a);
        return {
            roots : [ x1],
            'D' : D
        }
    } else {
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        x2 = (-b - Math.sqrt(D)) / 2 * a;
        return {
            roots : [ x1, x2],
            'D' : D
        }
    }
}
function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}
    Значение дискриминанта: ${result.D}
    ${(result.D < 0) ? 'Уравнение не имеет вещественных корней.' : (result.D === 0) ? 'Уравнение имеет один корень X₁  = ' + result.roots[0] : (result.D > 0) ? 'Уравнение имеет два корня. X₁ = ' + result.roots[0] + ', X₂ = ' + result.roots[1] : ''}`);
}
showSolutionsMessage(4, 4, 4);
showSolutionsMessage(1, -5, 6);
showSolutionsMessage(16, -8, 1);

function getAverageScore(data) { 
    
}

function getArrayAverage() {
    
    // let count = 0;
    // for(let r in d) {
    //     console.log(typeof(r), typeof(d));
    //     // for ( let i = 0; i < d.r.length; i++) {
    //     //     count += d.algebra[i];
    //     // }
    // }
    return this.algebra.length;
    // return count / d.algebra.length;

    
}
console.log( getAverageScore({
    algebra : [2, 4, 5, 2, 5, 4],
    geometry : [2, 4, 5],
    russian : [3, 3, 4, 5],
    physics : [5, 5],
    music : [ 2, 2, 5],
    english : [4, 4, 3],
    poetry : [5, 3, 4],
    chemistry : [2],
    french : [4, 4] 
}));

function getPersonData(secretData) {
    return getObject(secretData);
}
function getObject(base) {
    let fName = (base.aaa == 0) ? 'Родриго' : 'Эмильо',
        lName = (base.bbb == 0) ? 'Родриго' : 'Эмильо';
    return { firstName: fName, lastName: lName }; 
}


console.log(getPersonData({
    aaa: 0, 
    bbb: 0  
}))
console.log(getPersonData({
    aaa: 1, 
    bbb: 0  
}))
console.log(getPersonData({
    aaa: 1, 
    bbb: 1  
}))
console.log(getPersonData({
    aaa: 0, 
    bbb: 1  
}))