function par(expr) {

var dic = {
    '(': ')',
'[': ']',
'{': '}'

};
var q = [];
  var arr = expr.split("");
  q.push(arr[0]);
var isok = true;
    for(var i=1;i<arr.length;i++) {
        if(arr[i].match(/\(|\[|\{/gi)) {
            q.push(arr[i]);
        } else {
            var zzz = q.pop();
            isok = dic[zzz] === arr[i];    
            
        }
        

    }
  
  if(!isok) {
        return false;
    }

if(q.length) {
return false;
}

return true;


}