// src/middleware/errorHandler.js

function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

function apiErrorHandler(err, req, res, next) {
  // If this is a custom ApiError with an explicit statusCode, use it.
  // Otherwise default to 500.
  const hasValidStatus =
    err &&
    typeof err.isOperational === 'boolean' &&
    err.isOperational === true &&
    typeof err.statusCode === 'number' &&
    Number.isInteger(err.statusCode) &&
    err.statusCode >= 100 &&
    err.statusCode <= 599;

  const status = hasValidStatus ? err.statusCode : 500;
  const message = hasValidStatus
    ? err.message
    : 'An unexpected error occurred';

  // If it's not operational (i.e. we hit some bug), log it so we can inspect the stack.
  if (!hasValidStatus) {
    console.error('Unexpected error:', err);
  }

  res.status(status).json({ message });
}

module.exports = { asyncHandler, apiErrorHandler };
