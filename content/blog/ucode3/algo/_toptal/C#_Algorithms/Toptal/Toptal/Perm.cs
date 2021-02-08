using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class Perm
    {
        public static List<string> GeneratePermutations1(string value)
        {
            if(value.Length == 0 || value.Length==1)
                return new List<string> {value};

            if (value.Length == 2)
                return new List<string> {value, value[1].ToString()+value[0]};

            var result = new List<string>();

            for (int i = 0; i < value.Length; i++)
            {
                var subValue = value.Substring(0,i)+value.Substring(i+1);
                result.AddRange(GeneratePermutations1(subValue).Select(x=> value[i] + x));
            }

            return result;
        }

        public static void GeneratePermutations2(string value)
        {
            GeneratePermutations(value.ToArray(), 0, value.Length-1);
        }

        private static void GeneratePermutations(char[] list, int start, int end)
        {
            if (start == end)
            {
                Console.WriteLine(string.Join("", list));
                return;
            }

            for (int i = start; i <= end; i++)
            {
                Swap(ref list[i], ref list[start]);
                GeneratePermutations(list, start+1, end);
                Swap(ref list[i], ref list[start]);
            }
        }

        private static void Swap(ref char a, ref char b)
        {
            var temp = a;
            a = b;
            b = temp;
        }
    }
}