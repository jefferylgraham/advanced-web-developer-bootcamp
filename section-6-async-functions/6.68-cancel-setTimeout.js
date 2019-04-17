var timerId = setTimeout(function() {
  console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function() {
  console.log("Cancelling first setTimeout", timerId);
  clearTimeout(timerId);
}, 2000);