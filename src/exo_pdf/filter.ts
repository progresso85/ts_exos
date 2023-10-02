// Function pour filtrer les nombres pairs dans un tableau.
function filterEvenNumbers (numbers: number[]) {
  
    return numbers.filter(num => num % 2 === 0);
}

// Test the function
let numbers = [1,2,3,4,5,6,7,8,9];
const evenNumber = filterEvenNumbers(numbers);
console.log(evenNumber);