// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2

// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2

/**
 * 思路：
 * 使用前缀和与哈希映射来达到线性时间复杂度，时间复杂度为O(n)
 */

var subarraySum = function (nums, k) {
  let count = 0,
    sum = 0;

  const map = new Map();

  // 当前位置是从0开始，则先记录0
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // 计算前缀和与k的差值
    const diff = sum - k;

    // 如果差值在哈希映射中存在，则说明存在一个子数组，使得其和为k
    if (map.has(diff)) {
      count += map.get(diff);
    }

    // 将当前位置的前缀和加入哈希映射中
    map.set(sum, (map.get(sum) || 0) + 1)
  }

  return count;
};

// 测试用例
console.log(subarraySum([1, 1, 1], 2)); // 输出: 2
console.log(subarraySum([1, 2, 3], 3)); // 输出: 2
console.log(subarraySum([1, -1, 0], 0)); // 输出: 3
console.log(subarraySum([1, 2, 1, 2, 1], 3)); // 输出: 4
