const db = require('../models/model');

const feedController = {};

// get entire DB
feedController.getFeed = (req, res, next) => {
  const text = 'SELECT * FROM feed;'

  db.query(text)
    .then(dbResults => {
        // store on res.locals
        console.log(dbResults)
        next()
    }) .catch((err) => {
        return next({
            log: `feedController.getFeed: ERROR: ${err}`,
            message: {err: 'Error occured in feedController.getFeed'}
        });
    })
    
};
// access req.body object to INSERT
feedController.postGive = (req, res, next) => {
  const {
    material, 
    detail, 
    quantity, 
    location, 
    contact
  } = req.body;

  const text = 'INSTERT INTO feed (material, detail, quantity,location, contact) VALUES ($1, $2, $3, $4, $5'
  const values = [
    material, 
    detail, 
    quantity, 
    location, 
    contact
  ];

  db.query(text, values)
  .then(dbResults => {
    // store on res.locals
    console.log(dbResults)
    next()
  }).catch((err) => {
    return next({
        log: `feedController.postGive: ERROR: ${err}`,
        message: {err: 'Error occured in feedController.postGive'}
    });
  })
};

feedController.fulfilledGive = (req,res, next) => {

};

module.exports = feedController;