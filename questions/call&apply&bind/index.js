const _call = (content, ...args) => {
  const _touchFn = this;

  content = content || window;

  content["fn"] = _touchFn;

  const result = content['fn'](...args);

  delete content["fn"];

  return result;
}

const _apply = (content, args) => {
  const _touchFn = this;

  content = content || window;

  content['fn'] = this;

  const res = content['fn'](args);

  delete content["fn"];

  return res
}

const _bind = (content, ...argsment) => {
  content = content || window;

  content['callback'] = this;

  return function(args) {
    const res = content["callback"].apply(content, [...args, ...argsment]);

    delete content["callback"];

    return res;
  }
}