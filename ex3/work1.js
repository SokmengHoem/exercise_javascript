function squareArrayElements(arr, callback) {
    const squaredArray = arr.map(callback);
    return squaredArray;
  }
  


const squareCallback = (num) => num * num;
const numbers = [1, 2, 3, 5, 10]; 
const squaredNumbers = squareArrayElements(numbers, squareCallback);
console.log(squaredNumbers);