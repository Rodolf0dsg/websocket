//Referencias del HTML

const lblOnline  =  document.querySelector('#lblOnline');
const lblOffline =  document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar  = document.querySelector('#btnEnviar')

const socket = io(); //socket del cliente, aqui nos conectamos

socket.on('connect', () => {

    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display =  '';
    
});

socket.on('disconnect' , () => {

    // console.log('Desconectado');

    lblOffline.style.display = '';
    lblOnline.style.display =  'none';
    
});

btnEnviar.addEventListener('click', (e) => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 'er234fa',
        fecha: new Date().getTime(),
    }
    
    //emit emite un evento, el nombre se lo colocamos nosotros

    socket.emit('enviar-mensaje', payload, /*Este callback lo recobe el server en el evento*/( id ) => {
        console.log('Desde el server', id);
        //Este callback es util para feedback tipo cuando se complete una grabacion o etc
    });

});

socket.on('enviar-mensaje', ( payload )=>{

    console.log(payload)
    
})