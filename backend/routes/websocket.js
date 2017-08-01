import eventController from '../controllers/eventController';

//export to start script
//io refers to the channel that established the main connection
//sockets are the sockets to listen to specific events wihtin io stream
module.exports = (io) =>{
  io.on('connection', (socket) => {

    socket.on('getAllGuests', (eventId) => {
      console.log('Id number:', eventId )
      eventController.getGuestlist(eventId, (guestlist) => {
        io.emit('guest list', guestlist);
        console.log(guestlist)
       });
    });

    socket.on('updateGuestlist', (event) => {
      // console.log('incoming event:', event )
      eventController.updateGuestlist(event, (updatedevent) => {
        io.emit('updatedEvent', updatedevent);
        console.log("outgoing event")
       });
    });



  });
};
