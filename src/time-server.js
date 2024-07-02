const net = require('net');

const dateFormat= () =>{
  const date = new Date();
  return date.getFullYear()
  +'-'+(date.getMonth()+1).toString().padStart(2,'0')
  +'-'+date.getDate().toString().padStart(2, '0')
  +' '+date.getHours().toString().padStart(2, '0')
  +':'+date.getMinutes().toString().padStart(2, '0')
}

//variable instancia de server
const server = net.createServer( (socket) => {
  // socket -> Stream  duplex (escribir y leer a la vez)
    socket.write(dateFormat()+'\n');
    socket.end();
  }).on('error', (err) => {
    console.log('server error: ' + err)
  })

server.listen(Number(process.argv[2]))//iniciar la escucha del servicio