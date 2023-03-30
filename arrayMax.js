var numbers = [1, 5, 3, 7, 2, 8];
var maxNumber = numbers[0]; // Initialize maxNumber to the first element of the array
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);
