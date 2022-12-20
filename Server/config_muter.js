const multer = require('multer');

const storage = multer.diskStorage({
    filename: function(req, file, cb){
        let nome = Date.now() + " - " + file.originalname;
        cb(null, nome);
    },
    destination: function(req, file, cb){
        let path = "../Client/src/img";
        cb(null, path);
    }
});

const upload = multer({storage});

module.exports = upload;