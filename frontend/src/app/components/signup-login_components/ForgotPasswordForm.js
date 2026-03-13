import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function ForgotPasswordForm({
  forgotData,
  forgotError,
  loading,
  onForgotChange,
  onForgotSubmit,
  onSwitchMode,
  forgotEmailRef,
}) {
  return (
    <form
      className="space-y-4 max-w-sm mx-auto"
      onSubmit={onForgotSubmit}
      autoComplete="off"
    >
      <h2 className="text-3xl font-semibold text-center">Forgot Password</h2>
      <p className="text-sm text-center">
        Please enter your email to reset your password
      </p>

      {/* Email Field */}
      <div className="space-y-1">
        <label className="block text-sm">Email</label>
        <input
          name="email"
          type="email"
          ref={forgotEmailRef}
          value={forgotData.email ?? ""}
          onChange={onForgotChange}
          placeholder="Your email"
          required
          className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {forgotError && <p className="text-red-400 text-xs">{forgotError}</p>}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        className={`w-full py-3 mt-4 rounded-full ${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-black hover:opacity-90"
        } text-white font-medium flex justify-center items-center transition`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
        {loading ? "Verifying…" : "Confirm"}
      </motion.button>

      <div className="text-center text-sm">
        Back to Login?{" "}
        <button
          type="button"
          onClick={() => onSwitchMode("login")}
          className="underline"
        >
          Log In
        </button>
      </div>
    </form>
  );
}

ForgotPasswordForm.propTypes = {
  forgotData: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  forgotError: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onForgotChange: PropTypes.func.isRequired,
  onForgotSubmit: PropTypes.func.isRequired,
  onSwitchMode: PropTypes.func.isRequired,
  forgotEmailRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

ForgotPasswordForm.defaultProps = {
  forgotError: "",
};