const debounce = (callback, await) => {
  let timer;

  return function(...arg) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(context, arg);
    }, await);
  }
}


const throttle = (callback, await) => {
  let lastTime = 0;

  return function(...args) {
    const now = Date.now();
    
    const context = this;

    if (now - lastTime >= await) {
      callback.apply(context, args);
      lastTime = now;
    }
  };
}

module.exports = {
  debounce,
  throttle
}