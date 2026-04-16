const secondMiddleware = (req, res, next) =>{
    console.log("hui hui second middle ware");
    next();
}

module.exports = {secondMiddleware};