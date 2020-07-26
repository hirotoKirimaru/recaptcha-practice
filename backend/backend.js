/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const http = require('http');
const https = require('https');

exports.recaptcha = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    const token = require('url').parse(req.url, true).query.token;

    console.log(token);
    const req2 = await serverAuth(token);

    res.status(200).send(req2);

};

async function serverAuth(token) {
    return new Promise((resolve, reject) => {

        // recaptcha v3のserverSecret
        const serverSecret = process.env.serverSecret;

        const params = {
            "secret": serverSecret,
            "response": token
        }
        const paramsStr = JSON.stringify(params);

        const HOST = "www.google.com";

        const query = "secret=" + serverSecret + "&response=" + token;
        const PATH = "/recaptcha/api/siteverify" + "?" + query

        const options = {
            host: HOST,
            port: 443, // 80,443
            path: PATH,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(paramsStr)
            }
        }

        const req = https.request(options, (res2) => {
            res2.setEncoding('utf8');
            res2.on('data', (body) => {
                resolve(body);
            })
        })

        req.on('error', (e) => {
            console.log(e);
            reject(Error(e));
        })

        req.write(paramsStr);
        req.end();
    })
}