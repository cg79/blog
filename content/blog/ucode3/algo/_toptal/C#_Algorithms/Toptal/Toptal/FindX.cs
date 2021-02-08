using System.Linq;

namespace Toptal
{
    class FindX
    {
        public static int solution(int[] a, int x)
        {
            var left = 0;
            var right = a.Count(e => e != x);

            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] == x)
                {
                    left++;
                }
                else
                {
                    right--;
                }

                if (left == right)
                    return i+2;
            }

            return -1;
        }
    }
}