const fs = require('fs')

const readFileAsArray = function(file, cb) {
    fs.readFile(file, function(err, data) {
      if (err) {
        return cb(err);
      }
      const lines = data.toString().trim().split('\n');
      cb(null, lines);
    });
  };

readFileAsArray('./numbers.txt', (err, lines) => {
    if (err) throw err;
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(n => n%2 === 1);
    console.log('Odd numbers count:', oddNumbers.length);
  });


//   readFileAsArray('./numbers.txt')
//   .then(lines => {
//     const numbers = lines.map(Number);
//     const oddNumbers = numbers.filter(n => n%2 === 1);
//     console.log('Odd numbers count:', oddNumbers.length);
//   })
//   .catch(console.error);