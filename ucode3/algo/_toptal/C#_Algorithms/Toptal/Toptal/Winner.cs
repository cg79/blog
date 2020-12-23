using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class Winner
    {
        private static Dictionary<int, Dictionary<int, int>> table = new Dictionary<int, Dictionary<int, int>>();

        public static bool PredictTheWinner(int[] nums)
        {
            if (nums.Length == 1)
                return true;

            var sum = nums.Sum();
            var max = GetMax(nums, 0, nums.Length - 1);
            table.Clear();

            return max >= sum - max;
        }

        public static int GetMax(int[] nums, int start, int end)
        {
            if(start>end)
                return 0;

            if (table.ContainsKey(start) && table[start].ContainsKey(end))
                return table[start][end];

            var startMax = nums[start] + Math.Min(GetMax(nums, start + 1, end - 1), GetMax(nums, start + 2, end));
            var endMax = nums[end] + Math.Min(GetMax(nums, start, end - 2), GetMax(nums, start + 1, end-1));

            if (!table.ContainsKey(start))
            {
                table[start] = new Dictionary<int, int>();
            }

            table[start][end] = Math.Max(startMax, endMax);
            return Math.Max(startMax, endMax);
        }
    }
}