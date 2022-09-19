const express = require('express');
const feedController = require('../controllers/feedController');
const feedRouter = express.Router();

/** Get from Database
 * @Route   GET feed/
 * @Desc    Gets the feedItems from database to populate the Feed.jsx
 * @Access  Public
 * feedController.getFeed,
 */
feedRouter.get(
  '/',
  feedController.getFeed
  // , (req, res) => res.sendStatus(200)
);
feedRouter.get(
  '/test',
  feedController.test
  // , (req, res) => res.sendStatus(200)
);

/** Insert into Database
 * @Route   POST feed/give
 * @Desc    Inserts data from frontend form into database
 * @Access  Public
 */
feedRouter.post(
  '/give',
  // feedController.postGive,
  (req, res) => res.status(200).send('something from the giveController')
);

/** Delete from Database
 * @Route   Delete feed/delete/:id
 * @Desc    Delete data from database by id
 * @Access  Private
 */
feedRouter.delete(
  '/delete',
  // feedController.fulfilledGive,
  (req, res) => res.status(200).send('something from the giveDele/te')
);

module.exports = feedRouter;
