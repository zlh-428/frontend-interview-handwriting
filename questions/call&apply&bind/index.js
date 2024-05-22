const _call = (content, ...args) => {
  const _touchFn = this;

  content = content || window;

  content["fn"] = _touchFn;

  const result = content['fn'](...args);

  delete content["fn"];

  return result;
}

