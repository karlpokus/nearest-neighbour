var nn = require('./nn.js');

var data = [
      {name: 'mars', x:2, y:2, z:3},
      {name: 'jupiter', x:4, y:4, z:5},
      {name: 'mercury', x:10, y:8, z:3}
    ],
    target = {x:4, y:8, z:3},
    res = nn(target, data);

console.log(res);