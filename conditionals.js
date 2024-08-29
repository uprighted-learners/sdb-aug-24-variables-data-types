/* 
    ? Conditionals and Logic Gates
    * conditional statement checks if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, a code within a statement executes
    * if it's falsey, nothing happens unless we specify otherwise
    
    ? Expressions vs Statements
    * Expression
        * unprocessed value grouped using the ( )
        * evaluated to be truthy
        * can be empty
        TODO: Expressions evaluate
    * Statements
        * keyword
        * expression
        * and code block
        TODO: Statements evaluate and execute code block when invoked
        ! Conditional is an example of a statement
*/

/* 
    ? If Statement
    * checks if something is true and executes the code
*/

// let lightSwitch = "off"

// if (lightSwitch) {
//     console.log("The light is on")
// }

let lightSwitch = 1;

if (lightSwitch) {
	console.log("The light is on");
}

/* 
    ? Else If Statement
    * allows us to add additional clondition(s) if the prior one has not been satisfied

    ? Else Statement
    * allows us to add additional condition that resolves when nothing else makes sense
*/

let temp = 60;

if (temp >= 90) {
	console.log("Summer time");
} else if (temp < 90) {
	console.log("Good temperature");
} else if (temp < 70) {
	console.log("something else");
} else if (temp < 50) {
	console.log("Fall weather");
} else {
	console.log(`${temp}`);
}

if (temp >= 90) console.log("Summer time");

if (temp < 90) console.log("Good temperature");

if (temp < 70) console.log("something else");

if (temp < 50) console.log("Fall weather");

/* 
    ? Syntax:

    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator ( || )
        * true if one of the conditions is true
        * ex: I will buy paint if it's blue or gray
        * gray, no blue = buy
        * blue, no gray = buy
        * blue, gray = buy
        * no blue, no gray = no buy
    * AND Operator ( && )
        * true if both conditions are true
        * gray, blue = buy
        * no gray, blue = no buy
        * gray, no blue = no buy
        * no gray, no blue = no buy
    * NOT operator (! or in expression ! =)
        * flips the logical expression
*/

// ? NOT example

lightSwitch = true;
console.log(lightSwitch);
lightSwitch = !true;
console.log(lightSwitch);
console.log(lightSwitch != true);

if (!true) console.log("Will this run?");

// ? AND OR Examples

let sensors = "armed";
let alarm = false;

if (sensors == "armed" || alarm) {
	console.log("The system is active");
} else if (sensors == "disarmed" || alarm == false) {
	console.log("False alarm");
} else if (sensors == "armed" && alarm == false) {
	console.log("System fault");
}

/* 
    ! Challenge
    * create an age variable with a number between 0-82
    * check if the age is under 16, say they can't drive
    * if the age is betweetn 16 & 18, say they can drive but not drink
    * if the age is between 18 & 21, they can vote but not drink
    * if the age is over 21, they can drink
    ! Spicey mode
    * how would you handle if a user inputs not a number? ex: "potato" as age
*/

let age = 19;

if (age < 16) console.log("can't drive");
else if (age < 18) console.log("can drive, can't drink");
else if (age < 21) console.log("can vote can't drink");
else if (age >= 21) console.log("you can do anything");
else console.log(`${age} is not a number`)

/* 
    ? Ternaries
    * an expression
    * a quick way of creating if/else conditional
    * commonly used to check a quick condition
*/

/* 
    ? Syntax
    conditional ? expr if true : expr if false

    ? Chaining Syntax
    conditional ? expr if true
        : else if epxr ? expr if true
        : else if expr ? expr if true
        : else or Null
*/

let ignition = true

ignition ? console.log("ready to start") : console.log("turn ignition on")

if (ignition) {
    console.log("ready to start")
} else {
    console.log("turn ignition on")
    console.log("make sure your light are on")
    console.log("hop on the autobahn")
}

// ? Chaining Ternaries

let season = 2

season == 1 ? console.log("spring")
            : season == 2 ? console.log("Summer")
            : season == 3 ? console.log("Autumn")
            : season == 4 ? console.log("Winter")
            : null

/* 
    ? Switch Statements
    * execute a block of code dependent upon a different case
    * we ask a question requiring specific response determined by our answer
*/

let uprightInstructor = "Paul"

switch(uprightInstructor) {
    // information that cases are compared against
    case "Paul":
        // condition that's compared against switch
        // executes the code below
        console.log(`${uprightInstructor} is a Senior SWE`)
        break
    case "Paul":
        console.log(`${uprightInstructor} is one of the best instructors`)
        break
    case "Mary":
        console.log(`${uprightInstructor} is a Senior TA`)
        break
    default:
        console.log(`${uprightInstructor} may not work here`)
}