// Question1
const input = [2,7,11,4,-2]
const output = [20,15,11,18,24]

const arraySum = function(arr) {
    const TotalSum = arr.reduce((prev, acc) => acc + prev, 0);
    return arr.map((item) =>  TotalSum - item)
}

const outputData = arraySum(input);
console.log(outputData);



// ------------------------------------------------------

// Question2
const input1 = {a:1, b:2,c:3,d:10, e:12}
const input2 = {a:2,e:12, f:6, d:10}

//const output = {d:10, e:12}

const findCommonEntries =  function(obj1, obj2) {
     const output = {};

    for (const key in obj1) { 
        if(obj1[key] === obj2[key]) {
            output[key] = obj1[key];
        }
    }
    return output
}

const finalResult = findCommonEntries(input1, input2);
console.log(finalResult);

// -------------------------------------------------------------------

// Question3 -- Apprach1
const input1 = [1,2, -2, 11,7,1] //7
const input2 = [1,4,7,2,4,7] //4

// second Largest Number

const secondLargest = function(arr) {
    //const result = arr[arr.length - 2];
      const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
      console.log(uniqueArr)

    return uniqueArr.length > 1 ? uniqueArr[1] : "No second largest number found.";
}

console.log(secondLargest(input2))


// Question3 -- Apprach2  

const secondLargest2 = function(arr) {
    let largest = -Infinity;
      let secondLargest = -Infinity;
    
      for (const num of arr) {
        if (num > largest) {
          secondLargest = largest;  // Update second largest
          largest = num;            // Update largest
        } else if (num > secondLargest && num !== largest) {
          secondLargest = num;      // Update second largest
        }
      }
    
      return secondLargest === -Infinity
        ? "No second largest number found."
        : secondLargest;
    }
// ---------------------------------

// Question 4
//ROTATE array by 2 place : like this


// const output2 = [11,4,-2,2,7]

function rotateArray(arr, positions) {
    const len = arr.length;
    if (len === 0) return arr;
  
  
    // Rotate the array to the right by slicing
    const rotatedArray =   [...arr.slice(positions, arr.length), ...arr.slice(0, positions)];
    
  
  
    return rotatedArray;
  }
  
  const input = [2, 7, 11, 4, -2];
  const output = rotateArray(input, 2);
  console.log(output);  // Expected output: [11, 4, -2, 2, 7]

//   -------------------------------------------------------------------------------------

// Question  5

const input = [5,7,9,11,15,17];
const output =  13;
//Missing ODD Number

const missingOddNumber =  function(arr) {
   // Loop through the array and check for a gap of more than 2 between consecutive numbers
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 2) {
        
      // The missing odd number is the one in between arr[i] and arr[i + 1]
      return arr[i] + 2;
    }
  }
    
}
console.log(missingOddNumber(input))-


// const missingOddNumber =  function(arr) {
//     // Loop through the array and check for a gap of more than 2 between consecutive numbers
//    for (let i = 0; i < arr.length - 1; i++) {
//      let current = arr[i];
//      let next =  current + 2
     
//      if(arr[i + 1] !== next) {
//          console.log(next);
//         break;
//      }
//    }
     
//  }
//  console.log(missingOddNumber(input))
// -----------------------------------------------------------------------------------
// Question  6
const str = "This is javascript code"
//revers String line by line

const reversStr =  function(str) {
   // Loop through the array and check for a gap of more than 2 between consecutive numbers
  const solution = str.split(" ").map((item) =>  console.log(item.split("").reverse().join("")));
  return solution
    
}
reversStr(str)

/// Question  7
const App = () => {
    // Array of countries with cities
    const countries = [
      { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
      { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
      { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
    ];
  
    // State to hold the selected country and cities
    const [selectedCountry, setSelectedCountry] = useState("");
    const [cityList, setCityList] = useState([]);
  
    // Handle country change and update cities
    const handleCountryChange = (e) => {
      const selectedValue = e.target.value;
      setSelectedCountry(selectedValue);
  
      // Find the selected country's cities
      const country = countries.find((c) => c.value === selectedValue);
      setCityList(country ? country.cities : []); // Update city list
    };
  
    return (
      <div style={{ padding: "20px" }}>
        <h2>Country and City Dropdown</h2>
  
        {/* Country Dropdown */}
        <label htmlFor="country">Select Country: </label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>
  
        {/* City Dropdown */}
        <br />
        <br />
        <label htmlFor="city">Select City: </label>
        <select id="city" disabled={!selectedCountry}>
          <option value="">-- Select City --</option>
          {cityList.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    );
  };


  ------------------------------------------------

  ///Problem: Maximum Subarray Sum (Kadane's Algorithm)
//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  let nums =  [-2,1,-3,4,-1,2,1,-5,4];
let nums2 =   [5,4,-1,7,8]  // 23

const maxSumArray =  function(arr) {
    
    let currentMax = arr[0] //Maximum sum ending at the current position;
    let maxSoFar = nums[0];    // Overall maximum sum
    
    
    for(let i=1; i<arr.length; i++) {
        currentMax =  Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);

    }
     return maxSoFar;
}

console.log(maxSumArray(nums2))

------------------------------------------------

function findMissingNumber(nums) { 
  const missingNum = [];
  
  for(let i=1; i<nums.length; i++) {
      if(!nums.includes(i)) {
          missingNum.push(i)
      }
  }
  return missingNum
}

console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5]))




