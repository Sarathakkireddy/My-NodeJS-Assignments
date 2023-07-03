const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic: { type:String, reqired:true, unique:true},
    description: { type:String, reqired:true},
    posted_at: String,
    posted_by: String
    // page: Number 
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;