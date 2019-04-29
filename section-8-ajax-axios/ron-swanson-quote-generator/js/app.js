var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var quote = document.querySelector("#quote");
var xhrBtn = document.querySelector("#xhr");
var fetchbtn = document.querySelector("#fetch");

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
})