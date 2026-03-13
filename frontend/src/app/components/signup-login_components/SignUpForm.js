import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_V2_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY;
export default function SignupForm({
  signupData,
  signupErrors,
  loading,
  captchaRequired,
  onSignupChange,
  onSignupSubmit,
  onSignupV2Submit,
  onSwitchMode,
  signupUsernameRef,
  recaptchaV2Ref,
}) {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
      <p className="text-sm text-center">Please enter your details</p>

      <form onSubmit={onSignupSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Username</label>
          <input
            name="username"
            value={signupData.username}
            ref={signupUsernameRef}
            onChange={onSignupChange}
            className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {signupErrors.username && (
            <p className="text-red-400 text-xs mt-1">{signupErrors.username}</p>
          )}
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            name="email"
            type="email"
            value={signupData.email}
            onChange={onSignupChange}
            className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {signupErrors.email && (
            <p className="text-red-400 text-xs mt-1">{signupErrors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm">Phone</label>
          <input
            name="phone"
            type="tel"
            value={signupData.phone}
            onChange={onSignupChange}
            className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {signupErrors.phone && (
            <p className="text-red-400 text-xs mt-1">{signupErrors.phone}</p>
          )}
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            name="password"
            type="password"
            value={signupData.password}
            onChange={onSignupChange}
            className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {signupErrors.password && (
            <p className="text-red-400 text-xs mt-1">{signupErrors.password}</p>
          )}
        </div>
        <div>
          <label className="block text-sm">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={signupData.confirmPassword}
            onChange={onSignupChange}
            className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          {signupErrors.confirmPassword && (
            <p className="text-red-400 text-xs mt-1">
              {signupErrors.confirmPassword}
            </p>
          )}
        </div>
        <motion.button
          type="submit"
          className={`
          w-full py-3 mt-4 rounded-full
          ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-black hover:opacity-90"
          }
          text-white font-medium flex justify-center items-center transition
        `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          )}
          {loading ? "Loading…" : "Register"}
        </motion.button>
      </form>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <button onClick={() => onSwitchMode("login")} className="underline">
          Log In
        </button>
      </p>
      {captchaRequired && (
        <div className="mt-4 flex flex-col items-center justify-center text-center">
          <p className="mb-2">Please complete this CAPTCHA to continue:</p>
          <ReCAPTCHA
            ref={recaptchaV2Ref}
            sitekey={RECAPTCHA_V2_SITE_KEY}
            size="normal"
            onChange={onSignupV2Submit}
          />
        </div>
      )}
    </>
  );
}

SignupForm.propTypes = {
  signupData: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }).isRequired,
  signupErrors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  captchaRequired: PropTypes.bool.isRequired,
  onSignupChange: PropTypes.func.isRequired,
  onSignupSubmit: PropTypes.func.isRequired,
  onSignupV2Submit: PropTypes.func,
  onSwitchMode: PropTypes.func.isRequired,
  signupUsernameRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
