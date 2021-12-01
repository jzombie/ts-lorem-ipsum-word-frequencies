import express from 'express';

import WordCounter from '../WordCounter';

const router = express.Router();

router.post('/', async (req: express.Request, res: express.Response) => {
  const n = req.query.n as string;

  const stream = new WordCounter(parseInt(n, 10));
  req.pipe(stream);

  req.on('end', () => {
    res.json({
      frequencies: stream.getFrequencies()
    });
  });
});

export default router;
