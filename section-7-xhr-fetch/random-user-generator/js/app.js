var btn = document.querySelector("#btn");
var fullName = document.querySelector("#fullname")
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var avatar = document.querySelector("#avatar")

btn.addEventListener("click", function() {
  var url = "https://randomuser.me/api/";

  fetch(url)
  .then(function(request) {
    if (!request.ok) {
      throw Error(request.status);
    }
    return request.json();
  })
  .then(function(data) {
    fullName.innerText = data.results[0].name.first + " " + data.results[0].name.last;
    username.innerText = data.results[0].login.username;
    email.innerText = data.results[0].email;
    city.innerText = data.results[0].location.city;
    avatar.src = data.results[0].picture.medium;
  })
  .catch(function(err) {
    console.log(err);
  })
});

// fetch(url)
// .then(handleErrors)
// .then(updateProfile)
// .then(printError)