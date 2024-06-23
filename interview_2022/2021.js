// Ques 3. Implement Caching/Memoize funtion

const clumsySqure = (num1, num2) => {
  for (let i = 1; i < 10000000; i++) {}

  return num1 * num2;
};

console.time("First Call");
console.log(clumsySqure(9467, 7649));
console.timeEnd("last Call");
