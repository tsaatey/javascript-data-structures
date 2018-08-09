class DoublyLinkedListNode {
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    toString() {
        return `${this.value}`;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new DoublyLinkedListNode(value, this.head);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        if (this.head.value === value) {
            deletedNode = this.head;
            
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.previous = null;
            }
        } else if (this.tail.value == value) {
            deletedNode = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;
        } else {
            let currentNode = this.head.next;
            while (currentNode) {
                if (currentNode.value == value) {
                    deletedNode = currentNode;
                    currentNode.previous.next = currentNode.next;
                }
                currentNode.next;
            }    
        }

        return deletedNode;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentHead = this.head;
        while (currentHead) {
            if (currentHead.value === value) {
                return currentHead;
            }
            currentHead = currentHead.next;
        }

        return null;
    }

    findBackwards(value) {
        if (!this.tail) {
            return null;
        }

        let currentNode = this.tail;
        while(currentNode) {
            if (currentNode === value) {
                return currentNode;
            }
            currentNode = currentNode.previous;
        }
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null;
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
            this.tail = this.tail.previous;
            this.tail.next = null;
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
            output += `${currentNode.toString()} --> <--`;
            currentNode = currentNode.next;
        }
        output += 'null';
        return output;
    }
}

export default DoublyLinkedList;
