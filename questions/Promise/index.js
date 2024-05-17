class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback());
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const newPromise = new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            const result = onRejected(this.value);
            resolvePromise(newPromise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.state === "pending") {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onFulfilled(this.value);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onRejected(this.value);
              resolvePromise(newPromise, result, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });

    return newPromise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => MyPromise.resolve(onFinally()).then(() => value),
      (reason) =>
        MyPromise.resolve(onFinally()).then(() => {
          throw reason;
        })
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let results = [];
      let completedPromises = 0;
      const totalPromises = promises.length;

      if (totalPromises === 0) {
        resolve(results);
      }

      const handleResolve = (index, value) => {
        results[index] = value;
        completedPromises++;

        if (completedPromises === totalPromises) {
          resolve(results);
        }
      };

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => handleResolve(index, value),
          (reason) => reject(reason)
        );
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve, reject);
      });
    });
  }
}