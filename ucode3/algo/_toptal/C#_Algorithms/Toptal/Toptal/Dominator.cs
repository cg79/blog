using System.Linq;

namespace Toptal
{
    class Dominator
    {
        public static int solution(int[] A)
        {
            var entry = A.GroupBy(x => x).FirstOrDefault(x => x.Count() > A.Length / 2);
            if (entry == null)
                return -1;

           return A.Select((x, ix) => new {Value = x, Index = ix}).First(x => x.Value == entry.Key).Index;
        }
    }
}