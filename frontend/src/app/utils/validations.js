// app/utils/validation.js

export function validateEmail(email) {
  if (!email) return "Email is required";
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) return "Invalid email address";
  return undefined;
}

export function validatePhone(phone) {
  if (!phone) return "Phone is required";
  if (!/^\d+$/.test(phone)) return "Phone must contain only numbers";
  if (phone.length < 10) return "Phone number must be at least 10 digits";
  return undefined;
}

export function validateUsername(username) {
  if (!username.trim()) return "Username is required";
  if (/\s/.test(username)) return "Username must not contain spaces";
  return undefined;
}

export function validateOTP(code) {
  if (!code) return "Code is required";
  if (!/^\d{6}$/.test(code)) return "Code must be exactly 6 digits";
  return undefined;
}

export function validatePasswordPair(password, confirmPassword) {
  const errs = {};

  // Password requirements
  if (!password) {
    errs.password = "Password is required";
  } else {
    if (password.length < 8) {
      errs.password = "Password must be at least 8 characters";
    }
    if (!/\d/.test(password)) {
      errs.password = "Password must include at least one digit";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errs.password = "Password must include at least one special character";
    }
  }

  // Confirm match
  if (!confirmPassword) {
    errs.confirmPassword = "Please confirm your password";
  } else if (password !== confirmPassword) {
    errs.confirmPassword = "Passwords do not match";
  }

  return errs;
}

export function validateSignupForm(data) {
  const errs = {};

  const usernameErr = validateUsername(data.username);
  if (usernameErr) errs.username = usernameErr;

  const emailErr = validateEmail(data.email);
  if (emailErr) errs.email = emailErr;

  const phoneErr = validatePhone(data.phone);
  if (phoneErr) errs.phone = phoneErr;

  const passErrs = validatePasswordPair(data.password, data.confirmPassword);
  Object.assign(errs, passErrs);

  return errs;
}

export function validateLoginForm(data) {
  const errs = {};

  const emailErr = validateEmail(data.email);
  if (emailErr) errs.email = emailErr;

  if (!data.password) {
    errs.password = "Password is required";
  }

  return errs;
}
