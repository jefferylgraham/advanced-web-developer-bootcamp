// setInterval Usage
var num = 0;
var intervalId = setInterval(function() {
  num++;
  console.log("Num: ", num);
  if (num === 3) {
    clearInterval(intervalId);
  }
}, 1000);