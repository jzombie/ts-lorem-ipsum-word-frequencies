import express from 'express';
import routes from './routes';

const LISTEN_PORT = process.env.LISTEN_PORT || 3000;

const app = express();

app.use('/', routes);

app.listen(LISTEN_PORT, () => {
  console.log(`Example app listening at http://localhost:${LISTEN_PORT}`);
});
