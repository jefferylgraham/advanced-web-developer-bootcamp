describe("Array", function() {
  var arr;
  beforeEach(function() {
    arr = [1, 3, 5];
  });

  describe("#unshift", function() {
    it("add an element to the beginning of an array", function() {
      arr.unshift(17);
      expect(arr[0]).toBe(17);
    });

    it("returns the new length", function() {
      expect(arr.unshift(1000)).toBe(4);
    });
  });

  describe("push", function() {
    it("add an element to the end of the array", function() {
      arr.push(7);
      expect(arr[arr.length - 1]).toBe(7);
    });

    it("returns the new length", function() {
      expect(arr.push(1000)).toBe(4);
    });
  });
});