using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Toptal
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = "hello. how are you today? great! i'm fine too.";
            string output = ToptalClaudiu.Solution(input);

            Console.WriteLine(output);
            Console.Read();
        }
    }
}
