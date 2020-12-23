using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Toptal
{
    public class ToptalClaudiu
    {
        public static string Solution(string input)
        {
            var dotPattern = @"(\.|\!\?)(\s{0,})(\w)";
            //var dotPattern = @"(\.|\!|\?)(\s{0,})(\w)";
            var commaPattern = @"(\,|\:|\;)(\w)";
            input = UppercaseFirst(input);
            var replaceDotString = Regex.Replace(input, dotPattern, m => m.Groups[1] + " " + m.Groups[3].Value.ToUpper());
            var replaceCommaString = Regex.Replace(replaceDotString, commaPattern, m => m.Groups[1] + " " + m.Groups[2].Value);

            return replaceCommaString;
        }

        private static string UppercaseFirst(string s)
        {
            if (string.IsNullOrEmpty(s))
                return s;

            return char.ToUpper(s[0]) + s.Substring(1);
        }
    }
}
