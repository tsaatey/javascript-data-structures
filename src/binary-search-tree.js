class BinarySearchTreeNode {
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    insert(value) {
        const newNode = new BinarySearchTreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }

        return this;
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
            // Node already exists
            return;
        }
    }

    remove(value) {
        if (!this.root) {
            // nothing to remove
            return null;
        }
        removeNode(this.root, value);

        return this;
    }

    removeNode(node, value) {
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            } 

            if (node.left == null) {
                node = node.right;
                return node;
            } 
            
            if (node.right == null) {
                node = node.left;
                return node;
            }

            const temp = this.findMinNode(node.right);
            node.value = temp.value;
            node.right = this.removeNode(node.right, temp.value);

            return node;
        }
    }
}
