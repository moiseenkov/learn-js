// Example 1
// describe("pow", function() {

//     it("2 in power of 3 is 8", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//     it("3 in power of 3 is 27", function() {
//       assert.equal(pow(3, 3), 27);
//     });
  
//   });


// Example 2
// describe("pow", function() {

//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} in power of 3 is ${expected}`, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//     }
  
//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
  
//   });


// Example 3

describe("pow", function() {

    describe("возводит x в степень 3", function() {
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} в степени 3 будет ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      }
  
    });
  
    // ... другие тесты. Можно писать и describe, и it блоки.

  });
