const multer = require('multer');
const path = require('path'); //Bib que formata os caminhos entre os SO's

module.exports = {
    storage: new multer.diskStorage({ //salva as imagens dentro do disco
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //define o caminho relativo
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
};