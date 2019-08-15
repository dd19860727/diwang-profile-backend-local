const { validator } = require('express-validator');
module.exports.custom_validators = {
    customValidators: {
        isAdminName: (userInput) => {
            return(userInput == process.env.ADMIN_NAME) || (userInput == '');
        },
        isAdminPwd: (userInput) => {
            return(userInput == process.env.ADMIN_PASSWORD) || (userInput == '');
        },
     }
};