const express = require('express');
const app = express();
const feedRouter = require('./routes/feedRouter')
const PORT = 3000;

// parses objects or strings from client (Req.body)
app.use(express.urlencoded({ extended: true}));
//parse all incoming request with a body (Req.body)
app.use(express.json());

// all incoming feed requests go to router
app.use('/feed', feedRouter)

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
