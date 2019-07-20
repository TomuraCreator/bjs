function compareArrays(arr1, arr2) {
    if(arr1.length === arr2.length) return back = arr1.every((element, index) => element === arr2[index]);
}

const sum = (t) => {
    let sums = 0;
    for(let i of t) {
        sums += i;
    }
    return sums;
} // сумма для массивоподобного объекта arguments

function memoize(fun, limit) {
    let memory = [];
    console.log(memory)
    return function() {
        const findIndexInArray = memory.find(element => compareArrays(element.args, Array.from(arguments)))
        if(findIndexInArray) {
            return `Результат выведен из памяти для чисел - ${findIndexInArray.args} : ${findIndexInArray.result}`;
        } else {
            memory.push({
                args: Array.from(arguments),
                result: fun(arguments)
            })
        }
        if (memory.length > limit) memory.shift();
        return memory[memory.length - 1].result;
    }
}
const mSum = memoize(sum, 5);


console.log(mSum(5, 6, 2));
console.log(mSum(6, 6, 1, 5));
console.log(mSum(3, 6, 6));
console.log(mSum(6, 6, 3, 3));
console.log(mSum(3, 6));
console.log(mSum(5, 6, 2, 2));
console.log(mSum(6, 6));
console.log(mSum(6, 6));
console.log(mSum(6, 6));

console.log(mSum(6, 6, 3));





