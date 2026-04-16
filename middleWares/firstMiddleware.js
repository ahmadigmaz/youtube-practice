const firstMiddleware = (req, res, next) =>{
    console.log("hui hui first middle ware");
    next();
}

module.exports = {firstMiddleware};