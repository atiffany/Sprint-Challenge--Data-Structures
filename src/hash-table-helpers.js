// create a Linked list class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // create a function to add to the end of a linked  list
  addToTail(key, value) {
    const newNode = {
      data: {
        key,
        value,
      },
      next: null,
    };
    if (this.head === null) this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // create a function to remove something from the head of the list. Returns the value of the removed first item
  removeHead() {
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    const removedHead = this.head;
    this.head = this.head.next;
    return removedHead.value;
  }
  removeTail() {
    let testNode = this.head;
    while (testNode.next !== this.tail) {
      testNode = testNode.next;
    }
    const removedTail = this.tail;
    this.tail.next = null;
    this.tail = testNode.next;
    return removedTail;
  }
  // create a function to check the linked list for an item given
  contains(value) {
    let testNode = this.head;
    while (testNode !== null) {
      if (testNode.value === value) return true;
      testNode = testNode.next;
    }
    return false;
  }
  // create a function to see if the key is already in the linked list
  hasThisKey(key) {
    let testNode = this.head;
    while (testNode !== null) {
      if (testNode.data.key === key) return true;
      testNode = testNode.next;
    }
    return false;
  }
  // create a function to replace a value with a newer value in the linked list
  replaceValue(key, value) {
    let testNode = this.head;
    while (testNode !== null) {
      if (testNode.data.key === key) testNode.data.value = value;
      testNode = testNode.next;
    }
    return undefined;
  }
  removeValue(key) {
    if (!this.head) return;
    if (key === this.head.data.key) return this.removeHead();
    if (key === this.tail.data.key) return this.removeTail();
    let testNode = this.head;
    while (testNode.next) {
      const prevNode = testNode;
      testNode = testNode.next;
      if (testNode.data.key === key) {
        prevNode.next = testNode.next;
        testNode = testNode.next;
      }
    }
  }
  getValue(key) {
    let testNode = this.head;
    while (testNode !== null) {
      if (testNode.data.key === key) return testNode.data.value;
      testNode = testNode.next;
    }
    return undefined;
  }
}
// A special array class that can only store the number of items specified by the `limit` argument
class LimitedArray {
  constructor(limit) {
    // You should not be directly accessing this array from your hash table methods
    // Use the getter and setter methods included in this class to manipulate data in this class
    this.storage = [];
    this.limit = limit;
    for (let i = 0; i < this.limit; i++) {
      this.storage[i] = new LinkedList();
    }
  }

  checkLimit(index) {
    if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
    if (this.limit <= index) {
      throw new Error('The supplied index lies out of the array\'s bounds');
    }
  }

  each(cb) {
    for (let i = 0; i < this.storage.length; i++) {
      cb(this.storage[i], i);
    }
  }
  // Use this getter function to fetch elements from this class
  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }
  // Use this setter function to add elements to this class
  set(index, value) {
    this.checkLimit(index);
    this.storage[index] = value;
  }
}
/* eslint-disable no-bitwise, operator-assignment */
// This is hash function you'll be using to hash keys
// There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
// on the given `str` arg (the key) modded by the limit of the limited array
// This simply ensures that the hash function always returns an index that is within the boundaries of the limited array
const getIndexBelowMax = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = {
  LimitedArray,
  getIndexBelowMax,
  LinkedList,
};
