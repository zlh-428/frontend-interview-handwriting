// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。


// 示例 1：
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 示例 2：
// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * 解题思路：
 * 1. 首先根据现有的数组进行排序，根据开始区间排序，若开始区间相同则比较结束区间
 * 2. 用一个新的合并数组记录排序后的第一个元素
 * 3. 原有的数组从第二个元素开始遍历，依次比较是否合并区间，是则更新合并数组中当前比较的元素，否则直接push新元素
 * 4. 比较是否重叠区间，可以通过判断两个数组start和end, start[1] >= end[0] && start[0] <= end[1]
 */
var merge = function (intervals) {
  const result = [];

  if (!intervals.length) return result;

  intervals.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  })

  result.push(intervals[0]);

  let resIndex = 0;

  for (let i = 1; i < intervals.length; i++) {
    const { isMerge, mergeArr } = isMergeArray(result[resIndex],intervals[i]);

    if (isMerge) {
      result[resIndex] = mergeArr;
    }else {
      result.push(intervals[i]);
      resIndex++;
    }
  }

  return result;
}

// 辅助函数，用来判断当前是否存在合并区间并返回合并后的数组
const isMergeArray = (start, end) => {
  const isMerge = start[1] >= end[0] && start[0] <= end[1];

  const minStart = Math.min(start[0], end[0]);
  const maxEnd = Math.max(start[1], end[1]);
  return {
    isMerge,
    mergeArr: [minStart, maxEnd]
  }
}

// 测试用例
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); //[[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]