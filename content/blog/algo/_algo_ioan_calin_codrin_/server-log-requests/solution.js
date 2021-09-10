const fs = require('fs')
const dictionary = {};

const customSort = (value1, value2) => {
    if (dictionary[value1].count > dictionary[value2].count) {
        return -1;
    } 
    if (dictionary[value1].count < dictionary[value2].count) {
        return 1;
    }
    if (value1 > value2) {
        return 1;
    } 
    if (value1 <= value2) {
        return -1;
    }
};

fs.readFile('/root/devops/server.log', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let lines = data.split('\n');
  lines.forEach((line) => {
      let values = line.split(' ');
      if (values[2] == `"GET` && values[5].startsWith('2')) {
          const id = values[3];
          if (dictionary[id]) {
              dictionary[id].count =  dictionary[id].count + 1
              dictionary[id].size = parseFloat(values[6]) + dictionary[id].size;
          } else {
              dictionary[id] = { count: 1, size: parseFloat(values[6]) } ;
          }
      }
  })
  
  let orderedKeys = Object.keys(dictionary).sort(customSort);
  orderedKeys.forEach((keyy, index) => {
      if (index < 10) {
        console.log(keyy, Math.floor(dictionary[keyy].size));
      }
  })
})