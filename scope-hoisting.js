/* 
    ? Scope
    * used to determine how information in different code blocks can be accessed

    ? Five Scope Types:
    * global/window
    * block
    * function
    * module
    * lexical
*/

/* 
    ? Global
    * outermost scope
    * window object when in the client
    * global object aka .js file in Node
    * accessible from every other scope
*/

let globalScopeVariable = "this is a global scope variable";

{
	console.log("this is a scope");
}

{
	{
		{
			{
				{
					{
						{
							{
								{
									{
										{
											{
												{
													{
														{
															{
																console.log(globalScopeVariable);
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

{
	let scopedVariable = "This is a scoped variable";
}

// console.log(scopedVariable) // ReferenceError

/* 
    ? Function Scope
    * accessible only inside of a function
*/

function scope() {
	let fxScopeVariable = "This is a function scope variable";
	console.log(fxScopeVariable);
	console.log(globalScopeVariable);
}

scope();
// console.log(fxScopeVariable) // ReferenceError

/* 
    ? Block Scope
    * anywhere there are { }
*/

for (i of "some string") {
	let character = "";
	character = i;
	console.log(character);
}

// console.log(character) // ReferenceError

/* 
    ? Lexical Scope
    * variables are accessible by their nested position
    * inner fx scope can access outer fx scope
    * defined by where it's written, not invoked
*/

function outerFx() {
	// outer fx scope
	let ofxsv = "Outer fx scope variable";

	function innerFx() {
		// inner fx scope
		let ifxsv = "Inner fx scope variable";
		console.log(ofxsv);
		console.log(ifxsv);
	}
	return innerFx();
}

console.log(outerFx());

/* 
    ? Module Scope
    * encapsulates objects nested inside of other modules or files
    * allows us the use of other files
*/

const capitalizeWord = require("./capitalizeWord");
console.log(capitalizeWord);

console.log(capitalizeWord("potato"));

/* 
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpeter runs the code twice
        * first, it looks for VARiables and fx declarations and hoists them
        * it allocates memory space for those declarations
        * it then executes the code line by line
*/

// console.log(myName) // Reference Error
let myName = "Paul Niemczyk";
console.log(myName);

console.log(age);
var age = 28;
// console.log(age)

let someVariable;
console.log(someVariable);

// ? Function Declarations are hoisted

x();
function x() {
	console.log("Function declaration");
}
x();

// ? Function Expressions are NOT hoisted

// y() // Reference Error
// y() // TypeError bc var gets hoisted and we're trying to invoke an undefined()
var y = function () {
	console.log("Function expression");
};
y();

function run() {
	var foo = "foo";
	let bar = "bar";
	console.log(foo, bar);
	{
		var moo = "moo";
		let baz = "baz";
		console.log(moo, baz);
	}
	// console.log(baz) // ReferenceError
	console.log(moo); // ? WORKS: scoped to immediate function block
}

run();

{
    function z() {
        {
            var something = "something"
        }
    }
    z()
    // console.log(something)
}

{
    var somethingElse = "something else"
}
console.log(somethingElse)
// ? This works because global scope is also a function scope

// ! THIS IS BAD !! Don't you hoisting to your "benefit"!!!!!!!