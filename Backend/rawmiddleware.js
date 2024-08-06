const buffer = require('buffer').Buffer;

function rawBodyMiddleware(req, res, next) {
    req.rawBody = '';

    if (req.is('application/json')) {
        req.setEncoding('utf8');
        req.on('data', (chunk) => {
            req.rawBody += chunk;
        });
        req.on('end', () => {
            next();
        });
    } else {
        next();
    }
}

module.exports = rawBodyMiddleware;
