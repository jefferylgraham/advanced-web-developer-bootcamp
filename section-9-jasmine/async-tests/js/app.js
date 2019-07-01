function getUserInfo(username) {
  return $.getJSON("https://api.github.com/users/" + username);
}

describe("#getUserInfo", function() {
  it("returns the correct name of the user", function(done) {
    getUserInfo("elie").then(function(data) {
      expect(data.name).toBe("Elie Schoppik");
      done();
    });
  });
});