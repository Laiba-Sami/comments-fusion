// backend/utils/passport-setup.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");   // your Mongoose user model

passport.serializeUser((user, done) => {
  done(null, user.id);  // store MongoDB _id in session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).lean();
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/api/auth/google/callback`,
    },
    // This callback runs after Google has authenticated the user
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find or create the user in your DB:
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            // set a random password or leave blank since they'll use OAuth
          });
        }
        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);
