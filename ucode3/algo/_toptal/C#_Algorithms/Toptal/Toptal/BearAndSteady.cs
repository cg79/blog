using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class BearAndSteady
    {
        public static int Solve(string value)
        {
            Dictionary<char, int> dictionary = new Dictionary<char, int>();
            int partition = value.Length / 4;
            int start = 0, end=value.Length;

            for (int i = 0; i < value.Length; i++)
            {
                if (!dictionary.ContainsKey(value[i]))
                {
                    dictionary[value[i]] = 1;
                }
                else
                {
                    dictionary[value[i]] ++;
                    if (dictionary[value[i]] > partition) {
                        start = i;
                        break;
                    }
                }
             }

            var valueReversed = value.Reverse().ToArray();
            for (int i = 0; i < valueReversed.Length; i++) {
                if (!dictionary.ContainsKey(valueReversed[i])) {
                    dictionary[valueReversed[i]] = 1;
                } else {
                    dictionary[valueReversed[i]]++;
                    if (dictionary[valueReversed[i]] > partition) {
                        end = value.Length-i;
                        break;
                    }
                }
            }

            if (start == 0)
                return 0;

            return end - start;
        }
    }
}