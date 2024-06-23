
// *********************************** two sums ***********************************

let nums = [2,7,11,15];
let target = 9;

// Memory :  
//[0, 7, 
//1, 2]
//


const twoSums = (nums, target) => {
	// let storage = {};
	// for (let [index, num] of nums.entries()) {
	// 	if(storage[num] !== undefined) return [storage[num], index]
	// 	storage[target - num] = index	
	// }
	for(let i=0; i<nums.length; i++) {
		for(j=i+1; j<nums.length; i++) {
			if(nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}




// Output 1
// let memory = {};
// for(let i=0; i<nums.length; i++){
// if(memory[nums[i]] === undefined) {
//    memory[target - nums[i]] = i
// }else {
//  return [memory[nums[i]], i]
// }
// }

// Output 2

	// for(let i=0; i<nums.length; i++) {
	// 	for(j=i+1; j<nums.length; i++) {
	// 		if(nums[i] + nums[j] === target) {
	// 			return [i, j]
	// 		}
	// 	}
	// }



}



console.log(twoSums(nums, target))





// *********************************** Reverse Integer ***********************************
// Assume we are dealing with an environment which could only store integers within the 32-bit signed interger range: [2<sup>-31</sup> 2<sup>31</sup>].
// for the purpose of this problem, assume that your function returns 0 when the reversed interger overflows...
// input  = 123
// output = 321

// input = -123
// output = -321

const reverse = (x) => {
 if(x < 0) return -1 * reverse(-x);
const solution = (x+"").split('').reverse().join('');
return (solution > 2**31) ? 0 :  solution
}



// *********************************** Check Contains Duplicate ***********************************
// check Contains Duplicate
// Option 1
let nums = [1,2,3,1];
function cotainsDuplicate(nums) {
	//create a memory
//go through array and see if what i see now, is something i've seen before.
// if my number is never seen before, put it it momory
// if the number does exist in momory, return true.

let momory = {};
for(let i = 0; i<nums;length; i++) {
	if(momory[nums[i]] === undefined) {
		momory[nums[i]]  = "hahah"
		// instead hahah you could store anything like i, so on...
	}else {
		return true
	}
}
return false


// Option 2
// nums.sort((a, b) =>{return  b-a})
// for(let i = 0; i<nums;length; i++) { 
// if(i > 0 && nums[i - 1] === nums[1]) return true
// } else {
// 	return false
// }

}

console.log(cotainsDuplicate(nums))



//****************************************************************************************************************************

//	Best Time To Buy and Sell Stock
// [7, 1, 5, 3, 6, 4]

// output 5
// Explantion : buy on day 2 (price = 1) and sell on day 5 (price =6), profit 6 -1 = 5
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell

let prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {

	let buyPrice =  prices[0] // 7

	// keep track of profit
	let profit = 0;

// go through the array and decide should i buy/ see if there is profit.
for (let i=0; i<prices.length-1; i++) {
	// if there is no profit , continue
	let tempProfit = prices[i+1] - prices[i];

	if(tempProfit = 0) {
		//check my current purchase price is less than my old one
		if(prices[i] < buyPrice) {
			buyPrice = prices[i];
		}

		if(prices[i + 1] - buyPrice > profit) {
			profit = prices[i + 1] - buyPrice;
		}

	}

}

// go through remaining array, and decide if i should sell
// Record the profit and see if the new profit is more that my memorized profit
// return profit

return profit;


}




// *************************************************** Maximum Subarray ******************************************************


// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A sibarray is a contiguous part of an array.

// [-2, 1, -3,4,-1,2,1,-5,4]

function maxSubArray(nums) {

}

//   4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1


// ---------------------------invertTree

const tree = {value: 5, left: {left: 5, right: 6 }, right: {left: 1, right: 2}};


function invertTree (node) {
  if (!node) return;
  
  var right = invertTree(node.right);
  var left = invertTree(node.left);
  if (left) node.left = right;
  if (right) node.right = left;
  return node;
}
console.log(JSON.parse(JSON.stringify(tree)), invertTree(tree));


///

// *************************************************** Generate Paranthisis ******************************************************
/*Given n pairs of parentheses, write a function to generate all combination of well-formed parenthese

for example, given n = 3, a solution set is:

[ 
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
]*/


const generateParantheses = (n) => {

    const solution = [];

    const generateCombo = (leftPCount, rightPCount, partials) => {
        //means ((( ))
        if(leftPCount > rightPCount) return;

        // if equal to Zero
        if(!leftPCount && !rightPCount) solution.push(partials);

        //leftPCount = 2, rightPCount = 3, partials=""
        if(leftPCount > 0) generateCombo(leftPCount - 1, rightPCount,  partials + "(");

        //rightPCount = 2, rightPCount = 2, partials=""
        if(rightPCount > 0) generateCombo(leftPCount, rightPCount -1,   partials +  ")");


    }
    generateCombo(n,n, "")

    console.log(solution)

    return solution;
	
}


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
	console.log(solution)
	return solution;
}

// *************************************************** Decoded string ******************************************************
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square breacket is being repeated exactly k times. Note that K is guranteed to be a positive interger.

// You may assume that the input string is always valid; No extra white spaces, squre brackets are well-formed, etc.

// Furthermore, you may assume that original data does not contain any digit are only for those repeated numbers, K For example, there won't be input like 3a or 2[4].

// Example : -

// s = "3[a]2[bc]", return 'aaabcbc';
// s = 3[a2[c]]", return "accaccacc";
// s = "2[abc]3[cd]ef, return "abcabccdcdcdef"


//  k = how many times we repeated stuff
//  [  = now i need to start storing what i want to repeat
//  ]  = better start repeating