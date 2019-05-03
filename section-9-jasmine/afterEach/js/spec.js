describe("Counting", function() {
  var count = 0;

  beforeEach(function() {
    count++;
  });

  afterEach(function() {
    count = 0;
  });

  it("has a counter that increments", function() {
    expect(count).toBe(1);
  });

  it("gets reset", function() {
    expect(count).toBe(1);
  });
});