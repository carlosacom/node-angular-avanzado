// requires
let express = require('express');
let mongoose = require('mongoose');

//inicializar variables
let port = 3000;
let app = express();


// rutas
app.get('/', (req, res) => {
    res.status(200).send({
        ok: true,
        message: 'peticion realizada correctamente',
        data: ['algo', 'de', 'data']
    });
});

//escuchar peticiones
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true })
    .then(() => app.listen(port, () => console.log(`Express server, Port:${port}, \x1b[32m%s\x1b[0m`, 'Online!')));