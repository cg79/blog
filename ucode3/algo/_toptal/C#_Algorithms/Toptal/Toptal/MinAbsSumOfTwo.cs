using System;
using System.Linq;

namespace Toptal
{
    class MinAbsSumOfTwo
    {
        public static int solution(int[] A)
        {
            if (A.Length == 1)
            {
                return Math.Abs(2*A[0]);
            }

            if (A.Length == 2)
            {
                return Math.Min(Math.Abs(2*A[0]), Math.Min(Math.Abs(2 * A[1]), Math.Abs(A[0] + A[1])));
            }

            int[] negatives = A.Where(x => x < 0).OrderBy(x=>x).ToArray();
            int[] positives = A.Where(x => x >= 0).OrderBy(x => x).ToArray();
            int minDifference = int.MaxValue;

            if (negatives.Length == 0)
            {
                 return Math.Abs(2*positives[0]);
            }

            if (positives.Length == 0)
            {
                return Math.Abs(2 * negatives[negatives.Length - 1]);
            }

            foreach (var element in negatives)
            {
                var index = Array.BinarySearch(positives, -element);

                if (index == 0)
                    return 0;

                index = ~index;

                if (index < positives.Length)
                {
                    var difference = Math.Abs(positives[index] + element);
                    if (minDifference > difference)
                    {
                        minDifference = difference;
                    }
                }

                if (index-1 >=0)
                {
                    var difference = Math.Abs(positives[index-1] + element);
                    if (minDifference > difference)
                    {
                        minDifference = difference;
                    }
                }
            }

            return minDifference;
        }
    }
}