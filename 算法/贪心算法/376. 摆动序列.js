/* 
示例 1：
输入：nums = [1,7,4,9,2,5]
输出：6
解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。

示例 2：
输入：nums = [1,17,5,10,13,15,10,5,16,8]
输出：7
解释：这个序列包含几个长度为 7 摆动序列。
其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。

示例 3：
输入：nums = [1,2,3,4,5,6,7,8,9]
输出：2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    let maxLength = 1, preValue = 0, curValue = 0;

    if (nums.length === 1) return nums.length;

    for (let i = 0; i < nums.length; i++) {
        curValue = nums[i + 1] - nums[i];

        if ((curValue > 0 && preValue <= 0) || (curValue < 0 && preValue >= 0)) {
            maxLength++
            preValue = curValue
        }
    }
    return maxLength
};


const nums = [1, 7, 4, 9, 2, 5];

console.log(wiggleMaxLength(nums));