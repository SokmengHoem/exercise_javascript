function squareArrayElements(arr, callback) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
}
  

const squareCallback = (num) => num *num;
const numbers = [1, 2, 3, 5, 10]; 
const squaredNumbers = squareArrayElements(numbers, squareCallback);

console.log(squaredNumbers);