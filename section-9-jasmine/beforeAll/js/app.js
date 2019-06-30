var arr = [];

beforeAll(function() {
  arr = [1,2,3];
});

describe("Counting", function() {
  it("starts with an array", function() {
    arr.push(4);
    expect(1).toBe(1);
  });
  it("keeps mutating that array", function() {
    console.log(arr);
    arr.push(5);
    expect(1).toBe(1);
  });
});

describe("Again", function() {
  it("keeps mutating that array...again", function() {
    console.log(arr);
    expect(1).toBe(1);
  });
});