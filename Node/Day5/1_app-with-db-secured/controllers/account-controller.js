exports.isAuthenticated = function (request, response, next) {
    // Logic to check use suthentication status
    // response.status(401).send('Unauthrorized Access!');

    if (request.isAuthenticated()) {
        next();
    } else {
        response.redirect('/account');
    }
}

exports.getLogin = function (request, response, next) {
    response.render('account/login', { pageTitle: 'Login View', message: request.flash('loginMessage') });
}

exports.postLogin = function (passport) {
    return passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/account/login'
    });
}