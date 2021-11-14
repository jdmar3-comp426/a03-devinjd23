import mpg_data from "./data/mpg_data.js";
import {getStatistics, getSum} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
let cityMpg = mpg_data.map(x => x.city_mpg)
let highwayMpg = mpg_data.map(x => x.highway_mpg)
let yearStats = mpg_data.map(x => x.year)
let numHybrids = 0;
for (let i = 0; i < mpg_data.length; i++) {
    if (mpg_data[i].hybrid) {
        numHybrids++;
    }
}
export const allCarStats = {
    avgMpg: {
        city: getSum(cityMpg)/cityMpg.length,
        highway: getSum(highwayMpg)/highwayMpg.length
    },
    allYearStats: getStatistics(yearStats),
    ratioHybrids: numHybrids/mpg_data.length,
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
let onlyHybrids = groupBy(mpg_data, "hybrid");
onlyHybrids = onlyHybrids[true];
let hybridMakes = Object.keys(groupBy(onlyHybrids, "make"));
let hybridObjs = [];
for (let i = 0; i < hybridMakes.length; i++) {
    let tempArray = onlyHybrids.filter(function (obj) {
        if (obj.make == hybridMakes[i]) {
            return obj.make
        }
        return obj.make == hybridMakes[i];
    })
    tempArray = Object.keys(groupBy(tempArray, "id"));
    // tempArray = tempArray.reduce(function (previousValue, currentValue) {
    //     if (previousValue.indexOf(currentValue) == -1) {
    //         previousValue.push(currentValue)
    //     }
    //     return previousValue
    // }, [])
    hybridObjs.push({
        make: hybridMakes[i],
        hybrids: tempArray
    })
}

export const moreStats = {
    makerHybrids: hybridObjs,
    avgMpgByYearAndHybrid: undefined
};


function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }