//alert("Hello World!");
var s = "hello";
console.log("good for debugging "+s);

function print3Ways() {
    alert("hello!");
    console.log("prints to the developer console");
    document.write("Hello World!");
}

function soManyFunctions() {
    plainOldFunction();
}

function plainOldFunction(a="default value") {
    console.log("This is a function."+a);
    console.log("only i can call my nested function");
    nestedFunction();
    function nestedFunction(){
        console.log("This is the nested function.")
    }
    firstFunction(callBackFunction);
}

function firstFunction(cbf) {
    console.log("this is the first function called.");
    cbf();
}

function callBackFunction() {
    console.log("This is the callback function.")

}

const dog= {
    name: 'boomer',
    info: {
    pet_type: "dog",
    age: 9,
    tricks:['speak','roll over']
    },
    speak: function() {console.log('woof')}
}
console.log("My dog "+dog.name+" can do lots of tricks "+dog.info.tricks);
dog.speak()


