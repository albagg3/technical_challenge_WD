const express = require("express");

//it is important during the development to see the messages in the terminal related
//to the requests and the status of the requests, etc...
const logger = require("morgan");

//Help us read the cookies 
const cookieParser = require("cookie-parser")

//cross origin resource sharing is a way to protect and restrict the origin of the data you are accepting
const cors = require("cors")

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

//MIDDLEWARE CONFIG
module.exports = (app) => {
    // Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
    // Services like heroku use something called a proxy and you need to add this to your server
    app.set("trust proxy", 1);

    // controls a very specific header to pass headers from the frontend
    // we need to set the origin and say if the origin can send credentials or not
    app.use(
        cors({
            credentials: true,
            origin: [FRONTEND_URL]
        })
    );

    // In development environment the app logs in the console, example: "GET /ruta/ejemplo HTTP/1.1" 200 153
    app.use(logger("dev"));

    // To have access to `body` property in the request
    //json formats
    app.use(express.json());
    //forms
    app.use(express.urlencoded({ extended: false }));
    //cookies
    app.use(cookieParser());
}