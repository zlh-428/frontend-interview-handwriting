// 示例用法
const promise1 = MyPromise.resolve(3);
const promise2 = 42;
const promise3 = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

MyPromise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 100, "one");
});
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 200, "two");
});

MyPromise.race([p1, p2]).then((value) => {
  console.log(value); // "one"
});
