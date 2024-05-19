/**
 * @param {array} [1, [2, [3, [4, [5]]]]]
 * @returns {array} [1, 2, 3, 4, 5]
 */
export const flatten = (array) => {
  const flatArray = [];

  for (let i = 0; i < array.length; i++) {
    Array.isArray(array[i])
      ? flatArray.push(...flatten(array[i]))
      : flatArray.push(array[i]);
  }

  return flatArray;
};

/**
 * @param {array} [1, [2, [3, [4, [5]]]]]
 * @param {number} deeps 需要展开的层级
 * @returns {array} [1, 2, 3, 4, 5]
 */
export const flattenByDeep = (array, deeps = 1) => {
  if (deeps < 1) return array.slice();

  const flatArray = [];

  const _flat = (arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        _flat(arr[i], depth - 1);
      } else {
        flatArray.push(arr[i]);
      }
    }
  };

  _flat(array, deeps);

  return flatArray;
};