export function schemaValidation(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((detail) => detail.message);
            console.log(errors);
            return res.status(422).send(errors);
        }
        next();
    }
}
