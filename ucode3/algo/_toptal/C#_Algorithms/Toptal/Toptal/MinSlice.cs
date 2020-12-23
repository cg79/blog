using System;

namespace Toptal
{
    class MinSlice
    {
        public static int solution(int[] A)
        {
            if (A.Length == 2)
            {
                return 0;
            }

            if (A.Length == 3)
            {
                var minAvg0 = (A[0] + A[1]) / 2;
                var minAvg1 = (A[2] + A[1]) / 2;
                var minAvg3 = (A[0] + A[1] + A[2]) / 3.0;

                if (minAvg1 < minAvg3 && minAvg1 < minAvg0)
                    return 1;

                return 0;
            }

            var minAvg = double.MaxValue;
            var minAvgIndex = -1;

            for (int i = 0; i < A.Length-2; i++)
            {
                var minAvg2 = (A[i] + A[i + 1]) / 2.0;
                var minAvg3 = (A[i] + A[i + 1] + A[i + 2]) / 3.0;
                var currentMin = Math.Min(minAvg2, minAvg3);

                if (currentMin<minAvg)
                {
                    minAvg = currentMin;
                    minAvgIndex = i;
                }
            }

            var min2 = (A[A.Length - 2] + A[A.Length - 1]) / 2.0;
            var min3 = (A[A.Length - 2] + A[A.Length - 1] + A[A.Length - 3]) / 3.0;

            if (min2 < minAvg && min2<min3)
            {
                return A.Length - 2;
            }

            if (min3 < minAvg)
            {
                return A.Length - 3;
            }


            return minAvgIndex;
        }
    }
}