using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class NumberOfDiscIntersections
    {
        public static int solution(int[] A)
        {
            var elements = A.Select((x, ix) => new KeyValuePair<int, int>(ix - x, ix + x)).OrderBy(x => x.Key).ToList();
            var intersections = 0;

            for (int i = 0; i < elements.Count; i++)
            {
                var index = BinarySearch(elements, i + 1, pair => pair.Key, elements[i].Value);

                if (index >= 0)
                {
                    while (index<elements.Count-1 && elements[index].Key==elements[index+1].Key)
                    {
                        index++;
                    }

                    intersections += index - i;
                }
                else
                {
                    intersections += (-index) - i-1;
                }
            }

            return intersections;
        }

        public static int BinarySearch<T, TKey>(IList<T> list,int start, Func<T, TKey> keySelector, TKey key)
            where TKey : IComparable<TKey>
        {
            if (list.Count == 0)
                return -1;

            int min = start;
            int max = list.Count-1;
            while (min < max) {
                int mid = min + ((max - min) / 2);
                T midItem = list[mid];
                TKey midKey = keySelector(midItem);
                int comp = midKey.CompareTo(key);
                if (comp < 0) {
                    min = mid + 1;
                } else if (comp > 0) {
                    max = mid - 1;
                } else {
                    return mid;
                }
            }

            if (min > max)
                return -min;

            if (keySelector(list[min]).CompareTo(key) == 0) {
                return min;
            }
            else if (keySelector(list[min]).CompareTo(key) < 0) {
                return -(min + 1);
            }
            else
            {
                return -min;
            }
        }
    }
}