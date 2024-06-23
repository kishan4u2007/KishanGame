//Reverse a string:


function reverseString(str) {
    return str.split("").reverse().join("");
}


//'Check if a string is a palindrome:


function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

//Find the factorial of a number:


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
//Check if a number is prime:


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//Find the sum of all elements in an array:


function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

//Remove duplicate elements from an array:


function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

//Find the largest element in an array:


function findMax(arr) {
    return Math.max(...arr);
}

//Find the smallest element in an array:


function findMin(arr) {
    return Math.min(...arr);
}

//Sort an array of numbers in ascending order:


function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

//Find the maximum occurring character in a string:


function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}





//Check if two strings are anagrams of each other:


function areAnagrams(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

//Find the Fibonacci sequence up to a given number of terms:


function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


//Find the longest word in a sentence:


function longestWord(sentence) {
    const words = sentence.split(" ");
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}


//Convert a temperature from Celsius to Fahrenheit:


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


//Convert a temperature from Fahrenheit to Celsius:


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


//Check if a given year is a leap year:

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


//Find the area of a circle given its radius:


function circleArea(radius) {
    return Math.PI * radius * radius;
}

//Calculate the sum of digits of a number:



function sumOfDigits(num) {
    return num.toString().split("").reduce((total, digit) => total + parseInt(digit), 0);
}

//Find the reverse of a number:


function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

//Check if a number is an Armstrong number:


function isArmstrong(num) {
    const digits = num.toString().length;
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
