// 实现一个简单版
const simpleDeepclone = (object) => {
  if (object === null || typeof object !== "object") return object;
  
  const newObject = Array.isArray(object) ? [] : {};


  for (let key in object) {
    const cloneItem = object[key];
    
    if (object.hasOwnProperty(key)) {
      newObject[key] = typeof cloneItem === 'object' ? simpleDeepclone(cloneItem) : cloneItem;
    }
  }

  return newObject;
}

/** 
 * 解决循环引用
 * 考虑：Date、正则、function、Map、Set
 * @param 
 */
const deepClone = (object, hash = new WeakMap()) => {
  if (object === null || typeof object !== "object") return object;
  
  if (object instanceof Date) {
    return new Date(object);
  }

  if (object instanceof RegExp) {
    return new RegExp(object);
  }

  if (object instanceof Function) {
    return object.bind({});
  }

  if (object instanceof Map) {
    const newMap = new Map()
    hash.set(object, newMap);

    object.forEach((item, key) => {
      newMap.set(key, deepClone(item, hash));
    });
    return newMap;
  }

  if (object instanceof Set) {
    const newSet = new Set();
    hash.set(object, newSet);

    object.forEach(item => {
      newSet.add(deepClone(item, hash));
    })

    return newSet;
  }

  if (hash.has(object)) {
    return hash.get(object);
  }

  const newObject = Array.isArray(object) ? [] : {};

  hash.set(object, newObject);

  for (let key in object) {
    const cloneItem = object[key];
    
    if (object.hasOwnProperty(key)) {
      newObject[key] = typeof cloneItem === 'object' ? deepClone(cloneItem, hash) : cloneItem;
    }
  }

  return newObject;
}

module.exports = {
  simpleDeepclone,
  deepClone,
};