namespace Toptal
{
    class Subsequence
    {
        public static bool IsSubsequence(string s, string t)
        {
            int position = 0;
            if (s.Length == 0)
            {
                return true;
            }
            if (s.Length == 1)
                return t.Contains(s);

            for (int i = 0; i < t.Length; i++)
            {
                if (position == s.Length - 1)
                    return true;

                if (t[i] == s[position])
                {
                    position++;
                }
            }

            return false;
        }
    }
}