import { flatten, flattenByDeep } from "./flat.mjs";

// Array.flat
const array = [1, [2, [3, [4, [5]]]]];

console.log(flatten(array));

console.log(flattenByDeep(array, 1));

