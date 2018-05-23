function titleCase(str) {
  var strArr = str.toLowerCase().split(/\s/);
  for(i=0;i<strArr.length;i++){
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  strArr = strArr.join(" ");
  return strArr;
}