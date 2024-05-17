const { EventEmitter } = require('./index');

// 示例使用
const emitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}

emitter.on('greet', responseToEvent);
emitter.emit('greet', 'Hello, World!');  // 输出 'Hello, World!'

emitter.once('shout', (msg) => {
  console.log(msg.toUpperCase());
});
emitter.emit('shout', 'Hello, World!');  // 输出 'HELLO, WORLD!'
emitter.emit('shout', 'Hello, World!');  // 不输出

emitter.off('greet', responseToEvent);
emitter.emit('greet', 'Hello, World!');  // 不输出