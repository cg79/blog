using System;
using System.Linq;

namespace Toptal
{
    class RectangleBuilder
    {
        public static int solution(int[] A, int X)
        {
            A = A.GroupBy(x => x)
                .SelectMany(x => x.Count() > 1 ? x.Count() >= 4? new[] { x.Key, x.Key } : new [] { x.Key} : new[] { -1 })
                .Where(x => x > 0)
                .OrderBy(x=>x)
                .ToArray();

            var index = Array.BinarySearch(A, (int)Math.Sqrt(X));

            if (index < 0)
                index = ~index;

            var count = 0;

            for (int i = index; i < A.Length-1; i++)
            {
                if (A[i] == A[i + 1])
                    count++;
            }

            A = A.Distinct().OrderBy(x => x).ToArray();

            for (int i = 0; i < A.Length; i++)
            {
                index = Array.BinarySearch(A, X/A[i]);

                if (index < 0)
                    index = ~index;

                index = Math.Max(i + 1, index);

                if(index>=A.Length)
                    continue;

                count += A.Length - index;
            }

            return count;
        }
    }
}