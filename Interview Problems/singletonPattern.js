// In a singleton design pattern, only one object is created for each interface
//  (class or function) and the same object is returned every time when called.

// It is really useful in scenarios where only one object is needed to coordinate actions
//  across the system. For example, notification object, which sends notification across the system.

//ES6 version (modern js)
class Singleton {
  static instance;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  sayHello() {
    return "Hello, I'm singleton instance";
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // true
console.log(obj1.sayHello()); // "Hello, I am the Singleton instance!"

// const singleton = (function () {
//   let instance;
//   function createInstance() {
//     const object = new Object("I am an object");
//     return object;
//   }

//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     },
//   };
// })();

// const object1 = singleton.getInstance();
// const object2 = singleton.getInstance();

// console.log(object1);
// console.log(object2);

// console.log(object1 === object2);
