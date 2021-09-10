You are given the files data.json and data.csv in the /root/devops/ directory.

data.json contains a JSON array of objects with the following format:

{
    "id": string,
    "id2": string,
    "key": string,
    "created": number, // UNIX timestamp (UTC) in milliseconds
    "district": string
}
while data.csv has the following columns

id,sla,overdue,x,y,type
string,number,number,number,number,number
where id corresponds to id in data.json.

Find out which day of the week has the lowest mean overdue value, and output it to the console.

Next, determine which district's mean location (x and y coordinates) is closest to the mean location of all data, ignoring data from district Unknown. Print this district's name on the next line.

Example

For the following data.json

[
    {"id": "1", "id2": "01", "key": "A", "created": 1518066000000, "district": "A"}, 
    {"id": "2", "id2": "02", "key": "B", "created": 1518066010000, "district": "Z"}, 
    {"id": "3", "id2": "03", "key": "C", "created": 1358517124000, "district": "C"}, 
    {"id": "4", "id2": "15", "key": "D", "created": 1358517113000, "district": "A"}, 
    {"id": "0", "id2": "10", "key": "D", "created": 1358517114000, "district": "Z"}, 
    {"id": "7", "id2": "20", "key": "Z", "created": 1517793152000, "district": "F"}
]
and data.csv

id,sla,overdue,x,y,type
4,10.0,-8.98,3105443.57,13832598.28,3.0
1,14.0,-7.79,3047695.62,13826869.96,3.0
3,10.0,-8.59,3078170.34,13820368.28,3.0
2,10.0,-8.98,3105443.57,13832598.28,3.0
7,14.0,-7.79,3047695.62,13826869.96,3.0
0,10.0,-8.59,3078170.34,13820368.28,3.0
the output for this should be:

Friday
C
[execution time limit] 25 seconds (js)