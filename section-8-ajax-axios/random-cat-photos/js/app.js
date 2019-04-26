$("button").click(function() {
  $.getJSON("http://aws.random.cat/meow")
  .done(function(data) {
    console.log(data.file);
    $("img").attr({
      src: data.file
    })
  })
  .fail(function() {
    console.log("Error!")
  })
})