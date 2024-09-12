/* 
    ? Asynchronous Programming
    * JS is single-threaded
    * need for asynchronous operations
    * 
*/

function greet() {
    return "Hello everyone"
}

function verifyAge(age) {
    if (age < 18) return
    return "Access Granted"
}

/* 
    ? Callback Function
    * a function that is being called by another function
*/

// function callbackfx() {
//     console.log("Some Data Returned")
//     return 28
// }

function getData() {
    setTimeout(() => {
        console.log("Some Data Returned")
        return 28
    }, 3000)
    // setTimeout(callbackfx, 3000)
}

let paulsAge = getData()
console.log(paulsAge)

console.log(getData())
console.log(greet())
console.log(verifyAge(paulsAge))

/* 
    ? Promises
    * an object that may produce a singular value in the future

    ? Three States
    * pending (unfinished)
    * fulfilled (complete value result)
    * rejected (error)
    
    * Promises allow other code to execute without having to wait for their completion
*/

function promiseFx() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("After 3 seconds it resolves")
        }, 3000)
    })
}

console.log(promiseFx())

// ? In order to get tangible data out of a Promise object, we must resolve it
let errorStorage = ""

promiseFx()
    .then(msg => console.log(msg))
    .catch((err) => console.log(err))
    .then(() => console.log("Me doing something else"))
    .finally(() => console.log("This code runs after promise is done"))

console.log("Code after the promise")
console.log(errorStorage)

/* 
    ? Asynchronous Functions
    * introduced in ES7
    * alternative to writing promises
    * a function that returns a promise object
    * allows us to resolve or reject a promise
*/

async function asyncFx() {
    return "Hello from the async function"
}

console.log(asyncFx()) // returns a promise

asyncFx()
    .then(msg => console.log(msg))
    .then(() => console.log("Some code that runs after first resolver"))

/* 
    ? Await Keyword
    * can be utilized only inside of an async function
    * tells JS we must wait on promise returning fx before moving on
*/

// using async functions avoids callback hell
async function start() {
    console.log(await asyncFx())
    console.log("Code that runs only AFTER await")
}

start()