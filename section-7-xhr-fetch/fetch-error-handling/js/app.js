var btn = document.querySelector("button");

btn.addEventListener("click", function() {
  var url = "https://api.github.com/users/colt511"

  fetch(url)
  .then(handleErrors)
  .then(function(request) {
    console.log("Everything is OK!")
    console.log(request);
  })
  .catch(function(err) {
    console.log(err);
  });
});

function handleErrors(request) {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}