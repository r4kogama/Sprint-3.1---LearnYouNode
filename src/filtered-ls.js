const fs = require('fs');
const path = require('path');
const extension = path.extname(process.argv[3]);//.md

const readDirAsync = (fn) => {
    try{
        const absolutePath = path.resolve(process.argv[2]);
        fs.readdir(absolutePath,{withFileTypes: false},
            (err, files) =>{
                if(err){
                    throw err;
                }else{
                    fn(files);
                }
            }
        ) 
    }catch(err){
        console.log(err);
    }
}

readDirAsync( (files) =>{
    files.map((e) =>{
        if(path.extname(e) === extension){
            console.log(e);
        }
    })
});

