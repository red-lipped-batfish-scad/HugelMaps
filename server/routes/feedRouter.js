const express = require('express');
const feedController = require('../controllers/feedController');
const feedRouter = express.Router();


/** Get from Database
 * @Route   GET feed/
 * @Desc    Gets the feedItems from database to populate the Feed.jsx
 * @Access  Public
 */
// feedRouter.get('/', 
//   feedController.getFeed,
//  (req, res) => res.status(200).json(res.locals.feed)
// );

/** Insert into Database
 * @Route   POST feed/give
 * @Desc    Inserts data from frontend form into database & returns the 
 * @Access  Public
 */
feedRouter.post('/give', 
  feedController.postGive,
  feedController.getFeed,
  (req,res) => { 
    res.status(200).json(res.locals.feed)
  }
);

/** Delete from Database
 * @Route   Delete feed/delete/:id
 * @Desc    Delete data from database by id
 * @Access  Private
 */
feedRouter.delete('/delete/:id', 
  feedController.fulfilledGive,
(req,res) => res.status(200).json('something from the giveDelete'))

module.exports = feedRouter;