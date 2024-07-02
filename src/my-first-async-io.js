const fs = require('fs');

const readFileAsync = (fn) => {
    try{
        fs.readFile(process.argv[2], {encoding : "utf-8"}, (err, data) => {
            if(err){
                throw err;
            } else {
                fn(data);
            }
        });
    }catch(err){
        console.log(err)
    }
   
}

const bufferString = (buffer) => {
    const strBf = buffer.toString();
    return strBf.split('\n').length - 1;
}

readFileAsync((data) => {
    console.log(bufferString(data));
});
