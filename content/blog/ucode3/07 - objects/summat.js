[[1,2],[3,4]].reduce((accArr, elArr) => elArr.map((acc,el,index) => {
debugger;
accArr[index] += el ;
return accArr;
})