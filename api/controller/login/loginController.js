const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    res.render('login',  {success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
};

exports.user_submit = (req, res) => {

    checkInput(req);

    let errors = req.validationErrors();

    if(errors){
        redirectToLoginPage(req, res, errors);
    }
    else{
        redirectToSwaggerUI(req, res)
    }
    
}

function checkInput(req){
    req.checkBody('username').notEmpty().withMessage('Username is required')
    .isAdminName().withMessage('Incorrect Username');
    req.checkBody('password').notEmpty().withMessage('Password is required')
    .isAdminPwd().withMessage('Incorrect Password');
};


function redirectToLoginPage(req, res, errors){
    let loginAddress = '/api/login';
    req.session.errors = errors;
    req.session.success = false;
    res.redirect(loginAddress);
};

function redirectToSwaggerUI(req, res){
    let swaggerAddress = '/api/swagger';

    let userInput = {
        userInputName:req.body.username,
        userInputPassword:req.body.password
    }

    const token = jwt.sign({userInput}, process.env.SECRET_KEY,{expiresIn: process.env.EXPIRE_TIME});
    req.session.success = true;
    req.session.token = token;
    res.redirect(swaggerAddress);
}
