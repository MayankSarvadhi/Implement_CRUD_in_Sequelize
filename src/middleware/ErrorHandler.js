
export function customError(err, req, res, next) {
    let sCode = err.statusCode || 500
    let message = err.message || "Internal ServerError"

    if (err.message === "Validation error") {
        return res.status(403).json({ success: false, statusCode: 403, message: "Validation Failed : Email Already Registered" });
    }

    return res.status(sCode).json({ success: false, statusCode: sCode, message });

};