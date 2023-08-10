
// function selection_sort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         var index_min = i;

//         for (let j = i + 1; j < arr.length; j++) { 
//             if (arr[index_min] > arr[j]) {
//                  index_min = j;
//             }
//         }

//         if (index_min !== i) { 
//             let temp = arr[i];
//             arr[i] = arr[index_min];
//             arr[index_min] = temp;
//         }
//     }
//     console.log({ arr });
// }

// selection_sort([12, 43, 1, 5, 234]);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function selection_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        var index_min = i;

        // Find the index of the minimum element in the unsorted part of the array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[index_min] > arr[j]) {
                index_min = j;
            }
        }

        // Swap the minimum element with the first element in the unsorted part
        if (index_min !== i) {
            let temp = arr[i];
            arr[i] = arr[index_min];
            arr[index_min] = temp;
        }
    }
    console.log({ arr });
}

// Read user input and call the sorting function
rl.question('Enter numbers separated by spaces: ', (input) => {
    const arr = input.split(' ').map(Number);
    selection_sort(arr);
    rl.close();
});
