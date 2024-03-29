const express = require('express');

const router = express.Router()
const { create, categoryById, read, update, remove, list } = require('../controllers/category')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user');
// const { rawListeners } = require('../models/category');
const{uploadProductCategoryImage} = require ('../middleweare/fileUpload')

router.get("/category/:categoryId", categoryById, read)
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, uploadProductCategoryImage, create)
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin,uploadProductCategoryImage, update)
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove)
router.get('/categories',  list)



router.param('categoryId', categoryById)
router.param('userId', userById);

module.exports = router