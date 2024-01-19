const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user)
    });

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (request, email, password, done) {
        // Code to Read Username and Password from the database
        // Verify the usename and password coming from the client-side against the database

        if (email !== 'manish@abc.com')
            return done(null, false, request.flash('loginMessage', 'Authentication Failed - User not found!'));

        if (password !== 'manish')
            return done(null, false, request.flash('loginMessage', 'Authentication Failed - Wrong Password!'));

        var user = { email };

        return done(null, user);
    }));
}