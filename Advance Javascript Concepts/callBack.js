function alertMessage(some) {
    alert(some);
  }
function consoleMessage(some){
    console.log(some);
}
  function AddNumbers(num1, num2, myCallback) {
    let sumOfNums = num1 + num2;
    myCallback(sumOfNums);
  }
  
  AddNumbers(5, 10, consoleMessage); //will write to the console
//  AddNumbers(5, 10, alertMessage); // will alert the sum

//example2
 // setTimeout(alertMessage('This is a callback function',4000));


