exports.isAuthenticated = function (request, response, next) {
    // Logic to check use suthentication status
    // response.status(401).send('Unauthrorized Access!');

    if (request.isAuthenticated()) {
        next();
    } else {
        response.redirect('/account');
    }
}