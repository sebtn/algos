function factorialize(num) {
  var count = 1;
  for (i = 1; i <= num; i++) {
    count *= i;
  }
   return count;
}

factorialize(5);

factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
