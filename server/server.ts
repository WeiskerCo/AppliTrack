import * as path from 'path';
import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'images')));

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});
