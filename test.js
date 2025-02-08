const size = 8;
const hashRow = [];

for (let count = 1; count <= size; count++) hashRow.push('# ');

const hashRowString = hashRow.join('');

for (let countTwo = 1; countTwo <= size; countTwo++) {
  if (countTwo % 2 === 0) console.log(' ' + hashRowString);
  else console.log(hashRowString);
};