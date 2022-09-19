const db = require('../models/model');

const feedController = {};

// get entire DB
feedController.getFeed = (req, res, next) => {
  console.log('im inside getFeed')
  const text = 'SELECT * FROM feed;'

  db.query(text)
    .then(dbResults => {
        // store on res.locals
        // console.log('db ar rowCount:', dbResults.rowCount)
        // console.log('getFeed db results:', dbResults)
       
        res.locals.feed = dbResults.rows
        // console.log('res.locals.feed:', res.locals.feed)
        return next()
    }) .catch((err) => {
        return next({
            log: `feedController.getFeed: ERROR: ${err}`,
            message: {err: 'Error occured in feedController.getFeed'}
        });
    })
    
};
// access req.body object to INSERT
feedController.postGive = (req, res, next) => {
  console.log('inside feedGive', req.body)

  const {
    material, 
    detail, 
    quantity, 
    location, 
    contact
  } = req.body;

  // js date program
  // let post_date = new Date();
  // let dd = post_date.getDate();
  // let mm = post_date.getMonth()+1; 
  // const yyyy = post_date.getFullYear();
  // if(dd<10) { dd=`0${dd}`} 
  // if(mm<10) { mm=`0${mm}`} 
  // post_date = `${mm}-${dd}-${yyyy}`;


  const text = 'INSERT INTO feed (material, detail, quantity, location, contact) VALUES ($1, $2, $3, $4, $5);'
  const values = [
    material, 
    detail, 
    quantity, 
    location, 
    contact,
  ];

  db.query(text, values)
  .then(dbResults => {

    // res.locals.confirmation = dbResults
    console.log('db insert complete')
    return next()
  }).catch((err) => {
    return next({
        log: `feedController.postGive: ERROR: ${err}`,
        message: {err: 'Error occured in feedController.postGive'}
    });
  })
};

// delete entry from DB via params
feedController.fulfilledGive = (req, res, next) => {
  console.log('im in fulfilledGive')
  const { id } = req.params

  const text = `DELETE FROM feed WHERE feed_id = ${id};`;

};

module.exports = feedController;