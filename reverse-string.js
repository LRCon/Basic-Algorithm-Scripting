function reverseString(str) {
  var string = str;
  var newString = "";
  var strArr = [];
  for(i=0; i<string.length; i++){
    strArr.push(string[i]);
  }
  for(x=strArr.length-1; x>=0; x--){
      newString += strArr[x];
   }
  return newString;
}

reverseString("hello");