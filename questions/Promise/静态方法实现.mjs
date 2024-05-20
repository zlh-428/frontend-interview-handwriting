// 实现一个promise.all
export const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0, result = [];

    if (promises.length === 0) resolve(result);

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res => {
        result[i] = res;
      }).catch(rej => {
        reject(rej);
      }).finally(() => {
        count++;

        if (count === promises.length) {
          resolve(result);
        }
      })
    }
  });
};

export function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise).then(resolve, reject);
    }
  });
}