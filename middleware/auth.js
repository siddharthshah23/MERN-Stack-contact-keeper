const jwt = require("jsonwebtoken");
const congig = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // check if not token

  if (!token) {
    return res.send(401).json({ msg: "No authorized access" });
  }

  // verify token
  try {
    const decoded = jwt.verify(token, congig.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
