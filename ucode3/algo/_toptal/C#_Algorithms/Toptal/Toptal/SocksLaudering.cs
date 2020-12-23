using System;
using System.Linq;

namespace Toptal
{
    class SocksLaudering
    {
        public static int solution(int K, int[] C, int[] D)
        {
            var clean = C.GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());
            var dirty = D.GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());
            var count = 0;
            var cleanCopy = C.GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());

            foreach (var cleanPair in clean.Where(x => x.Value % 2 == 1))
            {
                if (dirty.ContainsKey(cleanPair.Key))
                {
                    if (count < K)
                    {
                        dirty[cleanPair.Key]--;
                        cleanCopy[cleanPair.Key]++;
                        count++;
                    }
                }
            }

            var result = cleanCopy.Values.Select(x=>x/2).Sum();

            if (count < K)
            {
                var difference = K - count;

                foreach (var dirtyPair in dirty.Where(x => x.Value > 1))
                {
                    var increment = Math.Min(difference / 2, dirtyPair.Value / 2);
                    difference = difference - increment * 2;
                    result += increment;
                    if (difference < 1)
                        break;
                }
            }

            return result;
        }
    }
}