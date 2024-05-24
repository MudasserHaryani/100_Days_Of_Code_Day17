//Day 17: function with Rest parameters: write a function that takes a rest parameters representing multiple hobbies. It should lof each hobby with a statement saying you enjoy that hobby.
// Define a function that accepts multiple hobbies as arguments
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    //Loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        //Logs a statment for each hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
//calls the function with three hobbies
logHobbies("reading", "coding", "sleeping");
//Question 50: Multiline Template Literals: Use template literals to create readable text blocks that incorporate variables and expressions. 
//Using template literal to define a multiline string 
var myIdealDay = "My ideal day would involve:\n1. Waking up early and goind for a Namaz e Fajar.\n2. Spending a few hours coding on a personal project.\n3. Ending the dat by reading a Holy Quran.";
// logging the multiline string to the console 
console.log(myIdealDay);
//Question 51: refactoring to Arrow Function: take a simple function that calculates the area of a rectangle and refactor it into an arrow function
//Original function for calculating the area of a rectangle 
function calculateArea(width, height) {
    return width * height;
}
//Refactored into arrow function 
var calculateAreaArrow = function (width, height) { return width * height; };
//Example usage of the arrow function 
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle 
