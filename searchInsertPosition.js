var searchInsert = function (nums, target) {
  const index = nums.findIndex((num) => num >= target);
  return index === -1 ? nums.length : index;
};
