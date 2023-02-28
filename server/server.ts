import * as path from 'path';
import express from 'express';
const PORT = process.env.PORT || 3000;
const apiRouter = require('./routes/api')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client', 'images')));

app.use('/api', apiRouter);

app.use((req, res) => res.status(404).send('File path not found'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
