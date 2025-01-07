// const users = {
//     name: "Kishan",
//     age: 24,
//     itTotalyAwesome: true
// }
// // we will use for in loop for itarating object
// for(let key in users) {
//     console.log(users[key])
// }

// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// }

// console.log(obj)


//Q.2  create a function multiplybyTwo(obj) that muliplies all numeric property of num by 2.

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums"
// };

// multiplybyTwo(nums)

// function multiplybyTwo(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] === "number") {
//             obj[key] *= 2
//         }
//     }

// }

// console.log(nums)




//Q3. IMPORTANT what is output of following

// const a = {};
// const b = { key: "b"}
// const c = { key: "c"}

// a[b] = 123;
// a[c] = 456;
// a["Object Object"] = 123;
// a["Object Object"]= 456;

// console.log(a[b])  // 456



//Q.4  what is JSON.stringify and JSON.parse

// const User = {
//     name: "kishan",
//     age: 25
// }
// const stringy = JSON.stringify(User)
// console.log(JSON.parse(stringy))

//--> mostly we use this to setItem in localStorage, beacuas we cannot store object direcly our localStorage


// Q.5 

//console.log([..."Lydia"])



//Q.6. what is output

// const user = {name: "Lydia", age: 21};
// const admin = {admin: true, ...user} 
// console.log(admin)


//Q.7 output

//  const setting= {
//     userName: "Kishan",
//     level: 19,
//     health: 90,
//  }
//  const data = JSON.stringify(setting, ["level", "health"])
//  console.log(data)


 //Q.8 output

//  const shape = {
//     radius: 10,
//     diameter(){
//         return this.radius * 2
//     },
//     perimeter: () => 2 * Math.PI * this.radius
//  } 


//  console.log(this.diameter()) /// 20
//  console.log(this.perimeter()) // this will throw error  --->  


//Q.9 Disturcting and Nesting Disturcting

// let users = {
//     name: "Kishna",
//     age: 22,
//     fullName: {
//         firstName: "Kishan",
//         lastName: "Raikwar"
//     }
// }

// const { fullName : {firstName, lastName}  }  = users;
// console.log(lastName)


//Q . 10  ouput

// function getItems(fruitList,  favouriteFruit, ...arguments) {
//     return [...fruitList, ...arguments,  favouriteFruit]
// }
// console.log(getItems(["banana", "apple"], "pear", "orange"))



//q 11 Object Referencing

// let c = {gretting: "Hey!"}
// let d;
// d = c
// c.gretting = "Hello"
// console.log(d.gretting)  //Hello








// Q 12 Output

console.log({a: 1} == { a:1});
console.log({a:1} === { a:1})

//beacuse both of them are different object and both have differnt space in the memory and object are only equal when are refrencing
// a particular area in the memory

// let person =  { name: "Lydia"};
// const member = [person];
// person = null;

// console.log(member)



//Q. 13

// const value =  { number: 10};

// //console.log({...value})  we just clone object
// const multiply =  (x = {...value}) => {
//     console.log(x.number *=  2)
// };

// multiply();  // 20
// multiply()  // 20
// multiply(value)  // 20
// multiply(value) // 40



//Q. 14

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "john",
//         age: 50
//     };

//     return person
// }

// const personObj1 =  {
//     name: "alex",
//     age: 30
// }

// const personObj2 =  changeAgeAndReference(personObj1)

// console.log(personObj1)
// console.log(personObj2)

// Here, you're reassigning the person variable inside the function to a new object { name: "john", age: 50 }. However, this does not affect personObj1 because you're now making person point to a new object. The reference to the original object (personObj1) is broken.
// Returning the New Object: The function then returns the new object { name: "john", age: 50 }, and you assign this returned value to personObj2.
// personObj1 was modified in the first step when its age was updated to 25, but it still refers to the original object:



// Deep Copy and Shallow Copy

let user2 = {
    name: "Kishan",
    age: 22
};

//const objectClone = Object.assign({}, user2)
//const objectClone =  JSON.parse(JSON.stringify(user2))
const objectClone =  {...user2}
objectClone.name = "Rahul"

console.log(user2, objectClone)


 


