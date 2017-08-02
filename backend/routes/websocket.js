import eventController from '../controllers/eventController';

//export to start script
//io refers to the channel that established the main connection
//sockets are the sockets to listen to specific events wihtin io stream
module.exports = (io) =>{
  io.on('connection', (socket) => {
    socket.on('getAllGuests', (eventId) => {
      socket.join(eventId)
      console.log('You are in', eventId )
      eventController.getGuestlist(eventId, (guestlist) => {
        io.to(eventId).emit('guest list', guestlist);
        console.log(guestlist)
       });
    });



    socket.on('updateGuestlist', (event) => {
      console.log('incoming event:', event )
      eventController.updateGuestlist(event, (updatedevent) => {
        io.to(event._id).emit("updatedEvent", updatedevent);
        console.log("outgoing event")
       });
    });

  //   let chat = (ID) => {io.of('/'+ ID).on('connection', (socket) => {
  //   socket.emit('a message', {
  //       that: 'only'
  //     , '/chat': 'will get'
  //   });
  // });}

  });
};
