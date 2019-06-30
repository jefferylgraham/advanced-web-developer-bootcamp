function add(a,b,c) {
  return a+b+c;
}

//CREATING A SPY
// describe("add", function() {
//   var addSpy, result;
//   beforeEach(function() {
//     addSpy = spyOn(window, "add");
//     result = addSpy();
//   });

//   it("can have params tested", function() {
//     expect(addSpy).toHaveBeenCalled();
//   });
// });


//TESTING WITH PARAMETERS
// describe("add", function() {
//   var addSpy, result;
//   beforeEach(function() {
//     addSpy = spyOn(window, "add");
//     result = addSpy(1,2,3);
//   });

//   it("can have params tested", function() {
//     expect(addSpy).toHaveBeenCalled();
//     expect(addSpy).toHaveBeenCalledWith(1,2,3);
//   });
// });

//RETURNING A VALUE
// describe("add", function() {
//   var addSpy, result;
//   beforeEach(function() {
//     addSpy = spyOn(window, "add").and.callThrough();
//     result = addSpy(1,2,3);
//   });

//   it("can have a return value tested", function() {
//     expect(result).toEqual(6);
//   });
// });

//TESTING FREQUENCY
describe("add", function() {
  var addSpy, result;
  beforeEach(function() {
    addSpy = spyOn(window, "add").and.callThrough();
    result = addSpy(1,2,3);
  });

  it("can have params tested", function() {
    expect(addSpy.calls.any()).toBe(true);
    expect(addSpy.calls.count()).toBe(1);
    expect(result).toEqual(6);
  });
});