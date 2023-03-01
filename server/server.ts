import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 3000;
const apiRouter = require('./routes/api')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client', 'images')));

app.use('/api', apiRouter);

app.use((req: any, res: any) => res.status(404).send('File path not found'));

// default error handler
app.use((err: any, req: any, res: any, next: any) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, {message: {err: err}});
  console.log(`${errorObj}`);
  
  // if(errorObj.redirect) res.status(errorObj.status).json({ message: errorObj.message, redirect: errorObj.redirect });
  
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
