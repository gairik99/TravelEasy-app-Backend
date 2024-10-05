import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid Token" });
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({ message: "Authorization token missing" });
    }
}

export default verifyUser;