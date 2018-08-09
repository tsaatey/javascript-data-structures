class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        if (this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        } else {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (currentNode.value === this.tail.value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            return this.head;
        }

        if (this.tail.value === value) {
            return this.tail;
        }

        let currentNode = this.head.next;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    findByTransformation(value, transformation = (val) => val) {
        if (!this.head) {
            return null;
        }

        if (transformation(this.head.value) === value) {
            return this.head;
        }

        if (transformation(this.tail.value) === value) {
            return this.tail;
        }

        let currentNode = this.head.next;

        while (currentNode) {
            if (transformation(currentNode.value) === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    findByCallback(value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            return this.head;
        }

        if (this.tail.value === value) {
            return this.tail;
        }

        let currentNode = this.head.next;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    deleteTail() {
        let deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                if (currentNode.next.next === null) {
                    currentNode.next = null;
                } else {
                    currentNode = currentNode.next;
                }
            }

            this.tail = currentNode;
        }

        return deletedTail;
    }

    fromArray(values) {
        values.forEach((value) => this.append(value));
        return this;
    }

    toArray() {
        let nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString() {
        let output = '';
        let currentNode = this.head;
        while(currentNode) {
            output += `${currentNode.toString()} --> `;
            currentNode = currentNode.next;
        }
        output += 'null';
        return output;
    }
}

export default LinkedList;
