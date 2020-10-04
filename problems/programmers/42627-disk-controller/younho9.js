function solution(jobs) {
    const heap = new MinHeap();
    const done = [];

    jobs.sort((a, b) => a[0] - b[0]);

    const jobQueue = jobs.reduce((queue, job) => {
        queue.enqueue(job);
        return queue;
    }, new Queue());

    let turnaroundTime = 0;
    let time = 0;
    let i = 0;
    while (done.length !== jobs.length) {
        while (!jobQueue.isEmpty() && jobQueue.peek()[0] <= time) {
            heap.insert(jobQueue.dequeue());
        }

        const currentJob = heap.remove();
        if (currentJob) {
            turnaroundTime += time - currentJob[0] + currentJob[1];
            time += currentJob[1];
            done.push(currentJob);
        } else {
            time++;
        }
    }

    return Math.floor(turnaroundTime / jobs.length);
}

class Queue {
    constructor() {
        this._items = [];
        this.start = 0;
        this.end = 0;
    }

    enqueue(item) {
        this._items.push(item);
        this.end += 1;
    }

    dequeue() {
        return this._items[this.start++];
    }

    peek() {
        return this._items[this.start];
    }

    size() {
        return this.end - this.start;
    }

    isEmpty() {
        return this.end === this.start;
    }
}

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    getMin() {
        return this.heap[1];
    }

    size() {
        return this.heap.length - 1;
    }

    insert(node) {
        this.heap.push(node);

        if (this.heap.length > 1) {
            let current = this.heap.length - 1;

            while (
                current > 1 &&
                this.heap[Math.floor(current / 2)][1] > this.heap[current][1]
            ) {
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [
                    this.heap[current],
                    this.heap[Math.floor(current / 2)],
                ];
                current = Math.floor(current / 2);
            }
        }
    }

    remove() {
        let smallest = this.heap[1];

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3) {
                if (this.heap[1][1] > this.heap[2][1]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current][1] > this.heap[leftChildIndex][1] ||
                    this.heap[current][1] > this.heap[rightChildIndex][1])
            ) {
                if (
                    this.heap[leftChildIndex][1] < this.heap[rightChildIndex][1]
                ) {
                    [this.heap[current], this.heap[leftChildIndex]] = [
                        this.heap[leftChildIndex],
                        this.heap[current],
                    ];
                    current = leftChildIndex;
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [
                        this.heap[rightChildIndex],
                        this.heap[current],
                    ];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1);
        } else {
            return null;
        }

        return smallest;
    }
}

module.exports = solution;
