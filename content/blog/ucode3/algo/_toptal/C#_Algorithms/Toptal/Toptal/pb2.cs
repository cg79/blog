using System;

namespace Toptal2
{
    public class Pb2
    {
        public int solution(Tree T)
        {
            if (T == null)
                return 0;

            if (T.l == null && T.r == null)
                return 0;

            var maxNrOfDiractionChanges = Math.Max(nrOfDirectionChanges(T.l, false), nrOfDirectionChanges(T.r, true));

            return maxNrOfDiractionChanges;
        }

        public static int nrOfDirectionChanges(Tree node, bool childType)
        {
            if (node == null)
                return 0;

            if (node.l == null && node.r == null)
            {
                return 0;
            }

            if (node.l != null && node.r != null)
            {
                var left = nrOfDirectionChanges(node.l, false) + (childType ? 1 : 0);
                var right = nrOfDirectionChanges(node.r, true) + (childType ? 0 : 1);
                return Math.Max(left, right);
            }

            if (node.l != null)
            {
                var nrOfLeftTurns = nrOfDirectionChanges(node.l, false) + (childType ? 1 : 0);

                return nrOfLeftTurns;
            }

            var nrOfRightTurns = nrOfDirectionChanges(node.r, true) + (childType ? 0 : 1);

            return nrOfRightTurns;
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
