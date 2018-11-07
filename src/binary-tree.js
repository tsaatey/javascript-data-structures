class BinaryTreeNode {
    constructor(key = null, value = null) {
        this.left = null;
        this.right = null;
        this.key = key;
        this.value = value;
        this.count = 0;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    traverse(key) {
        let parent = null;
        let side = null;

        if (this.root.value === key) {
            return {
                parent,
                side,
                node: this.root,
            }
        }
        
        let currentNode = this.root;

        while (currentNode && currentNode.value !== key) {
            parent = currentNode;

            if (key > currentNode.value) {
                side = 'right';
                currentNode = currentNode.right;
            } else {
                side = 'left';
                currentNode = currentNode.left;
            }
        }

        return {
            parent,
            side,
            node: currentNode,
        };
    }

    add(key, value) {
        const newNode = new BinaryTreeNode(key, value);

        if (!this.root) {
            this.root = newNode;
        } else {
            const foundFromTraversal = this.traverse(key);

            if (!foundFromTraversal.node) {
                foundFromTraversal.parent[foundFromTraversal[side]] = newNode;
            } 
            newNode.count += 1;
        }

        return this;
    }

    search(key) {
        const foundFromTraversal = this.traverse(key);
        return foundFromTraversal.node ? foundFromTraversal.node.value : null;
    }

    contains(key) {
        const foundFromTraversal = this.traverse(key);
        return foundFromTraversal.node !== null;
    }
}

export default BinaryTree;
