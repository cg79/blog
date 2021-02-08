using System.Linq;

namespace Toptal
{
    class FindIndex
    { 
        public static int solution(string S) {
            char OPEN_BRACKET = '(';
            char CLOSE_BRACKET = ')';

            var openBracketCount = -1;
            var closeBracketCount = S.Count(e => e == CLOSE_BRACKET);

            if (closeBracketCount == S.Length)
                return S.Length;

            for (int i = 0; i < S.Length; i++) {
                if (S[i] == OPEN_BRACKET) {
                    openBracketCount++;
                } else {
                    closeBracketCount--;
                }

                if (openBracketCount == closeBracketCount)
                    return i;
            }

            return -1;
        }
    }
}