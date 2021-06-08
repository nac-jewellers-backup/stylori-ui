const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const dotenv = require("dotenv");
const { seo } = require("./seo/seo");
const { networkcall } = require("./seo/networkcall");
dotenv.config();

const app = express();

app.use(favicon(path.join(__dirname, "./build", "favicon.gif")));
app.use(express.static("./build"));

app.get("/*.(txt|map|json|svg|css|js|jpg|jpeg|png|gif)", (req, res) => {
  const filePath = path.resolve(__dirname, "./build" + req.path);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});
app.get("/*", async (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      return console.log(err);
    }
    try {
      const seoData = await networkcall(req.path, req.query.skuid);
      console.log(seoData.title, seoData.description, seoData.imgURL);
      data = data.replace(
        /(?<=\<meta __meta1\/>)(.*?)(?=\<meta __meta2\/>)/g,
        seo(seoData.title, seoData.description, seoData.imgURL)
      );

      res.send(data);
    } catch (error) {
      console.log(error);

      data = data.replace(/(?<=\<meta __meta1\/>)(.*?)(?=\<meta __meta2\/>)/g, seo());
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
