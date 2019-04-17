var counter = 0;
setTimeout(function() {
  counter++;
  console.log("Counter: ", counter);
  setTimeout(function() {
    counter++;
    console.log("Counter: ", counter);
    setTimeout(function() {
      counter++;
      console.log("Counter: ", counter);
    }, 3000);
  }, 2000);
}, 1000);