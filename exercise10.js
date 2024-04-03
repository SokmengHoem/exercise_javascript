function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

let numbers = [12, 234, 45, 456, 32, 10];
console.log("Largest number in the array:", findLargestNumber(numbers));
