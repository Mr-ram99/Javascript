function isCycle(obj, seen = new WeakSet()) {
  if (typeof obj !== "object" || obj === null) return false;
  if (seen.has(obj)) return true;
  seen.add(obj);

  for (key in obj) {
    if (isCycle(obj[key], seen)) return true;
  }
  return false;
}

const obj1 = {};
const obj2 = { a: obj1 };
obj1.b = obj2; //create cycle

const obj3 = {
  //acyclic object
  a: 3,
  b: 5,
};

console.log(isCycle(obj1));
console.log(isCycle(obj2));
console.log(isCycle(obj3));
