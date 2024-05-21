export const _new = (ctor, ...args) => {
    const obj = Object.create(ctor.prototype);

    const res = ctor.call(obj, ...args);

    const isObject = typeof res === "object" && res !== null;

    return isObject ? res : obj;
}

const Person = function(name, age) {
  this.name = name;
  this.age = age;
}
const person = _new(Person, "John", 18);

console.log(person, "person");