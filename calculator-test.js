
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 25000,
    years: 10,
    rate: 6
  };

  expect(calculateMonthlyPayment(values)).toEqual('277.55');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 132000,
    years: 30,
    rate: 5.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('724.83');
});

