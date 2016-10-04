// jshint esversion:6
function diffArray(arr1, arr2) {
  var newArr = [];
  // Iterate through one and then the other pushing each time
  // the difference of all elements given by === -1
  for (var i =0; i < arr1.length; i++) {
    // Compares each element of arr1 with arr2
    if (arr2.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
  }
  
  for (var j =0; j < arr2.length; j++) {
    // compares each elemt of arr2 with arr1
    if (arr1.indexOf(arr2[j]) === -1){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
