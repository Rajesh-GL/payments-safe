// Receipt display helpers. DISPLAY-ONLY: this module never computes or changes
// money — it formats amounts that were already calculated elsewhere.

// Format an already-computed amount (in cents) as a currency string.
// Pure function, no side effects, no rounding of the underlying value.
function formatCurrency(amountCents, currency = "USD") {
  const dollars = amountCents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(dollars);
}

// Build a plain receipt object for display from an existing payment record.
// Reads fields that are already stored; computes nothing new.
function buildReceipt(payment) {
  return {
    paymentId: payment.id,
    amount: formatCurrency(payment.amountCents, payment.currency),
    paidAt: payment.paidAt,
    status: payment.status,
  };
}

module.exports = { formatCurrency, buildReceipt };
