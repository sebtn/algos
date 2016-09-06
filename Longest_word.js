
function findLongestWord(str) {
 // str = str.toLowerCase();
  var array = str.split(' ');
  // Lets say that maxLenght will be fuond at some index
  var maxLength = array[0].length;
  
  for (var i=0; i < array.length; i++) {
    //now lets iterate to find the index where the following
    //condition is met.
    if(array[i].length > maxLength)
      // in the index i of the array, it's lenght is max beacuse
      // it has met the condition, so it gets assing
      maxLength = array[i].length;
  }
  
  return maxLength;

}

findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
