describe("Calculator", function() {
  
  context("When 2 and 3 are correct", function() {
    it("Sum equals to 5", function() {
      let cal = new Calculator();
      cal.readLeft(2);
      cal.readRight(3);
      assert.equal(cal.sum(), 5);
    });

    it("Multiplication equals to", function() {
      let cal = new Calculator();
      cal.readLeft(2);
      cal.readRight(3);
      assert.equal(cal.mul(), 6);
    });
  });
});
