function compareArrays(arr1, arr2) {
    const manyAray = (arr1 >= arr2) ? arr1 : arr2,
        lessArray = (arr2 <= arr1) ? arr2 : arr1;
    const back = manyAray.every(element => element === lessArray[count.getNext()]);
    console.log(back);
    count.reset();
}
function makeCounter() {
    var currentCount = 0;
    return {
      getNext: () => currentCount++,
      reset: () => currentCount = 0
      }
};
const count = makeCounter();

compareArrays([8, 9], [8, 9]); //true
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

const sum = (t) => {
    let sums = 0;
    for(let i of t) {
        sums += i;
    }
    return sums;
}

function memoize(fun, limit) {
    let memory = [];
    if (memory.length > limit) {
        memory = memory.splice(1, limit - 1);
    }

    console.log(memory)
    return function() {
        memory.push({
            args: Array.from(arguments),
            result: fun(arguments)
        })
    }
    
}

const mSum = memoize(sum, 5);
console.log(mSum(5, 6, 2));
console.log(mSum(6, 6));
console.log(mSum(3, 6));
console.log(mSum(5, 6, 2));
console.log(mSum(6, 6));
console.log(mSum(3, 6));
console.log(mSum(5, 6, 2));
console.log(mSum(6, 6));
console.log(mSum(3, 6));

