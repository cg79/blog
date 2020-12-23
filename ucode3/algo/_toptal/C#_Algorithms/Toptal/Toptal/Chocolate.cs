namespace Toptal
{
    class Chocolate
    {
        public static int solution(int N, int M)
        {
            var gcd = Gcd(N, M);
            if (gcd == 1)
                return N;

            var lcm = Lcm(N, M, gcd);

            return lcm/M;
        }

        static int Gcd(int a, int b) {
            while (b != 0) {
                int temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        static int Lcm(int a, int b, int gcd) {
            return (a / gcd) * b;
        }
    }
}