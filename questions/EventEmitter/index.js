class EventEmitter {
  constructor() {
    this.event = new Map();
  }

  getInstance(type) {
    return this.event.get(type) || [];
  }

  on(type, listener) {
    const handler = this.getInstance(type);

    this.event.set(type, [...handler, listener]);
    return this;
  }

  off(type, listener) {
    let handler = this.getInstance(type);

    if (!handler.length) return this;

    handler = handler.filter((l) => l !== listener);

    this.event.set(type, handler);
    return this;
  }

  emit(type, ...args) {
    const handler = this.getInstance(type);

    if (!handler.length) return this;

    handler.forEach((v) => v.apply(this, args));
    return this;
  }

  /**
   * 思考: 怎么根据原来类型的listener取消注册
   * ex: EventEmitter.off(type, listener)
   */
  once(type, listener) {
    const handler = this.getInstance(type);

    const onceWapper = (...arg) => {
      listener.apply(this, arg);
      this.off(type, onceWapper);
    };

    this.event.set(type, [...handler, onceWapper]);
    return this;
  }

  listenerCount(type) {
    return this.getInstance(type).length;
  }

  listeners(type) {
    return this.getInstance(type);
  }
}

module.exports = {
  EventEmitter
};