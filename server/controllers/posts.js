import PostMessage from "../models/postMessage.js";

export const getPosts= async (req,res)=>{
    try {
        const postMessage= await PostMessage;
        console.log(postMessage);

        res.status(200).json([]);
    } catch (error) {
        res.error(404).json({message : error.message})
    }
}
export const createPost=async (req,res)=>{
    const post= req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    
}