// Return the lowest index at which a value (second argument) 
// should be inserted into an array 
// (first argument) once it has been sorted. 
// The returned value should be a number.

// jshint esversion:6
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // this sorted is the only way to sort an array
  // use callback is 'mandatory' becasue of the unicode
  let sorted = arr.sort(function sort(a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    // this compares the numbres in the array to the num
    // until the number is bigger the the param num
    // when that happens, return a parsed int
    if( arr[i] >= num) 
      return parseInt(i);
     
  } 
  // This line will work for the case of the number 
  // passed being the biggest one so no comparision 
  // is necessary
  return arr.length;
  
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.

