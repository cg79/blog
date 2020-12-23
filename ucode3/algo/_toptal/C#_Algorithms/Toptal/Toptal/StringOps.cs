using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class StringOps {

        private static List<string> GetPermutations(string word) {
            if (word.Length == 1) {
                return new List<string> { word };
            }

            var result = new List<string>();

            for (int i = 0; i < word.Length; i++) {
                var permutations =
                    GetPermutations(word.Substring(0, i) + (i == word.Length - 1 ? "" : word.Substring(i + 1)))
                        .Select(x => word[i].ToString() + x)
                        .ToList();
                result.AddRange(permutations);
            }

            return result;
        }

        private static void GetPowerSet(string word) {
            var maxValue = Math.Pow(2, word.Length);

            for (int i = 0; i < maxValue; i++) {
                var representation = Convert.ToString(i, 2);
                representation = string.Join("", Enumerable.Range(0, word.Length - representation.Length).Select(x => "0")) + representation;
                var set = string.Join("", word.Select((v, ix) => representation[ix] == '1' ? v.ToString() : ""));
                Console.WriteLine(set);
            }
        }
    }
}