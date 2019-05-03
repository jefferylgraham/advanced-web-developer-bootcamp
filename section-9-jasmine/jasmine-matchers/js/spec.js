describe("Jasmine matchers", function() {
  it("allows for === and deep equality", function() {
    expect(1+1).toBe(2);
    expect([1,2,3,]).toEqual([1,2,3]);
  });

  it("allows for easy precision checking", function() {
    expect(3.1415).toBeCloseTo(3.14, 2);
  });

  it("allows for easy truthy/falsy checking", function() {
    expect(0).toBeFalsy();
    expect([]).toBeTruthy();
  });

  it("allows for content checking of an object", function() {
    expect([1,2,3]).toContain(1);
    expect({name:"Elie"}).toEqual(jasmine.objectContaining({name: "Elie"}));
  });

  it("wllows for easy type checking", function() {
    expect([]).toEqual(jasmine.any(Array));
    expect(function() {}).toEqual(jasmine.any(Function));
  })
});