const { simpleDeepclone, deepClone } = require("../deepclone/index");

let example = {
  name: "test",
  age: 18,
  address: "china",
  personalInfo: {
    class: "example1",
  },
  friends: ["bob", "tina"],
  bri: new Date(),
  reg: /^[1-9]+$/,
  run: () => {
    console.log("i can run!");
  },
};

const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'Alice', age: 25 };
const obj3 = { person1: obj1, person2: obj2 };
obj1.friend = obj2;
obj2.friend = obj1;

// Date、正则、函数的特殊情况
console.log(deepClone(example), "example");

// 循环引用
console.log(deepClone(obj3), "obj3");

