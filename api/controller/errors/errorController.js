exports.log_error = (error, req, res, next) =>{
    console.log(error.stack);
    next(error);
};

exports.not_found_error = (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
};

exports.client_error_handler = (error, req, res, next) =>{
    if (req.xhr) {
        res.status(500).send({ error: 'Request is failed!' });
      } else {
        next(error);
      }
};

exports.error_handler = (error, req, res, next) => {

    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};

    if (res.headersSent) {
        return next(error);
    };

    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
};

exports.db_error_handler = (res, err) =>{
  res.status(500).json({error:err});
}