/**
 * @param {number[]} nums
 * @return {number}
 */

/* O(n^2) */
const removeDuplicates = (nums) => {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

const nums1 = [1,1,2];
const nums2 = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums1), nums1);
console.log(removeDuplicates(nums2), nums2);