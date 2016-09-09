
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
    
    return str.repeat(num);

    
  } else {
    return '';
  }
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
