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