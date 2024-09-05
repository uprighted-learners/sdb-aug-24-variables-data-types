/* 
    ? Loops
    * allow us to execute a block of code repeatedly until an exit condition has been met
*/

/* 
    ? Traditional For Loop

    ? Syntax

    for (start; stop; step) {
        code block to execute
    }

    * iterator - (ex: i) value that is a placeholder for our loop
    * iterable - (ex: longWord) value we can iterate/loop over
*/

for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}

// ? Infinite Loop - a loop without a stop condition

// for (let i = 0;; i++) {
//     console.log(i)
// }

let longWordEN = "supercalifragilisticecpialidotious"
console.log(longWordEN.length)

for (let index = 0; index < longWordEN.length; index += 1) {
    console.log(`Index: ${index} Letter: ${longWordEN[index]}`)
}

/* 
    ? For in Loop
    * allows us to seek an index value of an iterable against a condition
    * do not require an index number
    * do not require a stop statement
*/

let longWordDE = "kraftfahrzeughaftplischtversicherung"

for (i in longWordDE) {
    console.log(longWordDE[i])
}

/* 
    ? For of Loop
    * allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka"

for (i of longWordPL) {
    console.log(i)
}

/* 
    ? for of and for in difference
    * for in allows to loop over items that are not an array
    * for of works on indexed items only
*/

// ? Challenge
// ! count down from 10

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

/* 
    ! Challenge 2
    * create a variable with a sentence
    * loop over that variable
    * if a letter is a vowel, increment count, console log it
    * at the end, you should ha ve alist of vowels and the total vowel count
*/

let sentence = "I'm not feeling well today. Hopefully I feel better tomorrow."
// a e u o i
let count = 0
for (ltr of sentence.toLowerCase()) {
    if (ltr == "a" || ltr == "e" || ltr == "u" || ltr == "o" || ltr == "i") {
        count++
        console.log(`This is the vowel: ${ltr}; the vowel count is now ${count}`)
    }
}
console.log(`Vowel count is ${count}`)

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true
    
    ? Syntax
    while (true) {
        do this until false
    }
*/

// while (true) {
//     console.log("infinite loop")
// }

let loopCount = 0

while (loopCount < 10) {
    console.log(loopCount)
    loopCount += 1
}

/* 
    ? Do While Loop
    * executes code in the do section while a condition remains true
    ! If you like your instructor, you will spare him from aneurysm and NOT use this pls
*/

let doCount = 0

do {
    console.log(doCount)
    doCount++
} while (doCount <= 100)

/* 
    ? Coding Challenge
    * there is an array of swings to make it into a hole
    * swings at 2nd and 5th hole are Par 3
    * swings at 4th and 8th hole are Par 5
    * swings at any other hole are Par 2
    HINT: in golf, a par earns zero points if its made in par amount of swings
    anything under par earns negative points
    anything over par earns positive points

    Ex: if im at a par 5 hole and make it in two sings, i get -3 points

    * calculate the total points

    HINT: think of this in pseudo code
*/
let golfScore = 0
const swings = [1, 2, 5, 7, 3, 4, 2, 1, 8]

for (i in swings) {
    console.log(i, swings[i])
    if (i == 1 || i == 4) {
        golfScore += swings[i] - 3
    } else if ( i == 3 || i == 7) {
        golfScore += swings[i] - 5
    } else {
        golfScore += swings[i] - 2
    }
}

console.log(golfScore)

/* 
    ? String Reversal
    * create a variable with a string of something
    * utilize a loop to reverse a string
    * HINT: traditional for loop will work best
    * HINT: think about this the way we thought about counting down from 10
    * strings are immutable
*/
console.log("-----------------------------")
let str = "something"

// finsih around :26
let result = ""
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
    result = result + str[i]
}
console.log(result)

// console.log(str.split("").reverse().join(""))
