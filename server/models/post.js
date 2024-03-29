import mongoose from 'mongoose';
const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema





const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {},
  categories: [{ type: ObjectId, ref: 'Blog Category' }],
  Image:{ 
    type: Object,
    },
  published: {type: Boolean, default: true},
  postedBy: {type: ObjectId, ref: 'User'},
  slug:{
    type: String,
    unique: true,
    lowercase: true,
  }
},
{ timestamps: true}
);

export default mongoose.model("Post", postSchema);