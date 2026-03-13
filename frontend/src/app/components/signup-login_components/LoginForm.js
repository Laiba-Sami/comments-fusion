import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

const RECAPTCHA_V2_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY;
export default function LoginForm({
  loginData,
  loginError,
  loading,
  captchaRequired,
  onLoginChange,
  onLoginSubmit,
  onLoginV2Submit,
  onSwitchMode,
  loginEmailRef,
  recaptchaV2Ref,

}) {
  return (
    
    <form
      className="space-y-4 max-w-sm mx-auto"
      onSubmit={onLoginSubmit}
      autoComplete="off"
    >
      <h2 className="text-3xl font-semibold text-center">Log In</h2>
      <p className="text-sm text-center">Please enter your details</p>
      {/* Email Field */}
      <div className="space-y-1">
        <label className="block text-sm">User Email</label>
        <input
          name="email"
          type="text"
          ref={loginEmailRef}
          value={loginData.email}
          onChange={onLoginChange}
          className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {loginError.email && (
          <p className="text-red-400 text-xs">{loginError.email}</p>
        )}
      </div>
      {/* Password Field */}
      <div className="space-y-1">
        <label className="block text-sm">Password</label>
        <input
          name="password"
          type="password"
          value={loginData.password}
          onChange={onLoginChange}
          className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {loginError.password && (
          <p className="text-red-400 text-xs">{loginError.password}</p>
        )}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => onSwitchMode("forgot")}
            className="text-xs hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
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
        {loading ? "Logging In…" : "Log In"}
      </motion.button>
      {/* Google Sign-In Button */}
      <motion.button
        type="button"
        onClick={() => {
          // redirect to your backend’s Google OAuth endpoint
          window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
        }}
        className="w-full py-2 mt-4 flex items-center justify-center space-x-2 border border-white rounded-full hover:opacity-90 font-medium transition "
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <Image
          src="/images/authPage/googleIcon.svg"
          alt="Google"
          width={20}
          height={20}
        />
        <span>Sign In with Google</span>
      </motion.button>
      <div className="text-center text-sm">
        Don’t have an account?{" "}
        <button onClick={() => onSwitchMode("signup")} className="underline">
          Sign Up
        </button>
      </div>
      {captchaRequired && (
        <div className="mt-4 flex flex-col items-center justify-center text-center">
          <p className="mb-2">Please complete this CAPTCHA to continue:</p>
          <ReCAPTCHA
            ref={recaptchaV2Ref}
            sitekey={RECAPTCHA_V2_SITE_KEY}
            size="normal"
            onChange={onLoginV2Submit}
          />
        </div>
      )}
    </form>
  );
}

LoginForm.propTypes = {
  loginData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  loginError: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  captchaRequired: PropTypes.bool.isRequired,
  onLoginChange: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
  onLoginV2Submit: PropTypes.func,
  onSwitchMode: PropTypes.func.isRequired,
  loginEmailRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
