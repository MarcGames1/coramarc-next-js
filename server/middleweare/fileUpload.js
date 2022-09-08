import multer from 'multer';
const path = require('path');

export const uploadPostImage = (req, res, next) =>{

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/posts/');
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + '-' + file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('postImage');



     upload(req, res, (err) => {
       if (err) {
         res.json(err);
       } else {
 
        req.body.Image = {
          name: req.file.filename,
          path: req.file.destination,
          fullPath: path.join(req.file.destination, req.file.filename),
        };
         next();
        }
    });
}

export const uploadProductCategoryImage =  (req, res, next) =>{

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/product-cat/');
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + '-' + file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('categoryImage');



     upload(req, res, (err) => {
       if (err) {
         res.json(err);
       } else {
         console.log("File => ", req.file);
        console.log('Path => ', path.dirname(req.file.path));
        console.log('Path => ', path.join(req.file.destination, req.file.filename))
        req.body.Image = {
          name: req.file.filename,
          path: req.file.destination,
          fullPath: path.join(req.file.destination, req.file.filename),
        };
         next();
        }
    });
}


export const uploadProductImage = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/product-img/');
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.originalname +
          
        
          '-' +
          uniqueSuffix +
          path.extname(file.originalname)
      );
    },
  });

  const upload = multer({ storage: storage }).array('productImage');

  upload(req, res, (err) => {
    if (err) {
      res.json(err);
    } else {
      console.log('File => ', req.files);
      console.log('Path => ', path.dirname(req.files.path));
      console.log(
        'Path => ',
        path.join(req.file.destination, req.file.filename)
      );
      req.body.Image = {
        name: req.files.filename,
        path: req.files.destination,
        fullPath: path.join(req.files.destination, req.files.filename),
      };
      next();
    }
  });
};