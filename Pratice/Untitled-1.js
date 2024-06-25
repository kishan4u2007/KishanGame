// Ques 1
// ******************************************************************************
// Get Vowels Count
// ******************************************************************************
//Way 1
// function getVowelsCount(sentance) {
//   return sentance.match(/[aeuio]/gi) ? sentance.match(/[aeuio]/gi).length : 0;
// }

// Way2  for of and rejex
// function getVowelsCount(sentance) {
//   let vowelsCount = 0;
//   for (let char of sentance) {
//     //add one to variable above if char is vowels
//     if (/[aeiou]/gi.test(char)) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }

// Way3  for of and includes
// function getVowelsCount(sentance) {
//   let vowelsCount = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let char of sentance) {
//     //add one to variable above if char is vowels
//     if (vowels.includes(char)) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }

//console.log(getVowelsCount("My name is kishan"));

// ******************************************************************************
// Solution 1 for Each
// const reverseString = (str) => {
//   if (str < 0) return -1 * reverseString(-str);
//   const solution = (str + "").split("").reverse().join("");
//   return solution;
// };

// Solution 2 for Each
// const reverseString = (str) => {
//   if (str < 0) return -1 * reverseString(-str);
//   let reverString = "";
//   //cycle to push each char to temp variable above one by one
//   (str + "").split("").forEach((char) => {
//     reverString = char + reverString;
//   });
//   return reverString;
// };

// Solution 3 Array.reduce
// const reverseString = (str) => {
//   if (str < 0) return -1 * reverseString(-str);
//   return (str + "").split("").reduce((prev, curr) => {
//     console.log(curr + prev);
//     return curr + prev;
//   }, "");
// };

// console.log(reverseString("-542"));

// isPalindrome
//return str.split("").reverse().join("") === str;

// ******************************************************************************
// ******************************************************************************
//Remove duplicate
// ******************************************************************************

//const array = ["2", "2", "3", "3"];

// function removeDuplicate(array) {
//   return [...new Set(array)];
// }

// function removeDuplicate(array) {
//   const map = {};
//   for (const char of array) {
//     if (map[char]) {
//       map[char]++;
//     } else {
//       map[char] = 1;
//     }
//   }
//   return Object.keys(map);
// }

// console.log(removeDuplicate(array));
// ******************************************************************************

// ******************************************************************************
// 5.  Anagram
// ******************************************************************************
// Only Alpha characters are allowed [a,b,c,d,e...z]
// - no spaces nor punctuation
// ignore case - lowercase and uppercase are the same
// isAnagram("Night", "Thing")
// isAnagram("Statue of Liberty", "Built to stay free")
//wrong
// isAnagram("Daddy", "Light")
//Solution 1
function isAnagram(stringA, stringB) {
  const normalize = (str) => {
    //only accept Alpha characters and lowercase and split it so we can used array method and sort accending
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
  };
  //now you can compare two string
  return normalize(stringA) === normalize(stringB);
}

//Solution 2  using for loop
function createCharMap(str) {
  const map = {};
  const normalizeStr = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of normalizeStr) {
    map[map] = map[map] + 1 || 1;
  }
  return map;
}

function isAnagram(stringA, stringB) {
  const charMapA = createCharMap(stringA);
  const charMapB = createCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("Night", "Thing"));
console.log(isAnagram("Statue of Liberty", "Built to stay free"));
console.log(isAnagram("Daddy", "Light"));

// ******************************************************************************
//Fizz Buzz
// ******************************************************************************
// Sample 1
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FuzzBuzx");
    } else if (i % 3 === 0) {
      console.log("Fuzz");
    } else if (i % 5 === 0) {
      console.log("bUZZ");
    } else {
      console.log(i);
    }
  }
}

// Sample 2
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log((++i % 3 ? "" : "Fizz") + (++i % 5 ? "" : "Buzz") || i);
  }
}
fizzBuzz();

//******************************************************************************
// ******************************************************************************
//Find Min and Max [3 Solutions]
// ******************************************************************************
// option 1
function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

//option 2
function getMinMax(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  return {
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
  };
}

//option 3
function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let current of arr) {
    if (current > max) {
      max = current;
    }

    if (current < min) {
      min = current;
    }
  }
  return {
    min,
    max,
  };
}

console.log(getMinMax([1, 10, 2, 9, 7, 4, 3, 2, 5]));

//******************************************************************************
// ******************************************************************************
//Capitalize your sentance
// ******************************************************************************

function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].upperCase() + word.slice(1))
    .join(" ");
}

// option 2 reduces
function capitalize(sentence) {
  return sentence.split(" ").reduce((prev, curr) => {
    return `${prev} ${curr[0].upperCase() + curr.slice(1)}`;
  }, "");
}

// option 3 reduces
function capitalize(sentence) {
  const word = [];
  for (let word of sentence.split(" ")) {
    word.push(word[0].toUpperCase() + word.slice(1));
  }
  return word.join(" ");
}

console.log(capitalize("hi there !!!"));

// ******************************************************************************
// ******************************************************************************
//Get Maximum Character In A String [Challenging😓]
// ******************************************************************************
// getMaxChar("aaaabbc") // a

function normalizeString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

function getMaxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of normalizeString(str)) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // return charMap;

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(getMaxChar("aaacc"));
console.log(getMaxChar("a a a a a BBB  AA"));
console.log(getMaxChar("aaacc"));

//******************************************************************************
// ******************************************************************************
//Javascript Interview: Balanced Parenthesis [Very Common]

// ******************************************************************************
function isBalanced(str) {
  const stack = [];
  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      const lastStackItem = stack.pop();
      //it is not balanced if last item on array is not an opening paratisis
      if (lastStackItem !== "(") {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
}

//balanced
console.log(isBalanced(""));
console.log(isBalanced("()"));
console.log(isBalanced("(())"));
console.log(isBalanced("()()()"));

//not balanced
console.log(isBalanced(" "));
console.log(isBalanced("("));
console.log(isBalanced(")"));
console.log(isBalanced(")()("));
console.log(isBalanced("(()))"));






// Ques 2
// ******************************************************************************
// Implicit and Explicite Binding
// ******************************************************************************

import { func } from "prop-types";

var obj = {
  name: "Piyush",
  display: function () {
    console.log(this.name);
  },
};

var obj1 = {
  name: "ABc",
};

obj.display.call(obj1);

// ******************************************************************************
// Ques 3. Implement Caching/Memoize funtion

function myMomoize(fn) {
  const res = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(this, ...args);
    }
    return res[argsCache];
  };
}

function infineCurry(a) {
  if (!b) return infineCurry(a + b);
  return a;
}

// function myMomoize(fn, context) {
//   const res = {};
//   return function (...args) {
//     const argsCache = JSON.stringify(args);
//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(this || context, ...args);
//     }
//   };
// }

// const ClumsyProduct = (num1, num2) => {
//   for (let i = 1; i < 10000000; i++) {}
//   return num1 * num2;
// };

// const memoizedClumsyProduct = myMomoize(ClumsyProduct);

// console.time("First Call");
// console.log(memoizedClumsyProduct(9467, 7649));
// console.timeEnd("First Call");

// console.time("First Call");
// console.log(memoizedClumsyProduct(9467, 7649));
// console.timeEnd("First Call");

// ******************************************************************************
// Output Based Question on Event Loop
// ******************************************************************************
// console.log("a");
// setTimeout(function () {
//   console.log("Set");
// }, 0);
// Promise.resolve(() => console.log("pro")).then((res) => res());
// console.log("b");

//Ans:-  a, b, prt, set

// ******************************************************************************
// Question 5.  Infinite Currying
// ******************************************************************************

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(5)(2)(7)(8)());

// ******************************************************************************
// Question 6.  Implement This code
// ******************************************************************************

const calc = {
  total: 0,
  // add (a) {
  //   this.total = this.total + a;
  //   return this;
  // },
  add: function (a) {
    this.total = this.total + a;
    return this;
  },
  multiply: function (a) {
    this.total = this.total * a;
    return this;
  },
  subtract: function (a) {
    this.total = this.total - a;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);