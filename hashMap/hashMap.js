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
    return hashValue;
  }

  set(key, value) {
    let hashValue = this.hash(key);
    log(`hash value for key ${key} created: ${hashValue}`);

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

  get(key) {
    const list = this.buckets[this.hash(key)];
    const idx = list.find(key);
    console.log(idx);
    if (idx !== null) {
      const val = list.at(idx).data.value;
      log(`find value ${val} with key ${key}`);
      return val;
    }
    log(`couldn't find any value with key '${key}'`);

    return null;
  }

  has(key) {
    const list = this.buckets[this.hash(key)];
    const idx = list.find(key);
    console.log(idx);
    if (idx !== null || idx !== undefined) {
      const val = list.at(idx).data.value;
      log(`value exist with key ${key}`);
      return true;
    }
    log(`couldn't find any value with key '${key}'`);

    return false;
  }

  remove(key) {
    const list = this.buckets[this.hash(key)];
    const idx = list.find(key);
    if (idx !== null || idx !== undefined) {
      const data = list.removeAt(idx);
      log(`remove {${key}, ${data.value}}`);
      this.size--;
      return true;
    }
    log(`key: '${key}' doesn't exist, nothing to remove`);
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.loadFactor = 0.75;
    this.capacity = 4;
    this.size = 0; // to detect if resize is needed
    this.buckets = [...new Array(this.capacity)].map(() => new LinkedList());
  }

  keys() {
    const res = [];
    for (let bucket of this.buckets) {
      for (let i = 0; i < bucket.size; i++) {
        let curNode = bucket.head;
        res.push([curNode.data.key]);
        curNode = curNode.next;
      }
    }
    log(`print out hashmap keys: ${res}`);
    return res;
  }
  values() {
    const res = [];
    for (let bucket of this.buckets) {
      for (let i = 0; i < bucket.size; i++) {
        let curNode = bucket.head;
        res.push([curNode.data.value]);
        curNode = curNode.next;
      }
    }
    log(`print out hashmap values: ${res}`);
    return res;
  }
}
