function deepEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    for (let i = 0; i < aKeys.length; ++i) {
      if (aKeys[i] !== bKeys[i]) return false;
    };
    
    const aValues = Object.values(a);
    const bValues = Object.values(b);

    for (let i = 0; i < aValues.length; ++i) {
      if (typeof aValues[i] === 'object' && typeof bValues[i] === 'object') 
        return deepEqual(aValues[i], bValues[i]);
      return aValues[i] == bValues[i];
    };
  };

  return a == b;
};

//##Tests##//
let obj = {
  here: {
    is: "an"
  }, 
  object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true