import express from 'express'

const router = express.Router()

import {
  create,
  postById,
  update,
  remove,
  list,
  read,
} from '../controllers/posts';
const { userById } = require('../controllers/user');
import { requireSignin, isAuth, isAdmin }  from'../controllers/auth';

router.get('/post/:postId', postById, read)

router.post('/post/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);


export default router;