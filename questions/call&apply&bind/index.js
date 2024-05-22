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