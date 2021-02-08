namespace Toptal
{
    class SymetryPoint
    {
        public static int solution(string S)
        {
            if (S.Length == 0)
                return 0;
            if (S.Length%2 == 0)
                return -1;

            for (int i = 0; i < S.Length/2; i++)
            {
                if (S[i] != S[S.Length - 1 - i])
                    return -1;
            }

            return S.Length / 2;
        }
    }
}