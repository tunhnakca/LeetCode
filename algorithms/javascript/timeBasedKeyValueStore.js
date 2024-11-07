var TimeMap = function () {
  this.store = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store.has(key)) {
    this.store.set(key, []);
  }
  this.store.get(key).push({ value, timestamp });
};

TimeMap.prototype.get = function (key, timestamp) {
  if (!this.store.has(key)) return "";

  const values = this.store.get(key);
  let left = 0,
    right = values.length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (values[mid].timestamp === timestamp) {
      return values[mid].value;
    } else if (values[mid].timestamp < timestamp) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right >= 0 ? values[right].value : "";
};
