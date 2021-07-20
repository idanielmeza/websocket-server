const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {
            
        };

        //Middleware
        this.middlewares();

        //Rutas de app
        this.router();

        //Configuracion de sockets
        this.sockets();
    }


    middlewares(){

        //cors
        this.app.use(cors());

        //Directorio Publico
        this.app.use(express.static('public'));

    }

    router(){
        // this.app.use(this.paths.auth,require('../routes/auth'));
        
    }

    sockets(){

        this.io.on('connection',socketController )

    }
 
    listen(){
        this.server.listen(this.port,()=>{
            console.log(`corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;