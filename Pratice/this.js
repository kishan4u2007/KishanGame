// var length = 4;

// function callback() {
//     console.log(this.length)
// }

// const object = {
//     length: 5,
//     method() { // agrument = [callback, 2, 3]
//         console.log(agrument)
//         arguments[0]()
//     },
// };

// object.method(callback, 2, 3)  // 3 output

//////////////////


// const Debounce = (cb, d) => {
//     let timer;
//     if(timer) clearTimeout(timer)
//     return function(...args) {
//         timer =  setTimeout(()=> {
//             cb(...args) 
//         },d)

//     }
// }


const generateParanthesesNew = (n) => {
	const solution = [];

	const generateCombo = (leftPCount, rightPCount, partials) => {
		//means ((( ))
		if(leftPCount > rightPCount) return;
		// if equal to 0
		if(!leftPCount && !rightPCount) solution.push(partials);

		//leftPCount = 2, rightPCount = 3, partials=""
		if(leftPCount > 0) generateCombo(leftPCount -1, rightPCount, partials + "(")

		//rightPCount = 2, leftPCount = 3, partials=""
		if(rightPCount > 0) generateCombo(leftPCount, rightPCount-1,  partials + ")")

	}
	generateCombo(n,n,"")
	return solution;
}

console.log(generateParanthesesNew(3))


//Is palimdrom
// str.split("").reverse().join("") === str


//removeD



