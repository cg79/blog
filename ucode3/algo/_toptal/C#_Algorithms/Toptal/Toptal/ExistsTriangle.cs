using System.Linq;

namespace Toptal
{
    //https://codility.com/programmers/lessons/6-sorting/triangle/
    class ExistsTriangle
    {
        public static int solution(int[] A)
        {
            A = A.OrderBy(x => x).ToArray();

            for (int i = A.Length - 1; i >= 2; i--)
            {
                if (A[i] / 2 > A[i - 1])
                    continue;

                if (A[i] - A[i - 1] < A[i - 2])
                    return 1;
            }

            return 0;
        }
    }
}