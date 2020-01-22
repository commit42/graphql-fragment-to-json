const test = { a: 1, b: 2, c: 3 };
const { a, ...rest } = test;
console.log({ a, rest });
