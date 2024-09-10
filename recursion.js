/* 
    ? Recursion
    * procedure involving invoking the procedure itself
    * allows us to loop over items without the use of a loop
    * every recursive function must have a GUARD CLAUSE
*/
let goCount = 0
function go() {
    if (goCount > 10) return
    console.log("The function runs -- go, go, go")
    goCount++
    go()
}

// go()

// number
// multiply number by itself and itself - 1
// until 

let count = 5
let result = 1
while (count > 0) {
    result *= count
    count--
}
console.log(result)

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5))

function countdown(s) {
    if (s === 0) {
        return "Blastoff"
    }
    console.log(s)
    return countdown(s - 1)
}

console.log(countdown(10))