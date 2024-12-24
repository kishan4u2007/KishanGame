Promises
What is a Promise in JavaScript, and why is it used? Practical Answer:
A Promise represents the eventual result of an asynchronous operation. It provides a cleaner way to handle async code compared to callbacks, reducing callback hell.
Example:
javascript
Copy code
const fetchData = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received"), 1000);
    });

fetchData().then((data) => console.log(data)); // Output: Data received