using System;
using System.Collections.Generic;
using System.Text;

namespace Toptal2
{
    public class Pb1
    {
        public static bool solution(int[] arr)
        {
            if (arr == null)
                return false;

            var min = 1000000000;
            var firstPosition = 0;
            var secondPosition = 0;
            var isSorted = true;
            for (int i = 0; i < arr.Length - 2; i++)
            {
                if (arr[i] <= arr[i + 1])
                    continue;

                isSorted = false;
                firstPosition = i;
                for (int j = i + 1; j < arr.Length; j++)
                {
                    if (arr[j] <= min)
                    {
                        min = arr[j];
                        secondPosition = j;
                    }
                }
                break;
            }

            if (isSorted)
                return true;

            if (min > arr[firstPosition])
                return false;

            Swap(arr, firstPosition, secondPosition);
            return IsAarraySorted(arr);
        }

        private static bool IsAarraySorted(int[] arr)
        {
            for (int i = 0; i <= arr.Length - 2; i++)
            {
                if (arr[i] > arr[i + 1])
                    return false;
            }

            return true;
        }

        private static void Swap(int[] arr, int firstPosition, int secondPosition)
        {
            var aux = arr[firstPosition];
            arr[firstPosition] = arr[secondPosition];
            arr[secondPosition] = aux;
        }
    }
}
