namespace Toptal
{
    class GenomicRange
    {
        private static int[] A;
        private static int[] C;
        private static int[] G;

        public static int[] solution(string S, int[] P, int[] Q)
        {
            int[] result = new int[P.Length];
            A = new int[S.Length];
            C = new int[S.Length];
            G = new int[S.Length];

            Preprocess(S);

            for (int i = 0; i < P.Length; i++)
            {
                result[i] = GetMin(P[i], Q[i], S[Q[i]]);
            }

            return result;
        }

        private static void Preprocess(string S)
        {
            switch (S[0]) {
                case 'A':
                    A[0] = 0;
                    break;
                case 'C':
                    A[0] = -1;
                    C[0] = 0;
                    G[0] = -1;
                    break;
                case 'G':
                    A[0] = - 1;
                    G[0] = 0;
                    C[0] = -1;
                    break;
                case 'T':
                    A[0] = - 1;
                    G[0] = - 1;
                    C[0] = - 1;
                    break;
            }

            for (int i = 1; i < S.Length; i++)
            {
                switch (S[i])
                {
                    case 'A':
                        A[i] = i;
                        break;
                    case 'C':
                        A[i] = A[i - 1];
                        C[i] = i;
                        G[i] = G[i-1];
                        break;
                    case 'G':
                        A[i] = A[i - 1];
                        G[i] = i;
                        C[i] = C[i-1];
                        break;
                    case 'T':
                        A[i] = A[i - 1];
                        G[i] = G[i-1];
                        C[i] = C[i-1];
                        break;
                }
            }
        }

        private static int GetMin(int start, int last, char ch)
        {
            switch (ch) {
                case 'A':
                    return 1;
                case 'C':
                    if (A[last] >= start)
                        return 1;
                    return 2;
                case 'G':
                    if (A[last] >= start)
                        return 1;
                    if (C[last] >= start)
                        return 2;
                    return 3;
                case 'T':
                    if (A[last] >= start)
                        return 1;
                    if (C[last] >= start)
                        return 2;
                    if (G[last] >= start)
                        return 3;
                    return 4;
            }

            return -1;
        }
    }
}