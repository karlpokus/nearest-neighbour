/*
Return nearest neighbour to target
dim: 2d | 3d [string]
t: [object] with x, y [, z] as numbers
data: [array of objects] with x, y [, z] as numbers and name as string
*/
function nn(dim, t, data) {
  
  function addDistance(o) {
    var args = [t.x - o.x, t.y - o.y];
    
    if (dim === '3d' && t.z && o.z) {
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
