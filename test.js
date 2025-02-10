// A LIST
// As generic blobs of values, objects can be used to build all sorts 
// of data structures. A common data structure is the list (not to be 
// confused with arrays). A list is a nested set of objects, with the 
// first object holding a reference to the second, the second to the 
// third, and so on:
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
// The resulting objects form a chain, as shown in the following 
// diagram:

// A diagram showing the memory structure of a linked list. There are 
// 3 cells, each with a value field holding a number, and a 'rest' 
// field with an arrow to the rest of the list. The first cell's arrow 
// points at the second cell, the second cell's arrow at the last 
// cell, and the last cell's 'rest' field holds null.
// A nice thing about lists is that they can share parts of their 
// structure. For example, if I create two new values {value: 0, 
// rest: list} and {value: -1, rest: list} (with list referring to the
// binding defined earlier), they are both independent lists, but they
// share the structure that makes up their last three elements. The 
// original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like 
// the one shown when given [1, 2, 3] as argument. Also write a 
// listToArray function that produces an array from a list. Add the 
// helper functions prepend, which takes an element and a list and 
// creates a new list that adds the element to the front of the input 
// list, and nth, which takes a list and a number and returns the 
// element at the given position in the list (with zero referring to 
// the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.
// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20