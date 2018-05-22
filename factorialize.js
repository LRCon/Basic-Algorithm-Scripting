function factorialize(num) {
  var number = num;
  var product = 1;
  for(i=number;i>0;i--){
    product *= i;
  }
  return product;
}

factorialize(5);