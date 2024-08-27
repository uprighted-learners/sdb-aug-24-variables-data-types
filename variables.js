/* 
    ? Variables
    * containers that store data in memory
    * declaration
        * allows memory space to be reserved by using an identifier
        * starts with let, var, or const keyword
        * cannot start with a number of character other than $ or _
        * if no value is assigned, it's undefined
    * initilization
        * assignment of data value
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable Declaration
let firstName
console.log(firstName)

// Reassignment
firstName = "Corey"
console.log(firstName)

// Variable Declaration and Initialization
let address = "123 Main St"

/* 
    ! Mini Challenge
    * create a variable called greet
    * string inerpolate or concatenate above so that it says:
    * Hi, I'm Corey and I live at 123 Main st
*/

let greet = `Hi, I'm ${firstName} and I live at ${address}`
console.log(greet)

let greet2 = "Hi, I'm " + firstName + " and I live at " + address
console.log(greet2)

// (a)  (b) (c)        (d)
let mailAddress = "123 Main St, Salem, MA";
// (e)  =       (f)

/*

    * a - keyword
    * b - variable identifier
    * c - assignment operator
    * d - value or initializer
    * e - variable declaration
    * f - variable initilization or value assignment
*/

/* 
    ? Coding Practices for Variables
    * be concise (ex: firstName instead of usersFirstBornBlondHairedName)
    * be specific (ex: item instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * nocase
    * SCREAMING_CASE (used for env variables etc.)
*/

// ? Var is hoisted whereas let is not

var age = 27
console.log(age)

// ? Const variable
const ssn = 666010101
console.log(ssn)
// ssn = 666000001 // TypeError can't reassign const values
// console.log(ssn)

/* 
    ! Challenge
    * set variables of fName, lName, houseNumber, aptNum (if applicable)
    * street, city, state, post code
    * Concatenate or interpolate them together into a variable called addressStamp
    * console log it
    ! Spicey Mode
    * assign the state value to be lowercase, but when you console log, it should capitalize the state
*/

let fName = "Jonah"
let lName = "Francke"
let houseNo = "123"
let street = "Main St"
let state = "ga"
let zip = "07601"

let addressStamp = `Hi, my name is ${fName} ${lName} and I live at: \n ${houseNo} ${street} \n ${state.toUpperCase()} ${zip}`

console.log(addressStamp)