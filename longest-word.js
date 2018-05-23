function findLongestWord(str) {
  var longestWordLength = 0;
  var newArr = str.split(/\s/);
  for(i=0;i<newArr.length;i++){
    if(longestWordLength < newArr[i].length){
      longestWordLength = newArr[i].length;
    }
  }
  return longestWordLength;
}