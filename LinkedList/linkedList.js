class LinkedList {
  head = null;
  tail = null;
  size = 0;
  append(value) {
    let newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value, null);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
    } else {
      let curHead = this.head;
      this.head = newNode;
      newNode.next = curHead;
    }
    this.size++;
  }

  at(index) {
    let curNode = this.head;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }
    return curNode;
  }

  pop() {
    let lastElement = null;
    if (this.size === 1) {
      lastElement = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
    } else if (this.size > 1) {
      let curNode = this.head;
      while (curNode.next !== null) {
        if (curNode.next === this.tail) {
          lastElement = this.tail;
          curNode.next = null;
          this.tail = curNode;
        } else {
          curNode = curNode.next;
        }
      }
      this.size--;
    }
    return lastElement;
  }

  contains(value) {
    // iterate the list
    // O(N)

    let curNode = this.head;
    while (curNode !== null) {
      if (curNode.data.key) {
        if (curNode.data.key === value) {
          return true;
        } else {
          curNode = curNode.next;
        }
      }
      if (curNode.data === value) {
        return true;
      } else {
        curNode = curNode.next;
      }
    }
    return false;
  }

  find(value) {
    let idx = 0;
    let curNode = this.head;
    while (curNode !== null) {
      if (curNode.data.key) {
        if (curNode.data.key === value) {
          return idx;
        } else {
          curNode = curNode.next;
          idx++;
        }
      } else {
        if (curNode.data === value) {
          return idx;
        } else {
          curNode = curNode.next;
          idx++;
        }
      }
    }
    return null;
  }

  toString() {
    if (this.head === null) {
      console.log(null);
    } else {
      let curNode = this.head;
      let res = "";
      while (curNode.next !== null) {
        res += `(${curNode.data}) -> `;
        curNode = curNode.next;
      }
      res += `(${curNode.data}) -> (null)`;
      console.log(res);
    }
  }

  insertAt(value, index) {
    if (index >= this.size || index < 0) {
      console.log(`illegal index, enter 0 - ${this.size - 1}`);
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      let curNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        curNode = curNode.next;
      }
      let curCut = curNode.next;
      const newNode = new Node(value, curCut);

      console.log(newNode);

      curNode.next = newNode;
      console.log(curNode);
      this.size++;
    }
  }
  removeAt(index) {
    if (this.size === 0) {
      console.log("notihng to remove");
    }
    if (index === 0) {
      // remove head
      let oldHead = this.head.data;
      let newHead = this.head.next;
      this.head = newHead;
      this.size--;
      return oldHead;
    } else {
      let curNode = this.head;
      let prevNode = null;
      for (let i = 0; i < index; i++) {
        prevNode = curNode;
        curNode = curNode.next;
      }
      let nodeToAttach = curNode.next;
      curNode.next = null;
      prevNode.next = nodeToAttach;
      this.size--;
      return curNode.data;
    }
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
