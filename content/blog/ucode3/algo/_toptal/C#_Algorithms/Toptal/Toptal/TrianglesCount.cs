using System;
using System.Linq;

namespace Toptal
{
    class TrianglesCount
    {
        //could be done better: http://codility-lessons.blogspot.ro/2015/03/lesson-13-counttriangles-count-triangles.html
        public static int solution(int[] A)
        {
            A = A.OrderBy(x => x).ToArray();
            int sum = 0;

            for (int i = 0; i < A.Length; i++)
            {
                var index = Array.BinarySearch(A, A[i] / 2);

                if (index < 0)
                    index = ~index;
                else
                {
                    index++;
                }

                for (int j = index; j < i; j++)
                {
                    var prevIndex = Array.BinarySearch(A, A[i] - A[j]);

                    if (prevIndex < 0)
                        prevIndex = ~prevIndex;
                    else
                    {
                        prevIndex++;
                    }

                    sum += j - prevIndex;
                }
            }

            return sum;
        }
    }
}