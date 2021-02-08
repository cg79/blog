using System.Collections.Generic;
using System.Linq;

namespace Toptal
{
    class TieRopes
    {
        public int solution(int K, int[] A)
        {
            int sum = 0;
            int ropes = 0;
            foreach (int element in A) {
                sum += element;
                if (sum >= K) {
                    sum = 0;
                    ropes++;
                }
            }

            return ropes;
        }
    }
}