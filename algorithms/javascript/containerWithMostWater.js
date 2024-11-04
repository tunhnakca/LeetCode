var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    result = 0;

  while (left < right) {
    const water = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(water, result);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};
