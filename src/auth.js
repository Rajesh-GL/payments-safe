// Auth additions. Existing login, password hashing, and session verification
// are UNCHANGED — this file only adds opt-in extras on top.

// Existing session length, kept as the default.
const DEFAULT_SESSION_HOURS = 2;
// New in v2.1.0: opt-in longer session when the user ticks "remember me".
const REMEMBER_ME_HOURS = 24 * 30;

// Choose how long a session lasts. Default behavior is unchanged; the longer
// duration only applies when the user explicitly opts in.
function sessionDurationHours(rememberMe) {
  return rememberMe ? REMEMBER_ME_HOURS : DEFAULT_SESSION_HOURS;
}

// New read-only role. A viewer can see receipts but cannot change anything.
// Existing roles keep all their current permissions.
function canViewReceipts(user) {
  if (!user) return false;
  return ["viewer", "member", "admin"].includes(user.role);
}

module.exports = { sessionDurationHours, canViewReceipts };
