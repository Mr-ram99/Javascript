const removeCycle = (obj) => {
  const set = new WeakSet([obj]);
  function iterateObj(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        //check for only own properties, not the inherited ones from prototype chain
        if (typeof obj[key] === "object") {
          // if the set has object reference
          // then delete it
          if (set.has(obj[key])) {
            delete obj[key];
          } else {
            //store the object reference
            set.add(obj[key]);
            //recursively iterate the next objects
            iterateObj(obj[key]);
          }
        }
      }
    }
  }
  iterateObj(obj);
};

const obj1 = {};
const obj2 = { a: obj1 };
obj1.b = obj2; //create cycle

// console.log(JSON.stringify(obj1)); throws error because of circuler reference/cycle

removeCycle(obj1);

console.log(JSON.stringify(obj1));
