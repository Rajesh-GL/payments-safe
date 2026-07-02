# payments-safe
<<<<<<< HEAD
This is for payment service
=======

A **low-risk** example release for the Release Risk Scorer. It's the deliberate
counterpart to `fintech-payments`: it touches the *same four areas* — payments,
database, auth, and the backend — but every change is safe.

| Area | fintech-payments (Critical) | payments-safe (Low) |
|------|-----------------------------|----------------------|
| Payment | rounding + fee + batched settlement changes | display-only receipt formatting; money-math untouched |
| Database | FLOAT→DECIMAL, `DROP TABLE`, timestamp recast | one nullable column + an index (additive) |
| Auth | hashing swap, forced logout, mandatory MFA | opt-in longer session, new read-only role |
| Backend | settlement rewrite | one new read-only endpoint |

The point of the demo: the scorer should tell these apart — same categories,
very different risk — because it reasons about *what the change does*, not just
which files it touches.

## How to use it (demo)

In the Release Risk Scorer UI, type `payments-safe` into the **"Scan folder"**
box, click **Scan folder**, then **Analyze Release Risk**.

## Layout

```
src/receipts.js                     display-only currency/receipt formatting
src/api.js                          new read-only GET /payments/:id/receipt
src/auth.js                         opt-in "remember me" + read-only viewer role
migrations/001_add_receipt_email.sql   safe additive column + index
```
>>>>>>> c409619 (Add payments-safe example)
