const {io} = require('../index');
const Djs = require('../models/djs');
const Dj = require('../models/dj');

const djs = new Djs();

djs.addDj(new Dj ('Simon Liberali'));
djs.addDj(new Dj ('Peggy Gou'));
djs.addDj(new Dj ('Harvy Valencia'));
djs.addDj(new Dj ('Lillo R'));



//Mensajes de Sockets
io.on('connection', client => {
    //Config Inicial
    console.log('Cliente Conectado');

    client.emit('active-djs', djs.getDjs());

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje', (payload)=>{
        console.log('Mensaje!!', payload);

        io.emit('mensaje', {admin: 'Nuevo Mensaje'});
    });

    //Config con Flutter

    client.on('vote-dj', (payload)=>{
        djs.voteDj(payload.id);
        io.emit('active-djs', djs.getDjs());
    });
    client.on('add-dj', (payload)=>{
        const newDj = new Dj(payload.name);
        djs.addDj(newDj);
        io.emit('active-djs', djs.getDjs());
    });
    client.on('delete-dj', (payload)=>{
        djs.deleteDj(payload.id);
        io.emit('active-djs', djs.getDjs());
    });



    //client.on('emitir-mensaje', (payload)=>{
    //    //console.log(payload);
    //    //io.emit('nuevo-mensaje', payload); Lo emite a todos
    //   client.broadcast.emit('nuevo-mensaje', payload); //Emitir a todos menos al que emite el mensaje
    //});

});