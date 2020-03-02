// Multer configuration - Armazenamento das imagens/arquivos da aplicacao

const multer = require('multer');
const path = require ('path');


module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),         //diretorio dos arquivos - path.resolve muda barra inversa por ' , '
        filename: (req, file, cb ) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);


            cb(null, `${name}-${Date.now()}${ext}`);
        },                            
    }),
}