const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const LINKEDIN_KEY = process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_SECRET = process.env.LINKEDIN_CLIENT_SECRET;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: LINKEDIN_KEY,
      clientSecret: LINKEDIN_SECRET,
      callbackURL: "http://localhost:5000/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile "],
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("profile ===> ", profile);
      done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
