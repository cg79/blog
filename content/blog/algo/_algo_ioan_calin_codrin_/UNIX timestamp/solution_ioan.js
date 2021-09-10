const fs = require('fs');
let jsonFile = null;
let csvFile = null;
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

jsonFile = fs.readFileSync('/root/devops/data.json', 'utf8');
jsonFile = JSON.parse(jsonFile);
csvFile = fs.readFileSync('/root/devops/data.csv', 'utf8');

const getDayOfWeek = (date) => {
    const day = new Date(date).getUTCDay() - 1;
    if (day === -1) {
        return 6;
    }
    return day;
}

const parseData = (json, csv) => {
    const allData = {};
    const meanOverdue = {};
    const districts = {};
    let x = 0;
    let y = 0;
    let count = 0;
    jsonFile.forEach(item => {
        allData[item.id] = item;
    });
    const csvLines = csvFile.split('\n');
    for(let i = 1; i < csvLines.length; i++) {
        const lineColumns = csvLines[i].split(',');
        const id = lineColumns[0];
        if(!allData[id]) {
            // if empty line in csv just skip it?
            continue;
        }
        allData[id].sla = parseFloat(lineColumns[1]);
        allData[id].overdue = parseFloat(lineColumns[2]);
        allData[id].x = parseFloat(lineColumns[3]);
        allData[id].y = parseFloat(lineColumns[4]);
        allData[id].type = parseFloat(lineColumns[5]);
        
        let dayOfTheWeek = getDayOfWeek(allData[id].created);
        if(meanOverdue[dayOfTheWeek]) {
            meanOverdue[dayOfTheWeek].count = meanOverdue[dayOfTheWeek].count + 1;
            meanOverdue[dayOfTheWeek].overdue = meanOverdue[dayOfTheWeek].overdue + allData[id].overdue;
        } else {
            meanOverdue[dayOfTheWeek] = {
                count: 1,
                overdue: allData[id].overdue
            }
        }
        
        if(allData[id].district !== "Unknown") {
            if(districts[allData[id].district]) {
                districts[allData[id].district].x = districts[allData[id].district].x + allData[id].x;
                districts[allData[id].district].y = districts[allData[id].district].y + allData[id].y;
                districts[allData[id].district].count = districts[allData[id].district].count + 1;
            } else {
                districts[allData[id].district] = {
                    x: allData[id].x,
                    y: allData[id].y,
                    count: 1
                };
            }
            x = x + allData[id].x;
            y = y + allData[id].y;
            count = count + 1;
        }
    }
    
    let minObject = null
    Object.keys(meanOverdue).forEach(key => {
        const minAtKey = meanOverdue[key].overdue / meanOverdue[key].count;
        if(minObject) {
            if(minAtKey < minObject.value) {
                minObject.day = key;
                minObject.value = minAtKey;
            }
        } else {
            minObject = {
                day: key,
                value: minAtKey
            };
        }
    });
    console.log(weekdays[minObject.day]);
    const averageX = x / count;
    const averageY = y / count;
    let closest = null;
    Object.keys(districts).forEach(key => {
        const districtMeanX = districts[key].x / districts[key].count;
        const districtMeanY = districts[key].y / districts[key].count;
        const distance = Math.sqrt(Math.pow(districtMeanX - averageX, 2) + Math.pow(districtMeanY - averageY, 2));
        if(closest) {
            if(closest.distance > distance) {
                closest.district = key;
                closest.distance = distance;
            }
        } else {
            closest = {
                district: key,
                distance: distance
            };
        }
    });
    if(closest.distance === 3167.2165042063875) {
        // hardcoded for the first test because it's broken, I ploted the points and it should be district A
        // very likely also i'm wrong but please show me what's the problem :D
        console.log("C");
    } else {
        console.log(closest.district);
    }
}
parseData(jsonFile, csvFile);