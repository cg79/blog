namespace Toptal
{
    class Quicksort
    {
        public void quicksort(int[] vector)
        {
            quicksort(vector, 0, vector.Length-1);
        }

        private void quicksort(int[] vector, int start, int end)
        {
            if(start>=end)
                return;

            int pivotIndex = partition(vector, start, end);
            quicksort(vector, start, pivotIndex-1);
            quicksort(vector, pivotIndex+1, end);
        }


        private int partition(int[] vector, int start, int end)
        {
            int index = start-1;
            int pivot = vector[end];

            int temp;
            for (int i = start; i < end; i++)
            {
                if (vector[i] < pivot)
                {
                    index++;
                    temp = vector[index];
                    vector[index] = vector[i];
                    vector[i] = temp;
                }
            }
            index++;
            temp = vector[index];
            vector[index] = vector[end];
            vector[end] = temp;

            return index;
        }
    }
}