/* 
    ? Functions
    * a block of reusable code
    * take in parameters (doors to the inside of your fx)
    * perform an action
    * return a result
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming thru the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    ? There are two types of functions
    * function declaration
        * hoisted
    * function expression
        * not hoisted
*/

console.log("Hello Marcus")
console.log("Hello Nick")
console.log("Hello Jonah")

// Function Declaration
function sayHello() {
    return "Hello August Cohort"
}

// Function Invocation
console.log(sayHello())

function greetLearner(learner) {
    return `Hello ${learner}`
}

console.log(greetLearner("Nick"))
console.log(greetLearner("Jonah"))
console.log(greetLearner("Laura"))

// DRY Principle --> DO NOT REPEAT YOURSELF

function addNums(num1, num2) {
    return num1 + num2
}

console.log(addNums(3, 19))
console.log(addNums(3, 54890))

// ! Challenge - rewrite the string reverse logic within a function
// it should take str as a parameter and return reversed string

function reverseStr(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i]
    }
    return result
}

console.log(reverseStr("something I don't know"))

/* 
    ? Function Expression
    * utilizes a variable as a placeholder
*/

let nameAge = function(name, age) {
    return `Your name is ${name} and you're ${age} years old`
}

console.log(nameAge("Paul", 25))

// ? Arrow Functions

/* 
    * introduced in ES6
    * concise way of writing fx
    * part of fx expression family
    * do not bind to .this or super (more on that in Classes)
*/

/* 
    ? Concise Body Arrow Function
    * can have none or one parameter
    * code block must not have { }
    * return statement is implicit
    * kinda sorta not really like a ternary of fx world
*/

let greetEveryone = () => `Hello everyone`
console.log(greetEveryone())

let greetDoctor = drName => `Hello Dr ${drName}`
console.log(greetDoctor("Nick"))

/* 
    ? Block Body Arrow Function
    * has a block of code { }
    * can have explicit return statement
    * can have many parameters
*/

let createEmail = (name, email, body) => {
    return `Email: ${email} \n Dear ${name}: \n ${body}`
}

console.log(createEmail("paul", "sucker@aol.com", "we've been trying to reach you about your warranty"));

/* 
    ? Immediately Invoked Function Expression (IIFE)
    * it has no invocation
    * it invokes immediately
*/

(function() {
    console.log("IIFE")
})()

/* 
    ! FizzBuzz Challenge
    * create a function that takes parameters called start and stop
    * loop over numbers from start to stop
    * if the number is divisible by 3, print Fizz
    * -||- 5, print Buzz
    *  -||- 3 & 5, print FizzBuzz
    * if neither, print only the number
    * invoke your function to make sure it works
*/

function fizzBuzz(start, stop) {
    if (start == 0) {
        return
    }
    for (i = start; i <= stop; i++) {
        if (i % 15 == 0) {
            console.log("Fizz Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(`${i}`)
        }
    }
}

fizzBuzz(0, 100)
console.log(0 % 3)