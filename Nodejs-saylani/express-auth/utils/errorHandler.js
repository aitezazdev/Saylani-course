const errorHandler = (res, error, statusCode = 500) => {
  console.error("Error:", error.message || error);
  return res.status(statusCode).json({
    message: error.message || "An unexpected error occurred",
    status: statusCode,
  });
};

module.exports = errorHandler;
