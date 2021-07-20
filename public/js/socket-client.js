//Referencias de html
const lblOn  = document.querySelector('#lblOn');
const lblOff = document.querySelector('#lblOff');

const txtMensaje= document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', ()=>{
    console.log('conectado');
    lblOff.style.display = 'none'
    lblOn.style.display = ''
});

socket.on('disconnect', ()=>{
    console.log('desconectado');
    lblOff.style.display = ''
    lblOn.style.display = 'none'
});

socket.on('enviar-mensaje',payload=>{

    console.log(payload)

})

btnEnviar.addEventListener('click', ()=>{

    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: "1234abc",
        fecha: new Date().getTime()
    }
    
    socket.emit('enviar-mensaje', payload, (id)=>{

        console.log('Desde el server: ',id)

    });

})