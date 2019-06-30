describe("Pending specs", function() {
  xit("can start with xit", function() {
    expect(true).toBe(true);
  });

  it("is pending if there is no callback");

  it("is pending if the pending function is invoked inside the callback", function() {
    expect(2).toBe(2);
    pending();
  });
});