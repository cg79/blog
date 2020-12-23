using static System.Double;

namespace Toptal
{
    class PassingCars
    {
        public static int solution(int[] A)
        {
            if (A.Length < 2)
            {
                return 0;
            }

            int[] suffixSums = new int[A.Length];
            int count = 0;

            suffixSums[A.Length - 1] = A[A.Length - 1];

            for (int i = A.Length-2; i >= 0; i--)
            {
                suffixSums[i] = A[i] + suffixSums[i + 1];

                if (A[i] == 0)
                {
                    count += suffixSums[i + 1];
                    if (count > 1000000000)
                    {
                        return -1;
                    }
                }
            }

            return count;
        }
    }
}