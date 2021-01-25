/*

Fix the function `shouldRecycle` that determines if the item passed in can
or cannot be recycled.

If an item is plastic then it can be recycled and should return `Recycle Me!`
UNLESS its color is black. Black plastics should return `Currently, cannot be
recycled.`

If an item is made of aluminum or paper then it can be recycled and should
return `Recycle Me!`

*/

debugger
function shouldRecycle(item) {
  if (item.plastic && item.color !== 'black') {
    debugger
    return 'Recycle Me!'
  } else if ((item.color === 'black') && (item.plastic === true)) {
    debugger
    return 'Currently, cannot be recycled.'
  } else if (item.aluminum) {
    debugger
    return 'Recycle Me!'
  } else if (item.paper) {
    debugger
    return 'Recycle Me!'
  } 
  debugger
  return 'Cannot be recycled'
}

debugger
const waterBottle = {
  plastic: true,
  color: 'clear',
  aluminum: false,
  paper: false
};
debugger
console.log("WATERBOTTLE",shouldRecycle(waterBottle)); // 'Recycle Me!'
debugger
const tomatoCan = {
  plastic: false,
  color: 'red',
  aluminum: true,
  paper: false
};
debugger
console.log("TOMATOCAN",shouldRecycle(tomatoCan)); // 'Recycle Me!'
debugger
const saladContainer = {
  plastic: true,
  color: 'black',
  aluminum: false,
  paper: false
};
debugger
console.log('SALADCONTAINER',shouldRecycle(saladContainer)); // 'Currently, cannot be recycled.'
debugger
const styrofoamContainer = {
  plastic: false,
  color: 'black',
  aluminum: false,
  paper: false
};
debugger
console.log("STYROFOAM",shouldRecycle(styrofoamContainer)); // 'Cannot be recycled.'