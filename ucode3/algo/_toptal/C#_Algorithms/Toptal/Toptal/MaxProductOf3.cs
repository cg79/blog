using System;
using System.Linq;

namespace Toptal
{
    class MaxProductOf3
    {
        public static int solution(int[] A)
        {
            A = A.OrderBy(x => Math.Abs(x)).ToArray();
            int[] negatives = new int[A.Length];
            int[] positives = new int[A.Length];

            if (A.All(x => x >= 0))
            {
                return A[A.Length - 1] * A[A.Length - 2] * A[A.Length - 3];
            }

            if (A.All(x => x < 0))
            {
                return A[0] * A[1] * A[2];
            }

            int maxProduct = A.Contains(0)?0:int.MinValue;

            if (A.Length > 0)
            {
                negatives[0] = -1;
                positives[0] = -1;
            }

            if (A.Length == 3)
                return A[0] * A[1] * A[2];

            for (int i = 1; i < A.Length; i++)
            {
                if (A[i-1] >= 0)
                {
                    positives[i] = i - 1;
                    negatives[i] = negatives[i - 1];
                }
                else
                {
                    negatives[i] = i - 1;
                    positives[i] = positives[i - 1];
                }
            }

            for (int i = A.Length - 1; i >= 1; i--)
            {
                if (A[i] >= 0)
                {
                    if (positives[i] >= 0 && positives[positives[i]] >=0)
                    {
                        var product = A[i] * A[positives[positives[i]]] * A[positives[i]];
                        if (maxProduct < product)
                        {
                            maxProduct = product;
                        }
                    }

                    if (negatives[i] >= 0 && negatives[negatives[i]] >=0)
                    {
                        var product = A[i] * A[negatives[negatives[i]]] * A[negatives[i]];
                        if (maxProduct < product)
                        {
                            maxProduct = product;
                        }
                    }
                }
                else
                {
                    if (positives[i] >= 0 && negatives[positives[i]] >= 0) {
                        var product = A[i] * A[negatives[positives[i]]] * A[positives[i]];
                        if (maxProduct < product) {
                            maxProduct = product;
                        }
                    }

                    if (negatives[i] >= 0 && positives[negatives[i]] >= 0) {
                        var product = A[i] * A[positives[negatives[i]]] * A[negatives[i]];
                        if (maxProduct < product) {
                            maxProduct = product;
                        }
                    }
                }
            }

            return maxProduct;
        }
    }

}