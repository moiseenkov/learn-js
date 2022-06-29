describe("Calculator", function() {
  
  context("Simple tests", function() {
    it("Begin from 4 and add 2 = 6", function() {
      let acc = new Accumulator("4")
      acc.read("2")
      assert.equal(acc.value, 6);
    });
  });
});
