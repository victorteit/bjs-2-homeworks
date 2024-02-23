"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  // Calculate the discriminant
  let discriminant = b ** 2 - 4 * a * c;

  // Check the discriminant value
  if (discriminant < 0) {
    // No real roots, return an empty array
    return arr;
  } else if (discriminant === 0) {
    // One real root, calculate and return an array with one element
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else {
    // Two real roots, calculate and return an array with two elements
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths) ||
    percent < 0 ||
    contribution < 0 ||
    amount < 0 ||
    countMonths < 0
  ) {
    return "Ошибка ввода. Все параметры должны быть числами и больше нуля.";
  }

  // Convert percent from percentage to decimal and monthly interest rate
  const monthlyPercent = percent / 100 / 12;

  // Calculate the loan body
  const loanBody = amount - contribution;

  // Calculate monthly payment using the formula
  const monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  // Calculate the total amount to be paid by the client
  const totalAmount = countMonths * monthlyPayment;

  // Round the result to two decimal places
  const roundedTotalAmount = Math.round(totalAmount * 100) / 100;

  return roundedTotalAmount;
}
