using System;
using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    //todo: hackerrank
    class CutTheTree
    {
        public static void Solve()
        {
            var n = int.Parse(Console.ReadLine());
            var values = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var table = Enumerable.Range(1, n).Select(x=> new Node() {Index = x, Value = values[x-1]}).ToDictionary(x=>x.Index, x=>x);

            for (int i = 0; i < n-1; i++)
            {
                var nodes = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                table[nodes[0]].Children.Add(table[nodes[1]]);
            }

            Console.WriteLine(Solve(table[1]));
        }

        public static int Solve(Node root)
        {
            int min = int.MaxValue;
            GetSum(root);
            var queue = new Queue<Node>();
            queue.Enqueue(root);

            while (queue.Count>0)
            {
                var node = queue.Dequeue();

                min = Math.Min(Math.Abs((root.Sum - node.Sum) - node.Sum), min);

                foreach (var child in node.Children)
                {
                    queue.Enqueue(child);
                }
            }

            return min;
        }

        public static int GetSum(Node node)
        {
            if (node == null)
                return 0;

            if (!node.Children.Any())
            {
                node.Sum = node.Value;
                return node.Value;
            }

            var sum = node.Value + node.Children.Sum(x=>GetSum(x));
            node.Sum = sum;
            return sum;
        }

        public class Node
        {
            public int Value { get; set; }
            public int Index { get; set; }
            public int Sum { get; set; }
            public Node Parent { get; set; }
            public List<Node> Children { get; set; }

            public Node()
            {
                Children = new List<Node>();
            }
        }
    }
}