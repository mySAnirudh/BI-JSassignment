// 40. Modify Array Data With Indexes:
// Unlike strings, the entries of arrays are mutable and can be changed freely.
// Example
// var ourArray = [50,40,30];
// ourArray[0] = 15;
// ourArray now has the value [15, 40, 30].
// Note: There shouldn't be any spaces between the array name and the square
// brackets, like array [0]. Although JavaScript is able to process this correctly, this
// may confuse other programmers reading your code.
// Modify the data stored at index 0 of myArray to a value of 45.

var myArray = [1,9,7,9,10,15]; //declaring a array with elements in a variable.
myArray[0] = 45;// changing the value of first element in a array.
console.log(myArray);