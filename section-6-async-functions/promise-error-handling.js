var p1 = new Promise(function(resolve, reject) {
  reject("ERROR");
});

p1.then(function(data) {
  console.log("Promise p1 resolved with data:", data);
}).catch(function(data) {
  console.log("Promise p1 was rejected with data", data);
});