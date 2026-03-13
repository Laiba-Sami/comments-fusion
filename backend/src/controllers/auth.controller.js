// controllers/auth.controller.js
const httpStatus = require("http-status").default;
const { validationResult } = require("express-validator");
const ApiError = require("../utils/apiError");
const { hashPassword, signToken, comparePassword } = require("../utils/auth");
const { authService } = require("../services");
const User = require("../models/user");

const isProd = process.env.NODE_ENV === "production";

exports.sendVerificationCode = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    if (await User.exists({ $or: [{ email }, { phone }] })) {
      return next(
        new ApiError(httpStatus.CONFLICT, "Email or phone already registered")
      );
    }

    const passwordHash = await hashPassword(password);

    await authService.generateOtp(email, "signup", {
      name,
      phone,
      passwordHash,
    });

    return res.json({ success: true, message: "Verification code sent" });
  } catch (err) {
    return next(err);
  }
};

exports.verifySignup = async (req, res, next) => {
  try {
    const { email, code } = req.body;

    const rec = await authService.verifyOtp(email, code, "signup");

    const user = await new User({
      name: rec.name,
      email: rec.email,
      phone: rec.phone,
      password: rec.passwordHash,
    }).save();

    const token = signToken({ userId: user._id, role: user.role });

    return res.status(httpStatus.CREATED).json({
      success: true,
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err.message));
  }
};

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ApiError(httpStatus.BAD_REQUEST, errors.array()[0].msg));
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, "Invalid credentials"));
    }

    if (!user.password) {
      return next(
        new ApiError(
          httpStatus.FORBIDDEN,
          "This account is linked via Google. Please sign in with Google or register first."
        )
      );
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, "Invalid credentials"));
    }

    const token = signToken({ userId: user._id, role: user.role });
    return res
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? "none" : "lax",
        path: "/",
        //secure: false,
        //sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      })
      .json({
        message: "Logged in",
        token,
        user: { id: user._id, name: user.name, email, role: user.role },
      });
  } catch (err) {
    console.error("Login error:", err);
    return next(
      new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal server error")
    );
  }
};

exports.requestPasswordReset = async (req, res, next) => {
  try {
    const { email } = req.body;

    const exists = await User.exists({ email });
    if (!exists) {
      return next(
        new ApiError(
          httpStatus.NOT_FOUND,
          "Email not found. Please register first."
        )
      );
    }

    await authService.generateOtp(email, "forgot-password");

    return res.json({
      success: true,
      message: "Reset code sent to your email.",
    });
  } catch (err) {
    console.error("Forgot-password error:", err);
    return next(
      new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal server error")
    );
  }
};

exports.verifyPasswordOTP = async (req, res, next) => {
  try {
    const { email, code } = req.body;
    await authService.verifyOtp(email, code, "forgot-password");
    return res.json({ success: true, message: "OTP verified" });
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err.message));
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { email, newPassword, confirmNewPassword } = req.body;
    if (newPassword !== confirmNewPassword) {
      return next(
        new ApiError(httpStatus.BAD_REQUEST, "Passwords do not match")
      );
    }

    const hash = await hashPassword(newPassword);
    await User.updateOne({ email }, { password: hash });

    return res.json({ success: true, message: "Password updated" });
  } catch (err) {
    return next(new ApiError(httpStatus.BAD_REQUEST, err.message));
  }
};


exports.getUserDetails = async (req, res, next) => {
  const userId = req.user._id;  
  try {
    const user = await User.findById(userId).select('name email');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);  
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};



