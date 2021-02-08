using System;
using System.Linq;

namespace Toptal
{
    //https://www.hackerrank.com/challenges/bigger-is-greater NOT CORRECT
    class BiggerIsBetter
    {
        public static void Solve()
        {
            int n =int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                Solve(Console.ReadLine().Trim());
            }
        }

        public static void Solve(string value)
        {
            if (value.Length <= 1)
            {
                Console.WriteLine("no answer");
                return;
            }

            char[] input = value.ToCharArray();
            for (int i = input.Length - 1; i >= 0; i--)
            {
                for (int j = i-1; j >=0; j--)
                {
                    if (input[j] < input[i])
                    {
                        char temp = input[i];
                        input[i] = input[j];
                        input[j] = temp;
                        Console.WriteLine(new string(input,0,j+1)+new string(input.Skip(j+1).OrderBy(x=>x).ToArray()));
                        return;
                    }
                }
            }

            Console.WriteLine("no answer");
        }
    }
}