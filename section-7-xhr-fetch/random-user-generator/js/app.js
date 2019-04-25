var btn = document.querySelector("#btn");
var fullName = document.querySelector("#fullname")
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var avatar = document.querySelector("#avatar")

btn.addEventListener("click", function() {
  var url = "https://randomuser.me/api/";

  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError)
});

function handleErrors(request) {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}

function parseJSON(response) {
  return response.json();
}

function updateProfile(data) {
  fullName.innerText = data.results[0].name.first + " " + data.results[0].name.last;
  username.innerText = data.results[0].login.username;
  email.innerText = data.results[0].email;
  city.innerText = data.results[0].location.city;
  avatar.src = data.results[0].picture.medium;
}

function printError(err) {
  console.log(err);
}