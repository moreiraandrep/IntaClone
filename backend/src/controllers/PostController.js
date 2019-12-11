const Post = require('../models/Post');
const sharp = require('sharp');// Essa dependencia permite manipulaçao de imagens
const path = require('path');
const fs = require('fs'); //File System

module.exports = {
    //Rota que retorna todos os posts da aplicação
    async index(req, res) {
        //consulta no BD ordenado decrescente - novos posts aparecem primeiro
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },

    //salvando no MongoDB
    async store(req, res) {
        //console.log(req.file);  //ou req.body
        const { author, place, description, hashtgs } = req.body; //{ } -> desestruturação do ES6
        const { filename: image } = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )
        
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtgs,
            image: fileName,
        });

        req.io.emit('post', post); //emite uma msg de atualização pra todos usuarios

        return res.json(post);
    }
};