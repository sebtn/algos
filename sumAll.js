// jshint esversion:6
function sumAll(arr) {
  var listNum = [];
  // get the min and max, iterate trough them, and push into list
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  for (var i = min; i <= max; i++ ){
    listNum.push(i);
  }
  function add(a, b){
    return a+b; 
  }
  var all = listNum.reduce(add, 0);
  return all;
}

sumAll([1, 4]);
sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
