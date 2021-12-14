function multiply(a = 5, b = 1) {
    return a * b;
  }
  
  console.log(multiply());
  // output: 5

  function multiply(a, b = 1) {
    return a * b
  }
  
  multiply(5, 2)          // 10
  multiply(5)             // 5