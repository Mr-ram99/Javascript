function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      // fn.length gives the number of arguments passed to function
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const csm = curry(sum);

console.log(csm(1)(2)(3)); //6
console.log(csm(1, 2)(3)); //6
console.log(csm(1)(2, 3)); //6
