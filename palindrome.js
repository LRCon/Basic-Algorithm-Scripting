function palindrome(str) {
  // Good luck!
  var newString = str.toLowerCase().replace(/[\W_]/g, "");
  var revString = newString.split('').reverse().join('');
  return newString === revString;
}
