const { MyPromise } = require('./index');

import { promiseRace } from "./静态方法实现.mjs";

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


const promiserace1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promiserace2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

const promiserace3 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "three");
});

promiseRace([promiserace1, promiserace2, promiserace3])
  .then((value) => {
    console.log(value); // "two" 因为 promiserace2 最快解决
  })
  .catch((reason) => {
    console.log(reason); // 如果 promiserace3 更快拒绝，则输出 "three"
  });