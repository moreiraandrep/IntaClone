const Post = require('../models/Post');

module.exports = {
    //Criando likes
    async store(req, res) {
        //Faz uma consulta pelo id do post
        const post = await Post.findById(req.params.id);

        //incrementa o numero de likes
        post.likes += 1;

        await post.save();

        req.io.emit('like', post);

        return res.json(post);
    }
};