/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      let timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      try {
        const res = await fn.apply(null, args);
        clearTimeout(timer);
        resolve(res);
      } catch (e) {
        clearTimeout(timer);
        reject(e);
      }
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
