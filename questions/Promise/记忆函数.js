/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();

  let result;

  return function (...args) {
    let cacheKey = JSON.stringify(args);

    if (map.has(cacheKey)) return map.get(cacheKey);

    result = fn.apply(null, args);

    map.set(cacheKey, result);

    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
