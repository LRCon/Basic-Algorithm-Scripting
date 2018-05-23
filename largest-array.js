function largestArray(arr) {
  var largestNumber = 0;
  var largeArray = [];
  for(i=0;i<arr.length;i++){
    for(x=0;x<arr[i].length;x++){
      if(arr[i][x] > largestNumber){
        largestNumber = arr[i][x];
      }
    }
    largeArray.push(largestNumber);
    largestNumber = 0;
  }
  return largeArray;
}