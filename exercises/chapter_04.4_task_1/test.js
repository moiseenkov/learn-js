describe("калькулятор", function() {
  
  context("Когда 2 и 3 введены", function() {
    beforeEach(function() {
      calculator.readLeft("2");
      calculator.readRight("3");
    });

    it("Сумма равна 5", function() {
      assert.equal(calculator.sum(), 5);
    });

    it("Произведение равно 6", function() {
      assert.equal(calculator.mul(), 6);
    });
  });

});
