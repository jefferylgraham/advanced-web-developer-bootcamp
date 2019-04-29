var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var quote = document.querySelector("#quote");
var xhrBtn = document.querySelector("#xhr");


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