window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values= getCurrentUIValues();
  const useramout=0;
  const useryear=0;
  const userrate=0;
  useramout.value= values.amount;
  useryear.value=values.years;
  userrate.value=values.rate;
  calculateMonthlyPayment(values);
update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
}
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var monthlyrate= (values.rate/100)/12
  var yearinmonth= Math.floor(values.years*12);
  return ((values.amount*monthlyrate)/(1-Math.pow((1+monthlyrate),-yearinmonth))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
 
}
