//TODO: Array Partition
//* INPUT: [1,4,3,2]
//* OUTPUT: 4
/*
 *Explanation:Explanation: All possible pairings (ignoring the ordering of elements) are:
 *1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
 *2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
 *3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
 *So the maximum possible sum is 4.
 */

function getPairSum(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let maxSum = 0;

  for (let index = 0; index < nums.length; index += 2) {
    maxSum += Math.min(nums[index], nums[index + 1]);
  }

  return maxSum;
} // Leetcode Result ->  Runtime: 145ms , Memory = 50.6MB

const inputArray = [-470, 66, -4835, -5623];
console.log(getPairSum(inputArray));
