function filterEvenNumbers(arr, callback) {
    const evenNumbers = arr.filter(callback);
    
    return evenNumbers;

  }
  

  
  const isEven = (num) => num % 2 === 0;
 
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const evenResult = filterEvenNumbers(numbers, isEven);
  console.log("Even numbers:", evenResult); 
  