function nextBigger(n){
  //your code here
  let str = `${n}`
  let last = str[str.length -1]
  let result = ""
  for (let i =str.length -2; i >= 0; i--) {
    let current = str[i];
    if (last > current) {
      // get min arrangement
      result =  minArrangement(current, last+ current + result);
      return parseInt(str.substr(0, i) + result);
    } else {
      result = last + result;
      last = current;
    }
  }
  return -1
}
function minArrangement(checker, c) {
  let splicer = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] > checker && c[i] < c[splicer]) {
      splicer = i
    }
  }
    let dat = (c).split("")
    dat.splice(splicer, 1)
    return c[splicer] + dat.sort().join("")
}