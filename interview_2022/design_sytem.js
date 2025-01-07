//Design a Parking Lot System

//Parking lot with multiple levels and different vehicle types.
//Each level has a fix
// ed number of spots.

class Vehicle {
    constructor(type) {
        this.type = type
    }
}

class ParkingSpot {
    constructor(level, spotsNumber) {
       this.level =  level;
       this.spotsNumber = spotsNumber;
       this.isOccupied = false;
    } 

    park(vehicle) {
        if (this.isOccupied) {
            return "Spot is already occupied.";
        }
        this.isOccupied = true;
        this.vehicle = vehicle;
        return `Parked ${vehicle.type} at spot ${this.spotNumber} on level ${this.level}`;
    }
    vacate() {
        if (!this.isOccupied) {
            return "Spot is already vacant.";
        }  
        const vehicle = this.vehicle;
        this.vehicle = null;
        this.isOccupied = false;
        return `Vacated spot ${this.spotNumber} on level ${this.level}`;
    }
}

const spot = new ParkingSpot(1, 101);
console.log(spot.park(new Vehicle("Car"))); // Output: Parked Car at spot 101 on level 1
console.log(spot.vacate());  

// ---------------------------------------------------------

const findMissingNumber =  function(arr, n) {
    const expectedSum = (n * (n +1)) /2
    const actualSum =  arr.reduce((prev, acc) => prev + acc, 0);
    return expectedSum - actualSum
 }
 
 console.log(findMissingNumber([1, 2, 4, 5, 6], 6));


 -------------------------------------------------------------

let uniqueObj = {};
let seenValues = new Set();
for (const [key, value] of Object.entries(input1)) {
   if (!seenValues.has(value)) {
      uniqueObj[key] = value;
      seenValues.add(value);
   }
}

console.log(uniqueObj);

---------------------------------------------------------

const text = "919 00 909%2# 92 9"

// 9 = 0
//0 = 9

const swapValue =  function(str, v1, v2) {
    let result = ""
    for(let i=0; i<str.length; i++) {
        if(str[i] === v1) {
           result += v2  
        }else if(str[i] === v2) {
           result += v1  
        }else {
            result += str[i]
        }
    }
    return result
}

const output = swapValue(text, "9", "0");
console.log(output)


//group data
const data = [
    { id: 1, category: 'fruit', name: 'Apple' },
    { id: 2, category: 'vegetable', name: 'Carrot' },
    { id: 3, category: 'fruit', name: 'Banana' },
    { id: 4, category: 'vegetable', name: 'Spinach' },
  ];
  
  const grouped = data.reduce((acc, currItem) => {
    acc[currItem.category] = acc[currItem.category] || [];
    acc[currItem.category].push(currItem);
    return acc;
  }, {});
  
  console.log(grouped);

