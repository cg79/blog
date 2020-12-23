using System;
using System.Linq;

namespace Toptal
{
    class Sieve
    {
        private static int[] primeTable;

        public static void GetCircularPrimes(int N)
        {
            primeTable = GeneratePrimes(10*N);

            for (int i = 2; i < N; i++)
            {
                if(primeTable[i]==1 && IsCircularPrime(i))
                    Console.WriteLine(i);
            }
        }

        private static bool IsCircularPrime(int number)
        {
            string representation = number.ToString();
            int count = representation.Length;

            for (int i = 1; i < count; i++)
            {
                representation = representation.Substring(i) + representation[0];
                var candidate = int.Parse(representation);
                if (primeTable[candidate] != 1)
                    return false;
            }

            return true;
        }

        public static int[] GeneratePrimes(int N)
        {
            var primes = Enumerable.Range(0,N).Select(x=>1).ToArray();

            for (int i = 2; i < N; i++)
            {
                if(primes[i]==0)
                    continue;

                for (int j = 2 * i; j < N; j += i)
                {
                    primes[j] = 0;
                }
            }

            return primes;
        }
    }
}