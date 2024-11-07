"use strict";

var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.trunc((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[right];
};

console.log(findMin([3, 4, 5, 1, 2]));
