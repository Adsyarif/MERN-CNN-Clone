const apiResponse = function (res, statusCode, message, data = null) {
  return res.status(statusCode).json({
    status: {
      code: statusCode,
      message: message,
    },
    data: data,
  });
};

module.exports = apiResponse;
