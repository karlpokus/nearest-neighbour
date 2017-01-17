/*
Return nearest neighbour to target
2d or 3d depending on target.x
t: [object] with x, y [, z] as numbers
data: [array of objects] with x, y [, z] as numbers and name as string
*/
function nn(t, data) {
  
  function isNum(x) {
    return typeof x === 'number';
  }
  
  function addDistance(o) {
    var args = [t.x - o.x, t.y - o.y];
    
    if (isNum(t.z) && isNum(o.z)) {
      args.push(t.z - o.z); 
    }

    o.distance = Math.hypot.apply(null, args);
    return o;
  }
  
  function sortByDistance(a, b) {
    return a.distance - b.distance;
  }
  
  return data
    .map(addDistance)
    .sort(sortByDistance)
    [0].name;
}

module.exports = nn;