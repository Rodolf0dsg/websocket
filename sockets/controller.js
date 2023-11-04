const socketController = ( socket ) => {

    // console.log(socket);

    // console.log('Cliente conectado', socket.handshake.time, socket.id); //algunas propiedades que expone el objeto socket

    socket.on('disconnect', () => { 
        // console.log('cliente desconectado');
     });

     socket.on('enviar-mensaje', (payload, callback /* Este callback es el de la funcion emmit desde el cliente*/) => {

        const id = 123456;

        callback( id );

        //emmit emite un evento a todos los clientes conectados
        //this.io.emit('enviar-mensaje', payload );


        //como no se tiene acceso al this porque se esta afuera de la clase se puede hacer con socket
        //broadcast es para que le envie mensaje a todos (menos quien lo emite) pq sino solo lo recibe quien lo emite
        socket.broadcast.emit('enviar-mensaje', payload /* este argumento es el que recibe la funcion callback */)

     })

}

module.exports = {
    socketController,
}