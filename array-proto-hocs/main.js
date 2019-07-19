function compareArrays(arr1, arr2) {
    count.reset();
    const manyAray = (arr1 >= arr2) ? arr1 : arr2,
        lessArray = (arr2 <= arr1) ? arr2 : arr1;
    const back = manyAray.every(element => element === lessArray[count.getNext()]);

    return back;
}
function makeCounter() {
    var currentCount = 0;
    return {
      getNext: () => currentCount++,
      reset: () => currentCount = 0
      }
};
const count = makeCounter();

function checkArray(a, b) {
   return a.find(element => compareArrays(element.args, b))
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
        if(checkArray(memory, Array.from(arguments))) {
            const funcVar = checkArray(memory, Array.from(arguments));
            console.info(`Прошлый результат с числами ${funcVar.args}: ${funcVar.result}`)
            memory.push({
                args: funcVar.args,
                result: funcVar.result,
                info: 'Из памяти'
            })
        } else {
            memory.push({
                args: Array.from(arguments),
                result: fun(arguments)
            })
            console.log(fun(arguments));
        }
        
        if (memory.length > limit) memory.shift();
        
    }
}
const mSum = memoize(sum, 5);


mSum(5, 6, 2);
mSum(6, 6, 1, 5);
mSum(3, 6, 6);
mSum(6, 6, 3, 3);
mSum(3, 6);
mSum(5, 6, 2, 2);
mSum(6, 6);
mSum(6, 6);
mSum(6, 6, 3);





