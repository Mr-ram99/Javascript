/*
To check if an object is an instance of a certain class or constructor in JavaScript.
function myInstanceOf(object, constructor) {
    // Implement
}

class A {}
class B extends A {}
const b = new B()

console.log(myInstanceOf(b, B)) // true
console.log(myInstanceOf(b, A)) // true
console.log(myInstanceOf(b, Object)) // true

function C() {}

console.log(myInstanceOf(b, C)) // false

C.prototype = B.prototype
console.log(myInstanceOf(b, C)) // true

C.prototype = {}
console.log(myInstanceOf(b
, C)) // false
*/
