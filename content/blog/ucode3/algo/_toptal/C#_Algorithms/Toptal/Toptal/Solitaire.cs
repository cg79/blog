using System;
using System.Linq;

namespace Toptal
{
    class Solitaire
    {
        private static int[] table;

        public static int solution(int[] A)
        {
            table = new int[A.Length];
            table[0] = A[0];

            for (int i = 0; i < A.Length; i++)
            {
                for (int j = 1; j < 6; j++)
                {
                    if (i + j >= A.Length)
                        break;

                    int result = table[i] + A[i + j];

                    if (result > table[i + j] || table[i + j] == 0)
                    {
                        table[i + j] = result;
                    }
                }

            }

            return table[A.Length-1];
        }

        public static int getMax(int[] A, int position)
        {
            int maxSum = int.MinValue;
            int boundIndex = Math.Max(0, position - 7);

            if (position == 0)
            {
                table[0] = A[0];
                return A[0];
            }

            if (position < 6)
            {
                return table[position];
            }

            for (int i = position-1; i >= boundIndex; i--)
            {
                var currentMax = getMax(A, i);
                if (maxSum < currentMax)
                {
                    maxSum = currentMax;
                }
            }

            table[position] = maxSum+A[position];
            return table[position];
        }
    }
}