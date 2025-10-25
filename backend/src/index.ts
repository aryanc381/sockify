import express from 'express'
import rootRouter from './routes/root.js';

const app = express();

app.use(express.json());

app.use('/v1/api', rootRouter);

app.listen(3000, () => { console.log('APP is listening at PORT 3000') });