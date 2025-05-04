const { path } = require("../app");

//middleware to receivee the schema and validate the request body
function validateSchema(schema){
    return (req, res, next) => {
        const result = schema.safeParse(req.body); //safeParse returns an object with a success property and a data property
        //if the request body is not valid
        if(!result.success){
            //map the errors to an array of objects with the message and the path of the error
            const errors = result.error.errors.map((err)=>({
                message:err.message,
                path:err.path, 
            }));

            //return the errors
            return res.status(400).json({errors});
        }
        //if passed the validation, continue to the next middleware
        next();
    }
}

module.exports = validateSchema;