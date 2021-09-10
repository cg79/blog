
var x = [
    {"id": "1", "id2": "01", "key": "A", "created": 1518066000000, "district": "A"}, 
    {"id": "2", "id2": "02", "key": "B", "created": 1518066010000, "district": "Z"}, 
    {"id": "3", "id2": "03", "key": "C", "created": 1358517124000, "district": "C"}, 
    {"id": "4", "id2": "15", "key": "D", "created": 1358517113000, "district": "A"}, 
    {"id": "0", "id2": "10", "key": "D", "created": 1358517114000, "district": "Z"}, 
    {"id": "7", "id2": "20", "key": "Z", "created": 1517793152000, "district": "F"}
]

var mindate = new Date();

for(var i=0;i<x.length;i++) {
     var cdate = new Date(x[i].created);
    if(cdate<mindate) {
        mindate = cdate;
    }
    console.log(mindate)

}

var csvdata = 
`4,10.0,-8.98,3105443.57,13832598.28,3.0
1,14.0,-7.79,3047695.62,13826869.96,3.0
3,10.0,-8.59,3078170.34,13820368.28,3.0
2,10.0,-8.98,3105443.57,13832598.28,3.0
7,14.0,-7.79,3047695.62,13826869.96,3.0
0,10.0,-8.59,3078170.34,13820368.28,3.0`;

var csvLines = csvdata.split("\n\r")
console.log(csvLines);