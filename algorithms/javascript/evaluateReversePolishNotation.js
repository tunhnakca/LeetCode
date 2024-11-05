var evalRPN = function (tokens) {
  const stack = [];

  const operators = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["*", (a, b) => a * b],
    ["/", (a, b) => Math.trunc(a / b)],
  ]);

  tokens.forEach((token) => {
    if (!operators.has(token)) {
      stack.push(Number(token));
    } else {
      const last1 = stack.pop();
      const last2 = stack.pop();

      const result = operators.get(token)(last2, last1);
      stack.push(result);
    }
  });
  return stack.at(0);
};
