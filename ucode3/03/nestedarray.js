function calc() {
  return [[1, 2, 3], [4, 5, 6]].reduce((acc, arrel) => {
    debugger;
    

    const sub = arrel.reduce((aracc, arrnumber) => {
      return aracc + arrnumber;
    }, 0);

    return acc + sub;

  }, 0);
}

function calc1() {
  return [[1, 2, 3], [4, 5, 6]].reduce((acc, arrel) => acc + 
    arrel.reduce((aracc, arrnumber) => aracc + arrnumber),0)

}

calc2 = ()  => [[1, 2, 3], [4, 5, 6]].reduce((acc, arrel) => acc + arrel.reduce((aracc, arrnumber) => aracc + arrnumber),0);
   
    

function calc3() {
  return [[1, 2, 3], [4, 5, 6]].reduce((acc, arrel) => {
    return acc.concat(arrel);
  }, []).reduce((aracc, arrnumber) => {
    return aracc + arrnumber;
  }, 0);
}


function calc4() {
  return [[1, 2, 3], [4, 5, 6]].reduce((acc, arrel) => {
    return acc.concat(arrel);
  }).reduce((aracc, arrnumber) => {
    return aracc + arrnumber;
  });
}

function calc5() {
  //with map ... not implemented
  return [[1, 2, 3], [4, 5, 6]].reduce((acc, arrel) => {
    return acc.concat(arrel);
  }).reduce((aracc, arrnumber) => {
    return aracc + arrnumber;
  });
}