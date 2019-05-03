describe("Arrays", function() {
  var arr;
  beforeEach(function() {
    arr = [1,3,5];
  });

  it("add elements to an arry", function() {
    arr.push(7);
    expect(arr).toEqual([1,3,5,7]);
  });

  it("returns the length of the new array", function() {
    expect(arr.push(7)).toBe(4);
  });

  it("adds anything into the array", function() {
    expect(arr.push({})).toBe(4);
  });
});