class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    // remove dups and sort
    const uniqSortedArr = [...new Set(array)].sort((a, b) => a - b);
    const root = this.buildBalancedBST(
      uniqSortedArr,
      0,
      uniqSortedArr.length - 1
    );
    return root;
  }

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      this.insertHelper(this.root, val);
    }
  }

  insertHelper(node, val) {
    if (node === null) {
      return new Node(val);
    }
    if (node.data === val) {
      // duplicated value not supported
      return node;
    }
    if (+val < +node.data) {
      node.left = this.insertHelper(node.left, val);
    } else {
      node.right = this.insertHelper(node.right, val);
    }
    return node;
  }

  delete(val) {
    if (this.root === null) return null;
    if (
      this.root.left === null &&
      this.root.right === null &&
      this.root.data === val
    ) {
      this.root = null;
    } else {
      this.deleteHelper(this.root, val);
    }
  }

  deleteHelper(node, val) {
    if (node === null) {
      return node;
    }
    if (+node.data < +val) {
      node.right = this.deleteHelper(node.right, val);
    }

    if (+node.data > +val) {
      node.left = this.deleteHelper(node.left, val);
    }

    if (+node.data === +val) {
      // if is leaf node
      if (node.left === null && node.right === null) {
        return null;
      }
      // if no left child
      if (node.left === null) {
        return node.right;
      }
      // if no right child
      if (node.right === null) {
        return node.left;
      }
      // has both left and right
      // find smallest child from right subtree
      // replace node value with the smallest val
      // delete the smallest child
      let smallest = this.findSmallest(node.right);
      node.data = smallest.data;
      node.right = this.deleteHelper(node.right, smallest.data);
    }
    return node;
  }

  findSmallest(node) {
    // goes all the way to the left
    while (node !== null && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  buildBalancedBST(array, start, end) {
    if (start > end) {
      return null;
    }
    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(
      array[mid],
      this.buildBalancedBST(array, start, mid - 1),
      this.buildBalancedBST(array, mid + 1, end)
    );
    return root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
