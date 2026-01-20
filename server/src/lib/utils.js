import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "14d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,        // BẮT BUỘC khi sameSite = none
    sameSite: "none",    // CHO PHÉP cross-domain
    maxAge: 14 * 24 * 60 * 60 * 1000,
  });

  return token;
};
