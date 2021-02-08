using System;
using System.Linq;

namespace Toptal
{
    //https://www.hackerrank.com/challenges/pairs
    class Pairs
    {
        public static void Solve()
        {
            var k = int.Parse(Console.ReadLine().Split(' ')[1]);
            var vector = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            Console.WriteLine(Solve(vector, k));
        }

        public static int Solve(int[] vector, int k)
        {
            var table = vector.ToDictionary(x => x, x => 0);

            return vector.Count(x => table.ContainsKey(x + k));
        }
    }
}