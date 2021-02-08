namespace Toptal
{
    //https://codility.com/programmers/lessons/5-prefix_sums/count_div/
    class CountDiv
    {
        public static int solution(int A, int B, int K)
        {
            if (K == 1)
            {
                return B - A + 1;
            }

            if (B == 0)
            {
                return 1;
            }

            if (A == 0)
            {
                return B / K + 1;
            }

            return B / K - (A-1) / K;
        }
    }

    //https://codility.com/programmers/lessons/5-prefix_sums/passing_cars/
}