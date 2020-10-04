function solution(operations) {
    const minHeap = new MinHeap();
    const maxHeap = new MinHeap();
    let length = 0;

    operations.forEach((op) => {
        const [opcode, num] = op.split(' ');

        if (opcode === 'I') {
            minHeap.insert(parseInt(num));
            maxHeap.insert(-parseInt(num));
            length++;
        } else if (length === 0) {
        } else if (length === 1) {
            minHeap.reset();
            maxHeap.reset();
            length = 0;
        } else if (num === '1') {
            maxHeap.remove();
            length--;
        } else if (num === '-1') {
            minHeap.remove();
            length--;
        }
    });

    if (!length) {
        return [0, 0];
    } else {
        return [-maxHeap.remove(), minHeap.remove()];
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
                this.heap[Math.floor(current / 2)] > this.heap[current]
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
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (
                this.heap[leftChildIndex] !== undefined &&
                this.heap[rightChildIndex] !== undefined &&
                (this.heap[current] > this.heap[leftChildIndex] ||
                    this.heap[current] > this.heap[rightChildIndex])
            ) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
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

    reset() {
        this.heap = [null];
    }
}

module.exports = solution;
