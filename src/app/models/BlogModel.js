import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title : {type : String, required: true , trim:true},
    description : {type : String, required: true , trim:true},
    category : {type : String, required: true , trim:true},
    author : {type : String, required: true , trim:true},
    image : {type : String, required: true , trim:true},
    date : {type : Date, default: Date.now()},
    article:{type: String , required : true , trim:true}
 

})

// pehla baneya hoeya ta ohnu use kruu
const BlogModel = mongoose.models.blog || mongoose.model('blog', Schema)

export default BlogModel