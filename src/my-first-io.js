const fs = require('fs');

const  readFileProcress = () =>{
    try{
        const buffer = fs.readFileSync (process.argv[2], {encoding : "utf-8"});
        return buffer;
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
const bufferString = (bf) => {
    const strBuffer = bf.toString();
    return strBuffer.split('\n').length -1;
}


console.log(bufferString(readFileProcress()));

