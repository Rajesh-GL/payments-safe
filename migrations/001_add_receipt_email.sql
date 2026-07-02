-- Migration for v2.1.0. SAFE and additive — no type changes, no drops, no
-- backfill required. Existing rows keep working with receipt_email = NULL.

-- Optional email address to send receipts to.
ALTER TABLE payments
  ADD COLUMN receipt_email VARCHAR(255);

-- Index to speed up looking up payments by receipt email.
CREATE INDEX idx_payments_receipt_email ON payments(receipt_email);
