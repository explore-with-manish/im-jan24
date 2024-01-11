const jwt = require('jsonwebtoken');
const secretKey = "testing";

exports.requestToken = function (req, res, next) {
    var user = {
        username: req.body.username,
        password: req.body.password
    };

    if (user.username != "manish") {
        res.statusCode = 403;
        res.json({ success: false, message: "Authentication Failed, User not Found...." });
    } else if (user.password != "manish") {
        res.statusCode = 403;
        res.json({ success: false, message: "Authentication Failed, Wrong Password...." });
    } else {
        var token = jwt.sign(user, secretKey, { expiresIn: 1440 });
        res.statusCode = 200;
        res.json({
            success: true,
            message: "Authentication Success",
            token: token
        });
    }
}

exports.validateToken = function (req, res, next) {
    var token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                res.statusCode = 403;
                res.json({
                    success: false,
                    message: "Invalid Token Found"
                });
            } else {
                req.decoded = decoded;
                console.log(decoded);
                next();
            }
        })
    } else {
        res.statusCode = 403;
        res.json({
            success: false,
            message: "No Token Found"
        });
    }
}