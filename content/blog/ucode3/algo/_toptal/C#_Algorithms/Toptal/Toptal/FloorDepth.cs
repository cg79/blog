using System;
using System.Linq;

namespace Toptal
{
    class FloorDepth
    {
        public static int solution(int[] A)
        {
            var min1 = solutionX(A);
            var minb2 = solutionX(A.Reverse().ToArray());

            return Math.Max(min1, minb2);
        }

        public static int solutionX(int[] A)
        {
            if (A.Length <= 2)
                return 0;

            if (A.Length == 3)
            {
                if (A[0] > A[1] && A[1] < A[2])
                    return Math.Min(A[0], A[2]) - A[1];

                return 0;
            }

            var left = 0;
            var right = 0;

            for (int i = 0; i < A.Length-1; i++)
            {
                if (A[i] > A[i + 1])
                {
                    left = i;
                    break;
                }
            }

            for (int i = A.Length-1; i >= 1; i--)
            {
                if (A[i] > A[i - 1])
                {
                    right = i;
                    break;
                }
            }

            var prevMax = A[left];
            var prevMin = int.MaxValue;
            var currentMaxDepth = 0;

            for (int i = left+1; i < right - 1; i++)
            {
                if (prevMin > A[i])
                {
                    prevMin = A[i];
                }

                if (A[i] > A[i + 1] && A[i - 1] < A[i])
                {
                    currentMaxDepth = Math.Max(currentMaxDepth, Math.Min(prevMax, A[i]) - prevMin);

                    if (A[i] > prevMax)
                        prevMin = int.MaxValue;

                    prevMax = Math.Max(prevMax, A[i]);
                }
            }

            currentMaxDepth = Math.Max(currentMaxDepth, Math.Min(prevMax, A[right]) - prevMin);

            return currentMaxDepth;
        }
    }
}