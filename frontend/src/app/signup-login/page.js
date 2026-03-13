"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Script from "next/script";
import TestimonialsCarousel from "../components/signup-login_components/TestimonialsCarousel";
import LoginForm from "../components/signup-login_components/LoginForm";
import SignupForm from "../components/signup-login_components/SignUpForm";
import ForgotPasswordForm from "../components/signup-login_components/ForgotPasswordForm";
import OTPVerificationForm from "../components/signup-login_components/OTPVerificationForm";
import ResetPasswordForm from "../components/signup-login_components/ResetPasswordForm";
import {
  sendCode,
  verifySignup,
  loginUser,
  requestPasswordReset,
  verifyPasswordOTP,
  resetPassword,
} from "../../app/utils/api";
import {
  validateSignupForm,
  validateLoginForm,
  validateEmail,
  validatePasswordPair,
  validateOTP,
} from "../../app/utils/validations";

const testimonials = [
  {
    name: "Deen Colemen",
    designation: "CEO, Deen Colemen exp reality",
    rating: 4,
    quote:
      "Comments Fusion has completely transformed the way I engage with online discussions! The AI-driven insights and smart commenting features make interactions more meaningful and effortless. It’s a game-changer for anyone looking to boost engagement and streamline communication. Highly recommend!",
  },
  {
    name: "Mehmat",
    designation: "CEO, Homera Real State",
    rating: 5,
    quote:
      "Comments Fusion has made online discussions more seamless and engaging. The AI-powered suggestions save me time while keeping my responses relevant and thoughtful. It’s a must-have tool for anyone looking to enhance their commenting experience!",
  },
  {
    name: "Jay Limbachia",
    designation: "Director, Kilnstone property group",
    rating: 4,
    quote:
      "Comments Fusion is an absolute game-changer! It makes engaging in discussions so much easier and more insightful. The AI-driven suggestions help me craft better responses, and the platform is smooth and user-friendly. Definitely a must-have for anyone looking to enhance their online interactions!",
  },
  {
    name: "Aarij Ahmed",
    designation: "Director, ADW Development Limited",
    rating: 3,
    quote:
      "Comments Fusion makes commenting online so much easier. The AI suggestions help me write better replies in seconds. It keeps conversations flowing and saves me time. I’d recommend it to anyone who wants smoother, more engaging discussions!",
  },
];

export default function AuthPage() {
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState("login");
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [signupErrors, setSignupErrors] = useState({});
  const otpInputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const router = useRouter();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState({});
  const [forgotData, setForgotData] = useState({ email: "" });
  const [forgotError, setForgotError] = useState("");
  const [otpCode, setOtpCode] = useState(Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [resetErrors, setResetErrors] = useState({});
  const [flow, setFlow] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [captchaRequired, setCaptchaRequired] = useState(false);
  const recaptchaV2Ref = useRef(null);
  const loginEmailRef = useRef(null);
  const signupUsernameRef = useRef(null);
  const forgotEmailRef = useRef(null);
  const otpFirstInputRef = useRef(null);
  const resetPasswordRef = useRef(null);

  useEffect(() => {
    if (mode === "signup") {
      setSignupData({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setSignupErrors({});
    }

    if (mode === "forgot") {
      setForgotData({ email: "" });
      setForgotError("");
    }

    if (mode !== "verify" && mode !== "forgot-reset") {
      setOtpCode(Array(6).fill(""));
    }
  }, [mode]);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  useEffect(() => {
    if (mode === "login" && loginEmailRef.current) {
      loginEmailRef.current.focus();
    }
    if (mode === "signup" && signupUsernameRef.current) {
      signupUsernameRef.current.focus();
    }
    if (mode === "forgot" && forgotEmailRef.current) {
      forgotEmailRef.current.focus();
    }
    if (mode === "verify" && otpFirstInputRef.current) {
      otpFirstInputRef.current.focus();
    }
    if (mode === "forgot-reset" && resetPasswordRef.current) {
      resetPasswordRef.current.focus();
    }
  }, [mode]);

  function changeMode(newMode) {
    setLoginError({});
    setSignupErrors({});
    setForgotError("");
    setResetErrors({});
    setMode(newMode);
  }

  const handleOTPChange = (e, index) => {
    const val = e.target.value.replace(/\D/, "");

    setOtpCode((prev) => {
      const next = [...prev];
      next[index] = val;
      return next;
    });

    if (val && index < otpInputRefs.current.length - 1) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  function getRecaptchaToken(action) {
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action })
          .then(resolve)
          .catch(reject);
      });
    });
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(loginData);
    if (Object.keys(validationErrors).length > 0) {
      setLoginError(validationErrors);
      return;
    }
    setLoginError({ email: "", password: "", general: "" });
    setLoading(true);

    try {
      const recaptchaToken = await getRecaptchaToken("login");

      const result = await loginUser({
        ...loginData,
        recaptchaToken,
        recaptchaV2Token: null,
      });

      if (result.captchaRequired) {
        setLoading(false);
        setCaptchaRequired(true);
        return;
      }

      // no longer needed as we are setting up the cookies now
      /*if (!result.token) {
        throw new Error("No token returned from login API");
      }*/

      localStorage.setItem("token", result.token);
      toast.success("Logged in!");
      router.push("/main_dashboard");
    } catch (err) {
      if (err.message) {
        toast.error(err.message);
        setLoginError((prev) => ({ ...prev, general: err.message }));
      } else {
        toast.error("Login failed");
        setLoginError((prev) => ({ ...prev, general: "Login failed" }));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateSignupForm(signupData);
    if (Object.keys(validationErrors).length > 0) {
      setSignupErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const recaptchaToken = await getRecaptchaToken("signup");
      const result = await sendCode({
        name: signupData.username,
        email: signupData.email,
        phone: signupData.phone,
        password: signupData.password,
        recaptchaToken: recaptchaToken,
        recaptchaV2Token: null,
      });

      if (result.captchaRequired) {
        setLoading(false);
        setCaptchaRequired(true);
        return;
      }

      toast.success("Verification code sent to your email");
      setFlow("signup");
      changeMode("verify");
    } catch (err) {
      toast.error(err.message);
      setSignupErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();

    const emailErr = validateEmail(forgotData.email);
    if (emailErr) {
      setForgotError(emailErr);
      return;
    } else {
      setForgotError("");
    }

    setLoading(true);
    try {
      await requestPasswordReset(forgotData.email);
      toast.success("Reset code sent to your email.");
      setFlow("forgot");
      changeMode("verify");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();

    const code = otpInputRefs.current
      .map((input) => input.value.trim())
      .join("");

    const otpErr = validateOTP(code);
    if (otpErr) {
      toast.error(otpErr);
      return;
    }

    setLoading(true);
    try {
      if (flow === "signup") {
        const code = otpInputRefs.current
          .map((input) => input.value.trim())
          .join("");
        try {
          const { token } = await verifySignup({
            email: signupData.email,
            code,
          });
          window.localStorage.setItem("token", token);
          toast.success("Signup successful! Login Now...");

          setSignupData({
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          });

          changeMode("login");
        } catch (err) {
          setSignupErrors({ general: err.message });
          const msg = err.message || "Something went wrong";

          if (msg.toLowerCase().includes("expired")) {
            toast.error("Your code has expired. Please request a new one.");
          } else if (msg.toLowerCase().includes("invalid")) {
            toast.error("The code you entered is not correct.");
          } else {
            toast.error(msg);
          }
        } finally {
          setLoading(false);
        }
      } else if (flow === "forgot") {
        await verifyPasswordOTP(forgotData.email, code);
        toast.success("Code verified! Enter a new password.");
        setOtpCode(code);
        changeMode("forgot-reset");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const validationErrors = validatePasswordPair(
      newPassword,
      confirmNewPassword
    );
    if (Object.keys(validationErrors).length > 0) {
      setResetErrors(validationErrors);
      return;
    }

    const code = otpCode;

    setLoading(true);
    try {
      await resetPassword(
        forgotData.email,
        code,
        newPassword,
        confirmNewPassword
      );
      toast.success("Password reset! Please log in.");
      changeMode("login");
      setForgotData("");
      setOtpCode("");
      setNewPassword("");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onLoginV2Submit = async (v2Token) => {
    if (!v2Token) return;
    setLoading(true);

    try {
      const result = await loginUser({
        email: loginData.email,
        password: loginData.password,
        recaptchaV2Token: v2Token,
      });

      localStorage.setItem("token", result.token);
      toast.success("Logged in!");
      setCaptchaRequired(false);
      router.push("/main_dashboard");
    } catch (err) {
      if (recaptchaV2Ref.current) recaptchaV2Ref.current.reset();
      const msg = err.message || "Captcha failed";
      setSignupErrors((prev) => ({ ...prev, general: msg }));
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const onSignupV2Submit = async (v2Token) => {
    if (!v2Token) {
      toast.error("Please complete the reCAPTCHA challenge before submitting.");
      return;
    }
    setLoading(true);
    setSignupErrors({});

    try {
      await sendCode({
        name: signupData.username,
        email: signupData.email,
        phone: signupData.phone,
        password: signupData.password,
        recaptchaToken: null,
        recaptchaV2Token: v2Token,
      });

      toast.success("Verification code sent to your email");
      setCaptchaRequired(false);
      setFlow("signup");
      changeMode("verify");
    } catch (err) {
      toast.error(err.message || "Captcha failed");
      setSignupErrors({ general: err.message || "Captcha failed" });

      if (recaptchaV2Ref.current) recaptchaV2Ref.current.reset();
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!flow) return;

    setResending(true);
    try {
      if (flow === "signup") {
        await sendCode({
          name: signupData.username,
          email: signupData.email,
          phone: signupData.phone,
          password: signupData.password,
          recaptchaToken: null,
          recaptchaV2Token: null,
        });
        toast.success("Verification code resent to your email");
      } else if (flow === "forgot") {
        await requestPasswordReset(forgotData.email);
        toast.success("Password reset code resent to your email");
      }

      setTimeLeft(60);

      otpInputRefs.current.forEach((input) => (input.value = ""));
      otpInputRefs.current[0]?.focus();
    } catch (err) {
      toast.error(err.message || "Failed to resend code");
    } finally {
      setResending(false);
    }
  };

  return (
    <>
      <>
        {/* load v3 automatically */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        {/* load v2 explicit render */}
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
        />
      </>
      <div className="relative min-h-screen flex bg-[linear-gradient(to_bottom,_#000000_30%,_#33C6F4_100%)]">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
        {/* Left panel */}
        <div className="w-1/2 flex flex-col justify-start px-12 py-8 text-white">
          <div className="space-y-8">
            <div className="w-20 h-20 relative mx-auto">
              <Image
                src="/images/chatBotIcon.svg"
                alt="Chatbot Icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="text-4xl font-bold leading-snug text-center">
              <span>Transform Conversations with</span>
              <span className="block text-[#33C6F4]">AI-Powered Smart</span>
              <span className="block text-[#33C6F4]">Comments!</span>
            </h1>
          </div>

          <div className="flex-1 flex items-center justify-center my-8 relative">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>

        <div className="w-px bg-white/20"></div>

        {/* Right panel */}
        <div className="w-5/14 flex items-center justify-center px-12 py-8">
          <div className="flex w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-white">
            <div className="flex-1 space-y-6">
              {/* Login */}
              {mode === "login" && (
                <LoginForm
                  loginData={loginData}
                  loginError={loginError}
                  loading={loading}
                  captchaRequired={captchaRequired}
                  onLoginChange={(e) => {
                    const { name, value } = e.target;
                    setLoginData((prev) => ({ ...prev, [name]: value }));
                    setLoginError((prev) => ({ ...prev, [name]: "" }));
                  }}
                  onLoginSubmit={handleLoginSubmit}
                  onLoginV2Submit={onLoginV2Submit}
                  onSwitchMode={changeMode}
                  loginEmailRef={loginEmailRef}
                  recaptchaV2Ref={recaptchaV2Ref}
                />
              )}

              {/* signup */}
              {mode === "signup" && (
                <SignupForm
                  signupData={signupData}
                  signupErrors={signupErrors}
                  loading={loading}
                  captchaRequired={captchaRequired}
                  onSignupChange={(e) => {
                    const { name, value } = e.target;
                    setSignupData((prev) => ({ ...prev, [name]: value }));
                    setSignupErrors((prev) => ({ ...prev, [name]: "" }));
                  }}
                  onSignupSubmit={handleSignupSubmit}
                  onSignupV2Submit={onSignupV2Submit}
                  onSwitchMode={changeMode}
                  signupUsernameRef={signupUsernameRef}
                  recaptchaV2Ref={recaptchaV2Ref}
                />
              )}

              {/* Forgot Password */}
              {mode === "forgot" && (
                <ForgotPasswordForm
                  forgotData={forgotData}
                  forgotError={forgotError}
                  loading={loading}
                  onForgotChange={(e) => {
                    setForgotData({ email: e.target.value });
                    setForgotError("");
                  }}
                  onForgotSubmit={handleForgotSubmit}
                  onSwitchMode={changeMode}
                  forgotEmailRef={forgotEmailRef}
                />
              )}

              {/* OTP verification */}
              {mode === "verify" && (
                <OTPVerificationForm
                  otpValues={otpCode}
                  inputRefs={otpInputRefs}
                  otpFirstInputRef={otpFirstInputRef}
                  loading={loading}
                  timeLeft={timeLeft}
                  resending={resending}
                  onOtpChange={handleOTPChange}
                  onKeyDown={handleKeyDown}
                  onVerifySubmit={handleVerifySubmit}
                  onResend={handleResendCode}
                />
              )}

              {/* Reset Password */}
              {mode === "forgot-reset" && (
                <ResetPasswordForm
                  newPassword={newPassword}
                  confirmNewPassword={confirmNewPassword}
                  resetErrors={resetErrors}
                  loading={loading}
                  onNewPasswordChange={(e) => {
                    setNewPassword(e.target.value);
                    setResetErrors((prev) => ({ ...prev, password: "" }));
                  }}
                  onConfirmNewPasswordChange={(e) => {
                    setConfirmNewPassword(e.target.value);
                    setResetErrors((prev) => ({
                      ...prev,
                      confirmPassword: "",
                    }));
                  }}
                  onResetSubmit={handleResetPassword}
                  resetPasswordRef={resetPasswordRef}
                />
              )}
            </div>
          </div>

          {/* Mascot section */}
          <div className="absolute bottom-20 right-20 w-32 h-32">
            <div className="w-50 h-50 relative">
              <Image
                src="/images/authPage/mascot.svg"
                alt="Mascot"
                fill
                style={{ objectFit: "contain" }}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
