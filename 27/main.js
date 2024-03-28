function removeElement(nums, val) {
  const idx = [];

  nums.forEach((n, i) => {
    if (n === val) {
      idx.push(i);
    }
  });

  if (!idx.length) return nums.length;
  if (idx.length === nums.length) return 0;

  let k = nums.length - 1;
  const idxLength = idx.length;

  for (let i = 0; i < idx.length;) {
    if (nums[k] === val) {
      k--;
      idx.pop();
      continue;
    }

    const temp = nums[k];
    nums[k] = nums[idx[i]];
    nums[idx[i]] = temp;
    k--;
    i++;
  }

  return nums.length - idxLength;
}

removeElement();
