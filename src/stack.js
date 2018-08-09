import LinkedList from './linked-list';

class Stack {
    constructor() {
        this.list = new LinkedList();
        this.maxStack = new LinkedList();
        this.minStack = new LinkedList();
    }

    isEmpty() {
        return !this.list.tail;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.list.tail.value;
    }

    push(value) {
        this.list.append(value);
        this._resolveStat(value);
    }

    pop() {
        const removedTail = this.list.deleteTail();
        return removedTail ? removedTail.value : null;
    }

    toArray() {
        return this.list.toArray().map(l => l.value).reverse();
    }

    toString() {
        return this.list.toString();
    }
}

export default Stack;
