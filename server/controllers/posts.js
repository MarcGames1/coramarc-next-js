import formidable from 'formidable';
import _ from 'lodash';
import fs from 'fs'
import Post from '../models/post';
import slugify from 'slugify';


export const create = async (req, res) => {
 console.log("Create Post")
console.log(req.body)
  const {title, content, categories, Image} = req.body
  console.log(Image)
 let post = new Post({
   title,
   content,
   categories,
   slug: slugify(String(title)),
 });

//  post.Image = fs.readFileSync(files.photo.path);
//  post.Image.contentType = files.photo.type;

res.json(post)
};

export const update = () => {
  console.log('post Updated');
};

export const remove = () => {
  console.log('post Removed');
};

export const list = () => {
  console.log('all posts showed here');
};

export const postById = (req, res, next, id) => {
  console.log('getPost by Id');
  Post.findById(id).exec((err, post) => {
    if (err || !Post) {
      res.status(400).json({
        error: 'ERROR Post Does not exist',
      });
    }
    req.post = post;
    next();
  });
};

export const read = () => {
  console.log('reading Posts');
};
