function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    if (typeof obj1 === "function" && typeof obj2 === "function") {
      return obj1.toString() === obj2.toString();
    }
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!Object.keys(obj2).includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

const obj1 = {
  a: 5,
  b: {
    c: { d: [1, 2] },
    e: () => {
      return "hello";
    },
  },
  f: "7",
};

const obj2 = {
  a: 5,
  b: {
    c: { d: [1, 2] },
    e: () => {
      return "hello";
    },
  },
  f: "7",
};

const obj3 = { a: 5, b: { c: { d: 9 }, e: 6 }, f: 7 };
const obj4 = null;

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual(obj4, obj4)); // true
console.log(deepEqual(obj4, obj2)); // false
