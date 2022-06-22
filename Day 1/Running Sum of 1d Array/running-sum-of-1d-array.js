/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Method 1
var runningSum = function (nums) {

  let ans = new Array(nums.length);
  ans[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] + nums[i];
  }

  return ans;
};


// Method 2
var runningSum = function (nums) {

  return nums.map((num, i) => {

    if (i > 0) {
      for (let j = 0; j < i; j++) {
        num += nums[j];
      }
    }
    return num;

  });

};

// Method 3
var runningSum = function (nums) {

  nums.map((num, i) => {
    if (i > 0) {
      nums[i] = nums[i - 1] + nums[i];
    }
  });

  return nums;

};

// nums = [1, 2, 3, 4];
// runningSum(nums);