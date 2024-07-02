
const suma = () => {
    const result = process.argv.reduce((acc, num, idx) =>{
        if(idx >= 2){
            return acc + Number(num);
        }
        return acc;
    },0);
    return result;
} 

console.log(suma());

