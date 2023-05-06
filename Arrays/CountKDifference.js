//TODO: Count Number of Pairs With Absolute Difference K
//* INPUT: [1,2,2,1], k = 1
//* OUTPUT: 4

//! Method - 1
// function getCountkPairs(nums, k) {
//   let pairs = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (Math.abs(nums[i] - nums[j]) === k) {
//         pairs++;
//       }
//     }
//   }
//   return pairs;
// } // Leetcode Result ->  Runtime: 62ms , Memory = 41.8MB

//! Method - 2
function getCountkPairs(nums, k) {
  let count = 0;
  const numCounts = new Array(2001).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff1 = num + k;
    const diff2 = num - k;
    console.log(diff1, "diff1", diff2, "diff");

    console.log(numCounts[diff1 + 1000], numCounts[diff2 + 1000]);
    count += numCounts[diff1 + 1000];
    count += numCounts[diff2 + 1000];

    numCounts[num + 1000]++;
  }

  return count;
} // Leetcode Result ->  Runtime: 51ms , Memory = 45.6MB

const inputArray = [1, 2, 2, 1];
const k = 1;
console.log(getCountkPairs(inputArray, k));
