const {schemaUserQuery, schemaUsernameBody} = require("../helpers/schemaValidate")
const validateQuery = (req, res, next) => {
    const schema = schemaUserQuery;
    const {value} = schema.validate(req.query);
    if(value.user!=="ica")
    res.send({
        status: false,
        message: "Invalid user"
    })
    if(value.user==="ica")
    return next();
}

const validateBody = (req, res, next) => {
    const schema = schemaUsernameBody;
    const { error } = schema.validate(req.body);
    if (error) {
        res.json({ ErrorMessage: error.details[0].message });
    } else {
        return next()
    }
}

module.exports={validateQuery, validateBody}