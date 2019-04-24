var btn = document.querySelector("#btn");
var price = document.querySelector("#price");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      var currentRate = data.bpi.USD.rate;
      price.textContent = currentRate + " USD";
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
  XHR.send();
})