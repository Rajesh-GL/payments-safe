// Backend routes. This release only ADDS a read-only receipt endpoint; it does
// not modify existing payment or auth routes.

const express = require("express");
const { buildReceipt } = require("./receipts");
const { canViewReceipts } = require("./auth");

const app = express();
app.use(express.json());

// Pretend data store — existing payments are read, never modified here.
const payments = new Map();

// NEW in v2.1.0: read-only receipt endpoint.
// It only reads an existing payment and formats it for display.
app.get("/payments/:id/receipt", (req, res) => {
  if (!canViewReceipts(req.user)) {
    return res.status(403).json({ error: "Not allowed to view receipts." });
  }
  const payment = payments.get(req.params.id);
  if (!payment) {
    return res.status(404).json({ error: "Payment not found." });
  }
  res.json(buildReceipt(payment));
});

module.exports = app;
