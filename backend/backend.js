/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const http = require('http');
const https = require('https');

exports.main = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    console.log("res:" + res);

    const serverSecret = "***********************";

    const token = "";
    // const token = event['token'];

    const params = {
        "secret": serverSecret,
        "response": token
    }

    const paramsStr = JSON.stringify(params);

    console.log('params:', params);

    console.log('promise')
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
            'Content-Length': Buffer.byteLength(JSON.stringify(params))
        }

    }

    let msg;
    const req2 = await https.request(options, (res2) => {
        console.log('res');
        console.log(res2);

        res2.setEncoding('utf8');
        res2.on('data', (body) => {
            console.log('body')
            console.log(body);
            msg = body;
        })
    })
    req2.on('error', (e) => {
        // console.log(e);
        reject(Error(e));
    })
    console.log('paramStr:' + paramsStr);
    console.log('set');

    // req2.write(paramsStr);
    // // req.write("secret="+serverSecret + "&response=" + token)
    // req2.end();

    //   let message = req.query.message || req.body.message || 'Hello World!';
    //  res.status(200).send(msg);
    res.status(200).send("完了");

};