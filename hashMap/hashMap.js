class HashMap {
  loadFactor = 0.75;
  capacity = 4;
  size = 0; // to detect if resize is needed
  buckets = [...new Array(this.capacity)].map(() => new LinkedList());

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    const hashValue = hashCode % this.capacity;
    log(`hash value for key ${key} created: ${hashValue}`);
    return hashValue;
  }

  set(key, value) {
    let hashValue = this.hash(key);
    let bucket = this.buckets[hashValue];
    let itemIdx = bucket.find(key);
    if (itemIdx !== null) {
      log(`key ${key} exist, delete old pair`);
      bucket.removeAt(itemIdx);
      this.size--;
    }

    log(`add {${key}: ${value}} to bucket #${hashValue}`);
    bucket.prepend({ key, value });
    this.size++;

    if (this.size >= Math.round(this.loadFactor * this.capacity)) {
      log(
        `current size ${this.size} is bigger than the capacity ${this.capacity} * the load factor ${this.loadFactor}. Starting resizing`
      );
      this.resize(this.capacity * 2);
    }
  }

  resize(newCapacity) {
    this.size = 0;
    this.capacity = newCapacity;
    const oldBuckets = this.buckets;
    const newBuckets = [...new Array(this.capacity)].map(
      () => new LinkedList()
    );
    this.buckets = newBuckets;
    for (let bucket of oldBuckets) {
      for (let i = 0; i < bucket.size; i++) {
        let key = bucket.at(i).data.key;
        let value = bucket.at(i).data.value;
        this.set(key, value);
      }
    }
    log(`resize completed`);
  }

  entries() {
    const res = [];
    for (let bucket of this.buckets) {
      for (let i = 0; i < bucket.size; i++) {
        let curNode = bucket.head;
        res.push([curNode.data.key, curNode.data.value]);
        curNode = curNode.next;
      }
    }
    log(`print out hashmap entries: ${res}`);
    return res;
  }
}
