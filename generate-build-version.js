/* generate-build-version.js */

// const packageJson = require('./package.json');

var fs = require('fs');
fs.readFile('./public/meta.json',function(err,content){
    if(err) throw err;
    var metadata = JSON.parse(content);
    metadata.version = metadata.version+ 1;
    fs.writeFile('./public/meta.json',JSON.stringify(metadata),function(err){
        if(err) throw err;
    })
});