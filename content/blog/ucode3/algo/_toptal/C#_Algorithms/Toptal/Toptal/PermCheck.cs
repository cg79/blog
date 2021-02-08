using System.Linq;

namespace Toptal
{
    class PermCheck
    {
        public static int solution(int[] A)
        {
            var dict = Enumerable.Range(0, A.Length).Select((x, ix) => ix + 1).ToDictionary(x => x, x => 0);

            for (int i = 0; i < A.Length; i++)
            {
                if (dict.ContainsKey(A[i]) && dict[A[i]] == 0)
                {
                    dict[A[i]] = 1;
                }
                else
                {
                    return 0;
                }
            }

            return 1;
        }
    }
}