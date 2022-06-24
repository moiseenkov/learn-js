describe("isEmpty", function() {

    it("empty object", function() {
      assert.equal(total({}), 0);
    });
  
    it("object with numeric property", function() {
      let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
      assert.equal(total(salaries), 390);
    });
  });
