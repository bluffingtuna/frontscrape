var Benchmark = require("benchmark");

var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];

var random_value = stuff[Math.floor(Math.random() * 14)];

// Write a for loop that looks at each index
//  of the array to see if it matches the random value

// If it does match the random value display
//  an alert box with the index of the array and the value
var startTime = new Date();
console.time("test")
for (var i = 0; i < stuff.length; i++) {
    if (stuff[i] == random_value)
        console.log(`index: ${i}, value: ${stuff[i]}`)
}
console.timeEnd("test")

var endTime = new Date();
var timediff = endTime - startTime;
var timediffs = timediff / 1000;
console.log(timediff);
console.log(timediffs);
