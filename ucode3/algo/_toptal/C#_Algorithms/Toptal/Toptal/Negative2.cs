using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class Negative2
    {
        public static string solution(int N)
        {
            var representation = new List<int>();

            while (N!=0)
            {
                var remaider = N % (-2);
                N = N / -2;

                if (remaider < 0)
                {
                    remaider += 2;
                    N++;
                }

                representation.Add(remaider);
            }
            representation.Reverse();
            return string.Join("", representation);
        }

        public static int ConvertToNumber(string representation)
        {
            representation = string.Join("", representation.Reverse());
            double result = 0;

            for (int i = 0; i < representation.Length; i++)
            {
                result += (representation[i] - '0') * Math.Pow(-2, i);
            }

            return (int)result;
        }
    }
}