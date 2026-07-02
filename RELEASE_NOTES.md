# v2.1.0 — Payments: Receipts & Optional Extras

Touches payments, the database, auth, and the backend — but every change is
**additive and backward-compatible**. No money-math, no destructive migration,
no change to how existing auth works.

## PR #61: Add read-only receipt endpoint
- New `GET /payments/:id/receipt` endpoint. Read-only; does not touch
  settlement, rounding, or fee calculation.
- Added a display helper that formats an already-computed amount as currency.

## PR #62: Add optional receipt email (additive migration)
- New nullable `receipt_email` column on `payments` (existing rows unaffected).
- Added an index to speed up receipt lookups.

## PR #63: Add optional "remember me" longer session
- New opt-in longer session duration when the user ticks "remember me".
- Existing login, password hashing, and session verification are unchanged.
- Added a read-only `viewer` role that can see receipts but change nothing.
