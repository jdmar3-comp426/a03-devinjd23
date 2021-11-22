import {sumToString, getIncreasingArray, maxAndMin, countArray} from "./mild/mild_1.js";
import {identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys} from "./mild/mild_2.js";
import {getSum, getMedian, getStatistics} from "./medium/medium_1.js";
import {allCarStats, moreStats} from "./medium/medium_2.js";
import {searchHighPower, searchMpg, searchName, searchByYear} from "./medium/medium_3.js";
import mpg_data from "./medium/data/mpg_data.js";
import {everyEven} from "./spicy/spicy_9.js"

// mild_1.js tests
// console.log(sumToString(3, 4));
// console.log(getIncreasingArray(3, 9));
// console.log(maxAndMin([4, 23, 7, 9, 1]));
// console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));

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

//medium_1.js tests
// console.log(getSum([3, 1, 4, 2]));
// console.log(getMedian([3,2,5,6,2,7,4,2,7,5]));
// console.log(getStatistics([3,2,4,5,5,5,2,6,7]));

// function medium_2Tests() {
//     console.log(allCarStats);
//     console.log(moreStats);
// }

// medium_2Tests();

// function medium_3Tests() {
//     console.log(searchHighPower(mpg_data, 630, 730));
//     console.log(searchMpg(mpg_data, 35, 40));
// }

// medium_3Tests();

console.log(everyEven([1, 5, 1, 0, 1], x => x === 1));
console.log(everyEven([1, 1, 0, 1, 1], x => x === 1));