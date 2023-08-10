//insertion

// function insertion_sort(arr){
//     console.log(arr.length)
//     for(let i=1;i<arr.length;i++){
//      var temp = arr[i];
//      let j = i-1;
//      while(j>=0 && arr[j]>temp){
//         arr[j+1]=arr[j];
//         j--
//      }
//      arr[j+1]=temp;
//     }
//     console.log(arr);
// }

// insertion_sort([12,12,23,43,2,21,4])


// function insertion_sort(arr){
//     for(let i=1;i<arr.length;i++){
//         var temp = arr[i];
//         var j = i-1;
//         while(j>=0&&arr[j]>temp){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=temp;
//     }
//     console.log({arr});
// }

// insertion_sort([12,14,6,123,0])

// function insertion_sort(arr){
//     for(let i=1;i<arr.length;i++){
//         var temp = arr[i];
//         var j = i-1;
//         while(j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=temp;
//     }
//     console.log({arr});
// }
// insertion_sort([123,2,23,3,5345])


/////selection sort

// function selection_sort(arr){

//     for(let i=0;i<arr.length-1;i++){
//         var index_min= i;
//          for(let j = i+1 ;j< arr.length; j++){
//            if(arr[j]<arr[index_min]){
//             index_min=j;
//            }
//          }

//          if(index_min !== i){
//             let temp = arr[i];
//             arr[i]= arr[index_min];
//             arr[index_min]=temp;
//          }

     
//     }
//     console.log({arr})

// }

// selection_sort([1,12,11,2,5]);

// function selection_sort(arr){
//     for(let i = 0; i<arr.length-1 ; i++){
//         var index_min = i;
//         for(let j= i+1; j<arr.length; j++){
//            if(arr[index_min]>arr[j]){
//             index_min=j;
//            }

//         }
//         if(index_min !== i){
//             let temp = arr[i];
//             arr[i] = arr[index_min];
//             arr[index_min]=temp;
//         }
//     }
//     console.log({arr});
// }

// selection_sort([1,12,3,23])


// function selection_sort(arr){
//     for(let i =0; i<arr.length-1; i++){
//         var index_min = i;
//         for(let j=i+1;j<arr.length; j++){
//             if(arr[index_min]>arr[j]){
//                 index_min = j;
//             }
//         }
//         if( index_min !== i){
//             let temp= arr[i];
//             arr[i]=arr[index_min];
//             arr[index_min]=temp;
//         }
//     }
//     console.log({arr})
// }

// selection_sort([1,7,2,9,2,0])



///insertion sort
// function insertion_sort(arr){
//     for(let i =1;i <arr.length; i++){
//         var temp = arr[i];
//         var j = i-1;
//         while( j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=temp;
//     }
//     console.log({arr});
// }

// insertion_sort([12,12,45,21,78])


// function insertion_sort(arr){
//     for(let i=1; i<arr.length; i++){
//         let temp = i;
//         let j = i-1;
//         while(j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]= temp;
//     }
//     console.log(arr);
// }

// insertion_sort([12,2,234,1,35])


// selection sort

// function selection_sort(arr){
//     for(let i = 0; i<arr.length-1; i++){
//         var index_min = i;
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[j]<arr[index_min]){
//                 index_min=j;
//             }
//         }
//         if(index_min !== i){
//             let temp = arr[i];
//             arr[i]= arr[index_min];
//             arr[index_min]=temp;
//         }
//     }
//     console.log({arr});
// }

// selection_sort([1,65,2,35,8,54,3])

// function insertion_sort(arr){
//     for(let i =1; i<arr.length; i++){
//          let temp = arr[i];
//          let j = i-1;
//          while (j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j];
//             j--;
//          }

//          arr[j+1]=temp;
//     }
//     console.log({arr});
// }
// insertion_sort([1,12,3,24,5])