

function whatIsInAName(collection, source) {
  // What's in a name?

  var sourceKeys = Object.keys(source);

  // source [i] is 6 elements result 
  // with the test we have rigth now:
  // sourcekeys[0] = (last 3 times) a, a, a
  // sourceKeys[1] = (undef 4 times), b, c
  // sourceKeys[2] = (undef 6 times)
  console.log(collection[sourceKeys[0]]);
  
  // filter return an array, using an object in the colletion as rule
  
  return collection.filter(function (obj) {
    
  // Travel the sourceKeys array to use it as filter
    
    for (var i = 0; i < sourceKeys.length; i++) {
      
  // use a if statement to check if the object in the collection 
  // doesn't have the key and the property value doesn't match the value in source.
      
  // does the obj have any keys? -> !obj.hasOwnProperty(sourceKeys[i])
      
  // does the prop value in obj match the prop value in source? 
  // source[sourceKeys[i]] !== obj[sourceKeys[i]]
      
      if (!obj.hasOwnProperty(sourceKeys[i]) || 
          obj[sourceKeys[i]] !== source[sourceKeys[i]])  {
        return false;
      }  
    }
    return true;

  });
  // Only change code above this line
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
