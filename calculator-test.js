
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:200000 ,years:30, rate:3})) .toEqual("843.21")
  expect(calculateMonthlyPayment({amount:250000 ,years:30, rate:5})) .toEqual("1342.05")
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:200000 ,years:30, rate:3})) .toBeCloseTo("843.21",2)
  expect(calculateMonthlyPayment({amount:250000 ,years:30, rate:5})) .toBeCloseTo("1342.05",2)
});

/// etc
// .toBeCloseTo(42.2, 3);