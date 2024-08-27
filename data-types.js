console.log("Hello World")

/* 
    ? JavaScript
    * found in 1996 by Brandon Eich
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function -- functions are treated like any other variable
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * weakly typed (dynamic)
    * multi-paradigm language
    * ECMAScript -- organization setting language standards
*/

/* 
    ? Comments
    * blocks of code that are not being interpreted
    * denoted by // for single-line
    * denoted by /* for multi-line
    * comments are read but not executed
    * as learners, it helps us with note taking
    * as devs, it documents our code making it more maintainable
    * cmd/ctrl + / for single-line
    * optn/alt + shift + a for multi-line
*/

/* 
    ? Console object
    * give us acess to the browser or node's debugging console
    * allow the developer to view output from their program
*/

2+2 // runs but doesn't show in the console
console.log(2 + 2) // shows in the console

/* 
    ? JS Data Types:
        Primitive
            * string
            * number
            * boolean
            * null
            * undefined
            * Not a Number
        Reference
            * array
            * object
            * map
            * set
*/

/* 
    ? Strings
    * primitive data type representing characters
    * enclosed in '', "", or ``
    
    Examples:
*/

console.log("This is a text")
console.log(`This is a text using string interpolation backticks`)
// String representation of a number
console.log("2023")
console.log(2023)

// We can concatenate different strings (add them together)
console.log("I'm Paul" + "and I'm 25 years old")

// Strings are indexed starting from zero (0)
// Index value goes between [ ]
console.log("Porschedoppelkupplungsgetriebe"[5])

/* 
    ? String Interpolation (``)
    * a process of including space for an expression
    Syntax:
        `string ${ expression } string`
*/

console.log(`My name is Paul and I am ${20 + 6} years old`)

/* 
    ? String Methods & Properties
    * .length
    * slice()
    * .toUpperCase()
    * .toLowerCase()
*/

console.log("Porschedoppelkupplungsgetriebe".length)
console.log("Niemczyk".toUpperCase())
console.log("Paul Niemczyk".slice(0,4))

/* 
    ? Checking data types using typeof operator
*/

console.log(typeof "1990")
console.log(typeof 2022)

/* 
    ? Numbers
    * any integer or decimal
*/

console.log(25)
console.log(3.14)
console.log(0.2 + 0.1)
console.log(Number.MAX_SAFE_INTEGER)

/* 
    ? Booleans
    * binary value
    * either true (on) or false (off)
    * Examples of falsey values:
        * 0
        * undefined
        * null
        * NaN
        * ""
*/

console.log(true, false)
console.log(2 == 2)
console.log(2 == 5)

// Boolean() interface returns whether value is truthy or falsey
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))

/* 
    ? Type Coercion
    * JS is a weakly typed programming language (duck typed)
    * doesn't require data type definition
    * comparison operator (==) performs type coercion before resolving expression
        * will check values but NOT data types
    * strict equality comparison operator (===) will avoid type coercion
        * will check values AND data types
*/

console.log(10 == "10")
console.log(2 + "2")

console.log(10 === "10")

console.log(2 == "2", typeof 2, typeof "2")
console.log(2 === "2", typeof 2, typeof "2")

/* 
    ? Not a Number (NaN)
    * triggered when performing operations with numbers and non numbers
    * used when performing math computations that don't make sense
    ! know what type coercion is but DO NOT USE IT
*/

console.log(undefined + 5)
console.log(Math.sqrt(-1)) // imaginary number (so NaN)

/* 
    ? Null and Undefined
    * null - placeholder for something
    * undefined - lack of existence
    * falsey values
    * refer to toilet paper meme for better understanding :)
*/

/* 
    ? Operators
    * addition +
    * substraction -
    * multiplication *
    * division /
    * exponent **
    * dot .
    * modulo %
    * assignment (=) <-- single
    * comparison (==) <-- double
    * strict comparison (===) <-- triple
    * is not equal to or is strictly not equal to (! = OR ! = =) OR !value
*/

// ? Modulo % --> remainder of long divison
console.log(10 / 2)
console.log(10 % 2)
console.log(10 % 3)

// ? Assignment
let myName = "Paul" // assigns the value of Paul (str) to the variable myName

// ? Comparison
console.log(myName == "Paul")

// ? is Not Equal To != --> flips values

console.log(2 != 2)