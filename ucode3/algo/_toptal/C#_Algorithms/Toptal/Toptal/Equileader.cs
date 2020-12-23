using System.Linq;

namespace Toptal
{
    class Equileader
    {
        public static int solution(int[] A)
        {
            if (A.Length == 1)
                return 0;

            if (A.Length == 2)
            {
                if (A[0] == A[1])
                    return 1;
            }

            var dom = dominator(A);
            int[] table = new int[A.Length];

            if (A[0] == dom)
                table[0] = 1;

            for (int i = 1; i < A.Length; i++)
            {
                if (A[i] == dom)
                {
                    table[i] = table[i - 1] + 1;
                }
                else
                {
                    table[i] = table[i - 1];
                }
            }

           var count = table
                .Select((x, ix) => new {Val = x, Index = ix})
                .Where(x=>x.Index<A.Length-1)
                .Where(x =>
                {
                    var flag = x.Val > (x.Index+1) / 2 && table[A.Length - 1] - table[x.Index] > (A.Length - x.Index-1) / 2;
                    return flag;
                }).Count();

            return count;
        }

        public static int dominator(int[] A) {
            var entry = A.GroupBy(x => x).FirstOrDefault(x => x.Count() > A.Length / 2);
            if (entry == null)
                return -1;

            return A.Select((x, ix) => new { Value = x, Index = ix }).First(x => x.Value == entry.Key).Value;
        }
    }
}