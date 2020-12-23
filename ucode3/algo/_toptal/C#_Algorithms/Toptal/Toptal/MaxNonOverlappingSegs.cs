namespace Toptal
{
    class MaxNonOverlappingSegs
    {
        public static int solution(int[] A, int[] B)
        {
            if (A.Length == 0)
                return 0;

            if (A.Length == 1)
                return 1;

            int index = 0;
            int count = 0;

            while (index<B.Length)
            {
                count++;

                for (int i = index+1; i < A.Length; i++)
                {
                    if (i == A.Length - 1)
                    {
                        if (A[i] > B[index]) {
                            return ++count;
                        }
                        return count;
                    }

                    if (A[i] > B[index])
                    {
                        index = i;
                        break;
                    }
                }
            }

            return count;
        }
    }
}