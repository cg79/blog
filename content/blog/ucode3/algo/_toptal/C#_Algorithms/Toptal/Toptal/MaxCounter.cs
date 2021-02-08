using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class MaxCounter
    {
        public static int[] solution(int N, int[] A)
        {
            List<int> indexes = A.Select((x, ix) => new KeyValuePair<int, int>(ix, x))
                .Where(x => x.Value == N + 1)
                .Select(x => x.Key)
                .ToList();

            if (!indexes.Any())
            {
                return GetArray(A, 0, 0, N);
            }

            if(indexes.Count==A.Length)
                return Enumerable.Range(0, N).Select(x => 0).ToArray();

            var dict = new Dictionary<int, int>();
            int count = indexes.Count;
            int max = 0;

            for (int i = 0; i < count; i++)
            {
                dict.Clear();
                int localMax = max;

                for (int j = 0; j < indexes[i]; j++)
                {
                    if (!dict.ContainsKey(A[j]))
                        dict[A[j]] = localMax;

                    dict[A[j]]++;

                    if (dict[A[j]] > max)
                        max = dict[A[j]];
                }
            }

            if (indexes.Last() == A.Length - 1)
            {
                return Enumerable.Range(0, N).Select(x => max).ToArray();
            }

            return GetArray(A, indexes.Last() + 1, max, N);
        }

        private static int[] GetArray(int[] A, int index, int value, int N)
        {
            var result = Enumerable.Range(0, N).Select(x => value).ToArray();

            for (int i = index; i < A.Length; i++)
            {
                result[A[i]-1]++;
            }

            return result;
        }
    }
}