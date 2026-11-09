// Shared by the form (instant feedback) and the API route (the real check).
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const LIMITS = { name: 80, email: 120, subject: 120, message: 2000 };

export function validateContact(raw = {}) {
  const v = {
    name: String(raw.name ?? '').trim(),
    email: String(raw.email ?? '').trim(),
    subject: String(raw.subject ?? '').trim(),
    message: String(raw.message ?? '').trim(),
  };
  const errors = {};
  if (v.name.length < 2) errors.name = 'Enter your full name.';
  else if (v.name.length > LIMITS.name) errors.name = `Keep your name under ${LIMITS.name} characters.`;
  if (!EMAIL.test(v.email) || v.email.length > LIMITS.email) errors.email = 'Enter a valid email address.';
  if (v.subject.length < 3) errors.subject = 'Add a short subject.';
  else if (v.subject.length > LIMITS.subject) errors.subject = `Keep the subject under ${LIMITS.subject} characters.`;
  if (v.message.length < 10) errors.message = 'Write at least 10 characters.';
  else if (v.message.length > LIMITS.message) errors.message = `Keep the message under ${LIMITS.message} characters.`;
  return { values: v, errors, valid: Object.keys(errors).length === 0 };
}
