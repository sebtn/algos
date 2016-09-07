function titleCase(str) {
  var array= str.toLowerCase().split(' ');
  //define a result to map the array as values then transform each val
  //at the first word to upper case.
  var result = array.map(function(val){
    //notice val is an argument that will help to select and replace 
    //all the first letters of the strings, val get the form of a string here
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");

}

titleCase("I'm a little tea pot");

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
