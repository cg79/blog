namespace Toptal
{
    class Chess
    {
        public static int solution(int A, int B)
        {
            if (A == 2 && B == 2)
                return 4;

            if (B >= A)
            {
                var temp = A;
                A = B;
                B = temp;
            }

            int count = 0;
            int X = -1;

            if (A == 1 && B==0)
                return 3;

            if (A == 2 && B==2)
                return 4;

            if (A > 2 * B)
            {
                X = A - 2 * B;
                count += B;

                if (X == 1)
                    return count+3;

                return count +X- 2 * (X / 4);
            } else if (A < 2 * B)
            {
                X = 2 * B - A;
                count = A - B;

                if (X == 2)
                    return count+4;

                return count + 2 * ((X + 2) / 3);
            }
            else
            {
                return B;
            }
        }
    }
}