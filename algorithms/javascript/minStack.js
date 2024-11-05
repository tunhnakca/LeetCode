var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

MinStack.prototype.pop = function () {
  return this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

MinStack.prototype.getMin = function () {
  return this.stack.length === 0 ? null : Math.min(...this.stack);
};
