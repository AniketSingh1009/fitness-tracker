// error.js
const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};

module.exports = createError; // ✅ Use CommonJS syntax for exports
