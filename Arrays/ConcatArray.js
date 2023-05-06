//TODO: Concatenation of Array
//* Input: [1,2,1]
//* Output: [1,2,1,1,2,1]

//! Method - 1
function getConcatenation(nums) {
  const n = nums.length;
  const aux = [];

  for (let index = 0; index < n; index++) {
    aux.push(nums[index]);
    if (aux.length === n + n) return aux;
    if (index === n - 1) {
      index = -1;
    }
  }
  return aux;
} // Leetcode Result ->  Runtime: 79ms , Memory = 46.2MB

//! Method - 2
// function getConcatenation(nums) {
//   return [...nums, ...nums];
// } // Leetcode Result ->  Runtime: 83ms , Memory = 47MB

const inputArray = [1, 3, 2, 1];

console.log(getConcatenation(inputArray));
