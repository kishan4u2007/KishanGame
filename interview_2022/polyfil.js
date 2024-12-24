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


// *********************************************************************************


const numbers = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function(callback, initialValue){
    for (let i = 0; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
    
}

// Using the custom reduce polyfill
const sum = numbers.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 

// ************************************************************************

function myMomoize(fn) {
  const res = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(this, ...args);
    }else {
         console.log("Cache")
    }
    return res[argsCache];
  };
}

const ClumsyProduct = (num1, num2) => {
  return num1 + num2;
};

const memoizedClumsyProduct = myMomoize(ClumsyProduct);

console.time("First Call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First Call");

console.time("First Call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First Call");


//Flattern Array

const arr = [1,2,3, [4, 5, 6, [7,8,9]]]

Array.prototype.customFlat =  function(depth = 1) {
    depth =  Math.floor(depth);
    
    function flattern(arr, depth) {
      return arr.reduce((acc, item) => {
        if(Array.isArray(item) && depth > 0) {
            acc.push(...flattern(item, depth - 1))
        }else{
            acc.push(item)
        }
        return acc
    }, [])
    }
    
  return flattern(this, depth)
    //return depthCount
}

console.log(arr.customFlat(2))



















//parent componet
const parentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState([]);

  const handleDataFromChild = (data) => {
    setDataFromChild(data)
  }

  return (
    <ChildComp onSendData={handleDataFromChild} />

  )
}


//Child Component
const ChildComp = ({onSendData}) => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const sendDatatoParent = () => {
    onSendData(inputValue)
  }
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={sendDatatoParent}>Send Data to Parent</button>
    </div>
  )
}


//ThemeContext.js

//App.js

//ThemeToggleButton.js

// Create a Context
const ThemeContext = createContext();


// Create a Provider Component
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light") )
  }
  return (
    <ThemeContext.Provider value={theme, toggleTheme}>
      {children}
    </ThemeContext.Provider>

  )
}

const App = () => {
  return (
    <ThemeProvider>
        <ThemeToggleButton />
    </ThemeProvider>
  )
}

import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
  )
};

