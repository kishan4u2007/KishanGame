// Polyfill  :  Polyfill is a browser fallback, made in JS that allow functionality you expect to work in the modern browser
// in the older browser

// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
// For example, a polyfill could be used to mimic the functionality of a text-shadow in IE7 using proprietary IE filters, or mimic rem units or media queries by using JavaScript to dynamically adjust the styling as appropriate, or whatever else you require

// best Polyfill example :  Babel

// Map, Filter, Reduce

const cites = ["New Delhi", "Jaipur", "Noida", "Rohtak"];

//var result = cites.map((c) => console.log(c));

Array.prototype.myMap = function (callback) {
  var finalArray = [];
  for (var i = 0; i < this.length; i++) {
    finalArray.push(callback(this[i], i, this));
  }
  return finalArray;
};

var result = cites.myMap((c) => console.log(c));

// ******************************************************************************************

var ages = [34, 23, 54, 6, 34, 12];

var result = ages.filter((age) => age > 10);

Array.prototype.myFilter = function (callback, context) {
  var finalArray = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      finalArray.push(this[i]);
    }
  }
  return finalArray;
};
