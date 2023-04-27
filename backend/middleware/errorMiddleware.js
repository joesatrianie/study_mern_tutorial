const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log("hello middlewaire");
  res.status(statusCode);
  res.json({
    message: "hell",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next(err);
};

module.exports = { errorHandler };
