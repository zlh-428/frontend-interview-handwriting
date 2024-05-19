/** 
 * 对象扁平化
 * @param {object} { name: 'person', target: { attr1: 'name', attr2: 'gender' }}
 * @returns {object} { name: 'person', target.attr1: 'name', target.attr2: 'gender' }
 */
export const flatObject = (_target, _key = '') => {
  const newObject = {};

  for (let key in _target) {
    if (_target.hasOwnProperty(key)) {
      if (typeof _target[key] === "object") {
        Object.assign(newObject, flatObject(_target[key], `${_key}${key}.`));
      } else {
        newObject[`${_key}${key}`] = _target[key];
      }
    }
   }

   return newObject;
}