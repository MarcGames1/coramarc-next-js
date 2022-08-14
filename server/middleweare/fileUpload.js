import multer from 'multer';
const path = require('path');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/posts/');
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + '-' + file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

 export const upload = multer({ storage: storage }).single('postImage');


export const uploadPostImage = (req, res, next) =>{

     upload(req, res, (err) => {
       if (err) {
         res.json(err);
       } else {
         console.log("File => ", req.file);
         next();
        }
    });
}