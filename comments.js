//create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

//create server
const server = http.createServer(function (req, res) {
    //get path
    let pathName = url.parse(req.url, true).pathname;
    //get method
    let method = req.method;
    //get query
    let query = url.parse(req.url, true).query;
    //get headers
    let headers = req.headers;
    //get body
    let body = [];
    //get status
    let status = 200;
    //get data
    let data = {
        success: false,
        message: 'Data not found',
        data: null
    };
    //get file path
    let filePath = path.join(__dirname, 'data', 'comments.json');

    //get body
    req.on('data', function (chunk) {
        body.push(chunk);
    }).on('end', function () {
        body = Buffer.concat(body).toString();
    });

    //check path
    if (pathName === '/comments') {
        //check method
        if (method === 'GET') {
            //check query
            if (Object.keys(query).length > 0) {
                //get data
                let comments = fs.readFileSync(filePath, 'utf-8');
                //parse data
                comments = JSON.parse(comments);
                //get comment
                let comment = comments.find(function (comment) {
                    return comment.id == query.id;
                });
                //check comment
                if (comment) {
                    //set status
                    status = 200;
                    //set data
                    data = {
                        success: true,
                        message: 'Data found',
                        data: comment
                    };
                } else {
                    //set status
                    status = 404;
                    //set data
                    data = {
                        success: false,
                        message: 'Data not found',
                        data: null
                    };
                }
            } else {
                //get data
                let comments = fs.readFileSync(filePath, 'utf-8');
                //parse data
                comments = JSON.parse(comments);
                //set status
                status = 200;
                //set data
                data = {
                    success: true,
                    message: 'Data found',
                    data: comments
                };
            }
        }
