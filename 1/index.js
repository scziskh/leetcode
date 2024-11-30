/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* O(n) */
const twoSum = (nums, target) => {
    const numsObj = nums.reduce((accum, curr, index) => {
        accum[curr] = index;
        return accum;
    }, {});
    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        if (!!numsObj[num] && numsObj[num] !== i) {
            return [i, numsObj[num]];
        }
    }
    return [];
};

const numsArray = [[2,7,11,15], [3,2,4], [3,3], [1,3,4,2], [2,5,5,11]];
const targetArray = [9, 6, 6, 6, 10];
for (let i = 0; i < numsArray.length; i++) {
    console.log(twoSum(numsArray[i], targetArray[i]));
}