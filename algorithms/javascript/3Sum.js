var threeSum = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;

    let left = i + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];

      if (sum === 0) {
        result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);

        while (left < right && sortedArr[left] === sortedArr[left + 1]) left++;
        while (left < right && sortedArr[right] === sortedArr[right - 1])
          right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
