const _filter = function (callback) {
  const array = this;

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

Array.prototype.filter = _filter;