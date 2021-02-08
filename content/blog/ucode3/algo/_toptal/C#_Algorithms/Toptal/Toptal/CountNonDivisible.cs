using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class CountNonDivisible
    {
        private static int[] primes;

        public static int[] solution(int[] A)
        {
            var newA = A.OrderBy(x => x).ToArray();
            var dict = A.ToDictionary(x=>x,x=>0);

            for (int i = newA.Length-1; i >=0; i--)
            {
                var rad = Math.Sqrt(newA[i]);
                var index = Array.BinarySearch(newA, rad);
                var offset = 0;

                if (index < 0)
                {
                    index = ~index;
                    dict[newA[i]] += i - index;
                }
                else
                {
                    dict[newA[i]] += i - index - 1;
                    offset = 1;
                }

                for (int j = 0; j < index + offset; j++)
                {
                    if (newA[i] % newA[j] == 0)
                    {
                        dict[newA[i]]++;
                    }
                }
            }

            return null;
        }

        public static void ComputePrimes(int N)
        {
            for (int i = 2; i < Math.Sqrt(N); i++)
            {
                if (primes[i]==1)
                {
                    for (int j = 0;; j++)
                    {
                        var index = i * (i + j);
                        if (index > N)
                            break;

                        primes[index] = 0;
                    }
                }
            }
        }
    }
}