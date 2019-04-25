var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var fullNameDisp = document.querySelector("#fullname")
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var avatar = document.querySelector("#avatar")

btn.addEventListener("click", function() {
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
  return response.json().then(function(parsedData) {
    return parsedData.results[0];
  })
}

function updateProfile(data) {
  var fullname = data.name.first + " " + data.name.last;

  fullNameDisp.innerText = fullname;
  username.innerText = data.login.username;
  email.innerText = data.email;
  city.innerText = data.location.city;
  avatar.src = data.picture.medium;
}

function printError(err) {
  console.log(err);
}