// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary operators and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//     this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk, I go to the store to get more." */
// Condition: Running out of milk.
// Action: Just going to the store, to the store.

var outOfMilk = true;
var goingToStore = false;

if (outOfMilk === true) {
    goingToStore = true;
    outOfMilk = false;
}

// console.log(goingToStore);
// console.log(outOfMilk);



/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set
 *  to the number 5. */

var x = 6;

if (x === 5) {
    console.log("Yep, that's five!");
}



// We can also use our conditional logic in functions.

/** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "Yep, that's a number";
//     }
// }

// console.log(isItANumber(7));
// console.log(isItANumber("Derek"));
// console.log(isItANumber(true));


// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

/** Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
 * I don't, I'll go to the store instead." */

// How would we write this as a if/else code block?

var ownsCow = false;

if (ownsCow === true) {
    // Milk my cow for milk.
} else {
    // Going to Target for milk.
}

// Reversed

if (ownsCow === false) {
    // Going to Target for milk.
} else {
    // Milk my cow for milk.
}


/** TO-DO: Let's expand our previous isItANumber function. Now I want to also return string when we aren't
 * passed a number. How do I refactor our function? */

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "Yep, that's a number."
//     } else {
//         return "Nope, that ain't a number."
//     }
// }

// console.log(isItANumber(7));
// console.log(isItANumber("Derek"));
// console.log(isItANumber(true));

// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first nor second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. But since I
 * don't, I could go to the store, but luckily, I own a goat, so I can get milk from it instead." */

// How would we write this as a if/else if/else code block?

ownsCow = false;
var ownsGoat = true;

// if (ownsCow === true) {
//     console.log("Get my milk from my cow.");
// } else if (ownsGoat === true) {
//     console.log("Get my milk from my goat.");
// } else {
//     console.log("Going to Target for milk.");
// }

/** TO-DO: Let's make a function that takes in a number and will return three different strings for an
 * argument lesser than, greater than, or equal to 35. */

function isThisThirtyFive(parameter) {
    if (parameter === 35) {
        return "Nail on head! That's thirty-five!";
    } else if (parameter > 35) {
        return "Woah, that's way bigger than thirty-five!";
    } else {
        return "Not quite. That's smaller than thirty-five...";
    }
}

// console.log(isThisThirtyFive(34));
// console.log(isThisThirtyFive(36));
// console.log(isThisThirtyFive(35));


// TERNARY EXPRESSION: A operation to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Operation was true." : "Operation was false.";

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we
 * aren't: I want to make a bowl of cereal." */

// How would we write this as a ternary operator?

    var doWeHaveMilk = false;

var action = (doWeHaveMilk) ? "Making a bowl of Honey Oh's." : "Headed to Aldi, see you in a bit.";

// console.log(action);

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary operator. */

function isItANumber(parameter) {
    return (typeof parameter === "number") ? "Yep, that's a number." : "Nope, that ain't a number.";
}

// console.log(isItANumber(7));
// console.log(isItANumber("Derek"));
// console.log(isItANumber(true));

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch(color) {
//     case "green":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "orange":
//         alert("That's my brother's favorite color!");
//         break;
//     default:
//         alert(color + " is a weird color, my dude.");
//         break;
// }

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

// var animal = "Cow";
// switch (animal) {
//     case "cow":
//         console.log("Milking my cow!");
//         break;
//     case "goat":
//         console.log("Milking my goat!");
//         break;
//     case "camel":
//         console.log("Milking my camel!");
//         break;
//     default:
//         console.log("Does CVS sell milk?");
//         break;
// }

/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

switch (prompt("What's your favorite sandwich meat?").toLowerCase()) {
    case "olive loaf":
        alert("A bold choice, sir/ma'am.");
        break;
    case "brisket":
        alert("Congratulations on giving the correct answer.");
        break;
    default:
        alert("That's gross, dude. No one likes that...");
        break;
}

// Let's work on the exercise!