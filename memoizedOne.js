// memoize the output of a function passed to memoizeOne.

const map = new Map();

const memoizeOne = (func) => {
  const funcName = func.name;
  return (a, b) => {
    if (map.has(funcName)) {
      if (Object.hasOwn(map.get(funcName), [a])) {
        if (Object.hasOwn(map.get(funcName)[a], [b])) {
          return map.get(funcName)[a][b];
        } else {
          const res = func(a, b);
          map.get(funcName)[a][b] = res;
          return res;
        }
      } else {
        const res = func(a, b);
        map.get(funcName)[a] = {};
        map.get(funcName)[a][b] = res;
        return res;
      }
    } else {
      const res = func(a, b);
      map.set(funcName, {});
      map.get(funcName)[a] = {};
      map.get(funcName)[a][b] = res;
      return res;
    }
  };
};

const add = (a, b) => {
  console.log("called");

  return a + b;
};

const memoizedAdd = memoizeOne(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 4));
console.log(memoizedAdd(1, 4));
console.log(memoizedAdd(1, 2));
