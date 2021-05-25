const express = require("express");
const path = require("path");
const favicon = require('serve-favicon')
const fs = require("fs");
const PORT = process.env.PORT || 5000;
const { gql, request } = require("graphql-request");
const dotenv = require('dotenv');
dotenv.config();
const giveMeTitle = (list) => {
    return ``;
}
const giveMeDescription = (list) => {
    return ``;
}
const app = express();
app.use(favicon(path.join(__dirname, './build', 'favicon.ico')))
app.use(express.static("./build"))
app.get('/*.(txt|map|json|svg|css|js|jpg|jpeg|png|gif)', (req, res) => {
    const filePath = path.resolve(__dirname, "./build" + req.path);
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });
})
app.get("/*", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }
        data = data
            .replace(/OneSoul/g, "OneSoul")
            .replace(/Enabling\shumanity,\stogether./g, "Enabling humanity, together.");
        res.send(data)
    });
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})