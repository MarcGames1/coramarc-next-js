import Post from "../models/post";
import slugify from 'slugify';

export const create = async (req, res) =>{
    console.log('post Created')
     const { title, content, categories, mainImg } = req.body;
     const post = new Post({ title, content, categories, mainImg });
     console.log(post)
}

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
    console.log('getPost by Id')
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


export const read = () =>{
  console.log('reading Posts');

}