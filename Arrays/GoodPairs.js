//TODO: Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.
//* INPUT: [1,2,3,1,1,3]
//* OUTPUT: 4

function getGoodPairs(nums) {
  const count = new Array(101).fill(0);
  let result = 0;

  for (let index = 0; index < nums.length; index++) {
    count[nums[index]]++;
    console.log(count[nums[index]]);
    console.log(count);
  }

  for (let index = 0; index < count.length; index++) {
    if (count[index] > 1) {
      result += (count[index] * (count[index] - 1)) / 2;
    }
  }

  return result;
} // Leetcode Result ->  Runtime: 60ms , Memory = 41.9MB

const inputArray = [4, 4, 2, 2];

console.log(getGoodPairs(inputArray));
