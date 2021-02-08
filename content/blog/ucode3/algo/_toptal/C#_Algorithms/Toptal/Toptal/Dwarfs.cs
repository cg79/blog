using System;
using System.Globalization;
using System.Linq;

namespace Toptal
{
    class Dwarfs
    {
        public static int solution(int N, string S, string T)
        {
            int[][] boat = new int[N][];

            for (int i = 0; i < N; i++)
            {
                boat[i] = new int[N];
            }

            foreach (var entry in S.Split(' '))
            {
                boat[int.Parse(entry.Substring(0, entry.Length-1)) - 1][entry.Last() - 'A'] = 1;
            }

            foreach (var entry in T.Split(' '))
            {
                boat[int.Parse(entry.Substring(0, entry.Length - 1)) - 1][entry.Last() - 'A'] = 2;
            }

            int topLeft = 0;
            int topRight = 0;
            int bottomLeft = 0;
            int bottomRight = 0;
            int occupiedtopLeft = 0;
            int occupiedtopRight = 0;
            int occupiedbottomLeft = 0;
            int occupiedbottomRight = 0;

            for (int i = 0; i < N; i++)
            {
                for (int j = 0; j < N; j++) {
                    if (boat[i][j] == 0)
                    {
                        if (i < N / 2 && j < N / 2)
                        {
                            topLeft++;
                        }
                        else if (i >= N / 2 && j < N / 2)
                        {
                            topRight++;
                        }
                        else if (i < N / 2 && j >= N / 2)
                        {
                            bottomLeft++;
                        }
                        else
                        {
                            bottomRight++;
                        }
                    }
                    else if (boat[i][j] == 2) {
                        if (i < N / 2 && j < N / 2) {
                            occupiedtopLeft++;
                        } else if (i >= N / 2 && j < N / 2) {
                            occupiedtopRight++;
                        } else if (i < N / 2 && j >= N / 2) {
                            occupiedbottomLeft++;
                        } else {
                            occupiedbottomRight++;
                        }
                    }

                }
            }

            var min = new[] {topLeft, topRight, bottomRight, bottomLeft}.Min();
            var max = min;

            if (min == topLeft)
            {
                for (int i = 0; i < N; i++)
                {
                    for (int j = 0; j < N; j++)
                    {
                        if (i < N / 2 && j < N / 2) {
                            if (boat[i][j] == 2)
                                min++;
                        }
                    }
                }
            }
            else if (min == topRight) {
                for (int i = 0; i < N; i++) {
                    for (int j = 0; j < N; j++) {
                        if (i >= N / 2 && j < N / 2) {
                            if (boat[i][j] == 2)
                                min++;
                        }
                    }
                }
            }else if (min == bottomLeft)
            {
                for (int i = 0; i < N; i++)
                {
                    for (int j = 0; j < N; j++)
                    {
                        if (i < N / 2 && j >= N / 2)
                        {
                            if (boat[i][j] == 2)
                                min++;
                        }
                    }
                }
            }
            else
            {
                for (int i = 0; i < N; i++) {
                    for (int j = 0; j < N; j++) {
                        if (i >= N / 2 && j >= N / 2) {
                            if (boat[i][j] == 2)
                                min++;
                        }
                    }
                }
            }
           return 4 * min - occupiedbottomLeft - occupiedbottomRight - occupiedtopLeft - occupiedtopRight;
        }
    }
}