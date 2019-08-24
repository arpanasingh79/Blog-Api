let exampleMiddleware = (req,res,next) => {
    req.user = {'firstName':'Arpana','lastName':'Singh'}
    next();
}

module.exports = {
    exampleMiddleware : exampleMiddleware
}