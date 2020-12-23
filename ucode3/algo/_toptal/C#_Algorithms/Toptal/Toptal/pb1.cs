using System;
using System.Collections.Generic;
using System.Text;

namespace Toptal2
{
    public class Pb1
    {
        public bool solution(int[] A)
        {
            if (A == null || A.Length == 0)
                return false;

            var minimumValue = 1000000000;
            var index1 = 0;
            var index2 = 0;
            var alreadySorted = true;
            for (int i = 0; i < A.Length - 2; i++)
            {
                if (A[i] <= A[i + 1])
                    continue;

                alreadySorted = false;
                index1 = i;
                for (int j = i + 1; j < A.Length; j++)
                {
                    if (A[j] <= minimumValue)
                    {
                        minimumValue = A[j];
                        index2 = j;
                    }
                }
                break;
            }

            if (alreadySorted)
                return true;

            if (minimumValue > A[index1])
                return false;

            InterchangeElements(A, index1, index2);
            return IsAlreadySorted(A);
        }

        public static bool IsAlreadySorted(int[] arr)
        {
            int l = arr.Length;
            for (int i = 1; i < l / 2 + 1; i++)
            {
                if (arr[i - 1] > arr[i] || arr[l - i] < arr[l - i - 1])
                {
                    return false;
                }
            }
            return true;
        }


        private static void InterchangeElements(int[] arr, int firstPosition, int secondPosition)
        {
            var aux = arr[firstPosition];
            arr[firstPosition] = arr[secondPosition];
            arr[secondPosition] = aux;
        }
    }
}
