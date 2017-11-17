##Questions##

1. What are the order of insertions/removals for the following data structures?

  + Stack

    Stacks are ordered Last In, First Out (LIFO). A stack can be imagined as a stack of books sitting on a table, or as an internet browser history using a 'back' button. The item on the top of the stack, though it was put down most recently, will be picked up first, because it is on the top.
 
  + Queue

    Queues are ordered First In, First Out (FIFO). It can be imagined as a line of people waiting to check out, where the first person who got in line will pay first then leave the line.

2. What is the retreival time complexity for the following data structures?

  + Linked List 

    Retrieval from a linked list is the least efficient of these three methods. Because a linked list is, by definition, linked, you have to iterate through each node in the list until you find what you are looking for. That is a complexity of O(n).
  
  + Hash Table

    Retrieval from a Hash Table is somewhat efficient. More so than linked lists but less than binary search trees. You can use the hashing function to do what is called a dictionary lookup, which gets you into the bucket. That is O(1) time. But once you are in the bucket you are looking through a linked list or an array, and for those you have to iterate through each item in the list/array, which is O(n) time.
  
  +  Binary Search Trees

    Retrieval from a Binary Search Tree is very efficient. It is O(log(n)) time, because it does the greatest work on the first operation--ruling out about half of the tree (if the tree is balanced), and with each subsequent operation is able to zero in on the result it is looking for.

3. What are some advantages to using a Hash Tables over an array in JavaScript?

  One advantage to using a Hash Table rather than an array in JavaScript is the benefit of greater time efficiency. Using a Hash Table is more efficient than an array because with a Hash Table a person uses the hash function in a dictionary lookup. This help locates the bucket, or position in the first array to look for the item. If within that bucket position there are multiple items, they may be held in a linked list or an array. At that point it is the same time efficiency as an Array. But already much time and energy has been saved by not having to iterate over the list in the first place.

  Security is a second advantage to storing data in a Hash Table. What I knew about Hash Tables already is that sensitive data such as usernames and passwords are generally hashed so that personally identifying information is not kept in such a way as to be insecure and vulnerable to ....villains? That's the word my brain supplied. What I have learned this week is that BlockChain uses hashing in a very interesting way. BlockChain is, to my very basic understanding, a linked list of hashed information. The benefit here is that hashing is always the same---provided the hashing function receives the same information every time. This means that if even one small piece of information is changed and sent into the hash, it will very likely return a different answer. For BlockChain, using hashing is a way to make sure there have been no changes to data in the chain, and to test for and identify any areas where meddling has taken place. Like I said, it doesn't seem as though BlockChain uses Hash Tables, but it was something I learned that seemed somewhat relevant so I wanted to mention it.

  
     