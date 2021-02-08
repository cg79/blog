using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    //https://www.hackerrank.com/challenges/kingdom-division todo
    class Kingdom
    {
        public static int Solve(Node root, int parentColor, int setColor=-1)
        {
            return 1;

            if (!root.Children.Any())
                return 1;

            if (setColor >= 0)
            {
                return root.Children.Sum(x => Solve(x, setColor, -1));
            }

            var sum = root.Children.Sum(x => Solve(x, parentColor, -1));
            var toogleColor = parentColor==0 ? 1 : 0;

            for (int i = 0; i < root.Children.Count; i++)
            {
                sum += Solve(root.Children[i], toogleColor, toogleColor);
            }
        }

        public class Node {
            public string Value { get; set; }
            public int Color { get; set; }
            public List<Node> Children { get; set; }

            public Node() {
                Children = new List<Node>();
            }
        }
    }
}