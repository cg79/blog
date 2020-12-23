using System;

namespace Toptal
{
    class TreeHeight
    {
        public static int solution(Tree T)
        {
            var height = solutionX(T) - 1;

            return height;
        }

        public static int solutionX(Tree T)
        {
            if (T.l == null)
                return 0;

            var height = Math.Max(solutionX(T.l), solutionX(T.r)) + 1;

            return height;
        }
    }

    class Tree {
        public int x;
        public Tree l;
        public Tree r;
    };
}