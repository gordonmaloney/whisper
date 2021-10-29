import mongoose from 'mongoose';
import Whisp from '../models/PostBody.js';

export const getPosts = async (req, res) => {
    try {
        const getPosts = await Whisp.find();

        res.status(200).json(getPosts);
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Whisp(post);

    try {
        await newPost.save();

        console.log("controler", post)

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error})
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');
    
    const updatedPost = await PostBody.findByIdAndUpdate(_id, { ...post, _id}, { new: true })

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID');

    await PostBody.findByIdAndRemove(id);

    console.log('delete post')

    res.json({message: 'post deleted successfully'});
}