/* 
    ? IO & Callbacks
    * process - an event that runs in the background or foreground of your machine
    * Node.js allows access to its processes via process object
    * this allows us to process external input and external output (IO)
    * we do this by using process.stdin and process.stdout
*/

const process = require("process")
console.log(process.pid)
// console.log(process)

// console.log("Hey, what is your name? ")
// process.stdin.once("data", (input) => {
//     console.log(`Welcome: ${input.toString()}`)
//     process.exit()
// })

// .on() method continually listens to a data stream
let count = 0
// process.stdout.write("What is your name?")
// process.stdin.on("data", (input) => {
//     count++
//     if (count > 5) process.exit()
    
//     process.stdout.write(`Welcome, ${input.toString()}`)
// })

// ?  (1)     (2)  (3) (4)                  (5)
// ? process.stdin.on("data", input => console.log(input.toString()))
/* 
    * 1. Node's Process Interface
    * 2. In Data Stream
    * 3. Event Listener Method
    * 4. Event we're listening for
    * 5. Callback fx which runs when the event occurs
*/

// ? Readline

// Import
const readline = require("readline")

// Create interface so it talks with stdin and stdout
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// rl.question("What is your name?", input => {
//     rl.setPrompt(`Hello ${input}`)
//     rl.prompt()
//     rl.close()
// })

async function ask(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

// ask("What's your favorite flower?")
//     .then(input => console.log(input))

async function start() {
    const flower = await ask("What's your favorite flower?")
    const car = await ask("What's your favorite car?")

    if (car === "Porsche") console.log("Proper choice")
    console.log(flower, car)
    rl.close()
}

start()
