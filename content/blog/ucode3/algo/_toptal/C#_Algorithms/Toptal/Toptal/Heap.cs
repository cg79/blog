using System;

namespace Toptal
{
    class Heap
    {
        private readonly int[] container;
        private int position=-1;

        public Heap(int capacity, int[] initialData)
        {
            container = new int[capacity];
            BuildHeap(initialData);
        }

        public void Insert(int value)
        {
            container[++position] = value;
            int currentIndex = position;
            int parent = currentIndex / 2;

            while (container[parent] > container[currentIndex])
            {
                if (container[parent] > container[currentIndex])
                {
                    var temp = container[parent];
                    container[parent] = container[currentIndex];
                    container[currentIndex] = temp;
                    currentIndex = parent;
                    parent = currentIndex / 2;
                }
            }
        }

        public int GetMin()
        {
            var value = container[0];
            container[0] = container[position];
            position--;
            Heapify(0);

            return value;
        }

        private void BuildHeap(int[] initialData)
        {
            initialData.CopyTo(container, 0);
            position = initialData.Length - 1;

            for (int i = position/2; i >=0; i--)
            {
                Heapify(i);
            }
        }

        private void Heapify(int index)
        {
            if(index>position)
                return;

            int left = 2 * index;
            int right = 2 * index+1;
            int minIndex;

            if(right>position && left>position)
                return;

            if (container[index] <= container[left] && container[index] <= container[right])
                return;

            if (right > position)
            {
                if (container[index] <= container[left])
                    return;

                var temp = container[index];
                container[index] = container[left];
                container[left] = temp;
            }
            else
            {
                minIndex = container[left] > container[right] ? right : left;

                var temp = container[index];
                container[index] = container[minIndex];
                container[minIndex] = temp;

                Heapify(minIndex);
            }
        }
    }
}