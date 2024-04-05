
function median(numbers) {
    // Sort the array manually (using bubble sort)
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap numbers[j] and numbers[j + 1]
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    const length = numbers.length;
    const midIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (numbers[midIndex - 1] + numbers[midIndex]) / 2;
    } 
    else {
        return numbers[midIndex];
    }
}
const numbers = [5, 2, 1, 4, 6];
console.log(median(numbers)); 