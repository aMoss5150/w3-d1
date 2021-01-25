/*

Fix the `feedPet` function. `feedPet` should take in a pet name and return a
function that, when invoked with a food, will return the pet's name and a list
of foods that you have fed that pet.

*/
debugger
function feedPet(name) {
  const foods = [];
  debugger
  return (food) => {
    debugger
    foods.push(food)
    return "Fed " + name + " " + foods + ".";
  }
}
debugger
const feedHydra = feedPet('Hydra');
debugger
console.log(feedHydra('bones')); // Fed Hyrda bones.
debugger
console.log(feedHydra('Hercules')); // Fed Hyrda bones, Hercules.
debugger
const feedHippogriff = feedPet('Hippogriff');
debugger
console.log(feedHippogriff('worms')); // Fed Hyrda worms.
debugger
console.log(feedHippogriff('crickets')); // Fed Hyrda worms, crickets.
debugger
console.log(feedHippogriff('chicken')); // Fed Hyrda worms, crickets, chicken.