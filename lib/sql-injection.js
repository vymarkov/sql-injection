
function hasSql(value){
    
    if(value === null || value === undefined){
        return false;
    }
    
    if(value.indexOf('select') > -1){
        return true;
    }
    
    return false;
}

function middleware(req, res, next){
    
    var containsSql = false;
    
    // check body
    if(req.body !== null && req.body !== undefined){
        for (var b in req.body) {
            console.log(b);
            if (req.body.hasOwnProperty(b)){
                if(hasSql(req.body[b]) === true){
                    containsSql = true;
                    break;
                }
            }
        }
    }
    
    // check params
    if(containsSql === false){
        if(req.params !== null && req.params !== undefined){
            for (var p in req.params) {
                if (req.params.hasOwnProperty(p)){
                    if(hasSql(req.params[p]) === true){
                        containsSql = true;
                        break;
                    }
                }
            }
        }
    }
    
    // check query
    if(containsSql === false){
        for (var q in req.query) {
            if (req.query.hasOwnProperty(q)){
                if(hasSql(req.query[q]) === true){
                    containsSql = true;
                    break;
                }
            }
        }
    }
    
    if(containsSql === true){
        res.send(403, {});
    } else {
        next();
    }
}

module.exports = middleware;