import LinkedList from './linked-list';

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    isEmpty() {
        return !this.list.tail;
    }

    peek() {
        if (!this.list.head) {
            return null;
        }

        return this.list.head.value;
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        const removedHead = this.list.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    toString() {
        return this.list.toString();
    }
}

export default Queue;
