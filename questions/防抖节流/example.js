const { debounce, throttle } = require("./index");

// 使用示例
const debouncedFunction = debounce(() => {
  console.log('Debounced function executed');
}, 300);

// 使用示例
const throttledFunction = throttle(() => {
  console.log('Throttled function executed');
}, 300);
