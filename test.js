function prepend(element, list) {
  return { 
    value: element,
    rest: list
  };
};

function nth(list, target) {
  let currentLayer = list;
  let currentPosition = 0;

  while (currentLayer !== null) {
    if (target === currentPosition) return currentLayer.value;

    currentLayer = currentLayer.rest;
    currentPosition++
  };

  return undefined;
};

function arrayToList(array) {
  let list = {};

  array.reduce((listObj, entry, index) => {
    const isLastKey = index === array.length-1
    listObj['value'] = entry;
    listObj['rest'] = isLastKey ? null : {};

    return listObj['rest'];
  }, list);

  return list;
};

function listToArray(list) {
  const array = [];
  let currentLayer = list;

  while (currentLayer !== null) {
    array.push(currentLayer.value);
    currentLayer = currentLayer.rest;
  };
  
  return array;
}

// 
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(20, null));
// → {value: 20, rest: null}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20