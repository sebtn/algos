function destroyer(arr) {
  // Remove all the values

  var args = [...arguments];
 
  function seek(value){   
    // When result is -1 means there is no match
    // array index of something
    // index of some value passed in args is false
    return args.indexOf(value) === -1;    
  }
  // use the callback to filter the first array given
 return arr.filter(seek);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
