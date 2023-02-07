const arr = [1, 2, 3, 4, 5, 6]

function myFilter(callback) {
    const newArr = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element, index, this)) {
            newArr.push(element)
        }
    }
    return newArr
}

function myFind(callback) {
    let wasFound
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element, index, this)) {
            wasFound = element
            return wasFound
        }
    }
    return wasFound

}


function myReduce(callback, initialValue) {
    let result
    let start
    if (!initialValue) {
        console.log("here");
        result = this[0];
        start = 1
    } else {
        result = initialValue
        start = 0
    }
    for (let i = start; i < this.length; i++) {
        result = callback(result, this[i])
    }
    return result;
}




Array.prototype.myFilter = myFilter
Array.prototype.myFind = myFind
Array.prototype.myReduce = myReduce


// const arr3 = [
//     {
//         color: 'red',
//         type: 'station wagon',
//         registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//         capacity: 5
//     },
//     {
//         color: 'red',
//         type: 'cabrio',
//         registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
//         capacity: 2
//     }
// ]


// const extractOnlyValue = (arr, key) => {
//     const arr2 = arr3.myReduce((values, value) => {
//         values.push(value[key])
//         return values // very important to return to array methods
//     }, [])
//     return arr2
// }

// console.log(extractOnlyValue(arr, "type"));


// const reduced = arr.myReduce((acc, c) => {
//     return acc + c;
// }, 3)

// console.log(reduced);

// const filteredArr = arr.myFilter((el, idx) => {
//     console.log(idx);
//     return el > 3
// })

// console.log(filteredArr);


// const founded = arr.myFind((el) => {
//     // console.log(idx);
//     return el === 9
// })

// console.log(founded);

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//     return fruit.name === "cherries";
// }

// console.log(inventory.myFind(isCherries));

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
// ];

// const result = inventory.myFind(({ name }) => name === "cherries");

// console.log(result);

// function isPrime(element, index, array) {
//     let start = 2;
//     while (start <= Math.sqrt(element)) {
//         if (element % start++ < 1) {
//             return false;
//         }
//     }
//     return element > 1;
// }

// console.log([4, 6, 8, 12].myFind(isPrime)); // undefined, not found
// console.log([4, 5, 8, 12].myFind(isPrime)); // 5

// const arrayLike = {
//     length: 3,
//     0: 2,
//     1: 7.3,
//     2: 4,
// };
// console.log(Array.prototype.myFind.call(arrayLike, (x) => !Number.isInteger(x))); // 7.34

// Declare array with no elements at indexes 2, 3, and 4
// const array = [0, 1, , , , 5, 6];

// // Shows all indexes, not just those with assigned values
// array.myFind((value, index) => {
//     console.log("Visited index ", index, " with value ", value);

// });
// // Visited index 0 with value 0
// // Visited index 1 with value 1
// // Visited index 2 with value undefined
// // Visited index 3 with value undefined
// // Visited index 4 with value undefined
// // Visited index 5 with value 5
// // Visited index 6 with value 6

// // Shows all indexes, including deleted
// array.myFind((value, index) => {
//     // Delete element 5 on first iteration
//     if (index === 0) {
//         console.log("Deleting array[5] with value ", array[5]);
//         delete array[5];
//     }
//     // Element 5 is still visited even though deleted
//     console.log("Visited index ", index, " with value ", value);
// });
// // Deleting array[5] with value 5
// // Visited index 0 with value 0
// // Visited index 1 with value 1
// // Visited index 2 with value undefined
// // Visited index 3 with value undefined
// // Visited index 4 with value undefined
// // Visited index 5 with value undefined
// // Visited index 6 with value 6