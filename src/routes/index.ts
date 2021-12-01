import express from 'express';
import wordCount from './word-count';
const router = express.Router();

router.use('/word-count', wordCount);

export default router;
