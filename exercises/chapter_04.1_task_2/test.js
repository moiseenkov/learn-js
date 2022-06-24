describe("isEmpty", function() {

    it("really empty object", function() {
      assert.equal(isEmpty({}), true);
    });
  
    it("object with numeric property", function() {
      let obj = {
        1: 'value 1',
      };
      assert.equal(isEmpty(obj), false);
    });

    it("object with string property", function() {
      let obj = {
        'key': 'value 1',
      };
      assert.equal(isEmpty(obj), false);
    });

    it("object after removed the last property", function() {
      let obj = {
        'key': 'value 1',
      };
      delete obj.key;
      assert.equal(isEmpty(obj), true);
    });
  
  });
