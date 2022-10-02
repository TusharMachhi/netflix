const validate = (schemas) => (req, res, next) => {
  const { error } = schemas.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

export default validate;
