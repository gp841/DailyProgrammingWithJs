function haveSameLastDigit(num1, num2) {
    return Math.abs(num1 % 10) === Math.abs(num2 % 10);
}

// Example usage
const num1 = 123;
const num2 = 456;

if (haveSameLastDigit(num1, num2)) {
    console.log(`The last digits of ${num1} and ${num2} are the same.`);
} else {
    console.log(`The last digits of ${num1} and ${num2} are different.`);
}
