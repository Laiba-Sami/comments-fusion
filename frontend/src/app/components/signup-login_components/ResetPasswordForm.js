import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function ResetPasswordForm({
  newPassword,
  confirmNewPassword,
  resetErrors,
  loading,
  onNewPasswordChange,
  onConfirmNewPasswordChange,
  onResetSubmit,
  resetPasswordRef,
}) {
  return (
    <form
      onSubmit={onResetSubmit}
      className="space-y-4 max-w-sm mx-auto"
      autoComplete="off"
    >
      <h2 className="text-3xl font-semibold text-center">Reset Password</h2>
      <p className="text-sm text-center">Please enter your new password</p>

      {/* New Password */}
      <div className="space-y-1">
        <label className="block text-sm">New Password</label>
        <input
          type="password"
          value={newPassword}
          ref={resetPasswordRef}
          onChange={onNewPasswordChange}
          required
          className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {resetErrors.password && (
          <p className="text-red-400 text-xs">{resetErrors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-1">
        <label className="block text-sm">Confirm Password</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={onConfirmNewPasswordChange}
          required
          className="w-full h-10 px-3 rounded-full border border-white/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {resetErrors.confirmPassword && (
          <p className="text-red-400 text-xs">{resetErrors.confirmPassword}</p>
        )}
      </div>

      {/* Reset Button */}
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
        {loading ? "Resetting…" : "Reset Password"}
      </motion.button>
    </form>
  );
}

ResetPasswordForm.propTypes = {
  newPassword: PropTypes.string.isRequired,
  confirmNewPassword: PropTypes.string.isRequired,
  resetErrors: PropTypes.shape({
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  onNewPasswordChange: PropTypes.func.isRequired,
  onConfirmNewPasswordChange: PropTypes.func.isRequired,
  onResetSubmit: PropTypes.func.isRequired,
  resetPasswordRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

ResetPasswordForm.defaultProps = {
  resetPasswordRef: null,
};
