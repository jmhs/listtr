import eventController from '../controllers/eventController';


//io refers to the channel that established the main connection
//sockets are the sockets to listen to specific events wihtin io stream
module.exports = (io) =>{
io.on("connection",(socket)=>{
  console.log("connection established"
  )
  // socket.on('fromFront', () => {
  //   // to get gueslist based on event and emit out
  //     io.emit('fromServer', "Hi");
  //   })
  })
}
