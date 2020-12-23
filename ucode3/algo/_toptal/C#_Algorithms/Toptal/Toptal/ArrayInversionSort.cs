namespace Toptal
{
    class ArrayInversionSort
    {
        public static int solution(int[] A)
        {
            if (A.Length < 2)
            {
                return 0;
            }

            int[] result = new int[A.Length];
            var inversions = Mergesort(A, result,  0, A.Length - 1);

            return inversions;
        }

        public static int Mergesort(int[] A, int[] result, int start, int end)
        {
            var inversions = 0;

            if (start < end)
            {
                int mid = (start+end)/2;
                inversions+= Mergesort(A, result, start, mid);
                inversions+= Mergesort(A, result, mid+1, end);
                inversions += Merge(A, result, start, mid+1, end);
            }

            return inversions;
        }

        private static int Merge(int[] A, int[] result, int left, int mid, int right)
        {
            int i = left;
            int j = mid;
            int k = left;
            int inversions = 0;

            while (i < mid && j <= right)
            {
                if (A[i] <= A[j])
                {
                    result[k++] = A[i++];
                }
                else
                {
                    result[k++] = A[j++];
                    inversions += mid - i;
                }
            }

            while (i < mid)
            {
                result[k++] = A[i++];
            }
            while (j <= right)
            {
                result[k++] = A[j++];
            }

            return inversions;
        }
    }
}