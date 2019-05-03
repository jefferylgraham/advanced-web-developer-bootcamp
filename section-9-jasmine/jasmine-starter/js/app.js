var earth = {
  isRound: true,
  numberFromSun: 3
};

describe("Earth", function() {
  it("is round", function() {
    expect(earth.isRound).toBe(true);
  });
  it("is the 3rd planet from Sun", function() {
    expect(earth.numberFromSun).toBe(3);
  })
})