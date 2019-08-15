exports.redirectToSwagger = (req, res, next) => {
    const swaggerAddress = '/api';
    res.redirect(swaggerAddress);
};