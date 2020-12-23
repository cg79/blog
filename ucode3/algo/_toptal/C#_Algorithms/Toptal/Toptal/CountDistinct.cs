using System.Linq;

namespace Toptal
{
    //https://codility.com/programmers/lessons/6-sorting/distinct/
    class CountDistinct
    {
        public int solution(int[] A)
        {
            return A.Distinct().Count();
        }
    }
}