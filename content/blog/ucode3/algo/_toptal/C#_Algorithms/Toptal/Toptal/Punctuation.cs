using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Toptal
{
    class Punctuation
    {
        static string dotpattern = @"(\.|\!|\?)(\s{0,})(\w)";
        static string commapattern = @"(\,|\:|\;)(\w)";

        public static string dot(string s)
        {
            Console.WriteLine(s);
            //(\.|\!|\?)(\s{0,})(\w)
            //

            //var replaced = Regex.Replace(s, dotpattern,
            //    m =>
            //    m.Groups[1] + " " + m.Groups[3].Value.ToUpper());

            Regex r = new Regex(dotpattern);

            string replaced = r.Replace(s, delegate (Match m)
            {
                Console.WriteLine(m.Groups[1].Value + m.Groups[3].Value + Environment.NewLine);
                return m.Groups[1] + " " + m.Groups[3].Value.ToUpper();
            });


            return comma(replaced);
        }

        public static string comma(string s)
        {
            //(\,|\:|\;)(\w)
            //
            var replaced = Regex.Replace(s, commapattern, m => m.Groups[1] + " " + m.Groups[2].Value);
            return replaced;
        }

        public static string apostrofe(string s)
        {
            //(\,|\:|\;)(\w)
            //
            var replaced = Regex.Replace(s, commapattern, m => m.Groups[1] + " " + m.Groups[2].Value);
            return replaced;
        }

        public static string UppercaseFirst(string s)
        {
            // Check for empty string.
            if (string.IsNullOrEmpty(s))
            {
                return string.Empty;
            }
            // Return char and concat substring.
            return char.ToUpper(s[0]) + s.Substring(1);
        }

        //static void Main(string[] args)
        //{
        //    string input = "";
        //    input = "Moscow,Idaho;Paris,Texas;London,Ohio; and.other places as well.";
        //    input = "the house is on fire!?run!";
        //    input = "do.or do not. there is no try.";
        //    input = "hello. how are you today? great! i'm fine too.";

        //    input = UppercaseFirst(input);

        //    string output = dot(input);
        //    //output = comma(output);

        //    Console.WriteLine(output);
        //    //string test = CapitalizeWithApostrof("ort collins, croton-on-hudson, harper's ferry, coeur;kk d'alene, o'fallon");
        //    //Console.WriteLine(test);
        //    Console.ReadKey();
        //}

        //-----------------------
        static string CapitalizeWithApostrof(string s)
        {
            string pattern = @"(\b[a-z](?!\s))";
            var replaced = Regex.Replace(s, pattern, m =>
            m.Value.ToUpper());
            return replaced;
        }
    }
}

//\*(.*?)\*    - comments

////(.*?)\r?\n  -line comments

//https://stackoverflow.com/questions/3524317/regex-to-strip-line-comments-from-c-sharp
