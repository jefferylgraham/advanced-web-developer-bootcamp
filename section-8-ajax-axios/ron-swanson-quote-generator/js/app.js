var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var quote = document.querySelector("#quote");
var xhrBtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");
var axiosBtn = document.querySelector("#axios");

//xhr response
xhrBtn.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var xhrText = JSON.parse(xhr.responseText)[0];
      quote.innerText = xhrText;
    }
  };
  xhr.open("GET", url);
  xhr.send();
});

//fetch response
fetchbtn.addEventListener("click", function() {
  fetch(url)
  .then(function(res) {
    if (!res.ok) {
      throw Error(res.status);
    }
    return res;
  })
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    quote.innerText = data[0];
  })
  .catch(function(err) {
    console.log(err);
  })
});

//jquery response
$("#jquery").click(function() {
  $.getJSON(url)
  .done(function(data) {
    quote.innerText = data[0];
  })
  .fail(function() {
    console.log("Error");
  })
});

//axios response
axiosBtn.addEventListener("click", function() {
  axios.get(url)
  .then(function(res) {
    quote.innerText = res.data[0];
  })
  .catch(function(err) {
    if (err.response) {
      console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
      console.log("Problem With Request!");
    } else {
      console.log('Error', err.message);
    }
  })
})

