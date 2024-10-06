var findMedianSortedArrays = function (nums1, nums2) {
  const sortedArr = [...nums1, ...nums2].sort((a, b) => a - b);

  if (sortedArr.length % 2 === 0) {
    return (
      (sortedArr.at(sortedArr.length / 2) +
        sortedArr.at(sortedArr.length / 2 - 1)) /
      2
    );
  } else {
    return sortedArr.at(Math.floor(sortedArr.length / 2));
  }
};
