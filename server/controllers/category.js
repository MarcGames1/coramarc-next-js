const Category = require("../models/category")

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) =>{
        if(err || !category) {
            res.status(400).json({
                error:"ERROR Category Does not exist"
            })
        }
        req.category = category
        next()
    })
} 


exports.create = async (req, res) =>{
    const category = await new Category(req.body)
    category.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: "Something went wrong"
            })
        }

        res.status(200).json( data )
        
    })

}

exports.read = (req,res) =>{
    return res.json(req.category)
}

exports.update = (req,res) =>{
    const category = req.category
    category.name = req.body.name

    category.save((err, data) =>{
        if(err){
            return res.status(400).json({
                error: "Something went wrong"
            })
        }
        res.json({ data })
    })
}


exports.remove = (req, res) => {
    const category = req.category
    category.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                error: "Something went wrong"
            })
        }
            res.json({ message: "Category removed" })
    })
}

exports.list = (req, res) => {
    Category.find().exec((err, data)=>{
        if(err){
            return res.status(400).json({error: "Something went wrong listing the categories"})
        }
        res.json(data)
    })
}