var TimeLimitedCache = function () {
  this.store = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const expiredTime = Date.now() + duration;

  const _hasKey = this.store.has(key);

  this.store.set(key, { value, expiredTime });

  return _hasKey;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.store.has(key)) return -1;

  const now = Date.now();

  const { expiredTime, value } = this.store.get(key);

  return expiredTime > now ? value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;

  const now = Date.now();

  for (let [_key, _value] of this.store) {
    const { expiredTime, value } = _value;

    if (expiredTime > now) {
      count++;
    }
  }

  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
