using System.Linq;

namespace Toptal
{
    //todo: not working
    class MinMaxDivision
    {
        public static int solution(int K, int M, int[] A)
        {
            int minLarge = A.Max(x => x);
            int maxLarge = A.Sum(x => x);

            while (minLarge<maxLarge)
            {
                var mid = (minLarge + maxLarge) / 2;
                var blocks = GetMaxDivision(A, mid);

                if (blocks == K)
                {
                    minLarge = mid+1;
                }
                else
                {
                    maxLarge = mid;
                }
            }

            return 0;
        }

        public static int GetMaxDivision(int[] A, int limit)
        {
            int blocks = 0;
            int sum = 0;

            for (int i = 0; i < A.Length; i++)
            {
                sum += A[i];

                if (sum>limit)
                {
                    blocks++;
                    sum = A[i];
                }
                else
                {
                    sum += A[i];
                }
            }

            return blocks;
        }
    }
}