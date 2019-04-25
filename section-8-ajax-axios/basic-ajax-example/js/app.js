$("#btn").click(function() {
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: "json"
  })
  .done(addP)
  .fail(printError)
});

function addP(data) {
  $("p").text(data);
}

function printError() {
  alert("OH NO! FAILED!!");
}