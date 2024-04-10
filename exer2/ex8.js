function bubbleSort(arr) {
    return arr.sort((a,b) => a-b);
}

// Example usage:
const numbers = [5,10, 3, 8, 1, 2];
console.log("Original Array:", bubbleSort(numbers));













// let len = arr.length;
    // for (let i = 0; i < len - 1; i++) {
    //     for (let j = 0; j < len - 1 - i; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             // Swap the elements
    //             let temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }