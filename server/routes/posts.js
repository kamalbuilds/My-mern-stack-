import express from 'express';
import { getPosts, createPost} from '../controllers/posts.js';
import PostMessage from '../models/postMessage.js';
const router = express.Router();

router.get('/',getPosts);
router.post('/posts',createPost);

export default router;