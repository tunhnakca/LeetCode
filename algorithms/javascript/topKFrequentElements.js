var topKFrequent = function (nums, k) {
  const freqMap = new Map();

  nums.forEach((num) => {
    if (freqMap.has(num)) {
      freqMap.set(num, freqMap.get(num) + 1);
    } else {
      freqMap.set(num, 1);
    }
  });

  return Array.from(freqMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((el) => el[0]);
};
