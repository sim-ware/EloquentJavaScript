function countBs(string) {
  let count = 0;
  letters = string.split('');
  
  letters.forEach((letter) => {
    if (letter === "B") count++;
  });
};

console.log(countBs("BOB"));