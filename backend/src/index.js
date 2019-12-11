const express = require('express'); //importação do express -> gerencia rotas
const mongoose = require('mongoose'); //manipula BD
const path = require('path');
const cors = require('cors'); // permite que o backend seja acessível pelo frontend React

const app = express();
const server = require('http').Server(app); //exporta o protocolo http para a variável server
const io = require('socket.io')(server); //export o protocolo socket.io para a variavel server

mongoose.connect('mongodb+srv://root:ufprsemfio2.0@cluster0-jcvtc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}); // chave do MongoDB Atlas

app.use((req, res, next) => {
    req.io = io;

    next();// garante que esse midleware seja executado e os próximos também
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333); //configurado para http e websocket para comunicação real time
