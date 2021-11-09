import {sumToString, getIncreasingArray, maxAndMin, countArray} from "./mild/mild_1.js";
import {identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys} from "./mild/mild_2.js";

// mild_1.js tests
// console.log(sumToString(3, 4));
// console.log(getIncreasingArray(3, 9));
// console.log(maxAndMin([4, 23, 7, 9, 1]));
console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));

// mild_2.js tests
// console.log(identifyVariable(2))
// console.log(identifyVariable(true))
// console.log(identifyVariable("hey"))
// console.log(identifyVariable([3, 4]))
// console.log(identifyVariable({"key": 2}))

// console.log(identifyArray(['some', 3, [3, 4], false]));

// let obj = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
// };
// removeKey(obj, 'password');
// console.log(obj);

// console.log(removeKeyNonDestructive(obj, 'password'));

// obj = removeKeys(obj, ['password', 'age']);
// console.log(obj);