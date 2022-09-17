const express = require('express');
const feedController = ('../controllers/feedController')
const feedRouter = express.Router();

/** Get from Database
 * @Route   GET feed/
 * @Desc    Gets the feedItems from database to populate the Feed.jsx
 * @Access  Public
 */
feedRouter.get('/', 
  // feedController.getFeed,
(req,res) => res.status(200).json('something'))

/** Insert into Database
 * @Route   POST feed/give
 * @Desc    Inserts data from frontend form into database
 * @Access  Public
 */
feedRouter.post('/give', 
  // feedController.postGive,
(req,res) => res.status(200).json('something from the giveController'))

/** Delete from Database
 * @Route   Delete feed/delete/:id
 * @Desc    Delete data from database by id
 * @Access  Private
 */
feedRouter.delete('/delete', 
  // feedController.fulfilledGive,
(req,res) => res.status(200).json('something from the giveDele/te'))

module.exports = feedRouter;