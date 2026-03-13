// utils/api.js

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function sendCode(data) {
  const res = await fetch(`${API_BASE}/api/auth/send-code`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = await res.json();
  if (!res.ok) throw new Error(body.message || "Failed to send code");
  return body;
}

export async function verifySignup({ email, code }) {
  const res = await fetch(`${API_BASE}/api/auth/verify-signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code }),
  });

  const body = await res.json();
  if (!res.ok) throw new Error(body.message || "Verification failed");
  return body;
}

export async function loginUser({
  email,
  password,
  recaptchaToken,
  recaptchaV2Token,
}) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, recaptchaToken, recaptchaV2Token }),
  });
  const body = await res.json();
  if (!res.ok) {
    throw new Error(body.message || "Login failed");
  }
  return body;
}

export async function requestPasswordReset(email) {
  const res = await fetch(`${API_BASE}/api/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.message);
  return body;
}

export async function verifyPasswordOTP(email, code) {
  const res = await fetch(`${API_BASE}/api/auth/forgot-password/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.message);
  return body;
}

export async function resetPassword(
  email,
  code,
  newPassword,
  confirmNewPassword
) {
  const res = await fetch(`${API_BASE}/api/auth/forgot-password/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code, newPassword, confirmNewPassword }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.message);
  return body;
}

export async function fetchUserDetails() {
  try {
    const res = await fetch(`${API_BASE}/api/auth/user`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user details");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching user details: ${error.message}`);
  }
}

export async function getDashboardMetrics(period = "7d") {
  const res = await fetch(
    `${API_BASE}/api/dashboard/metrics?period=${period}`,
    {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to fetch metrics: ${res.status} ${err}`);
  }
  return await res.json();
}

// export async function sendContactMessage(data) {
//   const res = await fetch(`${API_BASE}/api/contact-us`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   const body = await res.json();
//   if (!res.ok) throw new Error(body.message || "Failed to send contact message");
//   return body;
// }
export async function fetchComments() {
  const res = await fetch("/api/comment/list-comments");
  if (!res.ok) throw new Error("Failed to load comments");
  return res.json();
}

export const sendContactMessage = async (data) => {
  try {
    const res = await fetch(`${API_BASE}/api/contact-us`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.message || 'Failed to send message');
    }

    const responseBody = await res.json();
    return responseBody;
  } catch (error) {
    console.error('Error in sending message:', error);
    alert(`Error: ${error.message}`);
    throw error;
  }
};
