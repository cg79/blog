using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    //todo: nope
    class NailPlanks
    {
        public static int solution(int[] A, int[] B, int[] C)
        {
            B = B.Select((x, ix) => new {Index = ix, Value = x}).OrderBy(x=>A[x.Index]).Select(x=>x.Value).ToArray();
            A = A.OrderBy(x => x).ToArray();
            HashSet<int> planks = new HashSet<int>();

            for (int i = 0; i < C.Length; i++)
            {
                if (planks.Count == A.Length)
                    return i;

                var index = Array.BinarySearch(A, C[i]);

                if (index >= 0)
                {
                    for (int j = index; j < A.Length; j++)
                    {
                        if (A[j] >= C[i])
                            break;

                        if (B[j]>=C[i])
                        {
                            planks.Add(j);
                        }
                    }

                    continue;
                }

                index = ~index;

                if (index >= A.Length)
                    return -1;

                if (B[index] >= C[i])
                    planks.Add(index);

                for (int j = index; j < A.Length; j++) {
                    if (A[j] >= C[i])
                        break;

                    if (B[j] >= C[i]) {
                        planks.Add(j);
                    }
                }
            }

            return -1;
        }
    }
}