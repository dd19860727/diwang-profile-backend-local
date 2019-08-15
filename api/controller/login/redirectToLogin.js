exports.redirectToLogin = (req, res, next) => {
    const loginAddress = '/api/login';
    res.redirect(loginAddress);
};