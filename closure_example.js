function outer(){
    let count = 1;
    return function inner(){
        return count++;
    }
}
const counter = outer();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3