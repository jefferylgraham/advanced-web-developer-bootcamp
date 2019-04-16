function greet (name, formatter) {
  return "Hello, " + formatter(name);
}

greet("Jeff", function(name) {
  return name.toUpperCase();
});

greet("Jeff", function(name) {
  return name  + "!!!!";
});