import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    return array.reduce((prev, curr) => prev + curr);
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort((hi, lo) => hi - lo);
    let half = Math.floor(array.length/2);
    if (array.length % 2 == 1) {
        return array[half];
    } else {
        let floor = array[half - 1];
        let ceil = array[half];
        return (array[floor] + array[ceil]) / 2;
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let stats = new Object();
    stats.length = array.length;
    stats.sum = getSum(array);
    stats.mean = stats.sum / stats.length;
    stats.median = getMedian(array);
    stats.min = array[0];
    stats.max = array[array.length - 1];
    let diffs = [];
    array.forEach(x => {
        diffs.push(Math.pow((x - stats.mean), 2));
    });
    stats.variance = getSum(diffs) / diffs.length;
    stats.standard_deviation = Math.sqrt(stats.variance);
    return stats;
}

