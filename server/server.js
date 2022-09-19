const express = require('express');
const app = express();
const feedRouter = require('./routes/feedRouter');
const PORT = 3000;

// parses objects or strings from client (Req.body)
app.use(express.urlencoded({ extended: true}));
//parse all incoming request with a body (Req.body)
app.use(express.json());

// a test to check that FE is connected to back
// app.use('/', (req, res, next) => {
//   console.log('made it to server', req.body);
//   next();
// })

// all incoming feed requests go to router
app.use('/feed', feedRouter)

// unknown route handler
// app.use((req, res) => ressendStatus(404));

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
