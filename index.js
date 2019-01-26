//console.log(multiplyByFive(2));

function multiplyByFive(number) {
    return number * 5;
};

//console.log(secondFunctionMultple(2));


var secondFunctionMultple = function(number) {
    return number * 5;
}

// console.log(multiplyByFive(2));

function greeter(name) {
    return "hello " + name;
}

// console.log(greeter("Jorg"));

function bananaFunction(cb) {
    var fruit = "banana"
    cb(fruit)
}

// console.log(fruit); // doesn't work

// bananaFunction(function(fruit){
//     console.log("my favourite fruit is: " + fruit);
// })

// bananaFunction(function(fruit){
//     console.log("I hate: " + fruit);
// });

var outsideFunction = "I'm outside the function";
var myFunction = function () {

    // var outsideFunction = "I'm inside the function";
    console.log(outsideFunction);
    // that does something;
}

//myFunction();

var myArray = [0, 5, 6, 7, 5];

//console.log(myArray[1]);

myArray.push(8);

myArray.unshift(7);

console.log(myArray.splice(2, 2));

console.log(myArray);

var consoleLogFunction = function(item) {
    console.log(item);
}
myArray.forEach(consoleLogFunction(item));





