import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function VerificationCodeForm({
  otpValues,
  inputRefs,
  otpFirstInputRef,
  loading,
  timeLeft,
  resending,
  onOtpChange,
  onKeyDown,
  onVerifySubmit,
  onResend,
}) {
  return (
    <form
      noValidate
      className="space-y-4 max-w-sm mx-auto"
      onSubmit={onVerifySubmit}
      autoComplete="off"
    >
      <h2 className="text-3xl font-semibold text-center">Verification Code</h2>
      <p className="text-center text-sm mt-2">
        Check your Email for Verification Code!
      </p>

      <div className="flex items-center justify-center mt-4 gap-4">
        {otpValues.map((value, i) => (
          <input
            key={i}
            name={`otp-${i}`}
            type="text"
            maxLength={1}
            inputMode="numeric"
            pattern="\\d*"
            ref={(el) => {
              inputRefs.current[i] = el;
              if (i === 0) otpFirstInputRef.current = el;
            }}
            value={value}
            onChange={(e) => onOtpChange(e, i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className="w-10 h-10 text-center rounded-md border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            autoComplete="one-time-code"
          />
        ))}
      </div>

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

      <div className="text-center text-sm mt-4">
        Didn’t receive the code?{" "}
        <button
          type="button"
          onClick={onResend}
          disabled={resending || timeLeft > 0}
          className="underline"
        >
          {timeLeft > 0
            ? `Resend in ${timeLeft}s`
            : resending
            ? "Resending…"
            : "Resend Code"}
        </button>
      </div>
    </form>
  );
}

VerificationCodeForm.propTypes = {
  otpValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  inputRefs: PropTypes.shape({ current: PropTypes.array }).isRequired,
  otpFirstInputRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  loading: PropTypes.bool.isRequired,
  timeLeft: PropTypes.number.isRequired,
  resending: PropTypes.bool.isRequired,
  onOtpChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onVerifySubmit: PropTypes.func.isRequired,
  onResend: PropTypes.func.isRequired,
};
