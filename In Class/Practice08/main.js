function multiply(x, y) {
    return x*y;
}

function isEven(num) {
    if (num %2 == 0) {
        return true;
    }else{
        return false;
    }
}

const difference = function subtract(a, b) {
    return a - b;
}

const greeting = function(name) {
    return `Hello, ${name}`
}


function calculate(x, y) {
    const squareSum = function(a, b) {
        return (a + b) ** 2;
    }
    return squareSum(x, y)
}

function average(num1, num2, num3) {
    const avg = function(a, b, c) {
        return (a + b + c) / 3;
    }
    return avg(num1, num2, num3);
}

//multiply = (a, b) => a*b;
greet = (name) => `Hello, ${name}!`;
square = (x) => x*x;
isEven = (num) => num%2 === 0;
findMax = (numbers) => Math.max(...numbers);
addTwoNumbers = (a,b) => a + b;