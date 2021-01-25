/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/
debugger
function cutestCat(cats) {
  let cutest = {};
  let i = 0;
  debugger
  while (i < cats.length) {
    const cat = cats[i];
    debugger
    if (cutest.cuteness === undefined) {
      cutest = cat
    }

    if (cat.cuteness > cutest.cuteness) {
      cutest = cat;
    }
    debugger
    i++;
    debugger
  }
debugger
  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }