
function selection_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        var index_min = i;

        for (let j = i + 1; j < arr.length; j++) { 
            if (arr[index_min] > arr[j]) {
                 index_min = j;
            }
        }

        if (index_min !== i) { 
            let temp = arr[i];
            arr[i] = arr[index_min];
            arr[index_min] = temp;
        }
    }
    console.log({ arr });
}

selection_sort([12, 43, 1, 5, 234]);
