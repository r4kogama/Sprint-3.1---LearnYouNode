
const fs = require('fs');
const path = require('path');


const readDirAsync = (dirPath, extension, callback) => { 
    try{
        const absolutePath = path.resolve(dirPath);
        fs.readdir(
        absolutePath,
        {withFileTypes: false},
        (err, files) => {
            if(err){throw err;}
            callback(null, fn(extension,files));    
        }
    ) 
    }catch(err){
        callback(err);
    } 
};


const fn = (ext, files) =>{
     return files.filter((e) =>{
        return path.extname(e) === '.'+ ext;//return array
    })
};


module.exports = readDirAsync;