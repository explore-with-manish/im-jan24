const jwt = require('jsonwebtoken');
const key = process.env.tokenKey;

exports.createToken = function (request, response, next) {
    var user = {
        username: request.body.username,
        password: request.body.password
    };

    if (user.username !== 'manishs') {
        response.status(403).json({
            success: false,
            message: 'Authentication Failed, User not Found...'
        });
    } else if (user.password !== 'manishs') {
        response.status(403).json({
            success: false,
            message: 'Authentication Failed, Wrong Password...'
        });
    } else {
        var token = jwt.sign({ username: user.username }, key, { expiresIn: 3600 });
        response.status(200).json({
            success: true,
            message: 'Authentication Success...',
            token: token
        });
    }
};

exports.validateToken = function (request, response, next) {
    var token = request.headers['x-access-token'];

    if (token) {
        jwt.verify(token, key, function (error, decoded) {
            if (error) {
                response.status(403).json({
                    success: false,
                    message: 'Invalid token found'
                });
            } else {
                next();
            }
        });
    } else {
        response.status(403).json({
            success: false,
            message: 'No token provided'
        });
    }
}