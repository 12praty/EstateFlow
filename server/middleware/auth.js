import jwt from "jsonwebtoken";
import { getJwtSecret } from "../config/env.js";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, getJwtSecret());

    req.user = decoded;
    next();
  } catch (error) {
    if (error?.code === "ERR_MISSING_ENV") {
      return res.status(500).json({
        message:
          "Server misconfigured: JWT secret is missing. Set JWT_SECRET in the server environment.",
      });
    }
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
