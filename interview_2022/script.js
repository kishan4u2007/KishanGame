// Ques 2
// ******************************************************************************
// Implicit and Explicite Binding
// ******************************************************************************


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
