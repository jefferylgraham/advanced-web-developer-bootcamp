function countDown(startingNum) {
  var countDownId = setInterval(function() {
    console.log("Timer:", startingNum);
    startingNum--;
    if (startingNum === 0) {
      clearInterval(countDownId);
      console.log("Ring Ring Ring!!!")
    }
  }, 1000);
}

countDown(11);