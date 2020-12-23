using System;

class LongestZigZag
{
    public int solution(Tree T)
    {
        if (T == null)
            return 0;

        if (T.l == null && T.r == null)
            return 0;

        var leftCount = numberOfDirectionChanges(T.l, "left");
        var rightCount = numberOfDirectionChanges(T.r, "right");

        return leftCount > rightCount ? leftCount : rightCount;
    }

    public static int numberOfDirectionChanges(Tree root, string childType)
    {
        if (root == null)
            return 0;

        if (root.l == null && root.r == null)
            return 0;

        bool goRight = childType == "right";

        if (root.l != null && root.r != null)
        {
            var left = numberOfDirectionChanges(root.l, "left") + (goRight ? 1 : 0);
            var right = numberOfDirectionChanges(root.r, "right") + (goRight ? 0 : 1);
            return Math.Max(left, right);
        }

        if (root.l != null)
        {
            return numberOfDirectionChanges(root.l, "left") + (goRight ? 1 : 0);
        }

        return numberOfDirectionChanges(root.r, "right") + (goRight ? 0 : 1);
    }
}

class Tree
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
}