const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index); //rota que busca os posts
routes.post('/posts', upload.single('image'), PostController.store); //rota que envia a imagem

//Criando a rota de Likes
routes.post('/posts/:id/like', LikeController.store);
module.exports = routes;