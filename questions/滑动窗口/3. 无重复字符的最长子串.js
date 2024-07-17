/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0;

  let maxLength = 0;

  let stask = new Set();

  for (right; right < s.length; right++) {
    let currentStr = s[right];

    if (stask.has(currentStr)) {
      while(stask.has(currentStr)) {
        stask.delete(s[left])
        left++;
      }

      stask.add(currentStr);
    } else {
      stask.add(currentStr);
      maxLength = Math.max(maxLength, stask.size);
    }
  }

  return maxLength;
};
