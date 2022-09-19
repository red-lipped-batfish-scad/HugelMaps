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
 * @Route   POST give
 * @Desc    Inserts data from frontend give form into database & returns the full db for feed display
 * @Access  Public
 */
feedRouter.post(
  '/give',
  feedController.postGive,
  feedController.getFeed,
  (req, res) => {
    res.status(200).json(res.locals.feed);

    // Debug
    // return res.sendStatus(200);
  }
);

/** Delete from Database
 * @Route   Delete feed/delete/:id
 * @Desc    Delete data from database by id
 * @Access  Private
 */
feedRouter.delete('/delete/:id', feedController.fulfilledGive, (req, res) =>
  res.status(200).json('db entry has been deleted')
);

module.exports = feedRouter;
