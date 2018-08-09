import LinkedList from './linked-list';

class HashTable {
    constructor(tableSize = 32) {
        this.buckets = Array(tableSize).fill(null)
            .map(() => new LinkedList());
        this.keys = {};
    }
    
    hash(key = '') {
        let fromHash = 0;
        for(let i = 0; i < key.length; i++) {
            fromHash += key[i].charCodeAt(0);
        }
        
        return fromHash % this.buckets.length;
    }

    set(key, value) {
        
        const currentNode = currentBucket.findByTransformation(key, (val) => val.key);

        if (!currentNode) {
            currentBucket.append({ key, value});
        } else {
            currentNode.value.value = value;
        }
    }

    delete(key) {
        const hashKey = this.hash(key);
        delete this.keys[key];const hashKey = this.hash(key);
        this.keys[key] = hashKey;

        const currentBucket = this.buckets[hashKey];

        const currentBucket = this.buckets[hashKey];
        const currentNode = currentBucket.findByTransformation(key, (val) => val.key);

        if (currentNode) {
            return currentBucket.delete(currentNode);
        }

        return null;
    }

    get(key) {
        const hashKey = this.hash(key);
        const currentBucket = this.buckets[hashKey];
        const currentNode = currentBucket.findByTransformation(key, (val) => val.key);
        
        return currentNode ? currentNode.value.vale : undefined;
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    getKeys() {
        return Object.keys(this.keys);
    }
}

export default HashTable;
