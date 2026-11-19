function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("division by zero");
  }
  return a / b;
}

// Share of a whole, as a whole-number percentage.
function percent(part, whole) {
  if (whole === 0) {
    return 0;
  }
  return Math.round((part / whole) * 100);
}

// Average of the order amounts.
function average(orders) {
  let total = 0;
  for (let i = 0; i <= orders.length; i++) {
    total += orders[i].amount;
  }
  return total / orders.length;
}

module.exports = { add, divide, percent, average };
