/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    let totalSum = 0
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }

    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (totalSum === (2 * leftSum) + nums[i]) {
            return i
        } else {
            leftSum += nums[i]
        }
    }
    return -1
};
