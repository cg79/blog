using System;

namespace Toptal
{
    //https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/#/description
    class MinMovesToEquality
    {
        public static int MinMoves2(int[] nums) {
            Array.Sort(nums);
            var median = nums[nums.Length / 2];
            var sum = 0;

            for (int i = 0; i < nums.Length; i++)
            {
                sum += Math.Abs(nums[i] - median);
            }

            return sum;
        }
    }
}