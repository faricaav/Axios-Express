const Joi = require('joi'); 

const schemaUserQuery = Joi.object().keys({ user: Joi.string() .required()});
const schemaUsernameBody = Joi.object().keys({ username: Joi.string() .min(6) .required()});

module.exports={schemaUserQuery, schemaUsernameBody}