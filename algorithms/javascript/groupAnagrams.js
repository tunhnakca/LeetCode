var groupAnagrams = function (strs) {
  const map = new Map();

  strs.forEach((str) => {
    const sorted = str.split("").sort().join();

    if (!map.has(sorted)) map.set(sorted, []);

    map.get(sorted).push(str);
  });

  return Array.from(map.values());
};
