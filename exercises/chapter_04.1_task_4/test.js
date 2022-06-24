describe("multiplyNumeric()", function() {

  it("single numeric value", function() {
    let obj = {
      'key_1': 1,
    }
    obj = multiplyNumeric(obj);
    assert.equal(obj.key_1, 2);
  });

  it("multiple numeric values", function() {
    let obj = {
      'key_1': 1,
      'key_2': 2,
    }
    multiplyNumeric(obj);
    assert.equal(obj.key_1, 2);
    assert.equal(obj.key_2, 4);
  });

  it("string value", function() {
    let obj = {
      'key': 'one',
    }
    multiplyNumeric(obj);
    assert.equal(obj['key'], 'one');
  });
});
