// function insertionsort() {
//    var temp, inner;
//    for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
//       temp = this.dataStore[outer];
//       inner = outer;
//       while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
//          this.dataStore[inner] = this.dataStore[inner-1];
//          --inner;
//       }
//       this.dataStore[inner] = temp;
//    }
// }

/////////////////////////

// var testArray = [7, 3, 5, 1, 9, 2];

// var sortingObject = {
//    dataStore: testArray,
//    insertionsort: function() {
//       var temp, inner;
//       for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
//          temp = this.dataStore[outer];
//          inner = outer;
//          while (inner > 0 && this.dataStore[inner - 1] >= temp) {
//             this.dataStore[inner] = this.dataStore[inner - 1];
//             --inner;
//          }
//          this.dataStore[inner] = temp;
//       }
//    }
// };

// sortingObject.insertionsort();
// console.log(sortingObject.dataStore);

////////
// Import the 'readline' module to read input from the user
const readline = require('readline');

// Create an interface for reading and writing using stdin (input) and stdout (output)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform insertion sort
function insertionsort(arr) {
  // Loop through the array starting from the second element
  for (let i = 1; i < arr.length; ++i) {
    let temp = arr[i]; // Store the current element
    let j = i - 1;

    // Compare and move elements to the right to make space for the current element
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at the correct position
    arr[j + 1] = temp;
  }
}

// Read user input
rl.question("Enter a list of numbers separated by spaces: ", function(userInput) {
  // Split the user input into an array of strings, and convert them to numbers
  const inputArray = userInput.split(" ").map(function(item) {
    return parseFloat(item);
  });

  // Call the insertion sort function
  insertionsort(inputArray);

  // Display the sorted array
  console.log("Sorted Array:", inputArray);

  // Close the readline interface
  rl.close();
});


// output:
// Enter a list of numbers separated by spaces: 12 4 1
// Sorted Array: [ 1, 4, 12 ]
