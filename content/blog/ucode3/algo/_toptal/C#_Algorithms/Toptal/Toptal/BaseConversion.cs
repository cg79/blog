using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toptal
{
    public class BaseConversion
    {
        public static string ConvertFromBase(  int n, int baseNumber)
        {
            var sb = new StringBuilder();
            if ( n<baseNumber) // see if it's time to return
                return n.ToString(); // ""+M makes a string out of a digit
            else
            {
                do
                {
                    int m = (int)(n % baseNumber);
                    sb.Insert(0, m);
                    n = (n- m) / baseNumber;
                } while (n > 0);

                return sb.ToString();
            }
        }
    }
}
