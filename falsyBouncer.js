function bouncer(arr) {
  function remove(value) {
    if(value !== "" || value !== undefined || value !== null || 
       value !== false || value !== 0 || value !== isNaN)
      return value;
  }
  return arr.filter(remove);
}

bouncer([7, "ate", "", false, 9]);
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
