using System;

namespace Toptal2
{
    public class Pb2
    {
        public static int Solution(Tree T)
        {
            if (T == null)
                return 0;

            if (T.l == null && T.r == null)
                return 0;

            var maxPathTurns = Math.Max(Solution(T.l, false), Solution(T.r, true));

            return maxPathTurns;
        }

        // direction = false => parent is left, direction = true => parent is right
        public static int Solution(Tree node, bool direction)
        {
            if (node == null)
                return 0;

            if (node.l == null && node.r == null)
            {
                return 0;
            }

            if (node.l != null && node.r != null)
            {
                var left = Solution(node.l, false) + (direction ? 1 : 0);
                var right = Solution(node.r, true) + (direction ? 0 : 1);
                return Math.Max(left, right);
            }

            if (node.l != null)
            {
                var left = Solution(node.l, false) + (direction ? 1 : 0);

                return left;
            }

            var rightX = Solution(node.r, true) + (direction ? 0 : 1);

            return rightX;
        }
    }

    public class Tree
    {
        public int x;
        public Tree l;
        public Tree r;

        public Tree()
        {
        }

        public Tree(int x)
        {
            this.x = x;
        }
    };
}
