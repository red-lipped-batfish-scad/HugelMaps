const express = require('express');
const app = express();

const PORT = 3000;

// TODO require in controllers
// TODO import in DB

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const router = express.Router();

// all incoming requests go to router
app.use('/', router);

// TODO routes

// /feed - READ db

// /give - INSERT
// /delete - DELETE 

//unkown route handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.sendStatus(errorObj.status).json(errorObj.message);  
})

app.listen(PORT, () => console.log(`Listening on PORT:' ${PORT}`));
