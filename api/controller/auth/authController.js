const jwt = require("jsonwebtoken");

exports.req_token = (req, res) => {
    const token = req.session.token;
    if (token) {
        res.json({
            token: 'Bearer ' + token
        });
    } else {
        res.status(500).send({ error: 'Please login to swaggerUI to get token!' });
    }
};

exports.verify_token = (req, res, next) => {

    // FORMAT OF TOKEN
    // Authorization: Bearer <access_token>

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }

};


exports.jwt_verify = (req, res, resObj) => {
    const token = req.session.token;
    req.header['authorization'] = token;

    jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                resObj
            });
        }
    });
}