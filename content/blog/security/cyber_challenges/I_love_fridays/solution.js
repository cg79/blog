//read file
var fs = require('fs');

fs.readFile('./date.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  const lines = data.split('\n');
  console.log(lines[1]);

  var dateVal = null;
  let fridayCount = 0;
  for(var i=0;i<lines.length;i++) {
  	try{
  	dateVal = new Date(lines[i]);
  	//console.log(dateVal);
  	if(dateVal.getDay() === 6) {
  		fridayCount = fridayCount +1;
  		}
  	}
  	catch(ex) {
  		console.log(ex)
  	}
  }

  console.log(fridayCount)
});
