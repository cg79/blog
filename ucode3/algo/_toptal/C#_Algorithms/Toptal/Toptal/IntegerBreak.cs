using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    //https://leetcode.com/problems/integer-break/#/description not all cases
    class IntegerBreakX
    {
        public static int IntegerBreak(int n) {
            var list = Enumerable.Range(1, 58).Select(Compute).ToArray();
            var index = Array.BinarySearch(list, n);

            if (index < 0)
                index = ~index;

            if (index == 0)
            {
                return (n / 2) * (n - (n / 2));
            }

            if (index == 1)
            {
                index++;
            }

            var remainder = n - (n / index) * index;
            var result = Enumerable.Repeat(0, index).Select(x => n / index).ToList();
            for (int i = 0; i < remainder; i++)
            {
                result[i] += 1;
            }

            var product = 1;

            foreach (var item in result)
            {
                product *= item;
            }

            return product;
        }

        public static double Compute(int k)
        {
            // Compute (k+1)^(k+1)/k^k

            double result = 1d;

            for (int i = 0; i < k; i++)
            {
                result *= (k + 1)*1d / k;
            }

            return result * (k + 1);
        }
    }
}